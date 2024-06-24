import "../styles/globals.css";
import SideBar from "../components/SideBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="grid sm:grid-cols-6 grid-cols-2">
        <header className="sm:relative flex flex-col min-h-screen sm:col-span-1 md:col-span-2 items-center absolute">
          <SideBar />
       </header>
        <section className="sm:col-span-5 md:col-span-4 min-h-screen scrollbar-hide">
          <div className="md:container md:mx-auto">
            {children}
          </div>
        </section>
      </body>
    </html>
  )
}