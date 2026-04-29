"use client";
import { useLogs } from "@/context/logContext";
import { 
  PhoneCall, 
  MessageSquare, 
  Video, 
  Clock, 
  User,
  History 
} from "lucide-react";

// আইকন ম্যাপ করার জন্য একটি হেল্পার অবজেক্ট
const iconMap = {
  Call: { icon: PhoneCall, color: "bg-green-100 text-green-600 border-green-200" },
  Text: { icon: MessageSquare, color: "bg-blue-100 text-blue-600 border-blue-200" },
  Video: { icon: Video, color: "bg-purple-100 text-purple-600 border-purple-200" },
  default: { icon: Clock, color: "bg-gray-100 text-gray-600 border-gray-200" }
};

export default function TimelinePage() {
  const { logs } = useLogs();

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        
        {/* Header Section */}
        <div className="flex items-center gap-3 mb-10">
          <div className="p-3 bg-white rounded-2xl shadow-sm border border-zinc-100">
            <History className="text-zinc-800" size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-zinc-900 tracking-tight">Interaction Timeline</h1>
            <p className="text-sm text-zinc-500">Keep track of your meaningful connections</p>
          </div>
        </div>

        {/* Timeline Content */}
        <div className="relative">
          {logs.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-zinc-200">
              <div className="bg-zinc-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-zinc-300" size={30} />
              </div>
              <p className="text-zinc-500 font-medium">No activity logs found yet.</p>
              <p className="text-zinc-400 text-xs mt-1">Start a conversation to see it here!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Vertical Line */}
              <div className="absolute left-[27px] top-2 bottom-2 w-[2px] bg-zinc-100 hidden sm:block"></div>

              {logs.map((log) => {
                const config = iconMap[log.type] || iconMap.default;
                const Icon = config.icon;

                return (
                  <div key={log.id} className="relative flex items-start gap-4 group">
                    
                    {/* Icon Circle */}
                    <div className={`relative z-10 p-3 rounded-2xl border ${config.color} shadow-sm transition-transform group-hover:scale-110 duration-200`}>
                      <Icon size={20} />
                    </div>

                    {/* Content Card */}
                    <div className="flex-1 bg-white p-5 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-all duration-300 group-hover:border-zinc-200">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="p-1 bg-zinc-50 rounded-full">
                            <User size={12} className="text-zinc-400" />
                          </span>
                          <h3 className="font-bold text-zinc-800 tracking-tight">
                            {log.friendName}
                          </h3>
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 bg-zinc-50 px-2 py-1 rounded-md">
                          {log.date}
                        </span>
                      </div>
                      
                      <div className="mt-2 flex items-center gap-2">
                        <p className="text-sm text-zinc-600 leading-relaxed">
                          {log.note || `Had a ${log.type.toLowerCase()} interaction.`}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}