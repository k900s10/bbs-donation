export function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 text-white rounded-3xl p-6 md:p-12 shadow-xl relative overflow-hidden">
      <div className="max-w-3xl relative z-10 space-y-4">
        <div className="inline-flex items-center space-x-2 bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 px-3 py-1 rounded-full text-xs md:text-sm font-medium">
          <span>🌱 Inisiatif Sosial BBS &amp; Rantang Kasih</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
          Ke Mana Perginya Donasi{" "}
          <span className="text-emerald-400 underline decoration-orange-500 decoration-4 underline-offset-4">
            Rp20.000
          </span>{" "}
          Kamu?
        </h1>
        <p className="text-slate-300 text-base md:text-lg leading-relaxed">
          Lebih dari sekadar aksi bersih-bersih lingkungan, kepedulianmu mendukung pengenalan dan
          penggunaan{" "}
          <strong className="text-amber-300">
            pangan lokal serta sejarah kuliner Nusantara
          </strong>{" "}
          untuk disalurkan kepada masyarakat yang membutuhkan.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-700/60 relative z-10">
        <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
          <p className="text-xs text-slate-400 font-medium">Status Donasi</p>
          <p className="text-lg md:text-xl font-bold text-emerald-400 mt-1">100% Sukarela</p>
          <p className="text-[11px] text-slate-400 mt-1">Tanpa Paksaan / Syarat</p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
          <p className="text-xs text-slate-400 font-medium">Biaya Registrasi</p>
          <p className="text-lg md:text-xl font-bold text-orange-400 mt-1">Rp 0 (GRATIS)</p>
          <p className="text-[11px] text-slate-400 mt-1">Bisa Ikut Walau Rp0</p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
          <p className="text-xs text-slate-400 font-medium">Misi Program</p>
          <p className="text-lg md:text-xl font-bold text-amber-300 mt-1">Rantang Kasih</p>
          <p className="text-[11px] text-slate-400 mt-1">Pangan Lokal Nusantara</p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
          <p className="text-xs text-slate-400 font-medium">Siklus Laporan</p>
          <p className="text-lg md:text-xl font-bold text-sky-400 mt-1">Setiap Bulan</p>
          <p className="text-[11px] text-slate-400 mt-1">Transparan &amp; Terbuka</p>
        </div>
      </div>
    </section>
  );
}
