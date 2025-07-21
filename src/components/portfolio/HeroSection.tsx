import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import developerPortrait from "@/assets/developer-portrait.jpg";
const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-subtle">
    <div className="container mx-auto px-6 py-24">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-primary font-medium">Olá, eu sou</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="bg-gradient-primary bg-clip-text text-transparent">Evandro Acorsi</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground">
                Desenvolvedor Web
              </h2>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl">
              Transformo ideias em soluções digitais eficientes.
              Especialista em criar aplicações web que ajudam pessoas e
              negócios em seu dia a dia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button onClick={scrollToContact} size="lg" className="shadow-elegant">
                Entre em Contato
                <Mail className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" onClick={scrollToAbout}>
                Saiba Mais
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start pt-4">
              <Button variant="ghost" size="sm" asChild>
                <a href="https://github.com/Evan-D-Ro" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://linkedin.com/in/evandro-acorsi-filho-72019224b" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="mailto:evandroaf10@hotmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 max-w-lg">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <img src={developerPortrait} alt="Evandro Acorsi - Desenvolvedor Full-Stack" className="relative w-full h-auto rounded-2xl shadow-hover" />
          </div>
        </div>

      </div>
    </div>
  </section>;
};
export default HeroSection;