import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import FileLookImage from "@/components/assets/FileLookImage";
const ContactForm = () => {
  return (
    <Card className="flex flex-col items-center ">
      <CardHeader className="flex flex-col items-center text-center">
        <h2 className=" text-muted-foreground">CONTACTO</h2>
        <h3 className="font-bold text-4xl">Obten más información</h3>
      </CardHeader>
      <CardContent className="w-full flex flex-wrap items-center justify-center gap-5">
        <FileLookImage className="w-[10rem] h-auto" />
        <form className="flex flex-col gap-3 w-full">
          <Input placeholder="Nombre" />
          <Input placeholder="Correo" />
          <Input placeholder="Asunto" />
          <Textarea placeholder="Mensaje" />
          <Button>Enviar</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
