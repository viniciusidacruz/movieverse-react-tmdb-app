import { Fragment } from "react";
import { Outlet } from "react-router";

import { Header } from "@shared/components";

export const LayoutPage = () => (
  <Fragment>
    <Header />

    <main className="container mx-auto px-2 py-6">
      <Outlet />
    </main>
  </Fragment>
);
