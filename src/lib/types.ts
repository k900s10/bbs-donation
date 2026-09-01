/** Internal domain types consumed by UI components. */

export interface Program {
  id: string;
  name: string;
  description: string;
  isActive: boolean;
}

export interface Campaign {
  id: string;
  programId: string;
  periodName: string;
  targetAmount: number;
  collectedAmount: number;
  isCurrent: boolean;
}

export interface MonthlyAudit {
  id: number;
  programId: string;
  period: string;
  totalCollected: number;
  totalDisbursed: number;
  balance: number;
  impactSummary: string;
  isCurrent: boolean;
  displayOrder: number;
}

export interface Allocation {
  id: number;
  label: string;
  percentage: number;
  color: string;
  displayOrder: number;
}

export interface DonationData {
  program: Program;
  campaign: Campaign;
  audits: MonthlyAudit[];
  allocations: Allocation[];
  /** True when any piece came from local sample data instead of Supabase. */
  isFallback: boolean;
}
