import { ChevronDown } from "lucide-react";

import type { TSelect } from "./types";

export const Select = ({ options, className = "", ...props }: TSelect) => (
  <div className="relative inline-block w-fit">
    <select
      className="w-full outline-none border-none appearance-none rounded-md bg-slate-800 text-white px-4 py-2 pr-10 border border-gray-600"
      {...props}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>

    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
      <ChevronDown />
    </div>
  </div>
);
