import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "gold" | "navy"
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        {
          "bg-navy-light text-navy": variant === "default",
          "bg-gold text-white": variant === "gold",
          "bg-navy text-white": variant === "navy",
        },
        className
      )}
      {...props}
    />
  )
}

export { Badge }
