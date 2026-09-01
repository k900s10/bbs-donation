import { useState } from "react";
import { PORTION_PRICE_IDR } from "../lib/config";

const TIERS = [
  {
    amount: 20_000,
    label: "Rp 20.000",
    desc: "Olahan Pangan Lokal & Nutrisi Seimbang",
    target: "1 Orang / Warga Membutuhkan",
  },
  {
    amount: 50_000,
    label: "Rp 50.000",
    desc: "Sajian Kuliner Nusantara Sehat & Bergizi",
    target: "2-3 Warga Membutuhkan",
  },
  {
    amount: 100_000,
    label: "Rp 100.000",
    desc: "Paket Sajian Pangan Lokal Nusantara Komplit",
    target: "5 Orang / 1 Keluarga Rentan",
  },
] as const;

export function ImpactCalculator() {
  const [amount, setAmount] = useState<number>(20_000);

  const portions = amount / PORTION_PRICE_IDR;
  const tier = TIERS.find(t => t.amount === amount) ?? TIERS[0]!;

  return (
    <div
      id="kalkulator-dampak"
      className="lg:col-span-5 bg-gradient-to-br from-emerald-900 to-teal-950 text-white rounded-2xl p-6 shadow-md flex flex-col justify-between space-y-6 scroll-mt-20"
    >
      <div className="space-y-3">
        <div className="inline-block bg-emerald-500/30 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full uppercase">
          Kalkulator Dampak
        </div>
        <h3 className="text-xl font-bold">Simulasi Nyata Donasimu</h3>
        <p className="text-xs text-slate-300">
          Pilih nominal donasi untuk melihat seberapa besar porsi sajian pangan lokal Nusantara yang
          kamu kontribusikan bagi masyarakat yang membutuhkan.
        </p>
      </div>

      <div className="space-y-2">
        <label className="text-xs text-slate-300 font-medium">Pilih Nominal Donasi:</label>
        <div className="grid grid-cols-3 gap-2">
          {TIERS.map(t => (
            <button
              key={t.amount}
              type="button"
              onClick={() => setAmount(t.amount)}
              className={
                t.amount === amount
                  ? "bg-emerald-500 text-white font-bold py-2 rounded-xl text-xs transition border border-emerald-400"
                  : "bg-white/10 hover:bg-white/20 text-white font-bold py-2 rounded-xl text-xs transition border border-white/10"
              }
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/15 space-y-3">
        <div className="flex items-center justify-between border-b border-white/10 pb-2">
          <span className="text-xs text-slate-300">Porsi Kuliner Pangan Lokal:</span>
          <span className="text-xl font-extrabold text-amber-300">
            {portions.toLocaleString("id-ID")} Porsi Lengkap
          </span>
        </div>
        <div className="flex items-center justify-between border-b border-white/10 pb-2">
          <span className="text-xs text-slate-300">Menu Kuliner Nusantara:</span>
          <span className="text-xs font-semibold text-white">{tier.desc}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-slate-300">Penerima Manfaat:</span>
          <span className="text-xs font-semibold text-emerald-300">{tier.target}</span>
        </div>
      </div>

      <p className="text-[11px] text-slate-400 text-center italic">
        *Estimasi standar biaya 1 porsi makanan berbasis pangan lokal Nusantara = Rp20.000.
      </p>
    </div>
  );
}
