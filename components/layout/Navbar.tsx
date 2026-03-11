"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Kyurie
            </span>
          </Link>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              Home
            </Link>
            <Link
              href="/topup"
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              Top Up
            </Link>
            <Link
              href="/history"
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              Riwayat
            </Link>
          </div>

          {/* Auth Buttons Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login"
              className="text-sm text-gray-300 hover:text-white transition-colors px-4 py-2"
            >
              Masuk
            </Link>
            <Link
              href="/register"
              className="text-sm bg-violet-600 hover:bg-violet-500 transition-colors text-white px-4 py-2 rounded-lg font-medium"
            >
              Daftar
            </Link>
          </div>

          {/* Hamburger Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-400 hover:text-white p-2"
          >
            <div
              className={`w-5 h-0.5 bg-current transition-all mb-1 ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}
            />
            <div
              className={`w-5 h-0.5 bg-current transition-all mb-1 ${isOpen ? "opacity-0" : ""}`}
            />
            <div
              className={`w-5 h-0.5 bg-current transition-all ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800 px-4 py-4 flex flex-col gap-4">
          <Link
            href="/"
            className="text-gray-300 hover:text-white text-sm"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/topup"
            className="text-gray-300 hover:text-white text-sm"
            onClick={() => setIsOpen(false)}
          >
            Top Up
          </Link>
          <Link
            href="/history"
            className="text-gray-300 hover:text-white text-sm"
            onClick={() => setIsOpen(false)}
          >
            Riwayat
          </Link>
          <hr className="border-gray-800" />
          <Link
            href="/login"
            className="text-gray-300 hover:text-white text-sm"
            onClick={() => setIsOpen(false)}
          >
            Masuk
          </Link>
          <Link
            href="/register"
            className="text-sm bg-violet-600 hover:bg-violet-500 text-white px-4 py-2 rounded-lg font-medium text-center"
            onClick={() => setIsOpen(false)}
          >
            Daftar
          </Link>
        </div>
      )}
    </nav>
  );
}
