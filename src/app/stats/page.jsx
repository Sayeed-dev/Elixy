"use client";
import { useLogs } from "@/context/logContext";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const COLORS = ["#2563eb", "#3b82f6", "#60a5fa", "#1d4ed8", "#93c5fd"];

const StatsPage = () => {
  const { logs } = useLogs();

  const dataSummary = logs.reduce((acc, log) => {
    const existing = acc.find((item) => item.name === log.type);
    if (existing) {
      existing.value += 1;
    } else {
      acc.push({ name: log.type, value: 1 });
    }
    return acc;
  }, []);

  return (
    <div className="page-shell">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-10">
          <p className="label-caps mb-2">Analytics</p>
          <h1 className="text-2xl font-bold text-white sm:text-3xl">
            Interaction Insights
          </h1>
          <p className="mt-2 text-sm text-blue-200/60">
            Visual representation of your connection habits
          </p>
        </div>

        <div className="glass-card flex min-h-[450px] flex-col items-center justify-center rounded-[32px] p-8 sm:p-10">
          <h3 className="mb-8 w-full text-center text-sm font-bold uppercase tracking-widest text-blue-300/60">
            Interaction Distribution
          </h3>

          {dataSummary.length > 0 ? (
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={dataSummary}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={110}
                  paddingAngle={8}
                  dataKey="value"
                  stroke="none"
                >
                  {dataSummary.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                      className="outline-none transition-opacity hover:opacity-80"
                    />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    borderRadius: "16px",
                    border: "1px solid rgba(96, 165, 250, 0.2)",
                    backgroundColor: "#0c2461",
                    color: "#dbeafe",
                    boxShadow: "0 10px 25px rgba(6, 18, 36, 0.5)",
                    padding: "10px 15px",
                  }}
                />
                <Legend
                  verticalAlign="bottom"
                  height={36}
                  iconType="circle"
                  formatter={(value) => (
                    <span className="text-sm font-medium text-blue-200/70">
                      {value}
                    </span>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <div className="flex flex-col items-center justify-center text-blue-200/50">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/10">
                <div className="h-8 w-8 rounded-full border-2 border-dashed border-blue-400/30" />
              </div>
              <p className="text-sm font-medium">
                No interaction data available yet.
              </p>
            </div>
          )}

          {dataSummary.length > 0 && (
            <div className="mt-4 text-center">
              <p className="text-3xl font-black text-white">{logs.length}</p>
              <p className="text-[10px] font-bold uppercase tracking-tighter text-blue-300/50">
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
