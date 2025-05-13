import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import clsx from "clsx";

const chartData = {
  barChartData: [
    { name: "Auth", value: 5 },
    { name: "Data", value: 3 },
    { name: "Error", value: 6 },
    { name: "Performance", value: 4 },
    { name: "Security", value: 2 },
    { name: "Testing", value: 1 },
  ],
  lineChartData: [
    { name: "Mon", value: 400 },
    { name: "Tue", value: 300 },
    { name: "Wed", value: 500 },
    { name: "Thu", value: 200 },
    { name: "Fri", value: 700 },
    { name: "Sat", value: 600 },
    { name: "Sun", value: 300 },
  ],
  radarData: [
    { subject: "Response Time", A: 120 },
    { subject: "Error Rate", A: 98 },
    { subject: "Usage", A: 86 },
  ],
  pieData: [
    { name: "Success", value: 70 },
    { name: "Failure", value: 30 },
  ],
};

const colors = ["#8884d8", "#82ca9d"];

interface ChartFeature {
  width: number | string;
  height: number;
}

const ChartSliderCard: React.FC<ChartFeature> = ({ width, height }) => {
  const [sliderInstanceRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1,
      spacing: 16,
    },
  });

  return (
    <Card className="bg-[var(--color-card)] rounded-2xl">
      <CardContent className="p-4 text-white">
        <h2 className="font-bold mb-2">Endpoint Analysis</h2>

        <div className="relative">
          {/* Prev Button */}
          <button
            onClick={() => slider.current?.prev()}
            className="absolute top-1/2 left-0 -translate-y-1/2 z-10 bg-black/40 p-2 rounded-full"
          >
            <FaAngleLeft className="w-4 h-4" />
          </button>

          {/* Slider Content */}
          <div
            ref={sliderInstanceRef}
            className={clsx("keen-slider w-full h-[250px]")}
          >
            <div className="keen-slider__slide">
              <ResponsiveContainer width={width} height={height}>
                <BarChart data={chartData.barChartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis allowDecimals={false} />
                  <Tooltip />
                  <Bar dataKey="value" fill={colors[0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="keen-slider__slide">
              <ResponsiveContainer width={width} height={height}>
                <LineChart data={chartData.lineChartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke={colors[1]}
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="keen-slider__slide">
              <ResponsiveContainer width={width} height={height}>
                <RadarChart outerRadius={80} data={chartData.radarData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis />
                  <Radar
                    dataKey="A"
                    stroke={colors[0]}
                    fill={colors[0]}
                    fillOpacity={0.6}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            <div className="keen-slider__slide">
              <ResponsiveContainer width={width} height={height}>
                <PieChart>
                  <Pie
                    data={chartData.pieData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    label
                  >
                    {chartData.pieData.map((_, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={colors[index % colors.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={() => slider.current?.next()}
            className="absolute top-1/2 right-0 -translate-y-1/2 z-10 bg-black/40 p-2 rounded-full"
          >
            <FaAngleRight className="w-4 h-4" />
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChartSliderCard;
