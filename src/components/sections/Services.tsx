"use client";

import { motion } from "framer-motion";
import { Brain, Zap, Wind, Sparkles } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Barras de Access",
    description:
      "Libera patrones y limitaciones energéticas mediante 32 puntos específicos en la cabeza que almacenan pensamientos, emociones y creencias que te impiden avanzar.",
    gradient: "from-violet-500 to-purple-600",
    shadow: "hover:shadow-violet-500/20",
  },
  {
    icon: Zap,
    title: "Alineación de Chakras",
    description:
      "Equilibra y armoniza tus centros energéticos para restaurar el flujo vital, promoviendo bienestar físico, emocional y espiritual de manera integral.",
    gradient: "from-amber-400 to-orange-500",
    shadow: "hover:shadow-amber-500/20",
  },
  {
    icon: Wind,
    title: "Meditación Guiada",
    description:
      "Sesiones personalizadas que te llevan a estados profundos de relajación y expansión de consciencia, reduciendo el estrés, la ansiedad y el ruido mental.",
    gradient: "from-pink-400 to-rose-500",
    shadow: "hover:shadow-pink-500/20",
  },
  {
    icon: Sparkles,
    title: "Limpiezas Energéticas",
    description:
      "Purifica tu campo áurico y tus espacios, disolviendo energías densas y bloqueos que impiden tu crecimiento, bienestar y plenitud personal.",
    gradient: "from-cyan-400 to-teal-500",
    shadow: "hover:shadow-cyan-500/20",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Services() {
  return (
    <section id="servicios" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-violet-light text-sm font-medium tracking-widest uppercase">
            Lo que ofrecemos
          </span>
          <h2 className="font-heading text-5xl md:text-6xl font-light mt-3 mb-4">
            Nuestros{" "}
            <span className="gradient-text font-semibold italic">servicios</span>
          </h2>
          <p className="text-brand-muted text-lg max-w-xl mx-auto">
            Cada sesión es un espacio sagrado diseñado para tu transformación
            personal y bienestar integral.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.title}
                variants={item}
                className={`group glass rounded-2xl border border-brand-violet/12 p-8 hover:border-brand-violet/30 hover:shadow-2xl ${svc.shadow} transition-all duration-500`}
              >
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${svc.gradient} mb-6`}
                >
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-brand-text mb-3">
                  {svc.title}
                </h3>
                <p className="text-brand-muted leading-relaxed">
                  {svc.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
