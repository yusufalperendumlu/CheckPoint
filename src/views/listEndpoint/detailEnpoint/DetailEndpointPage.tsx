import { useEffect, useState } from "react";
import { routeTree } from "@/routes/__root";
import { useParams } from "@tanstack/react-router";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import MainLayout from "@/components/MainLayout";
import { Bar, BarChart } from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { RootState } from "@/store/rootReducer";
import { getListEndpointDetailRequest } from "@/store/listEndpointDetail/listEndpointDetailAction";

// const controllers = [
//   {
//     name: "UserController",
//     actions: [
//       {
//         name: "createUser",
//         response: { status: 201, message: "User created successfully" },
//       },
//       {
//         name: "deleteUser",
//         response: { status: 200, message: "User deleted successfully" },
//       },
//     ],
//   },
//   {
//     name: "ProductController",
//     actions: [
//       {
//         name: "addProduct",
//         response: { status: 201, message: "Product added" },
//       },
//     ],
//   },
// ];

const chartConfig = {
  success: {
    label: "Success",
    color: "#22c55e", // Green color for success
  },
  unSuccess: {
    label: "Unsuccess",
    color: "#ef4444", // Red color for unsuccess
  },
} satisfies ChartConfig;

const DetailEndpointPage = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector(
    (state: RootState) => state.listEndpointDetail
  );

  console.log(data?.controllers?.[0]?.unSuccessCount);

  const controllers = data?.controllers || [];

  const { id } = useParams({
    from: routeTree.id,
  });

  console.log("DetailEndpointPage id:", id);
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

  useEffect(() => {
    if (id) {
      dispatch(getListEndpointDetailRequest({ projectId: Number(id) }));
    }
  }, [dispatch, id]);

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
                {loading ? (
                  <span className="animate-pulse">
                    <div className="w-20 h-2 rounded bg-gray-400"></div>
                  </span>
                ) : (
                  data?.projectName
                )}
              </span>
            </div>
          </div>

          <h1 className="text-2xl font-semibold">Detail Endpoint Page</h1>
          <p>This is the detail endpoint page.</p>

          {/* Collapsible Controllers */}
          <div className="flex flex-col gap-4 mt-8">
            {!loading &&
              controllers.map((controller, index) => (
                <div
                  key={index}
                  className=" rounded-lg p-4 bg-[var(--color-collaboration)]"
                >
                  <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => toggleController(controller.controllerName!)}
                  >
                    <span className="text-lg font-semibold">
                      {"/" + controller.controllerName}
                    </span>
                    <div className="flex items-center gap-4">
                      <ChartContainer
                        config={chartConfig}
                        className="w-24 h-10"
                      >
                        <BarChart
                          accessibilityLayer
                          data={[
                            {
                              success: controller.successCount,
                              unSuccess: controller.unSuccessCount,
                            },
                          ]}
                        >
                          <Bar
                            dataKey="success"
                            fill={chartConfig.success.color}
                            radius={4}
                          />
                          <Bar
                            dataKey="unSuccess"
                            fill={chartConfig.unSuccess.color}
                            radius={4}
                          />
                        </BarChart>
                      </ChartContainer>

                      <div className="text-xs space-y-1">
                        <p>
                          <span className="inline-block w-2 h-2 bg-[color:var(--color-success)] rounded-full mr-2" />
                          Success: {controller.successCount}
                        </p>
                        <p>
                          <span className="inline-block w-2 h-2 bg-[color:var(--color-error)] rounded-full mr-2" />
                          Unsuccess: {controller.unSuccessCount}
                        </p>
                      </div>
                    </div>

                    {openControllers.includes(
                      controller.controllerName as string
                    ) ? (
                      <FaChevronDown />
                    ) : (
                      <FaChevronRight />
                    )}
                  </div>

                  {/* Actions */}
                  {openControllers.includes(
                    controller.controllerName as string
                  ) && (
                    <div className="pl-6 flex flex-col gap-2 mt-4">
                      {controller?.actions!.map((action) => (
                        <div key={action.actionId}>
                          <div
                            className="flex items-center justify-between cursor-pointer py-2"
                            onClick={() =>
                              toggleAction(action.actionName as string)
                            }
                          >
                            <span className="text-md">
                              {"/" + action.actionName}
                            </span>
                            {openActions.includes(action.actionName!) ? (
                              <FaChevronDown />
                            ) : (
                              <FaChevronRight />
                            )}
                          </div>

                          {/* Action Response */}
                          {/* {openActions.includes(action.name) && (
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
                        )} */}
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
