import { useState } from "react";
import { useParams } from "@tanstack/react-router";
import { routeTree } from "@/routes/__root";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import MainLayout from "@/components/MainLayout";
import { Bar, BarChart } from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const controllers = [
  {
    name: "UserController",
    actions: [
      {
        name: "createUser",
        response: { status: 201, message: "User created successfully" },
      },
      {
        name: "deleteUser",
        response: { status: 200, message: "User deleted successfully" },
      },
    ],
  },
  {
    name: "ProductController",
    actions: [
      {
        name: "addProduct",
        response: { status: 201, message: "Product added" },
      },
    ],
  },
];

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

const DetailEndpointPage = () => {
  const { team } = useParams({
    from: routeTree.id,
  });
  const handleBackArrowClick = () => {
    window.history.back();
  };

  const [openControllers, setOpenControllers] = useState<string[]>([]);
  const [openActions, setOpenActions] = useState<string[]>([]);

  const toggleController = (name: string) => {
    setOpenControllers((prev) =>
      prev.includes(name) ? prev.filter((c) => c !== name) : [...prev, name]
    );
  };

  const toggleAction = (name: string) => {
    setOpenActions((prev) =>
      prev.includes(name) ? prev.filter((a) => a !== name) : [...prev, name]
    );
  };

  return (
    <MainLayout>
      <div className="w-full h-full flex justify-center items-start overflow-x-hidden text-white">
        <div className="max-w-8xl w-full px-4 md:px-10 py-4 flex flex-col gap-6">
          <div className="flex flex-wrap items-center justify-baseline py-2 rounded-lg shadow-md w-full border-b-2 border-b-[var(--color-card)] space-x-4">
            <button
              className="flex items-center text-gray-400 cursor-pointer rounded-full hover:text-[var(--color-primary-dark)] transition duration-200  ease-in-out"
              onClick={handleBackArrowClick}
            >
              <MdOutlineArrowBackIosNew size={20} className="w-4 h-4" />
            </button>
            <div className="flex items-center justify-center">
              <span className="text-xl font-bold flex text-gray-100">
                {team}
              </span>
            </div>
          </div>

          <h1 className="text-2xl font-semibold">Detail Endpoint Page</h1>
          <p>This is the detail endpoint page.</p>

          {/* Collapsible Controllers */}
          <div className="flex flex-col gap-4 mt-8">
            {controllers.map((controller) => (
              <div
                key={controller.name}
                className=" rounded-lg p-4 bg-[var(--color-collaboration)]"
              >
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleController(controller.name)}
                >
                  <span className="text-lg font-semibold">
                    {"/" + controller.name}
                  </span>
                  <div className="flex items-center gap-2">
                    <ChartContainer config={chartConfig} className="w-16 h-8">
                      <BarChart accessibilityLayer data={chartData}>
                        <Bar
                          dataKey="desktop"
                          fill="var(--color-chart1)"
                          radius={4}
                        />
                        <Bar
                          dataKey="mobile"
                          fill="var(--color-chart2)"
                          radius={4}
                        />
                      </BarChart>
                    </ChartContainer>
                    <div className=" text-xs space-y-1">
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
                  {openControllers.includes(controller.name) ? (
                    <FaChevronDown />
                  ) : (
                    <FaChevronRight />
                  )}
                </div>

                {/* Actions */}
                {openControllers.includes(controller.name) && (
                  <div className="pl-6 flex flex-col gap-2 mt-4">
                    {controller.actions.map((action) => (
                      <div key={action.name}>
                        <div
                          className="flex items-center justify-between cursor-pointer py-2"
                          onClick={() => toggleAction(action.name)}
                        >
                          <span className="text-md">{"/" + action.name}</span>
                          {openActions.includes(action.name) ? (
                            <FaChevronDown />
                          ) : (
                            <FaChevronRight />
                          )}
                        </div>

                        {/* Action Response */}
                        {openActions.includes(action.name) && (
                          <div className="pl-6 py-4 text-sm bg-white text-gray-800 flex flex-col gap-1 mt-2">
                            <div>
                              <span className="font-semibold">Status:</span>{" "}
                              {action.response.status}
                            </div>
                            <div>
                              <span className="font-semibold">Message:</span>{" "}
                              {action.response.message}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default DetailEndpointPage;
