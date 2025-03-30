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

const AddEndpointPage = () => {
  const [baseUrl, setBaseUrl] = useState("");
  const [endpoint, setEndpoint] = useState("");
  const [method, setMethod] = useState("GET");
  const [params, setParams] = useState([""]);

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

  return (
    <MainLayout>
      <div className="w-full mx-auto p-6  text-black ">
        <h2 className="text-2xl font-semibold mb-4">Add New Endpoint</h2>

        <div className="mb-4">
          <label className="block mb-1">Base URL</label>
          <Input
            value={baseUrl}
            onChange={(e) => setBaseUrl(e.target.value)}
            placeholder="Enter base URL"
            className="text-black"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Endpoint Path</label>
          <Input
            value={endpoint}
            onChange={(e) => setEndpoint(e.target.value)}
            placeholder="Enter endpoint path"
            className="text-black"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Request Method</label>
          <Select value={method} onValueChange={setMethod}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Method" />
            </SelectTrigger>
            <SelectContent>
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

        <div className="mb-4 space-x-4">
          <label className="block mb-1">Parameters</label>
          {params.map((param, index) => (
            <Input
              key={index}
              value={param}
              onChange={(e) => handleParamChange(index, e.target.value)}
              placeholder="Enter parameter"
              className="relative text-black mb-2"
            />
          ))}
          <Button
            onClick={handleAddParam}
            className="mt-2"
            title="Add Parameter"
          />
          <Button
            size="default"
            variant="destructive"
            onClick={handleRemoveParam}
            className="mt-2"
            title={`
                ${
                  params.length === 0
                    ? "No parameters to remove"
                    : "Remove last parameter"
                }
                `}
          />
        </div>

        <div className="flex w-full items-center justify-center">
          <Button
            title="Save Endpoint"
            className="w-full mt-4 bg-blue-500 hover:bg-blue-700"
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default AddEndpointPage;
