import Link from "next/link"

export default function SlugPage() {
  return (
    <>
      <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
        Page
      </h1>
      <Link href={"/"}>Home</Link>
      <Link href={"/test_slug/test_page"}>Test page</Link>
    </>)

}
