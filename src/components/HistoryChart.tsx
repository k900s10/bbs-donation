import { Bar } from "react-chartjs-2";
import type { ChartOptions } from "chart.js";
import { CHART_FONT, tooltipCallbacks, wrapLabel } from "../lib/chartUtils";
import { formatCompactIDR } from "../lib/config";
import type { MonthlyAudit } from "../lib/types";

export function HistoryChart({ audits }: { audits: MonthlyAudit[] }) {
  const data = {
    labels: audits.map(a => wrapLabel(a.period, 16)),
    datasets: [
      {
        label: "Total Donasi Masuk",
        data: audits.map(a => a.totalCollected),
        backgroundColor: "#059669",
        borderRadius: 4,
      },
      {
        label: "Dana Disalurkan (Rantang Kasih)",
        data: audits.map(a => a.totalDisbursed),
        backgroundColor: "#0284c7",
        borderRadius: 4,
      },
      {
        label: "Sisa Saldo Kas",
        data: audits.map(a => a.balance),
        backgroundColor: "#cbd5e1",
        borderRadius: 4,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        ticks: {
          callback: function (value) {
            return formatCompactIDR(Number(value));
          },
          font: { family: CHART_FONT, size: 10 },
        },
      },
      x: {
        ticks: { font: { family: CHART_FONT, size: 10 } },
      },
    },
    plugins: {
      legend: {
        position: "bottom",
        labels: { font: { family: CHART_FONT, size: 11 }, boxWidth: 12 },
      },
      tooltip: tooltipCallbacks<"bar">(),
    },
  };

  return <Bar data={data} options={options} />;
}
