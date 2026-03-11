"use client";

import { useState } from "react";

const games = [
  {
    id: 1,
    name: "Mobile Legends",
    category: "MOBA",
    color: "from-blue-600 to-blue-400",
    fields: ["User ID", "Zone ID"],
  },
  {
    id: 2,
    name: "Free Fire",
    category: "Battle Royale",
    color: "from-orange-600 to-yellow-400",
    fields: ["Player ID"],
  },
  {
    id: 3,
    name: "PUBG Mobile",
    category: "Battle Royale",
    color: "from-yellow-600 to-amber-400",
    fields: ["Player ID"],
  },
  {
    id: 4,
    name: "Genshin Impact",
    category: "RPG",
    color: "from-cyan-600 to-blue-400",
    fields: ["UID", "Server"],
  },
  {
    id: 5,
    name: "Valorant",
    category: "FPS",
    color: "from-red-600 to-rose-400",
    fields: ["Riot ID", "Tagline"],
  },
  {
    id: 6,
    name: "Honkai Star Rail",
    category: "RPG",
    color: "from-purple-600 to-violet-400",
    fields: ["UID", "Server"],
  },
];

const denominations = [
  { id: 1, label: "86 Diamonds", price: 19000 },
  { id: 2, label: "172 Diamonds", price: 37000 },
  { id: 3, label: "257 Diamonds", price: 55000 },
  { id: 4, label: "344 Diamonds", price: 73000 },
  { id: 5, label: "514 Diamonds", price: 109000 },
  { id: 6, label: "706 Diamonds", price: 149000 },
  { id: 7, label: "1412 Diamonds", price: 295000 },
  { id: 8, label: "2195 Diamonds", price: 459000 },
];

function formatRupiah(amount: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
}

export default function TopUpPage() {
  const [selectedGame, setSelectedGame] = useState(games[0]);
  const [selectedDenom, setSelectedDenom] = useState<number | null>(null);
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleGameSelect = (game: (typeof games)[0]) => {
    setSelectedGame(game);
    setSelectedDenom(null);
    setFormData({});
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white">Top Up</h1>
        <p className="text-gray-400 mt-1">Pilih game dan nominal top up kamu</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left — Game & Form */}
        <div className="lg:col-span-2 space-y-8">
          {/* Step 1 - Pilih Game */}
          <div>
            <h2 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="bg-violet-600 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold">
                1
              </span>
              Pilih Game
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {games.map((game) => (
                <button
                  key={game.id}
                  onClick={() => handleGameSelect(game)}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    selectedGame.id === game.id
                      ? "border-violet-500 bg-violet-500/10"
                      : "border-gray-800 bg-gray-900 hover:border-gray-600"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${game.color} flex items-center justify-center text-white font-bold mb-3`}
                  >
                    {game.name[0]}
                  </div>
                  <p className="text-white text-sm font-medium">{game.name}</p>
                  <p className="text-gray-500 text-xs">{game.category}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2 - Masukkan ID */}
          <div>
            <h2 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="bg-violet-600 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold">
                2
              </span>
              Masukkan Data Akun
            </h2>
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-4">
              {selectedGame.fields.map((field) => (
                <div key={field}>
                  <label className="text-sm text-gray-300 font-medium block mb-2">
                    {field}
                  </label>
                  <input
                    type="text"
                    placeholder={`Masukkan ${field}`}
                    value={formData[field] || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, [field]: e.target.value })
                    }
                    className="w-full bg-gray-950 border border-gray-700 focus:border-violet-500 focus:outline-none text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm transition-colors"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Step 3 - Pilih Nominal */}
          <div>
            <h2 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="bg-violet-600 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold">
                3
              </span>
              Pilih Nominal
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {denominations.map((denom) => (
                <button
                  key={denom.id}
                  onClick={() => setSelectedDenom(denom.id)}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    selectedDenom === denom.id
                      ? "border-violet-500 bg-violet-500/10"
                      : "border-gray-800 bg-gray-900 hover:border-gray-600"
                  }`}
                >
                  <p className="text-white text-sm font-semibold">
                    {denom.label}
                  </p>
                  <p className="text-violet-400 text-sm mt-1 font-medium">
                    {formatRupiah(denom.price)}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right — Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sticky top-24">
            <h2 className="text-white font-semibold mb-6">Ringkasan Pesanan</h2>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Game</span>
                <span className="text-white font-medium">
                  {selectedGame.name}
                </span>
              </div>
              {selectedGame.fields.map((field) => (
                <div key={field} className="flex justify-between text-sm">
                  <span className="text-gray-400">{field}</span>
                  <span className="text-white font-medium">
                    {formData[field] || "-"}
                  </span>
                </div>
              ))}
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Nominal</span>
                <span className="text-white font-medium">
                  {selectedDenom
                    ? denominations.find((d) => d.id === selectedDenom)?.label
                    : "-"}
                </span>
              </div>
              <hr className="border-gray-800" />
              <div className="flex justify-between">
                <span className="text-gray-400 text-sm">Total</span>
                <span className="text-violet-400 font-bold text-lg">
                  {selectedDenom
                    ? formatRupiah(
                        denominations.find((d) => d.id === selectedDenom)!
                          .price,
                      )
                    : "Rp 0"}
                </span>
              </div>
            </div>

            <button
              disabled={
                !selectedDenom || Object.values(formData).some((v) => !v)
              }
              className="w-full mt-6 bg-violet-600 hover:bg-violet-500 disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl transition-colors"
            >
              Bayar Sekarang
            </button>
            <p className="text-gray-600 text-xs text-center mt-3">
              Proses otomatis setelah pembayaran berhasil
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
