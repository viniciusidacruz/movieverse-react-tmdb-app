import { cn } from "@shared/utils";

import type { TRoot, TTitle, TText } from "./types";

const Root = ({ className, children, ...props }: TRoot) => (
  <div
    className={cn("w-full flex flex-col items-center gap-2", className)}
    {...props}
  >
    {children}
  </div>
);

const Title = ({ className, children, ...props }: TTitle) => (
  <h1 className={cn("font-bold text-3xl", className)} {...props}>
    {children}
  </h1>
);

const Text = ({ className, children, ...props }: TText) => (
  <p
    className={cn("font-medium text-2xl text-slate-600", className)}
    {...props}
  >
    {children}
  </p>
);

export const State = {
  Root,
  Text,
  Title,
};
