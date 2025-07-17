import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © {currentYear} João Silva. Todos os direitos reservados.
            </p>
          </div>

          <div className="flex items-center gap-2 text-muted-foreground">
            <span>Feito com</span>
            <Heart className="h-4 w-4 text-accent fill-current" />
            <span>e React</span>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;