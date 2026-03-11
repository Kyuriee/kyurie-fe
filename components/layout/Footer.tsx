import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Kyurie
            </span>
            <p className="text-gray-400 text-sm mt-3 leading-relaxed max-w-xs">
              Platform top up game terpercaya, murah, dan cepat. Proses otomatis
              24 jam tanpa perlu tunggu lama.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                className="text-gray-500 hover:text-violet-400 transition-colors text-sm"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-violet-400 transition-colors text-sm"
              >
                WhatsApp
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-violet-400 transition-colors text-sm"
              >
                Telegram
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Menu</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/topup"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Top Up
                </Link>
              </li>
              <li>
                <Link
                  href="/history"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Riwayat
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Bantuan</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Kontak Kami
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Syarat & Ketentuan
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Kebijakan Privasi
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-500 text-xs">
            © 2025 Kyurie. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">Made with ❤️ for gamers</p>
        </div>
      </div>
    </footer>
  );
}
