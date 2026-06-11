"use client";

import { motion } from "framer-motion";
import { MessageCircle, CalendarCheck, Sparkles, HeartHandshake } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Contacto inicial",
    description:
      "Escríbenos por WhatsApp. Conversamos sobre tus necesidades y te explicamos qué esperar de la sesión.",
  },
  {
    number: "02",
    icon: CalendarCheck,
    title: "Agenda tu sesión",
    description:
      "Elegimos juntos el servicio más adecuado para ti y coordinamos fecha y horario que se adapten a tu vida.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Tu sesión de sanación",
    description:
      "En un espacio de calma y confianza realizamos el proceso energético con dedicación y total profesionalismo.",
  },
  {
    number: "04",
    icon: HeartHandshake,
    title: "Integración y seguimiento",
    description:
      "Te acompañamos después de la sesión para asegurar que los cambios se integren plenamente en tu vida.",
  },
];

export default function Process() {
  return (
    <section id="proceso" className="py-24 px-6 bg-brand-surface relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#8B5CF6 1px, transparent 1px), linear-gradient(90deg, #8B5CF6 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-brand-violet-light text-sm font-medium tracking-widest uppercase">
            Cómo funciona
          </span>
          <h2 className="font-heading text-5xl md:text-6xl font-light mt-3">
            Tu camino hacia la{" "}
            <span className="gradient-text font-semibold italic">sanación</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-9 left-[58%] right-0 h-px bg-gradient-to-r from-brand-violet/30 to-transparent z-10" />
                )}
                <div className="glass rounded-2xl border border-brand-violet/12 p-6 hover:border-brand-violet/30 transition-all duration-300 h-full">
                  <div className="flex items-start gap-3 mb-4">
                    <span className="font-heading text-4xl font-semibold text-brand-violet/25 leading-none">
                      {step.number}
                    </span>
                    <div className="p-2.5 rounded-xl bg-brand-violet/10 border border-brand-violet/20 flex-shrink-0">
                      <Icon size={18} className="text-brand-violet-light" />
                    </div>
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-brand-text mb-2">
                    {step.title}
                  </h3>
                  <p className="text-brand-muted text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
