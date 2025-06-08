import type { ComponentProps } from "react";

export interface IOption {
  value: string;
  label: string;
}

export type TSelect = ComponentProps<"select"> & {
  options: IOption[];
};
