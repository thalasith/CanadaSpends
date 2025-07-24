import React from "react";
import { BarChart as BarChartComponent } from "@/components/BarChart";
import { LineChart as LineChartComponent } from "@/components/LineChart";
import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  ScatterChart as RechartsScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const sampleBarLineData = [
  { name: "A", value: 30, value2: 20 },
  { name: "B", value: 20, value2: 27 },
  { name: "C", value: 50, value2: 34 },
];
const samplePieData = [
  { name: "A", value: 30 },
  { name: "B", value: 20 },
  { name: "C", value: 50 },
];
const sampleScatterData = [
  { x: 10, y: 30 },
  { x: 20, y: 20 },
  { x: 30, y: 50 },
  { x: 40, y: 40 },
];
const COLORS = ["#2563eb", "#f59e42", "#10b981", "#e11d48"];

type ChartPreviewProps = {
  chartType: string;
  title: string;
};

export function ChartPreview({ chartType, title }: ChartPreviewProps) {
  // Fade-in animation on update
  const [fade, setFade] = React.useState(false);
  React.useEffect(() => {
    setFade(false);
    const timeout = setTimeout(() => setFade(true), 10);
    return () => clearTimeout(timeout);
  }, [chartType, title]);

  return (
    <div
      className={`transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}
    >
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="h-80 w-full">
        {chartType === "bar" && (
          <BarChartComponent
            data={sampleBarLineData}
            index="name"
            categories={["value", "value2"]}
            showLegend={true}
            showGridLines={true}
          />
        )}
        {chartType === "line" && (
          <LineChartComponent
            data={sampleBarLineData}
            index="name"
            categories={["value", "value2"]}
            showLegend={true}
            showGridLines={true}
          />
        )}
        {chartType === "pie" && (
          <ResponsiveContainer width="100%" height="100%">
            <RechartsPieChart>
              <RechartsTooltip />
              <Pie
                data={samplePieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label
              >
                {samplePieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </RechartsPieChart>
          </ResponsiveContainer>
        )}
        {chartType === "scatter" && (
          <ResponsiveContainer width="100%" height="100%">
            <RechartsScatterChart>
              <CartesianGrid />
              <XAxis dataKey="x" type="number" />
              <YAxis dataKey="y" type="number" />
              <RechartsTooltip cursor={{ strokeDasharray: "3 3" }} />
              <Scatter data={sampleScatterData} fill="#2563eb" />
            </RechartsScatterChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
}
