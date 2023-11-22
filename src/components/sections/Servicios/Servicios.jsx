import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CardMotion from "./CardMotion";
import CardFibra from "./CardFibra";
import CardEmpresas from "./CardEmpresas";
const Servicios = () => {
  let plans = [
    {
      type: "Básico",
      features: [
        "Conexion estable e ilimitada.",
        "Perfecto para navegación casual y trabajo remoto.",
      ],
      speed: 20,
      price: 5,
    },
    {
      type: "Estándar",
      features: [
        "Conexion estable e ilimitada.",
        "Perfecto para consumir contenido en streaming en HD en varios dispositivos",
      ],
      speed: 40,
      price: 10,
    },
    {
      type: "Premium",
      features: [
        "Conexion estable e ilimitada.",
        "Perfecto para consumir contenido en streaming en 4K y jugar casualmente a videojuegos online",
      ],
      speed: 60,
      price: 15,
    },
  ];

  let fibras = [
    {
      speed: 100,
      price: 25,
    },
    {
      speed: 200,
      price: 30,
    },
    {
      speed: 300,
      price: 35,
    },
    {
      speed: 400,
      price: 40,
    },
    {
      speed: 500,
      price: 45,
    },
    {
      speed: 600,
      price: 50,
    },
    {
      speed: 700,
      price: 60,
    },
    {
      speed: 800,
      price: 70,
    },
    {
      speed: 900,
      price: 80,
    },
    {
      speed: 1000,
      price: 100,
    },
  ];

  let empresas = [
    "Ancho de banda de hasta 10Gbps.",
    'Opción "Pay as you go".',
    "Soporte 24/7.",
    "Incluye 1 año de vps en Hostinger",
    "Caracteristica aqui...",
  ];
  return (
    <section
      id="servicios"
      className="flex flex-col  gap-3  items-center w-full"
    >
      <div className="max-w-page w-full">
        <div>
          <h2 className="text-muted-foreground slide-in-top">SERVICIOS</h2>
          <div>
            <h3
              className="text-4xl font-bold slide-in-top"
              style={{
                "--i": 2,
              }}
            >
              PLANES
            </h3>
            <div className="flex flex-col gap-5">
              <div className="flex flex-wrap flex-col md:flex-row justify-center w-full gap-5 pt-5 ">
                {plans.map((plan, index) => {
                  return <CardMotion key={index} Plan={plan} Index={index} />;
                })}
              </div>
              <div className="flex flex-col md:flex-row justify-center flex-wrap w-full gap-5">
                <CardFibra Fibra={fibras} />
                <CardEmpresas Features={empresas} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
