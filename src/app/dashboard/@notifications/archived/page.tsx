import Link from "next/link"

export default function ArchivedNotifications() {
  return (
    <>
      <div className="card border-1 w-20 h-20">Archived Notifications</div>
      <Link href={"/dashboard"}>default</Link>
    </>
  )
}
