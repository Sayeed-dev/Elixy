import ContactProfile from "@/components/ContactProfile";
import { getFriends } from "@/lib/friends";

export const runtime = "nodejs";

const FriendDetailsPage = async ({ params }) => {
  const { id } = await params;

  const friends = await getFriends();
  const friend = friends.find((f) => f.id == parseInt(id));

  if (!friend) {
    return (
      <div className="page-shell flex min-h-[60vh] items-center justify-center">
        <div className="glass-card rounded-3xl px-10 py-16 text-center">
          <p className="text-5xl font-bold text-blue-300/40">404</p>
          <h1 className="mt-4 text-2xl font-bold text-white">Friend not found</h1>
          <p className="mt-2 text-sm text-blue-200/60">
            This profile doesn&apos;t exist in your network.
          </p>
        </div>
      </div>
    );
  }

  return <ContactProfile friend={friend} />;
};

export default FriendDetailsPage;
