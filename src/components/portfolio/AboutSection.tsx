import { Code, Database, Globe, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const highlights = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Front-end",
      description: "HTML, CSS, JavaScript, React, Next.js"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Back-end", 
      description: "Node.js, Express, PostgreSQL, APIs REST"
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Frameworks",
      description: "React, Next.js, Tailwind CSS, Spring Boot"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Ferramentas",
      description: "Git, Docker, N8N, Deploy em Cloud"
    }
  ];

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sobre <span className="bg-gradient-primary bg-clip-text text-transparent">Mim</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Desenvolvedor apaixonado por tecnologia, sempre em busca de novos desafios 
              e soluções inovadoras.
            </p>
          </div>

          {/* About Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Sou um desenvolvedor web full-stack com mais de 3 anos de experiência 
                criando aplicações web modernas e escaláveis. Minha paixão está em 
                transformar ideias complexas em soluções digitais elegantes e funcionais.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Domino tanto o desenvolvimento front-end quanto back-end, com expertise 
                em tecnologias como React, Node.js, PostgreSQL e ferramentas de automação. 
                Sempre busco as melhores práticas e tecnologias mais atuais do mercado.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Meu foco está na criação de aplicações que não apenas funcionem bem, 
                mas que também ofereçam uma excelente experiência do usuário e sejam 
                facilmente mantidas e escaladas.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">Experiência Principal</h3>
              
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="font-medium">Desenvolvedor Full-Stack</h4>
                  <p className="text-sm text-muted-foreground">2021 - Presente</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Desenvolvimento de aplicações web completas, desde a concepção 
                    até o deploy em produção.
                  </p>
                </div>
                
                <div className="border-l-2 border-accent pl-4">
                  <h4 className="font-medium">Desenvolvedor Front-end</h4>
                  <p className="text-sm text-muted-foreground">2020 - 2021</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Criação de interfaces modernas e responsivas com React e 
                    outras tecnologias front-end.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-all duration-300 bg-gradient-card">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-lg mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;