import { createClient } from "@supabase/supabase-js";

const url = process.env.BUN_PUBLIC_SUPABASE_URL;
const key = process.env.BUN_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

if (!url || !key) {
  console.warn(
    "[bbs-donation] BUN_PUBLIC_SUPABASE_URL / BUN_PUBLIC_SUPABASE_PUBLISHABLE_KEY are not set — the page will render sample data.",
  );
}

/** null when env vars are missing; the data layer then falls back to sample data. */
export const supabase = url && key ? createClient(url, key) : null;
