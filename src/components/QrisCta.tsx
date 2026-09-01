import qrisImg from "../assets/images/qr_link_donation.png";

export function QrisCta() {
  return (
    <section id="qris-donation" className="bg-gradient-to-r from-emerald-900 to-slate-900 rounded-3xl p-6 md:p-10 text-white shadow-lg space-y-8 scroll-mt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <div className="inline-block bg-white/10 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full uppercase">
            Komitmen Kepercayaan
          </div>
          <h2 className="text-2xl md:text-3xl font-bold">
            Bersama BBS, Transparansi adalah Prioritas Utama
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Kami percaya bahwa aksi sosial yang bertahan lama dibangun di atas kepercayaan
            relawan. Kami berkomitmen menyajikan data sejelas mungkin agar kamu selalu bangga
            menjadi bagian dari perubahan positif.
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <a
              href="https://linktr.ee/bumibebassampah"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs px-5 py-3 rounded-xl transition shadow-md inline-block"
            >
              Bergabung Relawan di Indorelawan ➔
            </a>
          </div>
        </div>

        <div className="bg-white text-slate-800 p-6 rounded-2xl shadow-xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <span className="font-bold text-sm text-slate-900">Informasi Donasi Resmi</span>
            <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2.5 py-1 rounded">
              QRIS GoPay / BBS
            </span>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-dashed border-slate-300 text-center space-y-2">
            {/* TODO: replace placeholder with the official BBS QRIS image when available. */}
            {/* <div className="w-32 h-32 bg-slate-800 mx-auto rounded-lg flex items-center justify-center text-white font-mono text-xs text-center p-2">
              [ QRIS CODE OFFICIAL BBS ]
            </div> */}
            <div className="w-48 h-48 bg-white mx-auto rounded-xl flex items-center justify-center p-2 shadow-sm border border-slate-200 overflow-hidden">
              <img src={qrisImg} alt="QRIS NBO / BBS" className="w-full h-full object-contain rounded-lg" />
            </div>
            <p className="text-xs font-bold text-slate-700">
              Scan QRIS atas nama: BumiBebasSampah, Edukasi
            </p>
            <p className="text-[11px] text-slate-500">
              Nominal Disarankan: Rp 20.000 (Sukarela)
            </p>
          </div>

          <div className="text-[11px] text-slate-500 space-y-1">
            <p className="flex items-center space-x-1">
              <span className="text-emerald-600 font-bold">✓</span>
              <span>
                Tidak berdonasi? Kamu <strong>tetap disambut hangat</strong> untuk ikut aksi
                bersih-bersih!
              </span>
            </p>
            <p className="flex items-center space-x-1">
              <span className="text-emerald-600 font-bold">✓</span>
              <span>Laporan lengkap dikirim berkala di WhatsApp Group Relawan.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
