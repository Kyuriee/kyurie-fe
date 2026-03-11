"use client";

import { useState } from "react";

type Status = "success" | "pending" | "failed";

const transactions = [
  {
    id: "TRX-001",
    game: "Mobile Legends",
    item: "86 Diamonds",
    userId: "123456789",
    price: 19000,
    status: "success" as Status,
    date: "2025-01-10 14:32",
  },
  {
    id: "TRX-002",
    game: "Free Fire",
    item: "100 Diamonds",
    userId: "987654321",
    price: 37000,
    status: "success" as Status,
    date: "2025-01-09 09:15",
  },
  {
    id: "TRX-003",
    game: "PUBG Mobile",
    item: "325 UC",
    userId: "112233445",
    price: 55000,
    status: "pending" as Status,
    date: "2025-01-08 20:45",
  },
  {
    id: "TRX-004",
    game: "Genshin Impact",
    item: "60 Primogems",
    userId: "556677889",
    price: 19000,
    status: "failed" as Status,
    date: "2025-01-07 16:20",
  },
  {
    id: "TRX-005",
    game: "Valorant",
    item: "420 VP",
    userId: "998877665",
    price: 73000,
    status: "success" as Status,
    date: "2025-01-06 11:05",
  },
  {
    id: "TRX-006",
    game: "Honkai Star Rail",
    item: "60 Oneiric Shards",
    userId: "443322110",
    price: 19000,
    status: "success" as Status,
    date: "2025-01-05 08:30",
  },
];

const statusConfig = {
  success: {
    label: "Berhasil",
    class: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
  },
  pending: {
    label: "Diproses",
    class: "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20",
  },
  failed: {
    label: "Gagal",
    class: "bg-red-500/10 text-red-400 border border-red-500/20",
  },
};

function formatRupiah(amount: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
}

export default function HistoryPage() {
  const [filter, setFilter] = useState<"all" | Status>("all");
  const [search, setSearch] = useState("");

  const filtered = transactions.filter((trx) => {
    const matchStatus = filter === "all" || trx.status === filter;
    const matchSearch =
      trx.id.toLowerCase().includes(search.toLowerCase()) ||
      trx.game.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white">Riwayat Transaksi</h1>
        <p className="text-gray-400 mt-1">Pantau semua transaksi top up kamu</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Total Transaksi", value: transactions.length },
          {
            label: "Berhasil",
            value: transactions.filter((t) => t.status === "success").length,
          },
          {
            label: "Diproses",
            value: transactions.filter((t) => t.status === "pending").length,
          },
          {
            label: "Gagal",
            value: transactions.filter((t) => t.status === "failed").length,
          },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-gray-900 border border-gray-800 rounded-2xl p-4 text-center"
          >
            <p className="text-2xl font-bold text-white">{stat.value}</p>
            <p className="text-gray-400 text-xs mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Filter & Search */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Cari ID transaksi atau game..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 bg-gray-900 border border-gray-800 focus:border-violet-500 focus:outline-none text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm transition-colors"
        />
        <div className="flex gap-2">
          {(["all", "success", "pending", "failed"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                filter === s
                  ? "bg-violet-600 text-white"
                  : "bg-gray-900 border border-gray-800 text-gray-400 hover:text-white"
              }`}
            >
              {s === "all" ? "Semua" : statusConfig[s].label}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="hidden sm:grid grid-cols-6 px-6 py-4 border-b border-gray-800 text-xs text-gray-500 font-medium uppercase tracking-wider">
          <span>ID Transaksi</span>
          <span>Game</span>
          <span>Item</span>
          <span>User ID</span>
          <span>Total</span>
          <span>Status</span>
        </div>

        {/* Rows */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-gray-500">
            <p className="text-4xl mb-3">📭</p>
            <p>Tidak ada transaksi ditemukan</p>
          </div>
        ) : (
          filtered.map((trx, i) => (
            <div
              key={trx.id}
              className={`grid grid-cols-2 sm:grid-cols-6 gap-2 px-6 py-4 text-sm transition-colors hover:bg-gray-800/50 ${
                i !== filtered.length - 1 ? "border-b border-gray-800" : ""
              }`}
            >
              <div>
                <p className="text-violet-400 font-medium">{trx.id}</p>
                <p className="text-gray-600 text-xs mt-0.5">{trx.date}</p>
              </div>
              <p className="text-white">{trx.game}</p>
              <p className="text-gray-300">{trx.item}</p>
              <p className="text-gray-400">{trx.userId}</p>
              <p className="text-white font-medium">
                {formatRupiah(trx.price)}
              </p>
              <span
                className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-medium w-fit ${statusConfig[trx.status].class}`}
              >
                {statusConfig[trx.status].label}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
