import Image from "next/image";
import AuthNav from "@/components/AuthNav";
import ItemCard from "@/components/ItemCard";
export default async function Home() {
  return (
    <div>
      <p className="text-2xl bold mb-2">Browse All</p>
      <div className="flex flex-wrap gap-5">
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
    </div>
  );
}