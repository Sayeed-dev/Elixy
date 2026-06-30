import Link from "next/link";
import { FaCircleUser } from "react-icons/fa6";

const statusStyles = {
  almost_due: {
    label: "Almost Due",
    className: "text-amber-300 bg-amber-400/10 border-amber-400/25",
  },
  overdue: {
    label: "Overdue",
    className: "text-rose-300 bg-rose-400/10 border-rose-400/25",
  },
  on_track: {
    label: "On Track",
    className: "text-sky-300 bg-sky-400/10 border-sky-400/25",
  },
};

const Friends = ({ friends }) => {
  return (
    <section
      id="friends"
      className="relative mesh-gradient grid-pattern px-6 sm:px-10 lg:px-16 xl:px-24 py-20 lg:py-28 pb-28 lg:pb-36"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12 lg:mb-16">
          <p className="label-caps mb-3">Network</p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Friends</h2>
          <p className="mt-4 max-w-xl text-blue-200/60">
            Tap a profile to log interactions and keep every relationship on track.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-8">
          {friends.map((friend) => {
            const status = statusStyles[friend.status] ?? statusStyles.on_track;

            return (
              <li key={friend.id}>
                <Link href={`/friends/${friend.id}`} className="block h-full">
                  <div className="glass-card glass-card-hover flex h-full flex-col items-center rounded-2xl p-8 sm:p-10 text-center">
                    <span className="mb-5 text-7xl text-blue-300/80 sm:text-8xl">
                      <FaCircleUser />
                    </span>

                    <h3 className="mb-2 text-lg font-semibold text-white">
                      {friend.name}
                    </h3>

                    <p className="mb-5 text-sm text-blue-200/50">
                      {friend.days_since_contact} days since contact
                    </p>

                    <span className="mb-5 rounded-full border border-blue-400/25 bg-blue-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-blue-300">
                      {friend.tags}
                    </span>

                    <span
                      className={`mt-auto rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-wide ${status.className}`}
                    >
                      {status.label}
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Friends;
