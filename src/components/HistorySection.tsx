import { useRef } from "react";
import { HistoryChart } from "./HistoryChart";
import { formatIDR } from "../lib/config";
import type { MonthlyAudit } from "../lib/types";

export function HistorySection({ audits }: { audits: MonthlyAudit[] }) {
  const tableRef = useRef<HTMLDivElement>(null);

  const scrollToTable = () => {
    tableRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };

  return (
    <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">
            Rekapitulasi Bulanan
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Laporan Historis Transparansi
          </h2>
          <p className="text-xs text-slate-600 mt-1">
            Rekap bulanan alokasi donasi relawan dan sisa saldo terdistribusi secara terbuka.
          </p>
        </div>
        <div className="bg-slate-100 p-1 rounded-xl flex space-x-1">
          <button
            type="button"
            className="px-3 py-1.5 bg-white text-slate-800 text-xs font-bold rounded-lg shadow-sm"
          >
            Grafik Historis
          </button>
          <button
            type="button"
            onClick={scrollToTable}
            className="px-3 py-1.5 text-slate-600 hover:text-slate-900 text-xs font-semibold rounded-lg"
          >
            Rincian Catatan
          </button>
        </div>
      </div>

      <div className="chart-container">
        <HistoryChart audits={audits} />
      </div>

      <div ref={tableRef} className="overflow-x-auto pt-4 border-t border-slate-100">
        <table className="w-full text-left text-xs text-slate-700">
          <thead className="bg-slate-50 text-slate-900 font-bold uppercase tracking-wider">
            <tr>
              <th className="p-3 rounded-l-lg">Periode</th>
              <th className="p-3">Total Terkumpul</th>
              <th className="p-3">Alokasi Rantang Kasih</th>
              <th className="p-3">Porsi Disalurkan</th>
              <th className="p-3 rounded-r-lg">Sisa Saldo Kas</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {audits.map(audit => (
              <tr
                key={audit.id}
                className={audit.isCurrent ? "bg-emerald-50/50 font-bold" : "hover:bg-slate-50/80"}
              >
                <td
                  className={
                    audit.isCurrent
                      ? "p-3 text-emerald-950"
                      : "p-3 font-semibold text-slate-900"
                  }
                >
                  {audit.period}
                </td>
                <td
                  className={
                    audit.isCurrent ? "p-3 text-emerald-700" : "p-3 text-emerald-700 font-medium"
                  }
                >
                  {formatIDR(audit.totalCollected)}
                </td>
                <td className={audit.isCurrent ? "p-3 text-slate-600" : "p-3 text-slate-600"}>
                  {formatIDR(audit.totalDisbursed)}
                </td>
                <td
                  className={
                    audit.isCurrent
                      ? "p-3 text-emerald-900"
                      : "p-3 font-semibold text-slate-800"
                  }
                >
                  {audit.impactSummary}
                </td>
                <td
                  className={
                    audit.isCurrent ? "p-3 text-emerald-800" : "p-3 text-slate-500"
                  }
                >
                  {formatIDR(audit.balance)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
