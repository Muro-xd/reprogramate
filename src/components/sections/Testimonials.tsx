"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Lenin R",
    role: "Ingeniero",
    text: "Las Barras de Access cambiaron mi vida por completo. Llevaba años con ansiedad crónica y después de tres sesiones siento una paz que no conocía. Neuroconsciencia es un lugar de verdadera transformación.",
    stars: 5,
    initials: "LR",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    name: "Oscar",
    role: "Docente",
    text: "Llegué sin creer mucho en estas terapias, pero la alineación de chakras me abrió los ojos. Mi energía mejoró, duermo mejor y tengo mucha más claridad mental. Definitivamente seguiré viniendo.",
    stars: 5,
    initials: "O",
    gradient: "from-amber-400 to-orange-500",
  },
  {
    name: "Daniel B",
    role: "Diseñador",
    text: "La meditación guiada con Neuroconsciencia es diferente a todo lo que había probado. El acompañamiento es muy profesional y se nota el amor que ponen en cada sesión. ¡Totalmente recomendado!",
    stars: 5,
    initials: "DB",
    gradient: "from-pink-400 to-rose-500",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-brand-violet/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-brand-violet-light text-sm font-medium tracking-widest uppercase">
            Experiencias reales
          </span>
          <h2 className="font-heading text-5xl md:text-6xl font-light mt-3">
            Lo que dicen{" "}
            <span className="gradient-text font-semibold italic">
              nuestros clientes
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass rounded-2xl border border-brand-violet/12 p-8 flex flex-col gap-5 hover:border-brand-violet/30 transition-all duration-300"
            >
              <Quote size={26} className="text-brand-violet/35" />

              <p className="text-brand-muted leading-relaxed flex-1 italic text-[0.95rem]">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex gap-1">
                {Array.from({ length: t.stars }).map((_, idx) => (
                  <Star
                    key={idx}
                    size={13}
                    className="text-brand-gold fill-brand-gold"
                  />
                ))}
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-brand-violet/10">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-brand-text font-semibold text-sm">
                    {t.name}
                  </div>
                  <div className="text-brand-muted text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
