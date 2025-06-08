import { cn } from "@shared/utils";

import type { TIcon, TImage, TRoot, TTitle } from "./types";

const Root = ({ className, children, ...props }: TRoot) => (
  <div
    className={cn(
      "flex flex-col min-w-72 relative gap-4 bg-slate-700",
      className
    )}
    {...props}
  >
    {children}
  </div>
);

const Image = ({ src, className, ...props }: TImage) => {
  const hasImage = !!src?.length;

  if (!hasImage) {
    return (
      <div className="rounded-t-lg bg-slate-600 flex items-center justify-center h-full w-full">
        <span>Poster do filme</span>
      </div>
    );
  }

  return (
    <img src={src} className={cn("w-full h-full", className)} {...props} />
  );
};

const Title = ({ className, children, ...props }: TTitle) => (
  <h3 className={cn("text-white font-bold", className)} {...props}>
    {children}
  </h3>
);

const Icon = ({ className, children, ...props }: TIcon) => (
  <button
    type="button"
    className={cn(
      "rounded-full w-6 h-6 bg-slate-950 absolute top-4 right-4 flex items-center justify-center cursor-pointer",
      className
    )}
    {...props}
  >
    {children}
  </button>
);

export const Card = {
  Root,
  Icon,
  Image,
  Title,
};
