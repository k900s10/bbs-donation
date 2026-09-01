const STEPS = [
  {
    n: 1,
    badge: "bg-emerald-100 text-emerald-800",
    icon: "📲",
    title: "Donasi QRIS",
    desc: "Relawan melakukan scan QRIS Rp20.000 secara sukarela saat pendaftaran atau di lokasi.",
    foot: "Opsional & Sukarela",
    footColor: "text-emerald-600",
  },
  {
    n: 2,
    badge: "bg-sky-100 text-sky-800",
    icon: "📊",
    title: "Pencatatan Kas",
    desc: "Dana terdata otomatis masuk ke dalam rekening khusus penggalangan sosial BBS.",
    foot: "Kumpulan Rekening Sosial",
    footColor: "text-sky-600",
  },
  {
    n: 3,
    badge: "bg-amber-100 text-amber-800",
    icon: "🍲",
    title: "Olahan Pangan Lokal",
    desc: "Pengadaan bahan segar pangan lokal & pengolahan hidangan sejarah kuliner Nusantara.",
    foot: "Resep Kuliner Nusantara",
    footColor: "text-amber-600",
  },
  {
    n: 4,
    badge: "bg-emerald-100 text-emerald-800",
    icon: "🤝",
    title: "Penyaluran Warga",
    desc: "Distribusi langsung makanan siap santap kepada masyarakat yang membutuhkan.",
    foot: "Langsung Tepat Sasaran",
    footColor: "text-emerald-600",
  },
  {
    n: 5,
    badge: "bg-slate-900 text-white",
    icon: "📢",
    title: "Laporan Publik",
    desc: "Publikasi rekapitulasi dana & foto kegiatan di WhatsApp grup relawan & media sosial.",
    foot: "Rekap Tiap Bulan",
    footColor: "text-slate-900",
  },
] as const;

export function FlowSteps() {
  return (
    <section className="space-y-6">
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
          Alur Transparansi
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-1">
          Siklus Perjalanan Donasimu
        </h2>
        <p className="text-slate-600 text-sm mt-1">
          Bagaimana donasi sukarela Rp20.000 mengalir dari QRIS hingga diolah menjadi kuliner
          Nusantara bergizi bagi warga yang membutuhkan.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
        {STEPS.map(step => (
          <div
            key={step.n}
            className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-3 relative"
          >
            <div className="flex items-center justify-between">
              <span
                className={`w-7 h-7 rounded-full font-extrabold text-xs flex items-center justify-center ${step.badge}`}
              >
                {step.n}
              </span>
              <span className="text-lg">{step.icon}</span>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">{step.title}</h4>
              <p className="text-xs text-slate-500 mt-1">{step.desc}</p>
            </div>
            <div className={`text-right text-xs font-bold ${step.footColor}`}>{step.foot}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
