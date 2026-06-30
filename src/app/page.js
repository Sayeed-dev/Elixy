import Hero from "@/components/Hero";
import Counter from "@/components/Counter";
import Friends from "@/components/Friends";
import { getFriends } from "@/lib/friends";

export default async function Home() {
  const friends = await getFriends();
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Counter />
      <Friends friends={friends} />
    </main>
  );
}
