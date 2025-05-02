import { IoCloseSharp } from "react-icons/io5";
import clsx from "clsx";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

interface IKeyValueProps {
  pairs: { key: string; value: string | number | boolean; type: string }[];

  onAdd: () => void;
  onRemove: (index: number) => void;
  onChange: (
    index: number,
    key: string,
    value: string | number | boolean
  ) => void;
  className?: string;
}

const KeyValueInput: React.FC<IKeyValueProps> = ({
  pairs,
  onAdd,
  onRemove,
  onChange,
  className,
}) => {
  const valueTypeOptions = [
    { value: "String", type: "text" },
    { value: "Integer", type: "number" },
    { value: "Date/Time", type: "date" },
  ];

  return (
    <>
      {pairs.map(
        (
          pair: { key: string; value: string | number | boolean; type: string },
          index: number
        ) => (
          <div
            key={index}
            className="flex gap-2 mb-2 text-black selection:bg-black selection:text-white"
          >
            <p className="text-sm font-medium text-gray-700">
              {index + 1} - {""} : {""}
            </p>
            <div className="flex">
              <Input
                placeholder="Key"
                value={pair.key}
                onChange={(e) => onChange(index, "key", e.target.value)}
                className="flex-1 text-black border-r-0"
              />
              <Select
                value={pair.type}
                onValueChange={(e) => onChange(index, "type", e)}
              >
                <SelectTrigger className="w-[100px] text-sm">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="String">String</SelectItem>
                  <SelectItem value="Integer">Integer</SelectItem>
                  <SelectItem value="Boolean">Boolean</SelectItem>
                  <SelectItem value="Date/Time">Date/Time</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Input
              type={
                valueTypeOptions.find((option) => option.value === pair.type)
                  ?.type
              }
              placeholder="Value"
              value={
                pair.value !== undefined ? pair.value.toString() : pair.value
              }
              onChange={(e) => onChange(index, "value", e.target.value)}
              className={clsx(
                "flex-1 text-black [&::-webkit-inner-spin-button]:appearance-none",
                pair.type === "Boolean" && "hidden"
              )}
            />
            {pair.type === "Boolean" && (
              <Select
                value={pair.value ? "true" : "false"}
                onValueChange={(e) => onChange(index, "value", e === "true")}
              >
                <SelectTrigger className="w-[100px] text-sm">
                  <SelectValue placeholder="Value" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="true">True</SelectItem>
                  <SelectItem value="false">False</SelectItem>
                </SelectContent>
              </Select>
            )}

            <Button
              onClick={() => onRemove(index)}
              variant="link"
              className={clsx(
                "bg-black hover:bg-neutral-800 text-white cursor-pointer transition-all duration-300 ease-in-out rounded-[0.5rem]",
                className
              )}
              title={
                <>
                  <IoCloseSharp />
                </>
              }
            />
          </div>
        )
      )}
      <Button
        variant={"link"}
        className="bg-black ml-8 hover:bg-neutral-800 text-white cursor-pointer transition-all duration-300 ease-in-out rounded-[0.5rem]"
        onClick={onAdd}
        title="Add"
      />
    </>
  );
};

export default KeyValueInput;
