import {
  PhoneCall,
  MessageSquare,
  Video,
  Clock,
  Archive,
  Trash2,
  RotateCcw,
} from "lucide-react";
import { FaCircleUser } from "react-icons/fa6";

const recentInteractions = [
  {
    type: "Text",
    icon: MessageSquare,
    note: "Asked for career advice",
    date: "Jan 28, 2026",
  },
  {
    type: "Meetup",
    icon: PhoneCall,
    note: "Industry conference meetup",
    date: "Jan 28, 2026",
  },
  {
    type: "Video",
    icon: Video,
    note: "Asked for career advice",
    date: "Jan 28, 2026",
  },
  {
    type: "Text",
    icon: MessageSquare,
    note: "Asked for career advice",
    date: "Jan 28, 2026",
  },
];

export default function ContactProfile({ friend }) {
  return (
    <div className="min-h-screen bg-gray-50 p-6 flex items-start justify-center">
      <div className="w-full max-w-3xl grid grid-cols-3 gap-4">
        {/* Left Column */}
        <div className="col-span-1 flex flex-col gap-4">
          {/* Profile Card */}
          <div className="bg-white rounded-2xl p-5 flex flex-col items-center text-center shadow-sm border border-gray-100">
            <span className="text-7xl">
              <FaCircleUser />
            </span>
            <h2 className="font-semibold text-gray-900 text-base mt-2">
              {friend.name}
            </h2>
            <div className="flex gap-2 mt-2 mb-3 flex-col items-center">
              <span className="bg-gray-800 text-white text-xs font-medium px-2 py-0.5 rounded-full">
                {friend.status}
              </span>
              <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-0.5 rounded-full">
                {friend.category}
              </span>
              <p className="mt-0 py-1 px-2 bg-blue-200 rounded">{friend.tags}</p>
              <p className="mt-0 text-sm text-gray-500">{friend.email}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden divide-y divide-gray-100">
            <button className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
              <Clock size={15} className="text-gray-500" />
              Snooze 2 Weeks
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
              <Archive size={15} className="text-gray-500" />
              Archive
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-500 hover:bg-red-50 transition-colors">
              <Trash2 size={15} className="text-red-400" />
              Delete
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-2 flex flex-col gap-4">
          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white rounded-2xl p-4 text-center shadow-sm border border-gray-100">
              <p className="text-2xl font-bold text-gray-900">{friend.days_since_contact}</p>
              <p className="text-xs text-gray-400 mt-1">Days Since Contact</p>
            </div>
            <div className="bg-white rounded-2xl p-4 text-center shadow-sm border border-gray-100">
              <p className="text-2xl font-bold text-gray-900">{friend.goal}</p>
              <p className="text-xs text-gray-400 mt-1">Goal (Days)</p>
            </div>
            <div className="bg-white rounded-2xl p-4 text-center shadow-sm border border-gray-100">
              <p className="text-2xl font-bold text-green-700">{friend.next_due_date}</p>
              <p className="text-xs text-gray-400 mt-1">Next Due</p>
            </div>
          </div>

          {/* Relationship Goal */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-semibold text-gray-800">
                Relationship Goal
              </h3>
              <button className="text-xs text-gray-500 border border-gray-200 px-3 py-1 rounded-lg hover:bg-gray-50 transition-colors">
                Edit
              </button>
            </div>
            <p className="text-sm text-gray-600">
              Connect every{" "}
              <span className="font-semibold text-gray-900">{friend.goal} days</span>
            </p>
          </div>

          {/* Quick Check-In */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h3 className="text-sm font-semibold text-gray-800 mb-4">
              Quick Check-In
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "Call", Icon: PhoneCall },
                { label: "Text", Icon: MessageSquare },
                { label: "Video", Icon: Video },
              ].map(({ label, Icon }) => (
                <button
                  key={label}
                  className="flex flex-col items-center gap-2 py-4 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors text-gray-600 text-sm"
                >
                  <Icon size={20} className="text-gray-500" />
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
