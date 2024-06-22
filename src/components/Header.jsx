import React from "react";
import { NavLink } from "react-router-dom";

import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { Button, buttonVariants } from "../components/ui/button";
const Header = () => {
  return (
    <header className="py-8 xl:p-12">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink href="/">
          <h1 className=" text-4xl font-semibold font-second text-accent ">
            Rania <span className="text-accent">.</span>{" "}
          </h1>
        </NavLink>

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <NavLink href="/contact">
            <Button>Hire Me</Button>
          </NavLink>
        </div>
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
