import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <p>Home</p>

      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
