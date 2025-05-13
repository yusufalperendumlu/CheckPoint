"use client";
import { Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { browser: "chrome", usage: 7, fill: "var(--color-chrome)" },
  { browser: "safari", usage: 5, fill: "var(--color-safari)" },
];

const chartConfig = {
  chrome: {
    label: "Active",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Passive",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function Chart() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0 flex justify-center">
        <CardTitle>Endpoint Status</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={true}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie data={chartData} dataKey="usage" nameKey="browser" />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          Last updated 2 hours ago
        </div>
      </CardFooter>
    </Card>
  );
}
