import { cn } from "@shared/utils";

import type { TBadge } from "./types";

export const Badge = ({ children, className, ...props }: TBadge) => (
  <div
    className={cn(
      "flex items-center gap-2 justify-center px-2 py-1 font-medium rounded-full w-fit",
      className
    )}
    {...props}
  >
    {children}
  </div>
);
