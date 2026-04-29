"use client";
import { useLogs } from "@/context/logContext";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

const StatsPage = () => {
  const { logs } = useLogs();

  // ১. ডাটা প্রসেসিং: লগ থেকে কাউন্ট বের করা
  const dataSummary = logs.reduce((acc, log) => {
    const existing = acc.find((item) => item.name === log.type);
    if (existing) {
      existing.value += 1; // এখানে আপনি সময় (duration) থাকলে সেটা যোগ করতে পারেন
    } else {
      acc.push({ name: log.type, value: 1 });
    }
    return acc;
  }, []);

  const COLORS = ["#16a34a", "#2563eb", "#9333ea"]; // Green, Blue, Purple

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Interaction Stats</h1>
      
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 h-[400px]">
        <h3 className="text-sm font-semibold mb-4 text-gray-500 uppercase tracking-wider">
          Total Interactions by Type
        </h3>
        
        {dataSummary.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={dataSummary}>
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis hide />
              <Tooltip 
                cursor={{ fill: 'transparent' }}
                contentStyle={{ borderRadius: '15px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              />
              <Bar dataKey="value" radius={[10, 10, 0, 0]} barSize={50}>
                {dataSummary.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">
            No data available. Start some interactions!
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsPage;