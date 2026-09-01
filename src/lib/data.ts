import { useEffect, useState } from "react";
import { fallbackData } from "./config";
import {
  mapAllocation,
  mapCampaign,
  mapMonthlyAudit,
  mapProgram,
  type AllocationRow,
  type CampaignRow,
  type MonthlyAuditRow,
  type ProgramRow,
} from "./map";
import { supabase } from "./supabase";
import type { DonationData } from "./types";

/**
 * Loads all page data from Supabase. Each piece independently falls back to
 * sample data on error/empty, so a partial outage degrades gracefully and the
 * page never renders blank.
 */
export async function loadDonationData(): Promise<DonationData> {
  const fallback = fallbackData();
  const client = supabase;
  if (!client) return fallback;

  try {
    const { data: programRows, error: programError } = await client
      .from("programs")
      .select("*")
      .eq("is_active", true)
      .limit(1)
      .returns<ProgramRow[]>();

    if (programError || !programRows || programRows.length === 0) return fallback;
    const program = mapProgram(programRows[0]!);

    const [campaignRes, auditsRes, allocationsRes] = await Promise.all([
      client
        .from("campaigns")
        .select("*")
        .eq("program_id", program.id)
        .eq("is_current", true)
        .limit(1)
        .returns<CampaignRow[]>(),
      client
        .from("monthly_audits")
        .select("*")
        .eq("program_id", program.id)
        .order("display_order", { ascending: true })
        .limit(50)
        .returns<MonthlyAuditRow[]>(),
      client
        .from("budget_allocations")
        .select("*")
        .eq("program_id", program.id)
        .order("display_order", { ascending: true })
        .limit(50)
        .returns<AllocationRow[]>(),
    ]);

    const hasCampaign = !campaignRes.error && campaignRes.data && campaignRes.data.length > 0;
    const hasAudits = !auditsRes.error && auditsRes.data && auditsRes.data.length > 0;
    const hasAllocations =
      !allocationsRes.error && allocationsRes.data && allocationsRes.data.length > 0;

    return {
      program,
      campaign: hasCampaign ? mapCampaign(campaignRes.data![0]!) : fallback.campaign,
      audits: hasAudits ? auditsRes.data!.map(mapMonthlyAudit) : fallback.audits,
      allocations: hasAllocations
        ? allocationsRes.data!.map(mapAllocation)
        : fallback.allocations,
      isFallback: !hasCampaign || !hasAudits || !hasAllocations,
    };
  } catch (err) {
    console.error("[bbs-donation] Supabase fetch failed, using sample data:", err);
    return fallback;
  }
}

/** React hook: null while loading, then DonationData for the app's lifetime. */
export function useDonationData(): DonationData | null {
  const [data, setData] = useState<DonationData | null>(null);

  useEffect(() => {
    let alive = true;
    loadDonationData()
      .then(d => {
        if (alive) setData(d);
      })
      .catch(() => {
        if (alive) setData(fallbackData());
      });
    return () => {
      alive = false;
    };
  }, []);

  return data;
}
