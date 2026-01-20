import { Mail, MapPin, Phone, Github, Linkedin, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const ContactSection = () => {
  // Configuração do WhatsApp
  const whatsappNumber = "5518998080506";
  const defaultMessage = encodeURIComponent("Olá! Vi seu portfólio e gostaria de conversar sobre um projeto.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "evandroaf10@hotmail.com",
      href: "mailto:evandroaf10@hotmail.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "WhatsApp / Telefone",
      value: "+55 (18) 99808-0506",
      href: whatsappLink
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Localização",
      value: "Rancharia, SP - Brasil",
      href: "https://maps.google.com/?q=Rancharia+SP"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      url: "https://github.com/Evan-D-Ro",
      color: "hover:text-foreground"
    },
    // {
    //   name: "LinkedIn",
    //   icon: <Linkedin className="h-5 w-5" />,
    //   url: "https://linkedin.com/in/evandro-acorsi-filho-72019224b",
    //   color: "hover:text-primary"
    // },
    {
      name: "Email",
      icon: <Mail className="h-5 w-5" />,
      url: "mailto:evandroaf10@hotmail.com",
      color: "hover:text-accent"
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

          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Coluna da Esquerda: Chamada para o WhatsApp (Substituindo o Form) */}
            <Card className="shadow-card bg-gradient-card border-primary/20 h-full flex flex-col justify-center">
              <CardHeader className="pb-4 text-center lg:text-left">
                <CardTitle className="text-2xl flex items-center justify-center lg:justify-start gap-3">
                  <MessageCircle className="h-8 w-8 text-green-500" />
                  Vamos conversar agora?
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  A maneira mais rápida de falar comigo é pelo WhatsApp.
                  Estou disponível para tirar dúvidas e discutir sua ideia.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="bg-muted/50 p-6 rounded-lg border border-border/50">
                  <p className="text-muted-foreground italic text-sm mb-4">
                    "Olá! Vi seu portfólio e gostaria de conversar sobre um projeto..."
                  </p>

                  <Button
                    size="lg"
                    className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white shadow-lg transition-all hover:scale-[1.02]"
                    asChild
                  >
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <MessageCircle className="h-5 w-5" />
                      Iniciar Conversa no WhatsApp
                      <ArrowRight className="h-4 w-4 ml-auto opacity-70" />
                    </a>
                  </Button>
                </div>

                <div className="text-center text-sm text-muted-foreground">
                  Preferência por email? <a href="mailto:evandroaf10@hotmail.com" className="underline hover:text-primary">Clique aqui</a>.
                </div>
              </CardContent>
            </Card>

            {/* Coluna da Direita: Informações e Redes Sociais */}
            <div className="space-y-8">

              {/* Contact Information */}
              <Card className="shadow-card bg-gradient-card">
                <CardHeader>
                  <CardTitle>Informações de Contato</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-4 group">
                      <div className="flex items-center justify-center w-10 h-10 bg-primary/10 text-primary rounded-lg group-hover:scale-110 transition-transform">
                        {info.icon}
                      </div>
                      <div>
                        <p className="font-medium text-sm text-muted-foreground">{info.title}</p>
                        <a
                          href={info.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium hover:text-primary transition-colors block"
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
                  <div className="flex flex-wrap gap-4">
                    {socialLinks.map((social) => (
                      <Button
                        key={social.name}
                        variant="outline"
                        size="sm"
                        asChild
                        className="hover:shadow-card transition-all flex-1"
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
                </CardContent>
              </Card>

              {/* Availability */}
              <Card className="shadow-card bg-gradient-primary text-primary-foreground">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold mb-2 flex items-center justify-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                    </span>
                    Disponível para Projetos
                  </h3>
                  <p className="text-sm opacity-90">
                    Vamos desenvolver seu site juntos? <br />Entre em contato e transforme sua ideia em realidade!
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