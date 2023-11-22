"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, useScroll } from "framer-motion";
const CardMotion = ({ Plan, Index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();

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
        delay: Index * 0.1,
      }}
      className="basis-0 grow  "
    >
      <Card ref={ref} key={Index} className=" h-full ">
        <CardHeader>
          <div className="flex">
            <div className="flex flex-col">
              <span className="uppercase font-bold text-sm text-muted-foreground">
                {Plan.type}
              </span>
              <div className="flex flex-col">
                <h4 className="text-4xl font-bold">{Plan.speed} Mbps</h4>
                <h4 className="text-4xl font-bold ">
                  {Plan.price}$
                  <span className="text-sm font-normal">/ mes</span>
                </h4>
              </div>
            </div>
            <div className="flex-1 flex">
              <Button className="ml-auto">Contratar</Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="flex flex-col gap-3 ">
            {Plan.features.map((feature, index) => {
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

export default CardMotion;
