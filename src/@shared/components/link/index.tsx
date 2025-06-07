import { useLocation, Link as Redirect } from "react-router";

import { cn } from "@shared/utils";

import type { TLink } from "./types";

export const Link = ({ to, children, ...props }: TLink) => {
  const location = useLocation();

  const isCurrentLinkSelected = to === location.pathname;

  return (
    <Redirect
      to={to}
      {...props}
      className={cn(isCurrentLinkSelected && "bg-blue-500", "p-4 rounded-md")}
    >
      {children}
    </Redirect>
  );
};
