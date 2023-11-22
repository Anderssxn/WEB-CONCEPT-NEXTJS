"use client";
import Logo from "@/components/Logo";
import { Button } from "./ui/button";
import Darkmode from "./Darkmode";
import { useState } from "react";
import { AlignJustify } from "lucide-react";
import Login from "./Login";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  let style = isOpen ? "flex" : "hidden ";
  return (
    <div className="flex flex-col justify-center items-center w-full px-12 py-6 fixed top-0 bg-background/50 backdrop-blur-md z-[20]">
      <nav className="flex flex-col md:flex-row items-center gap-5 max-w-page w-full">
        <div className="flex w-full md:w-auto">
          <Logo />
          <Button
            variant={"outline"}
            className="ml-auto md:hidden"
            size="icon"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            aria-label="Navigation bar"
          >
            <AlignJustify className="h-5 w-5" />
          </Button>
        </div>
        <div className={"flex-col md:flex-row w-full gap-7 md:flex " + style}>
          <ul className="flex flex-col md:flex-row gap-7 flex-1 items-center justify-center text-muted-foreground md:flex-wrap w-full">
            <li className="hover:text-primary transition-all duration-200">
              <a href="#inicio">Inicio</a>
            </li>
            <li className="hover:text-primary transition-all duration-200">
              <a href="#sobrenosotros">Sobre nosotros</a>
            </li>
            <li className="hover:text-primary transition-all duration-200">
              <a href="#servicios">Servicios</a>
            </li>
            <li className="hover:text-primary transition-all duration-200">
              <a href="#testimonios">Testimonios</a>
            </li>
            <li className="hover:text-primary transition-all duration-200">
              <a href="#FAQ">FAQ</a>
            </li>
            <li className="hover:text-primary transition-all duration-200">
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
          <div className="flex gap-3 items-center justify-center">
            <Login>MyGONET</Login>
            <Darkmode />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
