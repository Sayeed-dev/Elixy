import ContactProfile from "@/components/ContactProfile";
import { getFriends } from "@/lib/friends";

export const runtime = "nodejs";

const FriendDetailsPage = async ({ params }) => {
  const { id } = await params;

  const friends = await getFriends();
  const friend = friends.find((f) => f.id == parseInt(id));


  if (!friend) {
    return <div className="my-10 text-8xl text-center">Friend not found</div>;
  }

  return (
    <div className="mt-10">
      <ContactProfile friend={friend} />
    </div>
  );
};

export default FriendDetailsPage;
