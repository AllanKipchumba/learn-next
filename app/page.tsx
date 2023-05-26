import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row items-center justify-between p-24">
      <h1>Hello world</h1>
      <Link href="/about">Go to about page</Link>
      <p>
        <Link href="/users">Users</Link>
      </p>
    </main>
  );
}
