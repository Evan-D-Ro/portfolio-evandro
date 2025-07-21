import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import projectLFF from "@/assets/project-lff.jpg";
import projectAuxTransp from "@/assets/project-auxilio-transporte.jpg";
import projectEmail from "@/assets/project-email.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Gerenciador de Atendidos - Lar Francisco Franco",
      description: "Plataforma para educadores do Lar Francisco Franco de Rancharia gerenciarem atendidos, com funcionalidades de cadastro, acompanhamento, controle de frequência e relatórios.",
      image: projectLFF,
      technologies: ["Next.js", "Spring Boot - JAVA", "PostgreSQL", "Talwind CSS", "Swagger", "Logger"],
      githubUrl: "https://github.com/Evan-D-Ro/gerenciador-lff",
      liveUrl: "https://exemplo.com",
    },
    {
      id: 2,
      title: "Gerenciador do Auxílio Transporte Universitário",
      description: "Aplicação para gerenciar o auxílio transporte universitário, permitindo controle de nível de acesso, cadastro de usuários, manutenção de benefícios, controle de solicitações, prestações de contas e relatórios.",
      image: projectAuxTransp,
      technologies: ["Next.js", "Spring Boot", "PostgreSQL", "Oracle Cloud"],
      githubUrl: "https://github.com/Evan-D-Ro/auxilio-transporte",
      liveUrl: "https://exemplo.com",
    },
    {
      id: 3,
      title: "Plataforma de comunicação interna",
      description: "Plataforma de comunicação interna responsiva para cadastro, envio e recebimento de mensagens entre usuários, semelhante a um serviço de email. Projeto desenvolvido em dupla com Jorge Mateus de Souza Santos.",
      image: projectEmail,
      technologies: ["Vue.js", "Express.js", "Node.js", "MongoDB", "Tailwind CSS"],
      githubUrl: "https://github.com/Evan-D-Ro/project-email",
      liveUrl: "https://exemplo.com",
    }
  ];

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meus <span className="bg-gradient-primary bg-clip-text text-transparent">Projetos</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Alguns dos projetos que desenvolvi, demonstrando minhas habilidades
              em diferentes tecnologias e abordagens.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="group shadow-card hover:shadow-hover transition-all duration-300 bg-gradient-card overflow-hidden">

                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>

                <CardHeader className="pb-3">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <Button variant="outline" size="sm" asChild className="flex-1">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Código
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/Evan-D-Ro" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                Ver Todos no GitHub
              </a>
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;