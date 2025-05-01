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

// enum PairsTypes {
//   key = number | string,
//   value = string,
//   type = string,
// }

interface IKeyValueProps {
  pairs: { key: string; value: string }[];
  variableType: string;
  setVariableType: React.Dispatch<React.SetStateAction<string>>;
  onAdd: () => void;
  onRemove: (index: number) => void;
  onChange: (index: number, key: string, value: string) => void;
  className?: string;
}

const KeyValueInput: React.FC<IKeyValueProps> = ({
  pairs,
  variableType,
  setVariableType,
  onAdd,
  onRemove,
  onChange,
  className,
}) => (
  <>
    {pairs.map((pair: { key: string; value: string }, index: number) => (
      <div key={index} className="flex gap-2 mb-2 text-black">
        <p className="text-sm font-medium text-gray-700">
          {index + 1} - {pair.key} : {pair.value}
        </p>
        <Input
          placeholder="Key"
          value={pair.key}
          onChange={(e) => onChange(index, "key", e.target.value)}
          className="flex-1 text-black"
        />
        <Input
          placeholder="Value"
          value={pair.value}
          onChange={(e) => onChange(index, "value", e.target.value)}
          className="flex-1 text-black"
        />
        <Select value={variableType} onValueChange={setVariableType}>
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem value="String">String</SelectItem>
            <SelectItem value="Integer">Integer</SelectItem>
            <SelectItem value="Boolean">Boolean</SelectItem>
            <SelectItem value="Date/Time">Date/Time</SelectItem>
          </SelectContent>
        </Select>
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
    ))}
    <Button
      variant={"link"}
      className="bg-black ml-8 hover:bg-neutral-800 text-white cursor-pointer transition-all duration-300 ease-in-out rounded-[0.5rem]"
      onClick={onAdd}
      title="Add"
    />
  </>
);

export default KeyValueInput;
