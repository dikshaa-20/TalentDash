"use client";

import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between border-b bg-white px-4 md:hidden">
        <h1 className="text-xl font-bold text-pink-600">
          TalentDash
        </h1>

        <button
          onClick={() => setOpen(!open)}
          className="rounded border px-3 py-1"
        >
          ☰
        </button>
      </header>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 z-40 bg-black/50 md:hidden">
          <div className="h-full w-64 bg-white p-4">
            <h2 className="mb-6 text-xl font-bold text-pink-600">
              TalentDash
            </h2>

            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 hover:bg-pink-100"
              >
                Home
              </Link>

              <Link
                href="/companies"
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 hover:bg-pink-100"
              >
                Companies
              </Link>

              <Link
                href="/salaries"
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 hover:bg-pink-100"
              >
                Salaries
              </Link>

              <Link
                href="/compare"
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 hover:bg-pink-100"
              >
                Compare
              </Link>
            </nav>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="fixed left-0 top-0 hidden h-screen w-64 border-r bg-white md:block">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-pink-600">
            TalentDash
          </h1>
        </div>

        <nav className="flex flex-col gap-2 px-4">
          <Link
            href="/"
            className="rounded-lg px-4 py-3 hover:bg-pink-100"
          >
            Home
          </Link>

          <Link
            href="/companies"
            className="rounded-lg px-4 py-3 hover:bg-pink-100"
          >
            Companies
          </Link>

          <Link
            href="/salaries"
            className="rounded-lg px-4 py-3 hover:bg-pink-100"
          >
            Salaries
          </Link>

          <Link
            href="/compare"
            className="rounded-lg px-4 py-3 hover:bg-pink-100"
          >
            Compare
          </Link>
        </nav>
      </aside>
    </>
  );
}