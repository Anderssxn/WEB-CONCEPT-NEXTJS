"use client";
import React from "react";
import { useRef, useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion, useInView, useAnimation, useScroll } from "framer-motion";
const Item = ({ Title, Content, Index }) => {
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
      key={Index}
      ref={ref}
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
      className="basis-0 grow  text-start "
    >
      <AccordionItem value={`item-${Index + 1}`}>
        <AccordionTrigger className="text-start">{Title}</AccordionTrigger>
        <AccordionContent>{Content}</AccordionContent>
      </AccordionItem>
    </motion.div>
  );
};

export default Item;
