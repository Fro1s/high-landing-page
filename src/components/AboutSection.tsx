import React from "react";

export default function AboutSection() {
  return (
    <section className="relative w-full py-10 sm:py-16 md:py-20 bg-background px-2 sm:px-4 md:px-8 flex flex-col items-center justify-center min-h-[40vh]" id="sobre">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 text-center text-primary">Quem somos</h2>
      <div className="flex flex-col items-center justify-center w-full max-w-2xl mx-auto">
        <div className="bg-primary/10 dark:bg-primary/80 rounded-2xl shadow-xl p-6 sm:p-10 md:p-12 backdrop-blur-md border border-primary/20 dark:border-primary w-full text-center">
          <p className="text-base sm:text-lg text-primary dark:text-primary-foreground font-medium mb-2">
            Somos uma empresa formada por dois jovens empresários apaixonados por tecnologia e inovação. Acreditamos que soluções digitais devem ser simples, intuitivas e gerar resultados reais para quem usa. Nosso propósito é transformar desafios técnicos em experiências claras, funcionais e agradáveis, desenvolvendo sistemas e produtos digitais que entregam valor desde o primeiro contato.
          </p>
          <p className="text-sm sm:text-base text-primary dark:text-primary-foreground">
            Unimos criatividade, conhecimento técnico e visão de negócio para criar aplicações enxutas, com código bem estruturado e foco total na experiência do usuário. Mais do que entregar software, queremos construir confiança, clareza e crescimento para nossos clientes.
          </p>
        </div>
      </div>
    </section>
  );
} 