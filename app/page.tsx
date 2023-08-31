import { UserButton, SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import { UserGreeting } from "./components/UserGreeting";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <SignedIn>
        <UserButton />
        <UserGreeting />
      </SignedIn>
      <SignedOut>
        <Link href="/sign-in">Sign In</Link>
      </SignedOut>
    </div>
  );
}
