import React from "react";

const testimonials = [
  {
    name: "João Silva",
    company: "Startup",
    text: "A High Development entregou nossa plataforma com agilidade e qualidade. Superou expectativas!",
  },
  {
    name: "Maria Oliveira",
    company: "Agência Financeira",
    text: "Equipe muito profissional, design moderno e suporte excelente. Recomendo!",
  },
  {
    name: "Carlos Souza",
    company: "E-commerce",
    text: "Nossos resultados melhoraram muito após o novo sistema desenvolvido pela High Development.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="w-full py-10 sm:py-16 px-2 sm:px-4 md:px-8 flex flex-col items-center bg-background text-primary" id="depoimentos">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 text-center">Depoimentos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="bg-primary/10 dark:bg-primary/80 rounded-xl shadow-lg p-4 sm:p-6 flex flex-col items-center text-center border border-primary/20 dark:border-primary w-full max-w-xs mx-auto"
          >
            <p className="text-base sm:text-lg italic mb-4 text-primary">“{t.text}”</p>
            <div className="font-semibold text-primary">{t.name}</div>
            <div className="text-xs sm:text-sm text-primary/70">{t.company}</div>
          </div>
        ))}
      </div>
    </section>
  );
} 