import React from "react";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";
import { HeartHandshake, Eye, Gem } from "lucide-react";

const mvv = [
  {
    title: "Missão",
    description: "Nossa missão é facilitar o crescimento de pessoas e empresas por meio de soluções tecnológicas acessíveis, inovadoras e humanas. Buscamos transformar desafios em oportunidades, tornando a tecnologia uma aliada no dia a dia de nossos clientes.",
    icon: <HeartHandshake size={40} />,
  },
  {
    title: "Visão",
    description: "Queremos ser referência em soluções digitais, reconhecidos pela nossa capacidade de gerar resultados reais e impactar positivamente a vida das pessoas. Almejamos crescer junto com nossos clientes, sempre inovando e superando expectativas.",
    icon: <Eye size={40} />,
  },
  {
    title: "Valores",
    description: "Nossos valores são baseados em ética, criatividade, respeito e foco total no cliente. Acreditamos que o sucesso é construído com transparência, colaboração e paixão pelo que fazemos, entregando sempre o melhor resultado.",
    icon: <Gem size={40} />,
  },
];

export default function MVVSection() {
  return (
    <section className="w-full py-10 sm:py-16 px-2 sm:px-6 md:px-12 xl:px-32 bg-white dark:bg-[#131316] flex flex-col items-center overflow-x-hidden" id="mvv">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 text-foreground text-center">Missão, Visão e Valores</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full justify-center gap-1 md:gap-8">
        {mvv.map((item) => (
          <CardContainer key={item.title} className="h-full flex justify-center">
            <CardBody className="h-full w-full group bg-white/80 dark:bg-zinc-900/80 rounded-2xl shadow-xl border border-gray-200 dark:border-zinc-800 p-6 sm:p-8 flex flex-col items-center text-center cursor-pointer backdrop-blur-md">
              <CardItem as="div" className="text-3xl sm:text-4xl mb-4">{item.icon}</CardItem>
              <CardItem as="h3" className="text-lg sm:text-xl font-bold mb-2 text-foreground">{item.title}</CardItem>
              <CardItem as="p" className="text-gray-700 dark:text-gray-300 text-sm sm:text-base font-medium">{item.description}</CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  );
} 