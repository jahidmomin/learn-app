import Link from "next/link"

export default function Notifications() {
  return (
    <>
      <div className="card border-1 w-20 h-20">Notifications</div>
      <Link href={"/dashboard/archived"}>archived</Link>
    </>
  )
}
