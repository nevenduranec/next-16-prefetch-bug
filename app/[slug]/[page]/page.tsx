'use client'

import Link from "next/link"

export default function PagePage() {
  return (
    <div>
      <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
        Nested page
      </h1>
      <Link href={"/"}>Home</Link>
      <Link href={"/test"}>Back to slug</Link>
    </div>)

}
