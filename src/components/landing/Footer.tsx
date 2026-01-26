"use client";

import Link from "next/link";
import {FaGithub, FaTwitter} from "react-icons/fa";

export default function LandingFooter() {
  return (
    <footer className="border-t border-white/60 bg-white/70 backdrop-blur pb-10 pt-8 shadow-sm shadow-black/5">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1 text-center sm:text-left">
          <p className="text-sm font-semibold text-gray-900"> Snippify</p>
        </div>

        <div className="flex flex-col items-center gap-2 text-sm text-gray-700 sm:flex-row sm:gap-3">
          <Link
            href="https://github.com/hiarun02/Snippify"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-3 py-3 font-medium text-gray-800 transition hover:border-gray-300 hover:shadow-sm"
          >
            <FaTwitter />
          </Link>
          <Link
            href="https://github.com/hiarun02/Snippify"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-3 py-3 font-medium text-gray-800 transition hover:border-gray-300 hover:shadow-sm"
          >
            <FaGithub />
          </Link>
        </div>
      </div>
    </footer>
  );
}
