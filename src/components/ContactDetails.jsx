// import {
//   PhoneCall,
//   MessageSquare,
//   Video,
//   Clock,
//   Archive,
//   Trash2,
//   RotateCcw,
// } from "lucide-react";
// import Image from "next/image";

// const recentInteractions = [
//   {
//     type: "Text",
//     icon: MessageSquare,
//     note: "Asked for career advice",
//     date: "Jan 28, 2026",
//   },
//   {
//     type: "Meetup",
//     icon: PhoneCall,
//     note: "Industry conference meetup",
//     date: "Jan 28, 2026",
//   },
//   {
//     type: "Video",
//     icon: Video,
//     note: "Asked for career advice",
//     date: "Jan 28, 2026",
//   },
//   {
//     type: "Text",
//     icon: MessageSquare,
//     note: "Asked for career advice",
//     date: "Jan 28, 2026",
//   },
// ];

// export default function ContactProfile() {
//   return (
//     <div className="min-h-screen bg-gray-50 p-6 flex items-start justify-center">
//       <div className="w-full max-w-3xl grid grid-cols-3 gap-4">
//         {/* Left Column */}
//         <div className="col-span-1 flex flex-col gap-4">
//           {/* Profile Card */}
//           <div className="bg-white rounded-2xl p-5 flex flex-col items-center text-center shadow-sm border border-gray-100">
//             <Image
//               src="https://i.pravatar.cc/80?img=47"
//               alt="Emma Wilson"
//               className="w-20 h-20 rounded-full object-cover mb-3"
//             />
//             <h2 className="font-semibold text-gray-900 text-base">
//               Emma Wilson
//             </h2>
//             <div className="flex gap-2 mt-2 mb-3">
//               <span className="bg-red-500 text-white text-xs font-medium px-2 py-0.5 rounded-full">
//                 Overdue
//               </span>
//               <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-0.5 rounded-full">
//                 FAMILY
//               </span>
//             </div>
//             <p className="text-gray-400 text-xs italic mb-1">
//               Former colleague, great mentor
//             </p>
//             <p className="text-gray-400 text-xs">Preferred: email</p>
//           </div>

//           {/* Action Buttons */}
//           <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden divide-y divide-gray-100">
//             <button className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
//               <Clock size={15} className="text-gray-500" />
//               Snooze 2 Weeks
//             </button>
//             <button className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
//               <Archive size={15} className="text-gray-500" />
//               Archive
//             </button>
//             <button className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-500 hover:bg-red-50 transition-colors">
//               <Trash2 size={15} className="text-red-400" />
//               Delete
//             </button>
//           </div>
//         </div>

//         {/* Right Column */}
//         <div className="col-span-2 flex flex-col gap-4">
//           {/* Stats Row */}
//           <div className="grid grid-cols-3 gap-4">
//             <div className="bg-white rounded-2xl p-4 text-center shadow-sm border border-gray-100">
//               <p className="text-2xl font-bold text-gray-900">62</p>
//               <p className="text-xs text-gray-400 mt-1">Days Since Contact</p>
//             </div>
//             <div className="bg-white rounded-2xl p-4 text-center shadow-sm border border-gray-100">
//               <p className="text-2xl font-bold text-gray-900">30</p>
//               <p className="text-xs text-gray-400 mt-1">Goal (Days)</p>
//             </div>
//             <div className="bg-white rounded-2xl p-4 text-center shadow-sm border border-gray-100">
//               <p className="text-2xl font-bold text-green-700">Feb 27, 2026</p>
//               <p className="text-xs text-gray-400 mt-1">Next Due</p>
//             </div>
//           </div>

//           {/* Relationship Goal */}
//           <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
//             <div className="flex items-center justify-between mb-2">
//               <h3 className="text-sm font-semibold text-gray-800">
//                 Relationship Goal
//               </h3>
//               <button className="text-xs text-gray-500 border border-gray-200 px-3 py-1 rounded-lg hover:bg-gray-50 transition-colors">
//                 Edit
//               </button>
//             </div>
//             <p className="text-sm text-gray-600">
//               Connect every{" "}
//               <span className="font-semibold text-gray-900">30 days</span>
//             </p>
//           </div>

//           {/* Quick Check-In */}
//           <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
//             <h3 className="text-sm font-semibold text-gray-800 mb-4">
//               Quick Check-In
//             </h3>
//             <div className="grid grid-cols-3 gap-3">
//               {[
//                 { label: "Call", Icon: PhoneCall },
//                 { label: "Text", Icon: MessageSquare },
//                 { label: "Video", Icon: Video },
//               ].map(({ label, Icon }) => (
//                 <button
//                   key={label}
//                   className="flex flex-col items-center gap-2 py-4 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors text-gray-600 text-sm"
//                 >
//                   <Icon size={20} className="text-gray-500" />
//                   {label}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Recent Interactions */}
//           <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
//             <div className="flex items-center justify-between mb-4">
//               <h3 className="text-sm font-semibold text-gray-800">
//                 Recent Interactions
//               </h3>
//               <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-700 transition-colors">
//                 <RotateCcw size={12} />
//                 Full History
//               </button>
//             </div>
//             <div className="flex flex-col divide-y divide-gray-50">
//               {recentInteractions.map((item, idx) => (
//                 <div key={idx} className="flex items-center gap-3 py-3">
//                   <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center shrink-0">
//                     <item.icon size={15} className="text-gray-400" />
//                   </div>
//                   <div className="flex-1 min-w-0">
//                     <p className="text-sm font-medium text-gray-800">
//                       {item.type}
//                     </p>
//                     <p className="text-xs text-gray-400 truncate">
//                       {item.note}
//                     </p>
//                   </div>
//                   <span className="text-xs text-gray-400 shrink-0">
//                     {item.date}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
