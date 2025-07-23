import React from "react";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";
import { Globe, Smartphone, Server, Rocket } from "lucide-react";

const services = [
  {
    title: "Sites e Lojas Online",
    description: "Criamos sites bonitos, modernos e fáceis de usar para mostrar seu negócio ao mundo ou vender seus produtos online. Garantimos uma navegação simples, visual atraente e total adaptação para celulares e computadores.",
    icon: <Globe size={40} />,
  },
  {
    title: "Aplicativos para Celular",
    description: "Desenvolvemos aplicativos práticos e intuitivos para facilitar a vida das pessoas no dia a dia. Seja para conectar clientes, agilizar processos ou criar novas experiências, entregamos apps que realmente fazem a diferença.",
    icon: <Smartphone size={40} />,
  },
  {
    title: "Soluções que Crescem com Você",
    description: "Montamos sistemas robustos e inteligentes que acompanham o crescimento do seu negócio, sem dor de cabeça. Nossas soluções são pensadas para evoluir junto com suas necessidades, sempre com segurança e desempenho.",
    icon: <Server size={40} />,
  },
  {
    title: "Páginas para Divulgação",
    description: "Criamos páginas rápidas, atrativas e de alta conversão para divulgar produtos, eventos ou promoções. Ideal para campanhas de marketing, lançamentos e tudo que precisa de destaque na internet.",
    icon: <Rocket size={40} />,
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full py-10 sm:py-16 px-2 sm:px-6 md:px-12 xl:px-32 bg-background flex flex-col items-center overflow-x-hidden" id="servicos">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 text-primary text-center">Serviços</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 w-full justify-center gap-1 md:gap-8">
        {services.map((service) => (
          <CardContainer key={service.title} className="h-full flex justify-center">
            <CardBody className="h-full w-full group bg-primary/10 dark:bg-primary/80 rounded-2xl shadow-xl border border-primary/20 dark:border-primary p-6 sm:p-8 flex flex-col items-center text-center cursor-pointer backdrop-blur-md">
              <CardItem as="div" className="text-3xl sm:text-4xl mb-4 text-primary">{service.icon}</CardItem>
              <CardItem as="h3" className="text-lg sm:text-xl font-bold mb-2 text-primary">{service.title}</CardItem>
              <CardItem as="p" className="text-primary text-sm sm:text-base font-medium">{service.description}</CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  );
} 