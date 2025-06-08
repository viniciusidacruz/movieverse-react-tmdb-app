import { Clapperboard } from "lucide-react";
import { Link as Redirect } from "react-router";

import { ROUTES } from "@shared/constants";
import { Link, SearchField } from "@shared/components";

export const Header = () => (
  <header className="w-full border-b border-slate-700">
    <div className="container mx-auto px-2 py-4 flex gap-4 items-center justify-between flex-col md:flex-row">
      <Redirect
        to={ROUTES.home.path}
        className="flex items-center gap-4 text-3xl"
      >
        <Clapperboard />

        <span className="font-bold text-yellow-500 ">MovieVerse</span>
      </Redirect>

      <SearchField />

      <div className="flex items-center gap-4">
        <Link to={ROUTES.home.path}>Home</Link>

        <Link to={ROUTES.favorites.path}>Favoritos</Link>
      </div>
    </div>
  </header>
);
