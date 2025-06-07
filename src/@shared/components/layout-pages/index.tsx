import { Fragment } from "react";
import { Outlet } from "react-router";

import { Header } from "@shared/components";

export const LayoutPage = () => (
  <Fragment>
    <Header />
    <Outlet />
  </Fragment>
);
