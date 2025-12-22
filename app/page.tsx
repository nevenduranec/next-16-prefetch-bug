'use client'

import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
        Welcome
      </h1>
      <Link href={"/test_slug"}>View slug</Link>
      <Link href={"/test_slug"}>View test slug</Link>
      <Link href={"/test_slug/test_page"}>View test page</Link>

    </>
  );
}
