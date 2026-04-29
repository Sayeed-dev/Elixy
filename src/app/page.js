import Hero from "@/components/Hero";
import Counter from "@/components/Counter";
import Friends from "@/components/Friends";


export default async function Home() {
  const friends = await fetch("/public/friends.json").then(
    (res) => res.json(),
  );
  return (
    <main className="">
      <Hero />
      <Counter />
      <Friends friends={friends} />
    </main>
  );
}
