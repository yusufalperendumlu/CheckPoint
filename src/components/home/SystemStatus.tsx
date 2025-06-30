import { useDispatch, useSelector } from "react-redux";

import { Button } from "@/components/ui/button";
import Card from "@/components/card/Card";
import { Chart } from "@/components/home/Chart";
import AnimatedCounter from "@/components/AnimatedCounter";
import { RootState } from "@/store/rootReducer";
import { useEffect } from "react";
import { getEndpointOverviewRequest } from "@/store/endpointOverview/endpointOverviewAction";

const SystemStatus = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state: RootState) => state.endpointOverview);

  const StatusCards = [
    {
      value: data?.endpointCount || 0,
      label: "Total Endpoints",
    },
    {
      value: data?.active || 0,
      label: "Active",
    },
    {
      value: data?.pasive || 0,
      label: "Passive",
    },
  ];

  const EndpointCards = [
    {
      label: "Last Updated Endpoint",
      url: "/api/products",
      date: "Apr 22, 2024",
    },
    {
      label: "Last Called Action",
      url: "/api/orders",
      time: "2 hours ago",
    },
  ];

  useEffect(() => {
    dispatch(
      getEndpointOverviewRequest({
        projectId: 1,
      })
    );
  }, [dispatch]);

  console.log(data);

  return (
    <div className="p-6 text-white w-full h-full">
      <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>

      {/* Grid: Status + Endpoint + Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-6">
        {/* Left: Cards and Actions */}
        <div className="space-y-6">
          {/* Status Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {StatusCards.map((card, i) => (
              <Card
                key={i}
                value={<AnimatedCounter target={card.value} />}
                label={card.label}
                centered={false}
              />
            ))}
          </div>

          {/* Endpoint Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {EndpointCards.map((card, i) => (
              <Card
                key={i}
                label={card.label}
                url={card.url}
                date={card.date}
                time={card.time}
                centered={false}
              />
            ))}
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Button
              type="button"
              className="bg-blue-600 hover:bg-blue-700 text-white"
              title="New Endpoint"
            />

            <Button
              className="bg-gray-800 hover:bg-gray-700 text-white"
              title="View Endpoints"
            />

            <Button
              className="bg-violet-600 hover:bg-violet-700 text-white"
              title="Go to Analytics"
            />
          </div>
        </div>

        {/* Right: Optional - Chart or Status */}
        <div className="bg-[#1c233e] rounded-2xl p-4 flex flex-col items-center justify-center">
          <Chart />

          {/* Optional: You can replace this with a chart or pie component */}
          {/* <div className="w-32 h-32 rounded-full border-8 border-t-green-400 border-b-purple-500 border-l-transparent border-r-transparent"></div> */}
          <p className="text-sm font-medium mb-2">Endpoint Status</p>
          {/* Placeholder: You can replace this with a chart or pie component */}
          <div className="w-32 h-32 rounded-full border-8 border-t-green-400 border-b-purple-500 border-l-transparent border-r-transparent"></div>
          <div className="mt-4 text-xs space-y-1">
            <p>
              <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2" />{" "}
              Active
            </p>
            <p>
              <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mr-2" />{" "}
              Passive
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemStatus;
