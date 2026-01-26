"use client";

import {AiFillGithub} from "react-icons/ai";
import {Button} from "./ui/button";
import Link from "next/link";

export default function Footer() {
  return (
    <header className="fixed bottom-0 w-full p-4 backdrop-blur-md bg-transparent z-50">
      <nav className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-2 sm:gap-0">
        <div className="flex items-center space-x-2">
          <p className="text-black text-xs sm:text-sm">
            <Link href="/" className="font-semibold">
              Snippify{" "}
            </Link>{" "}
            | Made with 🖤 by
          </p>
          <Link
            href={"https://x.com/hiarun02"}
            target="_blank"
            className="text-black text-xs sm:text-sm hover:text-gray-600 transition-colors hover:underline font-semibold"
          >
            @hiarun02
          </Link>
        </div>
        <div className="dark:text-gray-300 text-black text-xs sm:text-sm flex items-center space-x-2">
          <Button variant="link" className="p-0 h-auto">
            <Link
              href={"https://github.com/hiarun02/Snippify"}
              target="_blank"
              className="flex items-center gap-1 hover:text-gray-600 transition-colors"
            >
              Proudly Open Source <AiFillGithub className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
