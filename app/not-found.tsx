import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col px-5 py-24">
      <h1 className="text-4xl font-semibold tracking-tight">This page is not on the map</h1>
      <p className="mt-4 text-muted">The address does not match a guide on Raippaluoto.</p>
      <Link href="/" className="mt-6 font-medium underline underline-offset-4">
        Raippaluoto
      </Link>
    </main>
  );
}
