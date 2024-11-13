import Image from "next/image";
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import AuthNav from "@/components/AuthNav";
export default async function Home() {
  const { getUser } = getKindeServerSession()
  const user = await getUser()
  return (
    <div>
      Hello World
    </div>
  );
}