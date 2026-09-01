# bbs-donation

Halaman transparansi donasi BBS × Program Rantang Kasih. React + Tailwind (Bun), data live dari Supabase, deploy statis ke Vercel.

## Local development

```bash
bun install
bun dev        # http://localhost:3000 (HMR)
```

## Build

```bash
bun run build  # static bundle -> dist/
bun start      # serve production build locally
```

## Environment

Copy `.env.example` to `.env` (already gitignored) and fill in:

```
BUN_PUBLIC_SUPABASE_URL=<project url>
BUN_PUBLIC_SUPABASE_PUBLISHABLE_KEY=<publishable key>
```

Bun meng-inline variabel berprefix `BUN_PUBLIC_*` ke bundle client saat build. Tanpa env ini, halaman tetap render dengan data contoh + badge peringatan.

## Supabase tables

| Table | Isi | Dipakai untuk |
| --- | --- | --- |
| `programs` | program aktif (`is_active`) | nama & deskripsi program |
| `campaigns` | baris `is_current = true` | progres donasi bulan berjalan (target/terkumpul) |
| `monthly_audits` | histori bulanan (`display_order`) | grafik historis + tabel audit |
| `budget_allocations` | alokasi dana (%) | doughnut chart rincian alokasi |
| `donations` | (cadangan, belum dipakai UI) | — |

Update data bulanan langsung lewat **Supabase Dashboard → Table Editor**. Mapping kolom DB → tipe internal ada di satu file: `src/lib/map.ts`.

**Sekali saja:** jalankan `supabase/rls.sql` di SQL Editor agar kunci publik hanya bisa membaca (tidak bisa menulis).

## Deploy ke Vercel

`vercel.json` sudah mengatur install/build/output (`bun install` / `bun run build` / `dist`).

1. Push repo ke GitHub, lalu **Vercel → Add New Project → Import** (atau `bunx vercel deploy`).
2. **Settings → Environment Variables** — tambahkan (Production + Preview):
   - `BUN_PUBLIC_SUPABASE_URL`
   - `BUN_PUBLIC_SUPABASE_PUBLISHABLE_KEY`
3. Deploy. Setelah mengubah env vars, trigger **Redeploy** agar nilai baru ter-inline ke bundle.

Referensi: https://bun.com/guides/deployment/vercel

## Catatan

- QRIS di section donasi masih placeholder — ganti di `src/components/QrisCta.tsx` saat gambar resmi tersedia.
- Jika Supabase tidak terjangkau/tabel kosong, halaman menampilkan data contoh dari `src/lib/config.ts` (badge amber muncul di kartu progres).
