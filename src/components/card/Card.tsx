import React from "react";
import { cva, VariantProps } from "class-variance-authority";

const cardVariants = cva(
  " rounded-2xl px-4 py-3 shadow-sm transition-all duration-300",
  {
    variants: {
      type: {
        summary: "bg-muted text-foreground",
        stat: "bg-[var(--color-card)] text-[var(--color-text)]",
        action: "bg-primary text-primary-foreground hover:bg-primary/90",
      },
      size: {
        sm: "max-w-xs text-sm",
        md: "max-w-sm text-base",
        lg: "max-w-md w-[10rem] h-fit text-lg",
      },
      centered: {
        true: "items-center text-center",
        false: "items-start text-left",
      },
    },
    defaultVariants: {
      type: "stat",
      size: "md",
      centered: true,
    },
  }
);

// Extend `ICardProps` with variant props
interface ICardProps extends VariantProps<typeof cardVariants> {
  value?: number | React.ReactNode | undefined;
  label: string;
  url?: string;
  date?: string;
  time?: string;
}

const Card: React.FC<ICardProps> = ({
  value,
  label,
  url,
  date,
  time,
  type,
  size,
  centered,
}) => {
  return (
    <div className={cardVariants({ type, size, centered })}>
      <div className="flex flex-col h-full justify-between gap-2">
        {value !== undefined && (
          <p className="text-4xl font-semibold">{value}</p>
        )}
        <p className="text-sm text-muted-foreground">{label}</p>

        {url && <p className="text-sm text-gray-500">{url}</p>}
        {date && <p className="text-xs text-gray-500">{date}</p>}
        {time && <p className="text-xs text-gray-500">{time}</p>}
      </div>
    </div>
  );
};

export default Card;
