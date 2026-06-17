"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "¿Qué son las terapias holísticas y energéticas?",
    answer:
      "Son prácticas que trabajan con la energía, emociones y bienestar integral, ayudando a equilibrar cuerpo, mente y emociones. Se enfocan en tu crecimiento personal y armonía interior, complementando tu cuidado diario.",
  },
  {
    question: "¿Necesito experiencia previa o conocimientos especiales?",
    answer:
      "No, las sesiones están diseñadas para cualquier persona. Solo necesitas abrirte a la experiencia y querer conectar contigo mismo.",
  },
  {
    question: "¿Cómo funcionan las sesiones individuales?",
    answer:
      "Cada sesión es guiada por mí y adaptada a tus necesidades. Exploraremos tu historia emocional, tus patrones internos y tus bloqueos, utilizando herramientas energéticas y transpersonales.",
  },
  {
    question: "¿Cuánto duran las sesiones?",
    answer:
      "La duración promedio de cada sesión es de 60 a 90 minutos, dependiendo del tipo de terapia y el proceso que se realice.",
  },
  {
    question: "¿Es necesario combinar varias terapias?",
    answer:
      "No es obligatorio. Cada terapia puede realizarse de forma independiente, aunque algunas personas optan por combinarlas para profundizar en su bienestar.",
  },
  {
    question: "¿Es seguro?",
    answer:
      "Sí, todas las terapias son naturales y seguras. No sustituyen atención médica, psicológica o psiquiátrica, sino que la complementan desde el bienestar integral.",
  },
  {
    question: "¿Qué necesito llevar a la sesión?",
    answer:
      "Ropa cómoda y, si es virtual, un espacio tranquilo y buena conexión a internet. Solo tu disposición para explorar y conectar contigo.",
  },
  {
    question: "¿Cómo agendo una sesión?",
    answer:
      "Es muy sencillo. Escríbenos por WhatsApp con tu nombre y el servicio que te interesa. Te responderemos en menos de 24 horas para coordinar fecha, horario y todos los detalles necesarios.",
  }
];

function FAQItem({
  faq,
  index,
}: {
  faq: (typeof faqs)[0];
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="glass rounded-xl border border-brand-violet/12 overflow-hidden hover:border-brand-violet/28 transition-colors duration-300"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer"
        aria-expanded={open}
      >
        <span className="text-brand-text font-medium leading-snug">
          {faq.question}
        </span>
        <span className="flex-shrink-0 p-1.5 rounded-lg bg-brand-violet/10 text-brand-violet-light">
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28 }}
          >
            <div className="px-6 pb-6 text-brand-muted leading-relaxed text-[0.95rem] border-t border-brand-violet/10 pt-4">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 px-6 bg-brand-surface relative">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-brand-violet-light text-sm font-medium tracking-widest uppercase">
            Resolvemos tus dudas
          </span>
          <h2 className="font-heading text-5xl md:text-6xl font-light mt-3">
            Preguntas{" "}
            <span className="gradient-text font-semibold italic">frecuentes</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.question} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
