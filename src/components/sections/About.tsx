"use client";

import { motion } from "framer-motion";
import { Heart, Star, Users } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Amor propio",
    description: "Cada sesión es un acto de amor y cuidado hacia ti mismo.",
  },
  {
    icon: Star,
    title: "Transformación real",
    description: "Creemos en tu capacidad innata de cambiar y florecer.",
  },
  {
    icon: Users,
    title: "Acompañamiento genuino",
    description: "No estás solo en tu camino de sanación y crecimiento.",
  },
];

export default function About() {
  return (
    <section id="sobre-nosotros" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-rose/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-brand-violet-light text-sm font-medium tracking-widest uppercase">
            Nuestra historia
          </span>
          <h2 className="font-heading text-5xl md:text-6xl font-light mt-3 mb-6 leading-tight">
            Aprovecha tu Kairos,{" "}
            <span className="gradient-text font-semibold italic">
              libera tu potencial
            </span>
          </h2>
          <p className="text-brand-muted text-lg leading-relaxed mb-6">
            <strong className="text-brand-text">Kairos</strong> nació de
            la convicción de que toda persona tiene dentro de sí la capacidad de
            transformarse. Nuestro nombre lo dice todo:{" "}
            <em>Kairos</em> es la palabra griega que describe el momento ideal en
            que algo importante ocurre, una oportunidad única que hay que aprovechar
            cuando llega — y ese momento es ahora.
          </p>
          <p className="text-brand-muted leading-relaxed mb-10">
            A través de técnicas ancestrales y herramientas energéticas modernas,
            creamos un espacio seguro donde puedes soltar lo que ya no te sirve y
            abrirte a la versión más plena de ti mismo.
          </p>

          <div className="space-y-5">
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <div key={val.title} className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-brand-violet/10 border border-brand-violet/20 flex-shrink-0 mt-0.5">
                    <Icon size={16} className="text-brand-violet-light" />
                  </div>
                  <div>
                    <h4 className="text-brand-text font-semibold mb-0.5">
                      {val.title}
                    </h4>
                    <p className="text-brand-muted text-sm">{val.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-violet to-brand-rose opacity-15 blur-2xl" />
            <div className="relative glass rounded-3xl border border-brand-violet/20 p-12 h-full flex flex-col items-center justify-center text-center">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-brand-violet to-brand-rose flex items-center justify-center glow-md mb-6">
                <span className="font-heading text-white text-5xl font-semibold">
                  K
                </span>
              </div>
              <h3 className="font-heading text-3xl font-semibold gradient-text mb-3">
                Kairos
              </h3>
              <p className="text-brand-muted text-sm italic leading-relaxed">
                &ldquo;El momento perfecto no se espera, se reconoce
                y se vive.&rdquo;
              </p>

              {/* Dots decorativos */}
              <div className="absolute top-6 right-6 flex flex-col gap-1.5">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex gap-1.5">
                    {[...Array(3)].map((_, j) => (
                      <div
                        key={j}
                        className="w-1 h-1 rounded-full bg-brand-violet/35"
                      />
                    ))}
                  </div>
                ))}
              </div>
              <div className="absolute bottom-6 left-6 flex flex-col gap-1.5">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex gap-1.5">
                    {[...Array(3)].map((_, j) => (
                      <div
                        key={j}
                        className="w-1 h-1 rounded-full bg-brand-rose/35"
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
