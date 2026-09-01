export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <span className="bg-emerald-600 text-white font-extrabold px-3 py-1 rounded-lg text-lg tracking-wider">
            BBS
          </span>
          <span className="text-xs md:text-sm font-semibold text-slate-600 uppercase tracking-wide">
            Transparansi Donasi Relawan
          </span>
        </div>
        <a
          href="#qris-donation"
          className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs md:text-sm font-bold px-4 py-2 rounded-lg transition shadow-sm"
        >
          Cek Dampak Donasi ➔
        </a>
      </div>
    </header>
  );
}
