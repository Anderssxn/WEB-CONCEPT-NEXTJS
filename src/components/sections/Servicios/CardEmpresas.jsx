"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
} from "@/components/ui/card";

import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation, useScroll } from "framer-motion";
const CardEmpresas = ({ Features, Index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();
  const [plan, setPlan] = useState([5]);

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.set("hidden");
    }
  }, [isInView]);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{
        duration: 0.2,
        delay: 0.4,
      }}
      className=" grow basis-0 "
    >
      <Card ref={ref} key={Index} className=" h-full ">
        <CardHeader>
          <div className="flex flex-col items-center ">
            <span className="uppercase font-bold text-sm text-muted-foreground">
              EMPRESAS
            </span>
            <div className="flex flex-col items-center">
              <h4 className="text-4xl font-bold ">Contactar</h4>
            </div>
          </div>
          <CardDescription>
            Los planes empresariales cuentan con velocidades simetricas
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <ul className="flex flex-col gap-3 h-full">
            {Features.map((feature, index) => {
              return (
                <li key={index} className="flex w-full gap-3">
                  <div>
                    <CheckCircle2 />
                  </div>
                  <p>{feature}</p>
                </li>
              );
            })}
          </ul>
          <a href="#contacto" className="w-full flex flex-col h-full">
            <Button className="mt-auto">Contactar</Button>
          </a>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CardEmpresas;
