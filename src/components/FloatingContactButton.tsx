'use client'

import React, { useState } from "react";
import Link from "next/link";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function FloatingContactButton() {
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [message, setMessage] = useState("");
  const email = "atendimento@high-development.com.br";
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Contato%20High%20Developments&body=${encodeURIComponent(message)}`;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="fixed z-50 bottom-6 right-6 bg-primary hover:bg-primary/80 text-white rounded-full shadow-lg flex items-center gap-2 px-5 py-3 font-semibold text-base transition-all animate-bounce"
          aria-label="Fale conosco"
        >
          <Phone />
          Fale conosco
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-sm mx-auto">
        <DialogHeader>
          <DialogTitle>Como deseja entrar em contato?</DialogTitle>
          <DialogDescription>Escolha uma das opções abaixo:</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 mt-4">
          <Button asChild variant="outline" className="w-full">
            <Link href="https://instagram.com/highdevelopments" target="_blank" rel="noopener noreferrer">
              Instagram
            </Link>
          </Button>
          <Button asChild variant="outline" className="w-full">
            <Link href="https://wa.me/5512991231603" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </Link>
          </Button>
          <Button type="button" variant="outline" className="w-full" onClick={() => setShowEmailForm((v) => !v)}>
            Email
          </Button>
          {showEmailForm && (
            <form className="flex flex-col gap-2 mt-2">
              <textarea
                className="rounded border border-gray-300 p-2 text-black"
                rows={3}
                placeholder="Digite sua mensagem..."
                value={message}
                onChange={e => setMessage(e.target.value)}
              />
              <Button asChild className="w-full mt-1" disabled={!message.trim()}>
                <a href={gmailLink} target="_blank" rel="noopener noreferrer">
                  Enviar via Gmail
                </a>
              </Button>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
} 