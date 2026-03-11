import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-gray-950 to-cyan-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <span className="inline-block bg-violet-500/10 text-violet-400 border border-violet-500/20 text-xs font-medium px-3 py-1 rounded-full mb-6">
            ⚡ Proses Otomatis 24 Jam
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Top Up Game
            <span className="block bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Murah & Cepat
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
            Top up semua game favorit kamu di satu tempat. Harga terjangkau,
            proses instan, aman terpercaya.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/topup"
              className="bg-violet-600 hover:bg-violet-500 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
            >
              Top Up Sekarang
            </Link>
            <Link
              href="/history"
              className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
            >
              Cek Riwayat
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-900 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Transaksi Sukses", value: "500K+" },
              { label: "Game Tersedia", value: "100+" },
              { label: "Pengguna Aktif", value: "50K+" },
              { label: "Uptime", value: "99.9%" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Game Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">Game Populer</h2>
          <p className="text-gray-400">
            Top up game favoritmu dengan harga terbaik
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            {
              name: "Mobile Legends",
              category: "MOBA",
              color: "from-blue-600 to-blue-400",
            },
            {
              name: "Free Fire",
              category: "Battle Royale",
              color: "from-orange-600 to-yellow-400",
            },
            {
              name: "PUBG Mobile",
              category: "Battle Royale",
              color: "from-yellow-600 to-amber-400",
            },
            {
              name: "Genshin Impact",
              category: "RPG",
              color: "from-cyan-600 to-blue-400",
            },
            {
              name: "Valorant",
              category: "FPS",
              color: "from-red-600 to-rose-400",
            },
            {
              name: "Call of Duty",
              category: "FPS",
              color: "from-green-600 to-emerald-400",
            },
            {
              name: "Honkai Star Rail",
              category: "RPG",
              color: "from-purple-600 to-violet-400",
            },
            {
              name: "Clash of Clans",
              category: "Strategy",
              color: "from-amber-600 to-yellow-400",
            },
          ].map((game) => (
            <Link
              key={game.name}
              href="/topup"
              className="group bg-gray-900 border border-gray-800 hover:border-violet-500/50 rounded-2xl p-6 transition-all hover:-translate-y-1"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${game.color} mb-4 flex items-center justify-center text-white font-bold text-lg`}
              >
                {game.name[0]}
              </div>
              <h3 className="text-white font-semibold text-sm">{game.name}</h3>
              <p className="text-gray-500 text-xs mt-1">{game.category}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Us */}
      <section className="bg-gray-900 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">
              Kenapa Kyurie?
            </h2>
            <p className="text-gray-400">
              Kami hadir untuk kemudahan top up kamu
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                icon: "⚡",
                title: "Proses Instan",
                desc: "Top up langsung masuk dalam hitungan detik, otomatis 24 jam.",
              },
              {
                icon: "💰",
                title: "Harga Terjangkau",
                desc: "Harga kompetitif dengan berbagai pilihan nominal sesuai kebutuhan.",
              },
              {
                icon: "🔒",
                title: "Aman & Terpercaya",
                desc: "Transaksi aman dengan sistem yang sudah dipercaya ribuan gamer.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="text-center p-6 rounded-2xl bg-gray-950 border border-gray-800"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Siap Top Up Sekarang?
        </h2>
        <p className="text-gray-400 mb-8">
          Daftar gratis dan nikmati kemudahan top up game favoritmu
        </p>
        <Link
          href="/register"
          className="bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white font-semibold px-10 py-4 rounded-xl transition-all inline-block"
        >
          Daftar Gratis Sekarang
        </Link>
      </section>
    </div>
  );
}
