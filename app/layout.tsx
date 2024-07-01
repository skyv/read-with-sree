import "../styles/globals.css";
import SideBar from "../components/SideBar";
// declare module 'react-file-base64';

import dynamic from "next/dynamic";

const ReduxProvider = dynamic(() => import("@/store/redux-provider"), {
  ssr: false
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className="grid sm:grid-cols-6 grid-cols-2">
      <ReduxProvider>
        <header className="sm:relative flex flex-col min-h-screen sm:col-span-1 md:col-span-2 items-center absolute">
          <SideBar />
        </header>
        <section className="col-span-12 sm:col-span-5 md:col-span-4 min-h-screen scrollbar-hide">
          {/* <div className="md:container md:mx-auto"> */}
            {children}
          {/* </div> */}
        </section>
      </ReduxProvider>
    </body>
  </html>
  );
}
