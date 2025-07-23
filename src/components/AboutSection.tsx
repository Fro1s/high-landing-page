import React from "react";
import Image from "next/image";
import Frois from "@/assets/foto-frois-sem-fundo-2.png"
import Basilio from "@/assets/foto-basilio-sem-fundo.png"

export default function AboutSection() {
  return (
    <section className="relative w-full py-10 sm:py-16 md:py-20 bg-background px-2 sm:px-4 md:px-8 flex flex-col items-center justify-center min-h-[60vh]" id="sobre">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 text-center text-primary">Quem somos</h2>
      <div className="relative z-10 grid grid-cols-1 xl:grid-cols-2 gap-8 sm:gap-12 md:gap-16 mx-auto w-full max-w-full">

        <div className="flex flex-col md:flex-row items-stretch bg-primary/10 dark:bg-primary/80 rounded-2xl shadow-xl p-4 sm:p-8 md:p-10 lg:p-12 backdrop-blur-md border border-primary/20 dark:border-primary w-full min-h-[320px] md:min-h-[400px] mx-auto max-w-full md:max-w-lg lg:max-w-xl xl:max-w-full">
          <div className="flex-shrink-0 flex items-center justify-center mb-4 sm:mb-6 md:mb-0 md:mr-8 lg:mr-10 min-h-[200px] md:min-h-[320px]">
            <Image src={Basilio} alt="Foto Vinicius Basílio" width={320} height={400} className="rounded-2xl object-cover w-full max-w-xs h-[200px] sm:h-[320px] md:h-[400px]" />
          </div>
          <div className="flex-1 flex flex-col justify-center text-center md:text-left break-words">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Vinicius Basílio</h3>
            <p className="text-sm sm:text-base text-primary dark:text-primary-foreground font-medium mb-2">
              Apaixonado por tecnologia que resolve, transformo complexidade em produtos intuitivos — porque solução boa é aquela que o cliente usa sem precisar de manual, investe sem hesitar e vê resultado naturalmente. Minha missão é criar produtos que entregam clareza desde o primeiro clique, com código eficiente e experiência que fala por si.            </p>
            <p className="text-xs sm:text-sm text-primary dark:text-primary-foreground">
              Desenvolvedor Full Stack, Especialista em back-end.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-stretch bg-primary/10 dark:bg-primary/80 rounded-2xl shadow-xl p-4 sm:p-8 md:p-10 lg:p-12 backdrop-blur-md border border-primary/20 dark:border-primary w-full min-h-[320px] md:min-h-[400px] mx-auto max-w-full md:max-w-lg lg:max-w-xl xl:max-w-full">
          <div className="flex-shrink-0 flex items-center justify-center mb-4 sm:mb-6 md:mb-0 md:mr-8 lg:mr-10 min-h-[200px] md:min-h-[320px]">
            <Image src={Frois} alt="Foto Matheus Frois" width={320} height={400} className="rounded-2xl object-cover w-full max-w-xs h-[200px] sm:h-[320px] md:h-[400px]" />
          </div>
          <div className="flex-1 flex flex-col justify-center text-center md:text-left break-words">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Matheus Frois</h3>
            <p className="text-sm sm:text-base text-primary dark:text-primary-foreground font-medium mb-2">
              Entrego tecnologia que faz sentido no dia a dia. Gosto de transformar desafios técnicos em soluções simples, funcionais e agradáveis de usar. Para mim, um bom sistema não precisa de instrução: ele se apresenta com clareza, gera confiança e entrega resultado. Trabalho para desenvolver aplicações enxutas, com código bem estruturado e foco total na experiência de quem usa.            </p>
            <p className="text-xs sm:text-sm text-primary dark:text-primary-foreground">
              Desenvolvedor Full Stack, Especialista em front-end.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 