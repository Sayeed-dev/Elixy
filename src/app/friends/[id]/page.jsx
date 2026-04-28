

const FriendDetailsPage = async ({ params }) => {
  const { id } = await params;

  const friends = await fetch("http://localhost:3000/friends.json").then(
    (res) => res.json(),
  )

  const friend = friends.find((f) => f.id === parseInt(id));

  if (!friend) {
    return <div className="my-10 text-8xl text-center">Friend not found</div>;
  }

  return <div>
    <h1 className="text-4xl font-bold mb-4">{friend.name}</h1>
    <p className="text-gray-600 mb-2">Time: {friend.time}</p>
    <div className="mb-4">
      {friend.category.map((category, index) => (
        <span key={index} className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full mr-2">
          {category}
        </span>
      ))}
    </div>
  </div>;
};

export default FriendDetailsPage;
