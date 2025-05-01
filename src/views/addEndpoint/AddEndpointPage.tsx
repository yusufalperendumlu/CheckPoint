import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import MainLayout from "@/components/MainLayout";
import BodyValueModal from "@/components/modals/BodyValue";
import HeaderOrQueryModal from "@/components/modals/HeaderOrQueryValue";

const AddEndpointPage = () => {
  const [baseUrl, setBaseUrl] = useState("");
  const [endpoint, setEndpoint] = useState("");
  const [method, setMethod] = useState("GET");
  const [params, setParams] = useState([""]);
  const [showBodyModal, setShowBodyModal] = useState(false);
  const [showHeaderOrQueryModal, setShowHeaderOrQueryModal] = useState(false);
  const [headerOrQueryType, setHeaderOrQueryType] = useState<
    "Header" | "Query"
  >();

  const handleAddParam = () => {
    setParams([...params, ""]);
  };

  const handleRemoveParam = () => {
    const newParams = [...params];
    newParams.splice(newParams.length - 1, 1);
    setParams(newParams);
  };

  const handleParamChange = (index: number, value: string) => {
    const newParams = [...params];
    newParams[index] = value;
    setParams(newParams);
  };

  const handleOutOfFrame = () => {
    if (showBodyModal) setShowBodyModal(false);
    if (showHeaderOrQueryModal) setShowHeaderOrQueryModal(false);
  };

  return (
    <MainLayout>
      <div className="mx-auto p-6 text-white container flex flex-col">
        <h2 className="text-2xl font-semibold mb-4">Add New Endpoint</h2>

        {/* Request Method & Base URL */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex flex-col">
            <label className="mb-1">Request Method</label>
            <Select value={method} onValueChange={setMethod}>
              <SelectTrigger className="w-[180px] border-[var(--color-border)]">
                <SelectValue placeholder="Select Method" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 text-white">
                <SelectGroup>
                  <SelectLabel>Request Method</SelectLabel>
                  <SelectItem value="GET">GET</SelectItem>
                  <SelectItem value="POST">POST</SelectItem>
                  <SelectItem value="PUT">PUT</SelectItem>
                  <SelectItem value="DELETE">DELETE</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col flex-1 min-w-[300px]">
            <label className="mb-1">Base URL</label>
            <Input
              value={baseUrl}
              onChange={(e) => setBaseUrl(e.target.value)}
              placeholder="Enter base URL"
              className="text-white rounded-[0.5rem] border-[var(--color-border)]"
            />
          </div>
        </div>

        {/* Endpoint Path & Parameters */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex flex-col flex-1 min-w-[300px]">
            <label className="mb-1">Controller</label>
            <Input
              value={endpoint}
              onChange={(e) => setEndpoint(e.target.value)}
              placeholder="Enter controller path"
              className="text-white rounded-[0.5rem] border-[var(--color-border)]"
            />
          </div>

          <div className="flex flex-col flex-1 min-w-[300px]">
            <label className="mb-1">Action</label>
            <Input
              value={endpoint}
              onChange={(e) => setEndpoint(e.target.value)}
              placeholder="Enter action path"
              className="text-white rounded-[0.5rem] border-[var(--color-border)]"
            />
          </div>

          {/* <div className="flex flex-col flex-1 min-w-[300px]">
            <label className="mb-1">Parameters</label>
            {params.map((param, index) => (
              <Input
                key={index}
                value={param}
                onChange={(e) => handleParamChange(index, e.target.value)}
                placeholder="Enter parameter"
                className="text-white mb-2"
              />
            ))}
            <div className="flex gap-2 mt-2">
              <Button onClick={handleAddParam} title="Add Parameter">
                Add
              </Button>
              <Button
                variant="destructive"
                onClick={handleRemoveParam}
                disabled={params.length === 0}
                title="Remove last parameter"
              >
                Remove
              </Button>
            </div>
          </div> */}
        </div>

        <div className="flex flex-col w-full">
          <div className="flex flex-col mb-4 w-full justify-center items-center">
            <div className="flex items-center justify-center w-1/2">
              <Button
                type="button"
                title="Send value of Header"
                className="bg-blue-500 hover:bg-blue-700 cursor-pointer transition-all duration-300 ease-in-out rounded-[0.5rem] w-[20rem]"
                onClick={() => {
                  setHeaderOrQueryType("Header");
                  setShowHeaderOrQueryModal(true);
                }}
              />
            </div>
          </div>
          <div className="flex flex-col mb-4 w-full justify-center items-center">
            <div className="flex items-center justify-center w-1/2">
              <Button
                type="button"
                title="Send value of Body"
                className="bg-blue-500 hover:bg-blue-700 cursor-pointer transition-all duration-300 ease-in-out rounded-[0.5rem] w-[30rem]"
                onClick={() => setShowBodyModal(true)}
              />
            </div>
          </div>
          <div className="flex flex-col mb-4 w-full justify-center items-center">
            <div className="flex items-center justify-center w-1/2">
              <Button
                type="button"
                title="Send value of Query"
                className="bg-blue-500 hover:bg-blue-700 cursor-pointer transition-all duration-300 ease-in-out rounded-[0.5rem] w-[20rem]"
                onClick={() => {
                  setHeaderOrQueryType("Query");
                  setShowHeaderOrQueryModal(true);
                }}
              />
            </div>
          </div>
        </div>

        {/* Save Endpoint Button */}

        <div className="flex w-full items-center justify-center">
          <Button
            title="Save Endpoint"
            className="w-full mt-4 bg-blue-500 hover:bg-blue-700 cursor-pointer rounded-[0.5rem] transition-all duration-300 ease-in-out"
          >
            Save Endpoint
          </Button>
        </div>
      </div>

      {showBodyModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-[#0c0c0c9d] bg-opacity-50">
          <BodyValueModal onClose={() => setShowBodyModal(false)} />
        </div>
      )}
      {showHeaderOrQueryModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-[#0c0c0c9d] bg-opacity-50">
          <HeaderOrQueryModal
            onClose={() => setShowHeaderOrQueryModal(false)}
            type={headerOrQueryType!}
          />
        </div>
      )}
    </MainLayout>
  );
};

export default AddEndpointPage;
