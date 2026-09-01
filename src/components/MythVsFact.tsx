export function MythVsFact() {
  return (
    <section className="space-y-6">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
          Klarifikasi Penting: Mitos vs Fakta
        </h2>
        <p className="text-slate-600 mt-2 text-sm md:text-base">
          Kami mendengar pertanyaan relawan: <i>&ldquo;Kok bersih-bersih bayar?&rdquo;</i> Mari kita
          luruskan kesalahpahaman ini agar setiap aksi kita dilandasi rasa percaya.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-red-50/70 border border-red-200 rounded-2xl p-6 relative overflow-hidden">
          <div className="flex items-center space-x-3 mb-3">
            <span className="w-8 h-8 rounded-full bg-red-500 text-white font-bold flex items-center justify-center text-sm">
              ✕
            </span>
            <h3 className="text-lg font-bold text-red-950">Mitos / Kesalahan Persepsi</h3>
          </div>
          <ul className="space-y-3 text-sm text-red-900">
            <li className="flex items-start space-x-2">
              <span className="text-red-500 font-bold">•</span>
              <span>
                Rp20.000 adalah tiket masuk atau biaya wajib pendaftaran aksi bersih-bersih.
              </span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-red-500 font-bold">•</span>
              <span>
                Relawan yang tidak berdonasi tidak diperbolehkan bergabung dalam kegiatan.
              </span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-red-500 font-bold">•</span>
              <span>
                Uang donasi digunakan untuk komersial atau operasional internal panitia.
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-6 relative overflow-hidden">
          <div className="flex items-center space-x-3 mb-3">
            <span className="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-sm">
              ✓
            </span>
            <h3 className="text-lg font-bold text-emerald-950">Fakta Sebenarnya</h3>
          </div>
          <ul className="space-y-3 text-sm text-emerald-900">
            <li className="flex items-start space-x-2">
              <span className="text-emerald-600 font-bold">•</span>
              <span>
                <strong>Aksi Bersih-Bersih 100% GRATIS.</strong> Siapa saja boleh ikut tanpa syarat
                membayar.
              </span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-emerald-600 font-bold">•</span>
              <span>
                Rp20.000 via QRIS adalah <strong>donasi sukarela terpisah</strong> untuk disalurkan
                ke program sosial lain.
              </span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-emerald-600 font-bold">•</span>
              <span>
                100% donasi dialokasikan untuk <strong>Program Rantang Kasih</strong> (Pangan lokal
                Nusantara bagi masyarakat yang membutuhkan).
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
