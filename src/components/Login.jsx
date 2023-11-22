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
const Login = ({ children, variant }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={variant === "outline" ? "outline" : ""}>
          {children}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Iniciar Sesión en MyGONET</DialogTitle>
          <DialogDescription>
            En el portal de MyGONET podrás ver tu consumo de internet, tu saldo
            y más.
          </DialogDescription>
        </DialogHeader>
        <form className="flex flex-col gap-3 w-full">
          <Input placeholder="Correo" />
          <Input placeholder="Contraseña" />
          <Button>Iniciar Sesión</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Login;
