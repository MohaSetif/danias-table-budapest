import { Star } from "lucide-react";

/** Gold star row. `value` is 0-5. */
export function Stars({ value = 5, className = "" }: { value?: number; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-0.5 ${className}`} aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < Math.round(value) ? "fill-accent text-accent" : "text-border"}`}
        />
      ))}
    </span>
  );
}
