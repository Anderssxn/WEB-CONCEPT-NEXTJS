import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Item from "./Item";
const Faq = () => {
  // genera 5 preguntas frecuentes de un provedor de internet en un array de objetos

  const preguntas = [
    {
      title: "¿Cuál es el mejor proveedor de internet?",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut totam ducimus est reiciendis quasi, tenetur autem neque, doloribus error aperiam nisi maiores sunt accusamus, itaque deserunt dolor! Nisi, tempore doloribus?",
    },
    {
      title: "¿Qué tan estable es el internet de fibra óptica?",
      content:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut totam ducimus est reiciendis quasi, tenetur autem neque, doloribus error aperiam nisi maiores sunt accusamus, itaque deserunt dolor! Nisi, tempore doloribus?",
    },
    {
      title: "¿Cuáles son los mejores planes de internet?",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut totam ducimus est reiciendis quasi, tenetur autem neque, doloribus error aperiam nisi maiores sunt accusamus, itaque deserunt dolor! Nisi, tempore doloribus?",
    },
    {
      title: "¿Qué velocidad de internet necesito?",
      content:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut totam ducimus est reiciendis quasi, tenetur autem neque, doloribus error aperiam nisi maiores sunt accusamus, itaque deserunt dolor! Nisi, tempore doloribus?",
    },
  ];
  return (
    <section id="FAQ" className="flex flex-col items-center gap-5 ">
      <div>
        <h2 className="font-bold text-4xl">Preguntas Frecuentes</h2>
      </div>

      <div className="max-w-[40rem] w-full">
        <Accordion type="single" collapsible className="w-full">
          {preguntas.map((pregunta, index) => {
            return (
              <Item
                key={index}
                Title={pregunta.title}
                Content={pregunta.content}
                Index={index}
              />
            );
          })}
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
