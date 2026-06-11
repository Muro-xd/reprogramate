"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "¿Qué son las Barras de Access y para qué sirven?",
    answer:
      "Las Barras de Access son 32 puntos en la cabeza que, al ser tocados suavemente, liberan la energía eléctrica atascada de pensamientos, creencias y emociones limitantes. Ayudan a reducir el estrés, mejorar el sueño, aliviar la ansiedad y abrir espacio para nuevas posibilidades en tu vida.",
  },
  {
    question: "¿Necesito creer en energías para que las terapias funcionen?",
    answer:
      "No es necesario. La mayoría de nuestros clientes llegaron con escepticismo y reportaron cambios positivos. Las terapias trabajan de forma holística —mente, cuerpo y energía— y los resultados suelen hablar por sí mismos.",
  },
  {
    question: "¿Cuántas sesiones necesito para ver resultados?",
    answer:
      "Depende de cada persona y sus objetivos. Muchos clientes notan cambios significativos desde la primera sesión. Para transformaciones más profundas, recomendamos entre 3 y 6 sesiones con regularidad. Durante la consulta inicial te orientamos según tu caso específico.",
  },
  {
    question: "¿Las sesiones son presenciales o virtuales?",
    answer:
      "Ofrecemos ambas modalidades. Las sesiones presenciales potencian la experiencia energética, pero terapias como la meditación guiada y ciertas técnicas de alineación funcionan muy bien de forma virtual también.",
  },
  {
    question: "¿Cuánto dura una sesión?",
    answer:
      "Las sesiones tienen una duración aproximada de 60 a 90 minutos, incluyendo una breve consulta inicial y el proceso de integración al final. Te recomendamos disponer de tiempo para descansar después.",
  },
  {
    question: "¿Cómo puedo agendar mi primera sesión?",
    answer:
      "Es muy sencillo. Escríbenos por WhatsApp con tu nombre y el servicio que te interesa. Te responderemos en menos de 24 horas para coordinar fecha, horario y todos los detalles necesarios.",
  },
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
