import { FaChevronDown } from "react-icons/fa";

import type { Metadata } from "next";
import Chat from "@/components/Chat";

export const metadata: Metadata = {
  title: "Trivia Builder",
  description: "Generated by Trivia Builder",
};

export default function RootLayout({
  children,
  // brokenfeat,
}: Readonly<{
  children: React.ReactNode;
  brokenfeat: React.ReactNode;
}>) {
  return (
    <div className="flex">

      <aside className="w-3/12">

        <nav  >
          <ul className="flex flex-col">
            <li className="custom-center p-3 border-b-2 h-2/12">
              <span className="avatar  bg-cyan-500">T</span> Trevor <FaChevronDown />
            </li>
            <Chat />
            {/* <li >{brokenfeat}</li> */}
          </ul>
        </nav>
      </aside>

      <div className="w-9/12 card">
        {children}
      </div>

    </div >
  );
}
