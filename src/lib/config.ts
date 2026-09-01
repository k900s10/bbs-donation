import type { Allocation, Campaign, DonationData, MonthlyAudit, Program } from "./types";

/** Standar biaya 1 porsi makanan berbasis pangan lokal Nusantara. */
export const PORTION_PRICE_IDR = 20_000;

export function formatIDR(value: number): string {
  return `Rp ${value.toLocaleString("id-ID")}`;
}

export function formatCompactIDR(value: number): string {
  if (value >= 1_000_000) {
    const jt = value / 1_000_000;
    const formatted = jt % 1 === 0 ? jt.toFixed(0) : jt.toFixed(1).replace(".", ",");
    return `Rp ${formatted}Jt`;
  }
  if (value >= 1_000) {
    const rb = value / 1_000;
    const formatted = rb % 1 === 0 ? rb.toFixed(0) : rb.toFixed(1).replace(".", ",");
    return `Rp ${formatted}Rb`;
  }
  return `Rp ${value.toLocaleString("id-ID")}`;
}

/** Sample data shown when Supabase is unreachable or tables are empty. */
const FALLBACK_PROGRAM: Program = {
  id: "rantang-kasih",
  name: "Rantang Kasih",
  description: "Program Transparansi Distribusi Pangan & Nutrisi Warga",
  isActive: true,
};

const FALLBACK_CAMPAIGN: Campaign = {
  id: "rantang-kasih-2026-08",
  programId: "rantang-kasih",
  periodName: "Agustus 2026",
  targetAmount: 15_000_000,
  collectedAmount: 11_250_000,
  isCurrent: true,
};

const FALLBACK_AUDITS: MonthlyAudit[] = [
  {
    id: 1,
    programId: "rantang-kasih",
    period: "Mei 2026",
    totalCollected: 12_500_000,
    totalDisbursed: 12_000_000,
    balance: 500_000,
    impactSummary: "600 Porsi Pangan Lokal",
    isCurrent: false,
    displayOrder: 1,
  },
  {
    id: 2,
    programId: "rantang-kasih",
    period: "Juni 2026",
    totalCollected: 14_200_000,
    totalDisbursed: 14_000_000,
    balance: 700_000,
    impactSummary: "700 Porsi Pangan Lokal",
    isCurrent: false,
    displayOrder: 2,
  },
  {
    id: 3,
    programId: "rantang-kasih",
    period: "Juli 2026",
    totalCollected: 16_000_000,
    totalDisbursed: 15_500_000,
    balance: 1_000_000,
    impactSummary: "775 Porsi Pangan Lokal",
    isCurrent: false,
    displayOrder: 3,
  },
  {
    id: 4,
    programId: "rantang-kasih",
    period: "Agustus 2026 (Berjalan)",
    totalCollected: 11_250_000,
    totalDisbursed: 10_000_000,
    balance: 2_250_000,
    impactSummary: "500 Porsi (Progres)",
    isCurrent: true,
    displayOrder: 4,
  },
];

const FALLBACK_ALLOCATIONS: Allocation[] = [
  { id: 1, label: "Bahan Pangan Lokal & Gizi Utama", percentage: 70, color: "#059669", displayOrder: 1 },
  { id: 2, label: "Kemasan Ramah Lingkungan", percentage: 15, color: "#ea580c", displayOrder: 2 },
  { id: 3, label: "Logistik & Penyaluran Warga", percentage: 10, color: "#0284c7", displayOrder: 3 },
  { id: 4, label: "Dana Cadangan Darurat Social", percentage: 5, color: "#64748b", displayOrder: 4 },
];

export function fallbackData(): DonationData {
  return {
    program: FALLBACK_PROGRAM,
    campaign: FALLBACK_CAMPAIGN,
    audits: FALLBACK_AUDITS,
    allocations: FALLBACK_ALLOCATIONS,
    isFallback: true,
  };
}
