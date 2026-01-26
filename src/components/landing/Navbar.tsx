"use client";

import Image from "next/image";
import Link from "next/link";
import {FaArrowAltCircleRight, FaStar} from "react-icons/fa";
import {useEffect, useState} from "react";

import {Button} from "@/components/ui/button";

export default function Navbar() {
  const [stars, setStars] = useState<number | null>(null);
  const [displayStars, setDisplayStars] = useState(0);

  useEffect(() => {
    const fetchStars = async () => {
      try {
        const res = await fetch(
          "https://api.github.com/repos/hiarun02/Snippify",
        );
        const data = await res.json();
        if (typeof data?.stargazers_count === "number") {
          setStars(data.stargazers_count);
        }
      } catch (error) {
        console.error("Failed to fetch stars", error);
      }
    };

    fetchStars();
  }, []);

  useEffect(() => {
    if (stars === null) return;
    let current = 0;
    const target = stars;
    const step = Math.max(1, Math.floor(target / 40));
    const interval = setInterval(() => {
      current = Math.min(current + step, target);
      setDisplayStars(current);
      if (current >= target) clearInterval(interval);
    }, 25);
    return () => clearInterval(interval);
  }, [stars]);

  return (
    <header className="sticky top-4 z-50 border-b border-white/60">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between gap-4 rounded-full border border-white/70 bg-white/70 px-4 py-3 shadow-sm shadow-black/5 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full  text-base font-semibold text-white ">
              <Image
                className="rounded-full"
                src="/icon.svg"
                alt="Snippify logo"
                width={30}
                height={30}
                priority
              />
            </span>
            <div className="leading-tight">
              <p className="text-base font-semibold text-gray-900">Snippify</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="border-gray-200 bg-white/90"
              asChild
            >
              <Link
                href="https://github.com/hiarun02/Snippify"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2"
              >
                <span className="font-medium">Star on GitHub</span>
                <FaStar className="text-black" />
                {stars === null ? (
                  <span
                    className="inline-block ml-1 h-3 w-3 rounded-full border-2 border-gray-400 border-t-transparent animate-spin"
                    aria-hidden="true"
                  />
                ) : (
                  <span className="text-sm text-gray-600">
                    {displayStars.toLocaleString()}
                  </span>
                )}
              </Link>
            </Button>
            <Button
              variant="default"
              className="hidden sm:inline-flex rounded-2xl"
              asChild
            >
              <Link href="/editor">
                Editor <FaArrowAltCircleRight />{" "}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
