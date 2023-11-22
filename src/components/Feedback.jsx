"use client";
import { Card, CardHeader, CardDescription, CardContent } from "./ui/card";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import AvatarIcon from "./assets/AvatarIcon";
const Feedback = () => {
  const [isClient, setIsClient] = useState(false);
  const [names, setNames] = useState([]);
  const [trasX, setTrasX] = useState(0);
  const [windowSize, setWindowSize] = useState([
    isClient ? window.innerWidth : undefined,
    isClient ? window.innerHeight : undefined,
  ]);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const windowSizeHandler = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", windowSizeHandler);

    return () => {
      window.removeEventListener("resize", windowSizeHandler);
    };
  }, [windowSize]);

  const translateX = useTransform(scrollYProgress, [0, 1], ["35%", "-100%"]);

  // fetch https://randomuser.me/api/?results=10&inc=name,nat=US&noinfo
  useEffect(() => {
    // fetch https://randomuser.me/api/?results=10&inc=name,nat=US&noinfo

    fetch("https://randomuser.me/api/?results=10&inc=name,nat=US&noinfo")
      .then((response) => response.json())
      .then((data) => {
        const newData = data.results.map((result) => {
          return {
            ...result,
            review:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae magni, reiciendis reprehenderit nulla voluptatibus ipsam facilis eum similique minus vel dolor? Temporibus labore eligendi assumenda molestiae reprehenderit, amet incidunt placeat.",
          };
        });

        setNames(newData);
      });
  }, []);

  useEffect(() => {
    if (windowSize[0] >= 768) {
      setTrasX(translateX);
    } else {
      setTrasX(0);
    }
  }, [windowSize[0]]);

  return (
    <motion.div
      id="scrollreview"
      ref={ref}
      style={{
        translateX: trasX,
      }}
      className={
        windowSize[0] >= 768
          ? ""
          : "overflow-x-scroll w-full custom-scrollbar snap-x snap-mandatory"
      }
    >
      <div className="px-12 grid grid-flow-col auto-cols-max gap-5 py-12">
        {names.map((comentario, index) => {
          return (
            <Card
              key={index}
              className="w-[20rem] z-1 hover:translate-y-[-2rem] transition-all duration-200 ease-in-out snap-center"
            >
              <CardHeader className="flex">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center">
                    <AvatarIcon className="h-12 w-12" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-xl">
                      {comentario.name.first} {comentario.name.last}
                    </span>

                    <span className="text-sm text-muted-foreground">
                      {
                        //date in spanish
                        new Date().toLocaleDateString("es-ES", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })
                      }
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>{comentario.review}</CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Feedback;
