"use client";
import { useLogs } from "@/context/logContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  PhoneCall,
  MessageSquare,
  Video,
  Clock,
  Archive,
  Trash2,
} from "lucide-react";
import { FaCircleUser } from "react-icons/fa6";

const statusStyles = {
  almost_due: "bg-amber-400/15 text-amber-300 border-amber-400/25",
  overdue: "bg-rose-400/15 text-rose-300 border-rose-400/25",
  on_track: "bg-sky-400/15 text-sky-300 border-sky-400/25",
};

export default function ContactProfile({ friend }) {
  const { addLog } = useLogs();
  const statusClass =
    statusStyles[friend.status] ?? "bg-blue-500/15 text-blue-200 border-blue-400/25";

  const handleAction = (type) => {
    const newLog = {
      friendName: friend.name,
      type: type,
      date: new Date().toLocaleDateString(),
      note: `Checked in via ${type}`,
    };

    addLog(newLog);
    toast.success(`${type} log added!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    });
  };

  return (
    <div className="page-shell">
      <ToastContainer theme="dark" />
      <div className="container mx-auto flex max-w-5xl items-start justify-center">
        <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          {/* Left Column */}
          <div className="flex flex-col gap-6 lg:col-span-1">
            <div className="glass-card flex flex-col items-center rounded-2xl p-8 text-center">
              <span className="text-7xl text-blue-300/80">
                <FaCircleUser />
              </span>
              <h2 className="mt-4 text-lg font-semibold text-white">
                {friend.name}
              </h2>
              <div className="mt-4 flex flex-col items-center gap-3">
                <span
                  className={`rounded-full border px-3 py-1 text-xs font-medium capitalize ${statusClass}`}
                >
                  {friend.status?.replace("_", " ")}
                </span>
                <span className="rounded-full border border-blue-400/25 bg-blue-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-blue-300">
                  {friend.tags}
                </span>
                <p className="text-sm text-blue-200/60">{friend.email}</p>
              </div>
            </div>

            <div className="glass-card overflow-hidden divide-y divide-blue-400/10 rounded-2xl">
              <button
                onClick={() =>
                  toast.warning("Snoozed for 2 weeks!", {
                    position: "top-right",
                    autoClose: 3000,
                  })
                }
                className="flex w-full items-center gap-3 px-5 py-4 text-sm text-blue-100/80 transition-colors hover:bg-blue-400/10"
              >
                <Clock size={15} className="text-blue-300/70" />
                Snooze 2 Weeks
              </button>
              <button
                onClick={() =>
                  toast.info("Contact archived!", {
                    position: "top-right",
                    autoClose: 3000,
                  })
                }
                className="flex w-full items-center gap-3 px-5 py-4 text-sm text-blue-100/80 transition-colors hover:bg-blue-400/10"
              >
                <Archive size={15} className="text-blue-300/70" />
                Archive
              </button>
              <button
                onClick={() =>
                  toast.error("Contact deleted!", {
                    position: "top-right",
                    autoClose: 3000,
                  })
                }
                className="flex w-full items-center gap-3 px-5 py-4 text-sm text-rose-300 transition-colors hover:bg-rose-400/10"
              >
                <Trash2 size={15} className="text-rose-400" />
                Delete
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
              <div className="glass-card rounded-2xl p-6 text-center">
                <p className="text-3xl font-bold text-white">
                  {friend.days_since_contact}
                </p>
                <p className="mt-2 text-xs text-blue-200/50">
                  Days Since Contact
                </p>
              </div>
              <div className="glass-card rounded-2xl p-6 text-center">
                <p className="text-3xl font-bold text-white">{friend.goal}</p>
                <p className="mt-2 text-xs text-blue-200/50">Goal (Days)</p>
              </div>
              <div className="glass-card rounded-2xl p-6 text-center">
                <p className="text-3xl font-bold text-blue-300">
                  {friend.next_due_date}
                </p>
                <p className="mt-2 text-xs text-blue-200/50">Next Due</p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-white">
                  Relationship Goal
                </h3>
                <button
                  onClick={() =>
                    toast.info("Goal settings opened for editing!", {
                      position: "top-right",
                      autoClose: 3000,
                    })
                  }
                  className="btn-royal-outline px-3 py-1.5 text-xs"
                >
                  Edit
                </button>
              </div>
              <p className="text-sm text-blue-100/70">
                Connect every{" "}
                <span className="font-semibold text-blue-200">
                  {friend.goal} days
                </span>
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <h3 className="mb-5 text-sm font-semibold text-white">
                Quick Check-In
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "Call", Icon: PhoneCall },
                  { label: "Text", Icon: MessageSquare },
                  { label: "Video", Icon: Video },
                ].map(({ label, Icon }) => (
                  <button
                    onClick={() => handleAction(label)}
                    key={label}
                    className="glass-card-hover flex flex-col items-center gap-2 rounded-xl border border-blue-400/15 py-5 text-sm text-blue-100/80 transition-colors hover:bg-blue-400/10"
                  >
                    <Icon size={20} className="text-blue-300" />
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
