import { ProgressChart } from "./ProgressChart";
import { formatIDR } from "../lib/config";
import type { Campaign } from "../lib/types";

export function ProgressSection({
  campaign,
  isFallback,
}: {
  campaign: Campaign;
  isFallback: boolean;
}) {
  const shortfall = Math.max(campaign.targetAmount - campaign.collectedAmount, 0);

  return (
    <div className="lg:col-span-7 bg-white rounded-2xl shadow-sm border border-slate-200 p-6 space-y-4">
      <p className="text-xs text-slate-600">
        Berikut adalah ketercapaian target penggalangan dana Rantang Kasih untuk penyaluran pangan
        lokal bulan ini.
      </p>

      <div className="chart-container !h-64">
        <ProgressChart campaign={campaign} />
      </div>

      <div className="grid grid-cols-3 gap-2 text-center pt-2 border-t border-slate-100">
        <div className="bg-slate-50 p-2 rounded-lg">
          <p className="text-[11px] text-slate-500">Target Bulan Ini</p>
          <p className="text-sm font-bold text-slate-800">{formatIDR(campaign.targetAmount)}</p>
        </div>
        <div className="bg-emerald-50 p-2 rounded-lg">
          <p className="text-[11px] text-emerald-700 font-medium">Terkumpul</p>
          <p className="text-sm font-bold text-emerald-700">
            {formatIDR(campaign.collectedAmount)}
          </p>
        </div>
        <div className="bg-orange-50 p-2 rounded-lg">
          <p className="text-[11px] text-orange-700 font-medium">Kekurangan</p>
          <p className="text-sm font-bold text-orange-700">{formatIDR(shortfall)}</p>
        </div>
      </div>

      {isFallback && (
        <p className="text-[11px] text-center text-amber-600 bg-amber-50 border border-amber-200 rounded-lg px-3 py-1.5">
          Data contoh ditampilkan — koneksi ke Supabase belum tersedia atau tabel belum terisi.
        </p>
      )}
    </div>
  );
}
