import { Bar } from "react-chartjs-2";
import type { ChartOptions } from "chart.js";
import { CHART_FONT, tooltipCallbacks, wrapLabel } from "../lib/chartUtils";
import { formatCompactIDR } from "../lib/config";
import type { Campaign } from "../lib/types";

export function ProgressChart({ campaign }: { campaign: Campaign }) {
  const shortfall = Math.max(campaign.targetAmount - campaign.collectedAmount, 0);
  const axisMax = Math.max(campaign.targetAmount, campaign.collectedAmount);

  const data = {
    labels: [wrapLabel(`Bulan ${campaign.periodName}`, 16)],
    datasets: [
      {
        label: `Terkumpul (${campaign.collectedAmount.toLocaleString("id-ID")})`,
        data: [campaign.collectedAmount],
        backgroundColor: "#059669",
        borderRadius: 6,
      },
      {
        label: `Sisa Target (${shortfall.toLocaleString("id-ID")})`,
        data: [shortfall],
        backgroundColor: "#ffedd5",
        borderColor: "#ea580c",
        borderWidth: 1,
        borderRadius: 6,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
        max: axisMax,
        ticks: {
          callback: function (value) {
            return formatCompactIDR(Number(value));
          },
          font: { family: CHART_FONT, size: 10 },
        },
      },
      y: {
        stacked: true,
        display: false,
      },
    },
    plugins: {
      legend: {
        position: "bottom",
        labels: { font: { family: CHART_FONT, size: 11 } },
      },
      tooltip: tooltipCallbacks<"bar">(),
    },
  };

  return <Bar data={data} options={options} />;
}
