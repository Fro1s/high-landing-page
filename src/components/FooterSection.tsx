import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, Phone, Mail, MessageCircle } from "lucide-react";
import LogoHigh from "@/assets/logo-high.png"

export default function FooterSection() {
  return (
    <footer className="w-full bg-primary text-background py-8 sm:py-10 px-2 sm:px-4 md:px-8 flex flex-col items-center" id="contato">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-x-16 lg:gap-x-32 mb-6 sm:mb-8 items-start">

        <div className="w-full text-center md:text-left flex flex-col justify-center items-center md:items-start">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-semibold text-xl sm:text-2xl mb-2">Redes & Contato</span>
            <Link href="https://www.instagram.com/highdevelopments" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 justify-center md:justify-start hover:text-[#00C896] hover:underline transition-colors">
              <Instagram size={20} /> Instagram
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 justify-center md:justify-start hover:text-[#00C896] hover:underline transition-colors">
              <Linkedin size={20} /> LinkedIn
            </Link>
            <Link href="https://wa.me/5512991231603" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 justify-center md:justify-start hover:text-[#00C896] hover:underline transition-colors">
              <MessageCircle size={20} /> WhatsApp
            </Link>
            <Link href="mailto:contato@highdevelopments.com" className="flex items-center gap-2 justify-center md:justify-start hover:text-[#00C896] hover:underline transition-colors">
              <Mail size={20} /> Email
            </Link>
            <span className="flex items-center gap-2 justify-center md:justify-start text-gray-300">
              <Phone size={20} /> (12) 99123-1603
            </span>
          </div>
        </div>

        <div className="w-full flex flex-col items-center justify-center">
          <div className="flex flex-col items-center">
            <Image src={LogoHigh} alt="High Developments Logo" width={100} height={100} className="mb-2" />
            <span className="font-bold text-xl sm:text-2xl text-center">HIGH DEVELOPMENTS</span>
          </div>
        </div>

        <div className="w-full text-center md:text-right flex flex-col items-center md:items-end">
          <h3 className="text-xl sm:text-2xl font-bold mb-2">Pronto para transformar seu negócio?</h3>
          <Link
            href="mailto:contato@highdevelopments.com"
            className="inline-block mt-2 px-4 sm:px-6 py-2 rounded-full bg-background text-primary font-semibold text-base sm:text-lg shadow-lg hover:bg-primary hover:text-background transition-colors"
          >
            Entre em contato
          </Link>
        </div>
      </div>
      <div className="text-white text-xs sm:text-sm text-center">© {new Date().getFullYear()} High Developments. Todos os direitos reservados.</div>
    </footer>
  );
}