"use client";

import { motion } from "framer-motion";
import { MessageCircle, Clock, AtSign } from "lucide-react";

const WHATSAPP_NUMBER = "51902154049";
const WHATSAPP_MESSAGE =
  "Hola ReprogrÁmate, me gustaría agendar una sesión de terapia.";

const infoCards = [
  {
    icon: Clock,
    title: "Horario de atención",
    text: "Lunes a viernes: 8am – 7pm\nSábados: 9am – 2pm",
  },
  {
    icon: MessageCircle,
    title: "Respuesta rápida",
    text: "Respondemos en menos de\n24 horas hábiles",
  },
  {
    icon: AtSign,
    title: "Síguenos",
    text: "@reprogramate\nContenido de bienestar diario",
  },
];

export default function Contact() {
  return (
    <section id="contacto" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full bg-brand-violet/8 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-brand-violet-light text-sm font-medium tracking-widest uppercase">
            Da el primer paso
          </span>
          <h2 className="font-heading text-5xl md:text-7xl font-light mt-3 mb-6 leading-tight">
            Comienza tu{" "}
            <span className="gradient-text font-semibold italic">
              transformación
            </span>{" "}
            hoy
          </h2>
          <p className="text-brand-muted text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            No esperes más para invertir en tu bienestar. Escríbenos y con gusto
            te acompañamos a encontrar el servicio que más se adapta a lo que
            necesitas en este momento de tu vida.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-10 py-5 rounded-2xl bg-[#25D366] hover:bg-[#1DAF54] text-white font-semibold text-xl transition-all duration-300 hover:scale-105 shadow-2xl shadow-[#25D366]/15 hover:shadow-[#25D366]/30"
          >
            <MessageCircle size={26} />
            Escríbenos por WhatsApp
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {infoCards.map((info) => {
            const Icon = info.icon;
            return (
              <div
                key={info.title}
                className="glass rounded-xl border border-brand-violet/12 p-6 text-center hover:border-brand-violet/28 transition-colors duration-300"
              >
                <Icon
                  size={20}
                  className="text-brand-violet-light mx-auto mb-3"
                />
                <h4 className="text-brand-text font-semibold mb-2 text-sm">
                  {info.title}
                </h4>
                <p className="text-brand-muted text-sm whitespace-pre-line leading-relaxed">
                  {info.text}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
