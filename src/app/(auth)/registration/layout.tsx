"use client"
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <div>{children}</div>
            <section>Registeration layout</section>
        </>
    )
}
