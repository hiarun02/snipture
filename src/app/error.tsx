"use client";

import {useEffect} from "react";
import Link from "next/link";

import {Button} from "@/components/ui/button";

type ErrorPageProps = {
  error: Error & {digest?: string};
  reset: () => void;
};

export default function Error({error, reset}: ErrorPageProps) {
  useEffect(() => {
    console.error("App error boundary caught an error", error);
  }, [error]);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-white via-white to-gray-50 px-6 py-16 text-gray-900 dark:from-[#111010] dark:via-[#111010] dark:to-[#111010] dark:text-white">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-amber-200/40 blur-3xl dark:bg-[#111010]/20" />
      <div className="pointer-events-none absolute -bottom-24 right-10 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl dark:bg-[#111010]/20" />

      <div className="relative z-10 mx-auto flex w-full max-w-2xl flex-col items-center gap-6 text-center">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-gray-500 dark:text-gray-400">
            Something went wrong
          </p>
          <h1 className="text-3xl font-bold sm:text-4xl">
            We hit a snag while loading this page
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-300 sm:text-lg">
            Try again in a moment or head back home. If this keeps happening,
            feel free to report it.
          </p>
        </div>

        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button onClick={reset} size="lg" className="w-full sm:w-auto">
            Try again
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full sm:w-auto"
          >
            <Link href="/">Go home</Link>
          </Button>
        </div>

        {error?.digest ? (
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Error reference: {error.digest}
          </p>
        ) : null}
      </div>
    </main>
  );
}
