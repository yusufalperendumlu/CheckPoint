import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import KeyValueInput from "@/components/KeyValueInput";

const HeaderOrQueryModal = ({
  onClose,
  type,
}: {
  onClose: () => void;
  type: "Query" | "Header";
}) => {
  const [fields, setFields] = useState([{ key: "", value: "" }]);
  const [variableType, setVariableType] = useState("");

  const handleAdd = () => setFields([...fields, { key: "", value: "" }]);
  const handleRemove = (index: number) =>
    setFields(fields.filter((_, i) => i !== index));
  const handleChange = (index: number, type: "key" | "value", val: string) => {
    const updated = [...fields];
    updated[index][type] = val;
    setFields(updated);
  };

  return (
    <div className="relative p-6 flex flex-col bg-white rounded-xl text-black space-y-4">
      <span
        className="absolute -top-6 -right-6 cursor-pointer"
        onClick={onClose}
      >
        <IoCloseSharp className="w-6 h-6 text-white" />
      </span>
      <h3 className="text-xl font-semibold">{type}’den Değer Yolla</h3>
      <KeyValueInput
        pairs={fields}
        variableType={variableType}
        setVariableType={setVariableType}
        onAdd={handleAdd}
        onRemove={handleRemove}
        onChange={() => handleChange}
      />
      <div className="flex items-center justify-center w-[15rem] pl-8">
        <Button
          variant="link"
          title="Submit"
          onClick={onClose}
          className="mt-4  bg-blue-500 w-full flex items-center justify-center text-white rounded-2xl p-2 hover:bg-blue-600 transition duration-200 ease-in-out"
        />
      </div>
    </div>
  );
};

export default HeaderOrQueryModal;
