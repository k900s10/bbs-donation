import "./index.css";
import { Analytics } from "@vercel/analytics/react";
import { useDonationData } from "./lib/data";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { MythVsFact } from "./components/MythVsFact";
import { ProgramSection } from "./components/ProgramSection";
import { ProgressSection } from "./components/ProgressSection";
import { ImpactCalculator } from "./components/ImpactCalculator";
import { HistorySection } from "./components/HistorySection";
import { FlowSteps } from "./components/FlowSteps";
import { QrisCta } from "./components/QrisCta";
import { Footer } from "./components/Footer";

export function App() {
  const data = useDonationData();

  if (!data) {
    return (
      <div className="min-h-screen grid place-items-center bg-slate-50">
        <div className="flex flex-col items-center gap-3 text-slate-500">
          <span className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-emerald-600" />
          <p className="text-sm font-medium">Memuat data transparansi donasi…</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-8 space-y-12">
        <Hero />
        <MythVsFact />
        <ProgramSection program={data.program} allocations={data.allocations} />
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <ProgressSection campaign={data.campaign} isFallback={data.isFallback} />
          <ImpactCalculator />
        </section>
        <HistorySection audits={data.audits} />
        <FlowSteps />
        <QrisCta />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
