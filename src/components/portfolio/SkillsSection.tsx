import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      color: "bg-primary",
      skills: [
        "HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript",
        "Bootstrap", "Next.js", "Tailwind CSS", "Responsive Design",
        "Redux", "Context API", "React Router"
      ]
    },
    {
      title: "Backend",
      color: "bg-accent",
      skills: [
        "Java", "Spring Boot", "Node.js", "Express.js", "ASP.NET Core", "RESTful APIs",
        "PostgreSQL", "MongoDB", "MySQL",
        "Authentication", "JWT", "API Security"
      ]
    },
    {
      title: "Ferramentas & DevOps",
      color: "bg-secondary",
      skills: [
        "Git & GitHub", "Docker", "Oracle Cloud", "Vercel",
        "Linux", "CI/CD", "NGINX", "N8N", "Postman"
      ]
    },
    {
      title: "Outras Tecnologias",
      color: "bg-muted",
      skills: [
        "Laravel & Lumen", "C#", "PHP",
        "WebSocket", "Solid", "Agile/Scrum", "MVC"
      ]
    }
  ];

  const levelIndicators = [
    { level: "Avançado", count: 8, color: "bg-accent" },
    { level: "Intermediário", count: 12, color: "bg-primary" },
    { level: "Básico", count: 6, color: "bg-secondary" }
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Minhas <span className="bg-gradient-primary bg-clip-text text-transparent">Habilidades</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tecnologias e ferramentas que domino para criar soluções completas
              e eficientes.
            </p>
          </div>

          {/* Skills Overview */}
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {levelIndicators.map((indicator) => (
              <div key={indicator.level} className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${indicator.color}`}></div>
                <span className="text-sm text-muted-foreground">
                  {indicator.level}: {indicator.count} tecnologias
                </span>
              </div>
            ))}
          </div>

          {/* Skills Categories */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-all duration-300 bg-gradient-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full ${category.color}`}></div>
                    {category.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-card rounded-lg p-8 shadow-card">
              <h3 className="text-xl font-semibold mb-4">
                Sempre Aprendendo
              </h3>
              <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Acredito que o aprendizado contínuo é essencial na área de tecnologia e durante minha graduação, houve
                uma frase que me marcou:<br />
                "No que diz respeito ao empenho, ao compromisso, ao esforço, à dedicação, não existe meio-termo. Ou você faz uma coisa bem-feita, ou não faz." - Ayrton Senna.
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Badge variant="outline" className="bg-accent/10 text-accent border-accent">
                  🔥 Atualmente estudando: N8N e Automações
                </Badge>
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary">
                  📚 Próximo: Formação Node.js - ROCKETSEAT
                </Badge>
                <Badge variant="outline" className="bg-secondary text-secondary-foreground">
                  🚀 Interesse: Mestrado em engenharia de software
                </Badge>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section >
  );
};

export default SkillsSection;