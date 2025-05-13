import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import MainLayout from "@/components/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Charts from "@/components/chart/Charts";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDemoData } from "@/store/demo/demoAction";
import { AppState } from "@/store/demo/demoReducer";

const statData = [
  {
    title: "API Health Status",
    value: "87% Uptime",
    subtitle: "Compared to last week",
  },
  {
    title: "Total API Requests",
    value: "1,432,567",
    subtitle: "Compared to last week",
  },
  {
    title: "Total Alerts",
    value: "$34,566.23",
    subtitle: "Compared to last month",
  },
  {
    title: "Total API Transactions",
    value: "$45,000.21",
    subtitle: "Compared to last month",
  },
];

const qualityChartData = [
  { name: "Response Time", value: 4 },
  { name: "Error Rate", value: 3 },
  { name: "Usage Patterns", value: 5 },
];

const recentEndpoints = [
  { title: "Add new endpoints for monitoring", time: "5 Minutes ago" },
  { title: "Analyze API Performance", time: "5 Minutes ago" },
  { title: "Monitor Endpoint Health Status", time: "5 Minutes ago" },
];

const recentActivities = [
  {
    time: "10:40 AM, Fri, Sept. 10, 2021",
    title: "New Endpoint Added",
    description: "Check the endpoint configuration for accuracy",
  },
  {
    time: "10:40 AM, Fri, Sept. 10, 2021",
    title: "New Endpoint Added",
    description: "Check the endpoint configuration for accuracy",
  },
];

export default function ApiAnalysisDashboard() {
  const dispatch = useDispatch();
  const demoData = useSelector((state: AppState) => state.drinks);
  useEffect(() => {
    dispatch(getDemoData());
  }, [dispatch]);

  console.log(demoData);

  return (
    <MainLayout>
      <div className="p-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="col-span-2 space-y-4">
          {/* Stat Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {statData.map((stat) => (
              <Card
                key={stat.title}
                className="bg-[var(--color-card)] rounded-2xl"
              >
                <CardContent className="p-4">
                  <p className="text-sm text-white">{stat.title}</p>
                  <h3 className="text-xl font-bold text-gray-300">
                    {stat.value}
                  </h3>
                  <p className="text-xs text-gray-500">{stat.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Category Chart */}
          <Charts width={"95%"} height={250} />

          {/* Quality Chart */}
          <Card className="bg-[var(--color-card)] rounded-2xl">
            <CardContent className="p-4 text-white">
              <h2 className="font-bold mb-2">Quality of API Endpoints</h2>
              <ResponsiveContainer width="95%" height={200}>
                <BarChart data={qualityChartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis allowDecimals={false} />
                  <Tooltip />
                  <Bar dataKey="value" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-4">
          {/* Recent Endpoints */}
          <Card className="bg-[var(--color-card)] rounded-2xl">
            <CardContent className="p-4 space-y-2 text-white">
              <div className="flex items-center justify-between">
                <h2 className="font-bold">Recent Endpoints</h2>
                <Button size="sm" variant="ghost" className="text-xs">
                  View Today's Endpoint
                </Button>
              </div>
              {recentEndpoints.map((ep, index) => (
                <div key={index} className="bg-gray-500 p-2 rounded">
                  <p className="text-sm font-medium">{ep.title}</p>
                  <p className="text-xs text-gray-300">{ep.time}</p>
                </div>
              ))}
              <Button variant="secondary" className="w-full mt-2">
                View All Endpoints
              </Button>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="bg-[var(--color-card)] rounded-2xl">
            <CardContent className="p-4 text-white">
              <h2 className="font-bold mb-2">Recent Activity</h2>
              {recentActivities.map((act, index) => (
                <div key={index} className="mb-3">
                  <p className="text-xs text-gray-400">{act.time}</p>
                  <p className="text-sm font-semibold">{act.title}</p>
                  <p className="text-xs text-gray-500">{act.description}</p>
                </div>
              ))}

              <Button
                variant="link"
                className="mt-2 p-0 text-blue-600 cursor-pointer"
                title="View All Tasks"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}
