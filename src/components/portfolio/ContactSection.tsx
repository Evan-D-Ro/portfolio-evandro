import { useState } from "react";
import { Mail, MapPin, Phone, Send, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio do formulário
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Obrigado pelo contato. Retornarei em breve.",
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "joao@exemplo.com",
      href: "mailto:joao@exemplo.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Telefone",
      value: "+55 (11) 99999-9999",
      href: "tel:+5511999999999"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Localização",
      value: "São Paulo, SP - Brasil",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      url: "https://github.com",
      color: "hover:text-gray-900"
    },
    {
      name: "LinkedIn", 
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://linkedin.com",
      color: "hover:text-blue-600"
    },
    {
      name: "Email",
      icon: <Mail className="h-5 w-5" />,
      url: "mailto:joao@exemplo.com",
      color: "hover:text-red-500"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Entre em <span className="bg-gradient-primary bg-clip-text text-transparent">Contato</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Vamos conversar sobre seu próximo projeto! 
              Estou sempre aberto a novas oportunidades e desafios.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <Card className="shadow-card bg-gradient-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="h-5 w-5" />
                  Envie uma Mensagem
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Seu Nome"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Seu Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Input
                      name="subject"
                      placeholder="Assunto"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Sua mensagem..."
                      className="min-h-[120px]"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full shadow-elegant"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              
              {/* Contact Information */}
              <Card className="shadow-card bg-gradient-card">
                <CardHeader>
                  <CardTitle>Informações de Contato</CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-10 h-10 bg-primary/10 text-primary rounded-lg">
                        {info.icon}
                      </div>
                      <div>
                        <p className="font-medium">{info.title}</p>
                        <a 
                          href={info.href}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="shadow-card bg-gradient-card">
                <CardHeader>
                  <CardTitle>Redes Sociais</CardTitle>
                </CardHeader>
                
                <CardContent>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <Button
                        key={social.name}
                        variant="outline"
                        size="sm"
                        asChild
                        className="hover:shadow-card transition-all"
                      >
                        <a 
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-2 ${social.color}`}
                        >
                          {social.icon}
                          {social.name}
                        </a>
                      </Button>
                    ))}
                  </div>
                  
                  <p className="text-sm text-muted-foreground mt-4">
                    Conecte-se comigo nas redes sociais para acompanhar meus projetos 
                    e conteúdo sobre desenvolvimento web.
                  </p>
                </CardContent>
              </Card>

              {/* Availability */}
              <Card className="shadow-card bg-gradient-primary text-primary-foreground">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold mb-2">Disponível para Projetos</h3>
                  <p className="text-sm opacity-90">
                    Estou aberto a novas oportunidades de trabalho freelance 
                    ou colaborações em projetos interessantes.
                  </p>
                </CardContent>
              </Card>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;