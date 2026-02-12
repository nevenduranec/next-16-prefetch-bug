import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
        Welcome
      </h1>
      <Link href={"/test_slug"}>View slug (SSG)</Link>
      <Link href={"/test_slug_2"}>View slug 2</Link>
    </>
  );
}
