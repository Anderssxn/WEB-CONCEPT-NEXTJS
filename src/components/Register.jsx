import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
const Register = ({ children }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>{children}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Registrarse en MyGONET</DialogTitle>
          <DialogDescription>
            En el portal de MyGONET podrás ver tu consumo de internet, tu saldo
            y más.
          </DialogDescription>
        </DialogHeader>
        <form className="flex flex-col gap-3 w-full">
          <Input placeholder="Nombre" />
          <Input placeholder="Apellido" />
          <Input placeholder="Cedula" />
          <Input placeholder="Telefono" />
          <Input placeholder="Direccion" />
          <Input placeholder="Correo" />
          <Input placeholder="Contraseña" type="password" />
          <Input placeholder="Confirmar Contraseña" type="password" />

          <Button>Registrarse</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Register;
