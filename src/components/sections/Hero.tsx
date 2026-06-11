"use client";

import { motion } from "framer-motion";
import { MessageCircle, ChevronDown } from "lucide-react";

const WHATSAPP_NUMBER = "51902154049";
const WHATSAPP_MESSAGE = "Hola ReprogrÁmate, me gustaría agendar una sesión de terapia.";

const stats = [
  { value: "+200", label: "Sesiones realizadas" },
  { value: "+5", label: "Años de experiencia" },
  { value: "100%", label: "Compromiso contigo" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-20">
      {/* Orbs decorativos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-violet/20 blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-brand-rose/15 blur-3xl animate-pulse"
          style={{ animationDelay: "1.2s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full bg-brand-violet-dark/8 blur-3xl" />
      </div>

      {/* Grid de puntos */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #8B5CF6 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-violet/20 text-brand-violet-light text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-brand-violet animate-pulse flex-shrink-0" />
          Terapias alternativas &amp; sanación energética
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-6xl md:text-7xl lg:text-8xl font-light leading-[1.1] mb-6"
        >
          Transforma tu mente,{" "}
          <span className="gradient-text font-semibold italic">
            ámate sin límites
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-brand-muted text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          En{" "}
          <strong className="text-brand-text font-semibold">ReprogrÁmate</strong>{" "}
          te acompañamos en un viaje de transformación interior a través de
          barras de Access, alineación de chakras, meditación guiada y limpiezas
          energéticas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-brand-violet to-brand-rose text-white font-semibold text-lg glow-md hover:scale-105 transition-all duration-300"
          >
            <MessageCircle size={20} />
            Agenda tu primera sesión
          </a>
          <a
            href="#servicios"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass border border-brand-violet/25 text-brand-text font-medium text-lg hover:border-brand-violet/50 hover:bg-brand-violet/10 transition-all duration-300"
          >
            Descubre los servicios
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-wrap justify-center gap-12 mt-16"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="gradient-text font-heading text-4xl font-semibold">
                {s.value}
              </div>
              <div className="text-brand-muted text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ChevronDown size={24} className="text-brand-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
