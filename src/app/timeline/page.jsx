"use client";
import { useLogs } from "@/context/logContext";
import {
  PhoneCall,
  MessageSquare,
  Video,
  Clock,
  User,
  History,
} from "lucide-react";

const iconMap = {
  Call: {
    icon: PhoneCall,
    color: "bg-blue-500/20 text-blue-300 border-blue-400/30",
  },
  Text: {
    icon: MessageSquare,
    color: "bg-sky-500/20 text-sky-300 border-sky-400/30",
  },
  Video: {
    icon: Video,
    color: "bg-blue-600/20 text-blue-200 border-blue-500/30",
  },
  default: {
    icon: Clock,
    color: "bg-blue-400/10 text-blue-200/70 border-blue-400/20",
  },
};

export default function TimelinePage() {
  const { logs } = useLogs();

  return (
    <div className="page-shell">
      <div className="container mx-auto max-w-2xl">
        <div className="mb-10 flex items-center gap-4">
          <div className="glass rounded-2xl p-3">
            <History className="text-blue-300" size={24} />
          </div>
          <div>
            <p className="label-caps mb-1">Activity</p>
            <h1 className="text-2xl font-bold tracking-tight text-white">
              Interaction Timeline
            </h1>
            <p className="text-sm text-blue-200/60">
              Keep track of your meaningful connections
            </p>
          </div>
        </div>

        <div className="relative">
          {logs.length === 0 ? (
            <div className="glass-card rounded-3xl border-dashed py-20 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/10">
                <Clock className="text-blue-400/50" size={30} />
              </div>
              <p className="font-medium text-blue-100/80">
                No activity logs found yet.
              </p>
              <p className="mt-1 text-xs text-blue-200/50">
                Start a conversation to see it here!
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="absolute left-[27px] top-2 bottom-2 hidden w-[2px] bg-blue-400/20 sm:block" />

              {logs.map((log) => {
                const config = iconMap[log.type] || iconMap.default;
                const Icon = config.icon;

                return (
                  <div
                    key={log.id}
                    className="group relative flex items-start gap-4"
                  >
                    <div
                      className={`relative z-10 rounded-2xl border p-3 shadow-sm transition-transform duration-200 group-hover:scale-110 ${config.color}`}
                    >
                      <Icon size={20} />
                    </div>

                    <div className="glass-card glass-card-hover flex-1 rounded-2xl p-5 transition-all duration-300">
                      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                        <div className="flex items-center gap-2">
                          <span className="rounded-full bg-blue-500/10 p-1">
                            <User size={12} className="text-blue-300/70" />
                          </span>
                          <h3 className="font-bold tracking-tight text-white">
                            {log.friendName}
                          </h3>
                        </div>
                        <span className="rounded-md bg-blue-500/10 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-blue-300/60">
                          {log.date}
                        </span>
                      </div>

                      <div className="mt-2 flex items-center gap-2">
                        <p className="text-sm leading-relaxed text-blue-100/70">
                          {log.note ||
                            `Had a ${log.type.toLowerCase()} interaction.`}
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
