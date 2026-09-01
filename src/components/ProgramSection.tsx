import { AllocationChart } from "./AllocationChart";
import type { Allocation, Program } from "../lib/types";

const BENEFICIARIES = [
  "🤝 Masyarakat yang Membutuhkan",
  "🥗 Keluarga Rawan Pangan & Gizi",
  "👨‍👩‍👧‍👦 Pekerja Informal & Rentan",
] as const;

export function ProgramSection({
  program,
  allocations,
}: {
  program: Program;
  allocations: Allocation[];
}) {
  return (
    <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-5 space-y-4">
          <div className="inline-block bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Misi Utama Program
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
            Program {program.name}
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            <strong>{program.name}</strong> adalah inisiatif untuk mendukung pengenalan dan
            penggunaan <strong className="text-slate-900">pangan lokal serta sejarah kuliner Nusantara</strong>.
            Olahan pangan bergizi ini disalurkan secara langsung kepada masyarakat yang membutuhkan.
          </p>

          <div className="space-y-2 pt-2">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">
              Penerima Manfaat Program:
            </p>
            <div className="flex flex-wrap gap-2">
              {BENEFICIARIES.map(b => (
                <span
                  key={b}
                  className="bg-slate-100 text-slate-700 text-xs px-3 py-1.5 rounded-lg border border-slate-200 font-medium"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <p className="text-xs text-slate-500 font-semibold">Komitmen Transparansi Alokasi:</p>
            <p className="text-xs text-slate-600 mt-1">
              Setidaknya 85% dana dialokasikan langsung untuk bahan baku pangan lokal Nusantara dan
              kemasan ramah lingkungan, 10% logistik penyaluran, serta 5% cadangan darurat sosial.
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col items-center">
          <h3 className="text-sm font-bold text-slate-700 mb-2 text-center">
            Rincian Alokasi Dana {program.name} (%)
          </h3>
          <div className="chart-container">
            <AllocationChart allocations={allocations} />
          </div>
        </div>
      </div>
    </section>
  );
}
