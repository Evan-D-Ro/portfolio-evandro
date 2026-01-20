import { ExternalLink, Github, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Imagens Existentes
import projectLFF from "@/assets/project-lff.jpg";
import projectAuxTransp from "@/assets/project-auxilio-transporte.jpg";
import projectEmail from "@/assets/project-email.jpg";

import exclusiva from "@/assets/exclusiva.png";
import jnformaturas from "@/assets/jnformaturas.png";
import rdgo from "@/assets/rdgo.png";
import cyrinocontabilidade from "@/assets/cyrino.png";
import larfranciscofranco from "@/assets/Lar Francisco Franco.png";
import crecheamelia from "@/assets/Creche Amelia.png";
import abra from "@/assets/abra.png";
import hme from "@/assets/hme.png";

// IMPORTANTE: Importe aqui os screenshots das novas landing pages
// Exemplo: import projectJN from "@/assets/project-jn.jpg";
// Por enquanto, vou usar uma variável placeholder ou reutilizar as existentes para o código não quebrar
const placeholderImg = projectLFF; // Substitua pelas importações reais

const ProjectsSection = () => {
  const projects = [
    // --- SISTEMAS / WEB APPS ---
    {
      id: 1,
      title: "Gerenciador de Atendidos - LFF",
      description: "Plataforma para educadores do Lar Francisco Franco gerenciarem atendidos, com cadastro, frequência e relatórios.",
      image: projectLFF,
      technologies: ["Next.js", "Spring Boot", "PostgreSQL", "Tailwind"],
      githubUrl: "https://github.com/Evan-D-Ro/gerenciador-lff",
      liveUrl: "", // Se tiver link real, coloque aqui
    },
    {
      id: 2,
      title: "Gerenciador Auxílio Transporte",
      description: "Aplicação para gestão do auxílio transporte universitário, controle de acesso, benefícios e prestação de contas.",
      image: projectAuxTransp,
      technologies: ["Next.js", "Spring Boot", "PostgreSQL", "Oracle Cloud"],
      githubUrl: "https://github.com/Evan-D-Ro/auxilio-transporte",
      liveUrl: "",
    },
    {
      id: 3,
      title: "Plataforma de Comunicação",
      description: "Sistema de mensagens internas responsivo. Projeto desenvolvido em dupla com Jorge Mateus.",
      image: projectEmail,
      technologies: ["Vue.js", "Node.js", "MongoDB", "Express"],
      githubUrl: "https://github.com/Evan-D-Ro/project-email",
      liveUrl: "",
    },

    // --- LANDING PAGES & SITES ---
    {
      id: 4,
      title: "JN Formaturas",
      description: "Site institucional desenvolvido para empresa de formaturas, focado em apresentar serviços e facilitar contatos.",
      image: jnformaturas, // TODO: Substituir por projectJN
      technologies: ["React", "Tailwind CSS", "Vite"],
      githubUrl: "",
      liveUrl: "https://jnformaturas.com.br",
    },
    {
      id: 5,
      title: "Abra Assessoria em Cobranças",
      description: "Website institucional moderno e responsivo para apresentação da empresa e serviços oferecidos",
      image: abra, // TODO: Substituir pela imagem correta
      technologies: ["React", "Tailwind CSS", "Vite"],
      githubUrl: "",
      liveUrl: "https://abracobrancas.com.br",
    },
    {
      id: 6,
      title: "RDGO Seguros",
      description: "Landing Page para corretora de seguros, otimizada para apresentar a empresa e facilitar o contato.",
      image: rdgo, // TODO: Substituir pela imagem correta
      technologies: ["React", "Tailwind CSS", "Vite"],
      githubUrl: "",
      liveUrl: "https://rdgoseguros.com.br",
    },
    {
      id: 7,
      title: "Cyrino Contabilidade",
      description: "Portal para a Cyrino Contabilidade, otimizado para apresentar planos e facilitar a cotação online.",
      image: cyrinocontabilidade, // TODO: Substituir pela imagem correta
      technologies: ["React", "Vite", "Tailwind CSS"],
      githubUrl: "",
      liveUrl: "https://cyrinocontabilidade.com.br",
    },
    {
      id: 8,
      title: "Exclusiva Eventos",
      description: "Showcase digital para empresa de eventos, destacando informações sobre a empresa serviços oferecidos.",
      image: exclusiva, // TODO: Substituir pela imagem correta
      technologies: ["React", "Vite", "Tailwind CSS"],
      githubUrl: "",
      liveUrl: "https://exclusivaeventos.com.br",
    },

    // --- EM DESENVOLVIMENTO ---
    {
      id: 9,
      title: "Lar Francisco Franco - Blog",
      description: "Blog em desenvolvimento para o Lar Francisco Franco a fim de facilitar a transparência e comunicação com a comunidade.",
      image: larfranciscofranco, // TODO: Substituir
      technologies: ["Em Desenvolvimento", "Vite", "React", "Tailwind CSS"],
      githubUrl: "",
      liveUrl: "https://aprovacao.larfranciscofranco.com.br",
      inProgress: true
    },
    {
      id: 10,
      title: "Creche Amélia - Blog",
      description: "Blog em desenvolvimento para a Creche Amélia de Rancharia, a fim de facilitar a transparência e comunicação com a comunidade.",
      image: crecheamelia, // TODO: Substituir
      technologies: ["Em Desenvolvimento", "Github Pages", "Vite", "React", "Tailwind CSS"],
      githubUrl: "",
      liveUrl: "https://evan-d-ro.github.io/creche-amelia/",
      inProgress: true
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
              Sistemas complexos e landing pages desenvolvidos com foco em performance e experiência do usuário.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="group flex flex-col shadow-card hover:shadow-hover transition-all duration-300 bg-gradient-card overflow-hidden h-full">

                {/* Project Image */}
                <div className="relative overflow-hidden h-48 shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${project.inProgress ? 'grayscale-[0.5]' : ''}`}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>

                  {/* Badge Em Desenvolvimento (Opcional) */}
                  {project.inProgress && (
                    <div className="absolute top-2 right-2">
                      <Badge variant="destructive" className="font-medium">Em Construção</Badge>
                    </div>
                  )}
                </div>

                <CardHeader className="pb-2">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors line-clamp-1" title={project.title}>
                    {project.title}
                  </h3>
                </CardHeader>

                <CardContent className="flex flex-col flex-grow space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  {/* <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div> */}

                  {/* Action Buttons - Logic Updated */}
                  <div className="flex gap-3 pt-4 mt-auto">
                    {/* Botão Github - Só aparece se tiver URL */}
                    {project.githubUrl && (
                      <Button variant="outline" size="sm" asChild className="flex-1">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Código
                        </a>
                      </Button>
                    )}

                    {/* Botão Live - Só aparece se tiver URL */}
                    {project.liveUrl && (
                      <Button variant={project.githubUrl ? "default" : "outline"} size="sm" asChild className="flex-1">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          {project.githubUrl ? <ExternalLink className="h-4 w-4 mr-2" /> : <Globe className="h-4 w-4 mr-2" />}
                          {project.inProgress ? "Ver Progresso" : "Visitar Site"}
                        </a>
                      </Button>
                    )}
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