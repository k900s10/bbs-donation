import type { Allocation, Campaign, MonthlyAudit, Program } from "./types";

/** Raw Supabase row shapes (snake_case as defined in the database). */

export interface ProgramRow {
  id: string;
  name: string;
  description: string;
  is_active: boolean;
}

export interface CampaignRow {
  id: string;
  program_id: string;
  period_name: string;
  target_amount: number;
  collected_amount: number;
  is_current: boolean;
}

export interface MonthlyAuditRow {
  id: number;
  program_id: string;
  period: string;
  total_collected: number;
  total_disbursed: number;
  balance: number;
  impact_summary: string;
  is_current: boolean;
  display_order: number;
}

export interface AllocationRow {
  id: number;
  program_id: string;
  label: string;
  percentage: number;
  color: string;
  display_order: number;
}

/** Map snake_case database rows to the camelCase internal types.
 *  If Supabase columns ever change, this is the only file to update. */

export function mapProgram(row: ProgramRow): Program {
  return {
    id: row.id,
    name: row.name,
    description: row.description,
    isActive: row.is_active,
  };
}

export function mapCampaign(row: CampaignRow): Campaign {
  return {
    id: row.id,
    programId: row.program_id,
    periodName: row.period_name,
    targetAmount: row.target_amount,
    collectedAmount: row.collected_amount,
    isCurrent: row.is_current,
  };
}

export function mapMonthlyAudit(row: MonthlyAuditRow): MonthlyAudit {
  return {
    id: row.id,
    programId: row.program_id,
    period: row.period,
    totalCollected: row.total_collected,
    totalDisbursed: row.total_disbursed,
    balance: row.balance,
    impactSummary: row.impact_summary,
    isCurrent: row.is_current,
    displayOrder: row.display_order,
  };
}

export function mapAllocation(row: AllocationRow): Allocation {
  return {
    id: row.id,
    label: row.label,
    percentage: row.percentage,
    color: row.color,
    displayOrder: row.display_order,
  };
}
