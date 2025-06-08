import { cn } from "@shared/utils";

import type { TButton } from "./types";

export const Button = ({
  className,
  isLoading = false,
  disabled = false,
  children,
  ...props
}: TButton) => (
  <button
    disabled={disabled || isLoading}
    className={cn(
      className,
      disabled || (isLoading && "cursor-not-allowed opacity-5"),
      "p-4 rounded-md flex items-center justify-center gap-2 bg-blue-500 cursor-pointer"
    )}
    {...props}
  >
    {isLoading ? "Processando..." : children}
  </button>
);
