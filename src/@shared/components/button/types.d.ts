import type { ComponentProps } from "react";

export type TButton = ComponentProps<"button"> & {
  isLoading?: boolean;
};
