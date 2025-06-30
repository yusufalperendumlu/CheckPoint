import { useRef, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import clsx from "clsx";

import { useOutsideClick } from "@/hooks/useOutsideClick";

import { Button } from "@/components/ui/button";
import KeyValueInput from "@/components/KeyValueInput";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const BodyValueModal = ({ onClose }: { onClose: () => void }) => {
  const [fields, setFields] = useState([{ key: "", value: "", type: "" }]);
  const [emailNotify, setEmailNotify] = useState(false);
  const [phoneNotify, setPhoneNotify] = useState(false);
  const [statusCode, setStatusCode] = useState("");
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

  console.log(fields);

  return (
    <div
      ref={modalRef}
      className="relative p-6 bg-gray-100 rounded-xl text-black space-y-4"
    >
      <span
        className="absolute -top-6 -right-6 cursor-pointer"
        onClick={onClose}
      >
        <IoCloseSharp className="w-6 h-6 text-white" />
      </span>
      <h3 className="text-xl font-semibold">Value of Body</h3>
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

      <div className="pl-8">
        <div className="space-y-2 flex flex-col mt-4">
          <div className="flex items-center gap-2">
            <Checkbox
              id="email-notify"
              checked={emailNotify}
              onCheckedChange={() => setEmailNotify(!emailNotify)}
            />
            <label className="text-sm font-medium" htmlFor="email-notify">
              İstenmeyen durumlarda e-posta gönder
            </label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="phone-notify"
              checked={phoneNotify}
              onCheckedChange={() => setPhoneNotify(!phoneNotify)}
            />
            <label className="text-sm font-medium" htmlFor="phone-notify">
              İstenmeyen durumlarda telefona bilgi gönder
            </label>
          </div>
        </div>

        <div className="mt-2">
          <label className="text-sm font-medium mb-1">
            İstenmeyen Durum StatusCode
          </label>
          <Select value={statusCode} onValueChange={setStatusCode}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Seçiniz" />
            </SelectTrigger>
            <SelectContent className="select-content bg-white">
              <SelectItem value="400">400</SelectItem>
              <SelectItem value="401">401</SelectItem>
              <SelectItem value="500">500</SelectItem>
              <SelectItem value="502">502</SelectItem>
              <SelectItem value="503">503</SelectItem>
              <SelectItem value="504">504</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button
          variant={"link"}
          onClick={onClose}
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white cursor-pointer transition-all duration-300 ease-in-out rounded-[0.5rem]"
          title="Submit"
        />
      </div>
    </div>
  );
};

export default BodyValueModal;
