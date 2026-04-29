"use client";
import { useLogs } from "@/context/logContext";
import { 
  PieChart, 
  Pie, 
  Cell, 
  Tooltip, 
  ResponsiveContainer, 
  Legend 
} from "recharts";



const StatsPage = () => {
  const { logs } = useLogs();

  // ১. ডাটা প্রসেসিং (পূর্বের মতোই)
  const dataSummary = logs.reduce((acc, log) => {
    const existing = acc.find((item) => item.name === log.type);
    if (existing) {
      existing.value += 1;
    } else {
      acc.push({ name: log.type, value: 1 });
    }
    return acc;
  }, []);

  // আধুনিক ভাইব্রেন্ট কালার প্যালেট
  const COLORS = ["#10b981", "#3b82f6", "#8b5cf6", "#f59e0b"]; // Green, Blue, Purple, Orange

  return (
    <div className="p-8 bg-[#F8FAFC] min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-2 text-zinc-800">Interaction Insights</h1>
        <p className="text-zinc-500 mb-8 text-sm">Visual representation of your connection habits</p>
        
        <div className="bg-white p-8 rounded-[32px] shadow-sm border border-zinc-100 flex flex-col items-center justify-center min-h-[450px]">
          <h3 className="text-sm font-bold mb-8 text-zinc-400 uppercase tracking-widest text-center w-full">
            Interaction Distribution
          </h3>
          
          {dataSummary.length > 0 ? (
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={dataSummary}
                  cx="50%" // চার্টটি মাঝখানে রাখার জন্য
                  cy="50%"
                  innerRadius={80} // এটি চার্টটিকে 'Donut' লুক দেয়
                  outerRadius={110}
                  paddingAngle={8} // স্লাইসগুলোর মাঝখানে গ্যাপ
                  dataKey="value"
                  stroke="none" // বর্ডার রিমুভ করার জন্য
                >
                  {dataSummary.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={COLORS[index % COLORS.length]} 
                      className="hover:opacity-80 transition-opacity outline-none"
                    />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    borderRadius: '20px', 
                    border: 'none', 
                    boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                    padding: '10px 15px'
                  }}
                />
                <Legend 
                  verticalAlign="bottom" 
                  height={36} 
                  iconType="circle"
                  formatter={(value) => <span className="text-zinc-600 font-medium text-sm">{value}</span>}
                />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <div className="flex flex-col items-center justify-center text-zinc-400">
              <div className="w-16 h-16 bg-zinc-50 rounded-full flex items-center justify-center mb-4">
                 <div className="w-8 h-8 border-2 border-zinc-200 border-dashed rounded-full" />
              </div>
              <p className="font-medium text-sm">No interaction data available yet.</p>
            </div>
          )}
          
          {/* সেন্ট্রাল ইনফো (ঐচ্ছিক) */}
          {dataSummary.length > 0 && (
            <div className="mt-4 text-center">
                <p className="text-3xl font-black text-zinc-800">
                    {logs.length}
                </p>
                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-tighter">
                    Total Logs
                </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatsPage;