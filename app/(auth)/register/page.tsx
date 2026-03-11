"use client";

import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full max-w-md px-4">
      {/* Logo */}
      <div className="text-center mb-8">
        <Link href="/">
          <span className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            Kyurie
          </span>
        </Link>
        <p className="text-gray-400 text-sm mt-2">Buat akun baru</p>
      </div>

      {/* Card */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
        <div className="space-y-5">
          {/* Nama */}
          <div>
            <label className="text-sm text-gray-300 font-medium block mb-2">
              Nama Lengkap
            </label>
            <input
              type="text"
              placeholder="Nama kamu"
              className="w-full bg-gray-950 border border-gray-700 focus:border-violet-500 focus:outline-none text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm transition-colors"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-gray-300 font-medium block mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="email@contoh.com"
              className="w-full bg-gray-950 border border-gray-700 focus:border-violet-500 focus:outline-none text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm transition-colors"
            />
          </div>

          {/* No HP */}
          <div>
            <label className="text-sm text-gray-300 font-medium block mb-2">
              Nomor HP
            </label>
            <input
              type="tel"
              placeholder="08xxxxxxxxxx"
              className="w-full bg-gray-950 border border-gray-700 focus:border-violet-500 focus:outline-none text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm transition-colors"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-300 font-medium block mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Minimal 8 karakter"
                className="w-full bg-gray-950 border border-gray-700 focus:border-violet-500 focus:outline-none text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm transition-colors pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 text-xs transition-colors"
              >
                {showPassword ? "Sembunyikan" : "Tampilkan"}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="button"
            className="w-full bg-violet-600 hover:bg-violet-500 text-white font-semibold py-3 rounded-xl transition-colors mt-2"
          >
            Daftar Sekarang
          </button>
        </div>

        <p className="text-center text-gray-500 text-sm mt-6">
          Sudah punya akun?{" "}
          <Link
            href="/login"
            className="text-violet-400 hover:text-violet-300 transition-colors font-medium"
          >
            Masuk di sini
          </Link>
        </p>
      </div>
    </div>
  );
}
