import { Badge } from "@/components/ui/badge";

const HeadBadge = ({ title }: { title: string }) => {
  return (
    <Badge
      variant={"secondary"}
      className="bg-[var(--color-card)] text-white rounded-2xl py-2 px-4 text-sm font-semibold shadow-md hover:bg-blue-600 transition-all duration-300 ease-in-out"
    >
      {title}
    </Badge>
  );
};

export default HeadBadge;
