import { Doughnut } from "react-chartjs-2";
import type { ChartOptions } from "chart.js";
import { CHART_FONT, tooltipCallbacks } from "../lib/chartUtils";
import type { Allocation } from "../lib/types";

export function AllocationChart({ allocations }: { allocations: Allocation[] }) {
  const data = {
    labels: allocations.map(a => a.label),
    datasets: [
      {
        data: allocations.map(a => a.percentage),
        backgroundColor: allocations.map(a => a.color),
        borderWidth: 2,
        borderColor: "#ffffff",
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: { font: { family: CHART_FONT, size: 11 }, boxWidth: 12, padding: 16 },
      },
      tooltip: tooltipCallbacks<"doughnut">(),
    },
  };

  return <Doughnut data={data} options={options} />;
}
