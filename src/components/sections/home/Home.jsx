import Ranking from "@/components/assets/Ranking";
import { Button } from "@/components/ui/button";
import Register from "@/components/Register";
import Login from "@/components/Login";
const Home = () => {
  return (
    <section
      id="inicio"
      className="flex flex-col items-center gap-3  scale-in-center  w-full"
    >
      <Ranking />

      <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-center">
        Navega <span className="text-primary">sin</span> preocupaciones
      </h1>
      <p className="tracking-wider text-center">
        El internet que sí vale la pena. Rápido, Estable y Seguro.
      </p>
      <div className="flex gap-3">
        <Register>Registrarse</Register>
        <Login variant="outline">Iniciar Sesión</Login>
      </div>
    </section>
  );
};

export default Home;
