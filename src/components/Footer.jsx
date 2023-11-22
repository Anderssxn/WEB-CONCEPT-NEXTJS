import React from "react";

const Footer = () => {
  return (
    <footer className=" w-full text-sm flex justify-center flex-col text-primary/60">
      <div className="bg-muted/70 w-full flex justify-center ">
        <div className="flex py-5 px-12 max-w-page w-full justify-center ">
          <div>
            <h2 className="font-bold ">Andersson Hadad</h2>
            <p>contact@anderssxn.com</p>
            <a
              href="https://github.com/anderssxn"
              className="hover:text-primary transition-all duration-200"
              target="_blank"
            >
              github.com/anderssxn
            </a>
          </div>
          <div className="ml-auto">
            <ul className="grid grid-cols-2">
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
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-5 py-5 bg-muted ">
        <p className="text-center text-sm">
          © 2023 Andersson Hadad. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
