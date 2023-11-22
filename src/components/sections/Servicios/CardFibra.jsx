"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { Slider } from "@/components/ui/slider";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation, useScroll } from "framer-motion";
const CardFibra = ({ Fibra, Index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();
  const [plan, setPlan] = useState([5]);
  const Features = [
    "Conexión ultra rapida, estable y segura.",
    "Navega sin restrincciones.",
    "Consume cualquier contenido en streaming en 4K sin interrupciones.",
    "Juega a videojuegos online con minima latencia",
  ];
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
        delay: 0.3,
      }}
      className="basis-0 grow"
    >
      <Card ref={ref} key={Index} className=" ">
        <CardHeader>
          <div className="flex flex-col items-center ">
            <span className="uppercase font-bold text-sm text-muted-foreground">
              FIBRA
            </span>
            <div className="flex flex-col items-center">
              <h4 className="text-4xl font-bold">{Fibra[plan].speed} Mbps</h4>
              <h4 className="text-4xl font-bold ">
                {Fibra[plan].price}$
                <span className="text-sm font-normal">/ mes</span>
              </h4>
              <Button className="mt-2">Contratar</Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col gap-10">
          <Slider
            onValueChange={(value) => {
              setPlan(value);
            }}
            value={[plan]}
            defaultValue={plan}
            max={9}
            step={1}
          />
          <ul className="flex flex-col gap-3 ">
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
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CardFibra;
