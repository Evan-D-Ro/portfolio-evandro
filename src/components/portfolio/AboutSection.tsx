import { Code, Database, Globe, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const highlights = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Front-end",
      description: "HTML, CSS, JavaScript, Typescript, React, Bootstrap"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Back-end",
      description: "Java, Node.js, C#, PHP, PostgreSQL, MySQL, MongoDB, APIs REST"
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Frameworks",
      description: "Next.js, Tailwind CSS, Spring Boot, ASP.NET Core, Express.js, Vue.js, Laravel & Lumen"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Ferramentas",
      description: "Git, Docker, N8N, Deploy em Cloud, Postman"
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
              Desenvolvedor graduando em Sistemas de Informação pela FIPP - UNOESTE.
            </p>
          </div>

          {/* About Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Sou um desenvolvedor que gosta de aprender e crescer a cada projeto, focado em entregar soluções que realmente façam a diferença. Trabalho com tecnologias como Next.js, Spring Boot e Express.js, sempre buscando melhorar a qualidade do código e a experiência do usuário.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Domino tanto o desenvolvimento front-end quanto back-end, com expertise
                em tecnologias como React, Node.js, PostgreSQL e ferramentas de automação.
                Acredito que entender o problema de verdade é o primeiro passo para encontrar a melhor solução. Por isso, me dedico a ouvir com atenção, me comunicar claramente e estar disponível para apoiar cada etapa do processo.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Mais do que escrever código, quero ajudar pessoas e equipes a alcançarem seus objetivos com tecnologia de forma simples e eficaz. Prezo por um atendimento atencioso e pelo trabalho colaborativo, sempre aberto a feedbacks e pronto para ajustar o que for necessário.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">Experiência Principal</h3>

              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="font-medium">NEXE Tecnologia</h4>
                  <p className="text-sm text-muted-foreground">2025 - Presente</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Suporte técnico e desenvolvimento de integrações entre APIS utilizando N8N, além de automação de processos internos.
                  </p>
                </div>

                <div className="border-l-2 border-accent pl-4">
                  <h4 className="font-medium">Freelancer</h4>
                  <p className="text-sm text-muted-foreground">2023- 2024</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Criação de interfaces modernas e responsivas com Next.js e
                    desenvolvimento de APIS RESTful integradas com bancos de dados como PostgreSQL e MongoDB.
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