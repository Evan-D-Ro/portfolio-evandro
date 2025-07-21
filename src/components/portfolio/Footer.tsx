import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t bg-muted/20">
      <div className="container mx-auto px-6 w-full">
        <div className="flex justify-center items-center w-full">
          <p className="text-center text-muted-foreground w-full">
            © {currentYear} Evandro Acorsi. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>

  );
};

export default Footer;