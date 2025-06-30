import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import clsx from "clsx";

import { useOutsideClick } from "@/hooks/useOutsideClick";

import { Button } from "@/components/ui/button";
import KeyValueInput from "@/components/KeyValueInput";

const HeaderOrQueryModal = ({
  onClose,
  type,
}: {
  onClose: () => void;
  type: "Query" | "Header";
}) => {
  const [fields, setFields] = useState([{ key: "", value: "", type: "" }]);
  const modalRef = useOutsideClick<HTMLDivElement>(onClose);

  const handleAddField = () =>
    setFields([...fields, { key: "", value: "", type: "" }]);
  const handleRemoveField = (index: number) => {
    if (fields.length > 1) {
      setFields(fields.filter((_, i) => i !== index));
    }
  };
  const handleChange = (
    index: number,
    type: "key" | "value" | "type",
    val: string | number | boolean
  ) => {
    const updated = [...fields];

    if (type === "value") {
      const currentType = updated[index].type;

      if (currentType === "Integer") {
        const parsedValue = parseInt(val as string, 10);
        updated[index].value = isNaN(parsedValue)
          ? parsedValue.toString()
          : parsedValue;
      } else {
        updated[index].value = val;
      }
    } else {
      updated[index][type] = String(val);
    }

    setFields(updated);
  };

  return (
    <div
      ref={modalRef}
      className="relative p-6 flex flex-col bg-white rounded-xl text-black space-y-4"
    >
      <span
        className="absolute -top-6 -right-6 cursor-pointer"
        onClick={onClose}
      >
        <IoCloseSharp className="w-6 h-6 text-white" />
      </span>
      <h3 className="text-xl font-semibold">Value of {type}</h3>
      <KeyValueInput
        pairs={fields}
        onAdd={handleAddField}
        onRemove={handleRemoveField}
        onChange={(
          index: number,
          key: string,
          value: string | number | boolean
        ) =>
          handleChange(index, key as "key" | "value" | "type", value as string)
        }
        className={clsx(
          fields.length > 1 ? "cursor-pointer" : "cursor-not-allowed opacity-50"
        )}
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
