import Home from "@/components/sections/home/Home";
import SobreNosotros from "@/components/sections/sobrenosotros/SobreNosotros";
import Servicios from "@/components/sections/Servicios/Servicios";
import Reviews from "@/components/sections/reviews/Reviews";
import Faq from "@/components/sections/faq/Faq";
import Contacto from "@/components/sections/contacto/Contacto";
export default function page() {
  return (
    <main className=" w-full flex p-12 flex-col items-center justify-center mt-[5rem]">
      <div className="w-full flex  flex-col gap-[6rem]  ">
        <Home />
        <SobreNosotros />
        <Servicios />
        <Reviews />
        <Faq />
        <Contacto />
      </div>
    </main>
  );
}
