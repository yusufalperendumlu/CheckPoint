import { Button } from "@/components/ui/button";

import ActionsList from "@/components/home/ActionsList";
import ControllersList from "@/components/home/ControllersList";

const SystemStatus = () => (
  <div className="w-[67.5vw] h-full flex flex-col items-center justify-center space-y-4">
    <div className="flex w-full space-x-6 items-center justify-end">
      <Button
        variant="secondary"
        className="bg-green-600 hover:bg-green-700 text-white cursor-pointer"
        title="Active"
      />
      <Button
        variant="destructive"
        title="Passive"
        className="cursor-pointer"
      />
    </div>
    <div className="flex space-x-6">
      <ControllersList />
      <ActionsList />
    </div>
  </div>
);

export default SystemStatus;
