import {
  ArcElement,
  BarController,
  BarElement,
  CategoryScale,
  Chart,
  DoughnutController,
  Legend,
  LinearScale,
  Tooltip,
  type ChartType,
  type TooltipItem,
} from "chart.js";

/** Register every Chart.js feature the three page charts need (once). */
Chart.register(
  ArcElement,
  BarController,
  BarElement,
  CategoryScale,
  DoughnutController,
  Legend,
  LinearScale,
  Tooltip,
);

export const CHART_FONT = "Plus Jakarta Sans";

/** Wrap long axis/legend labels onto multiple lines (max ~16 chars per line). */
export function wrapLabel(str: string, maxChars = 16): string[] | string {
  if (typeof str !== "string" || str.length <= maxChars) return str;
  const words = str.split(" ");
  const lines: string[] = [];
  let currentLine = "";
  for (const word of words) {
    if ((currentLine + " " + word).trim().length > maxChars) {
      if (currentLine) lines.push(currentLine.trim());
      currentLine = word;
    } else {
      currentLine += (currentLine ? " " : "") + word;
    }
  }
  if (currentLine) lines.push(currentLine.trim());
  return lines;
}

/** Shared tooltip config: joins wrapped (array) labels into a single title. */
export function tooltipCallbacks<TType extends ChartType>() {
  return {
    callbacks: {
      title: (tooltipItems: TooltipItem<TType>[]): string => {
        const item = tooltipItems[0];
        if (!item) return "";
        const label = item.chart.data.labels?.[item.dataIndex];
        if (Array.isArray(label)) return label.join(" ");
        return typeof label === "string" ? label : "";
      },
    },
  };
}
