import Link from "next/link";
import { FaCircleUser } from "react-icons/fa6";

const Friends = ({ friends }) => {
  return (
    <div className="bg-[#e6e6e6] ">
      <div className="container mx-auto p-4">
        <h2>Friends</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {friends.map((friend) => (
            <Link key={friend.id} href={`/friends/${friend.id}`}>
              <div className="p-5 bg-gray-50 shadow-xl rounded flex flex-col justify-center items-center gap-4">
                <span className="text-8xl">
                  <FaCircleUser />
                </span>
                <h3>{friend.name}</h3>
                <h4 className="text-gray-600">
                  {friend.days_since_contact} days
                </h4>
                <p className="mt-0 p-2 bg-blue-200 rounded-xl">{friend.tags}</p>
                {friend.status === "almost_due" ? (
                  <p className="text-yellow-500 font-bold mt-0">Almost Due</p>
                ) : friend.status === "overdue" ? (
                  <p className="text-red-500 font-bold mt-0">Over Due</p>
                ) : (
                  friend.status === "on_track" && (
                    <p className="text-green-500 font-bold mt-0">On Track</p>
                  )
                )}
              </div>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Friends;
