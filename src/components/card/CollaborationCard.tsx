import { Button } from "@/components/ui/button";
import { BadgeCheck } from "lucide-react";

interface CollaborationCardProps {
  title: string;
  subtitle: string;
  team: string;
  onShowMore: () => void;
}

export function CollaborationCard({
  title,
  subtitle,
  team,
  onShowMore,
}: CollaborationCardProps) {
  return (
    <div className="w-full flex items-center justify-between p-4 bg-[var(--color-collaboration)] rounded-lg">
      {/* Left */}
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-black">
          <BadgeCheck className="w-5 h-5 text-white" />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold text-gray-100">{title}</span>
          <span className="text-xs font-medium text-gray-500">{subtitle}</span>
        </div>
      </div>

      {/* Center */}
      <div className="text-sm font-bold text-white">{team}</div>

      {/* Right */}
      <Button
        variant="secondary"
        className="bg-black cursor-pointer text-white text-xs px-3 py-1 rounded-full hover:bg-gray-700 transition-all duration-300 ease-in-out"
        onClick={onShowMore}
        title="Show more"
      />
    </div>
  );
}
