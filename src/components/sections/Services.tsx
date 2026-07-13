"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Magnet,
  HeartHandshake,
  Hand,
  Flower2,
  Mountain,
  Atom,
  Eye,
  Wind,
  ChevronDown,
} from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Barras Access",
    description:
      "Las Barras Access® son una técnica de bienestar que trabaja con 32 puntos ubicados en la cabeza. Cada uno de estos puntos está relacionado con diferentes aspectos de la vida y almacena la carga energética de pensamientos, creencias, emociones, juicios y patrones que hemos ido acumulando con el paso del tiempo. Durante una sesión, estos puntos se activan mediante un toque suave, favoreciendo la liberación de esa carga acumulada. Esto puede ayudarte a soltar limitaciones, reducir el diálogo mental y abrirte a nuevas posibilidades, permitiéndote vivir con mayor claridad, facilidad y bienestar.",
    gradient: "from-violet-500 to-purple-600",
    shadow: "hover:shadow-violet-500/20",
  },
  {
    icon: Magnet,
    title: "Biomagnetismo",
    description:
      "El Biomagnetismo es una terapia complementaria que emplea imanes de mediana intensidad aplicados en puntos específicos del cuerpo. Según los principios de este método, determinadas alteraciones del pH en los tejidos pueden favorecer condiciones asociadas a la presencia o actividad de microorganismos, como virus, bacterias, parásitos y hongos. Desde este enfoque, la aplicación estratégica de campos magnéticos busca favorecer el equilibrio bioenergético del organismo y apoyar sus procesos naturales de autorregulación. Cada sesión se realiza de manera personalizada, ofreciendo un espacio de bienestar y acompañamiento integral.",
    gradient: "from-blue-400 to-indigo-500",
    shadow: "hover:shadow-blue-500/20",
  },
  {
    icon: HeartHandshake,
    title: "Liberación de emociones",
    description:
      "Procedimiento que trabaja con los meridianos energéticos del cuerpo para liberar emociones atrapadas a lo largo de la vida, incluyendo las transgeneracionales. Un proceso simple y poderoso que restaura el equilibrio emocional y el bienestar.",
    gradient: "from-pink-400 to-rose-500",
    shadow: "hover:shadow-rose-500/20",
  },
  {
    icon: Hand,
    title: "Tapping",
    description:
      "Técnica que combina estimulación de puntos energéticos con atención consciente, diseñada para trabajar sobre patrones emocionales y mentales acumulados.",
    gradient: "from-amber-400 to-orange-500",
    shadow: "hover:shadow-amber-500/20",
  },
  {
    icon: Flower2,
    title: "Flores de Bach",
    description:
      "Terapia natural con esencias florales, descubierta por el Dr. Edward Bach, que ayuda a armonizar emociones y estados internos, promoviendo equilibrio y claridad emocional.",
    gradient: "from-fuchsia-400 to-pink-500",
    shadow: "hover:shadow-fuchsia-500/20",
  },
  {
    icon: Mountain,
    title: "Terapia energética ancestral",
    description:
      "Basada en la sabiduría ancestral de los pueblos originarios, la sesión busca armonizar cuerpo, mente y energía, utilizando técnicas de sanación que promueven el Sumaq Kawsay, el buen vivir, para fomentar bienestar integral.",
    gradient: "from-orange-500 to-amber-600",
    shadow: "hover:shadow-orange-500/20",
  },
  {
    icon: Atom,
    title: "Terapia método Yuen",
    description:
      "Técnica de sanación cuántica desarrollada por el Dr. Kam Yuen, basada en la sabiduría ancestral de los Monjes Shaolin, la Medicina Tradicional China y la física cuántica. Permite identificar y liberar bloqueos energéticos y patrones subconscientes, promoviendo equilibrio emocional, claridad mental y desbloqueo del potencial personal.",
    gradient: "from-cyan-400 to-blue-500",
    shadow: "hover:shadow-cyan-500/20",
  },
  {
    icon: Eye,
    title: "Sesiones de terapia transpersonal",
    description:
      "Sesión individual para revisar tu historia emocional y explorar tu mundo interior. Se utilizan herramientas transpersonales para hacer consciente lo inconsciente y ordenar tu información interna.",
    gradient: "from-indigo-400 to-violet-500",
    shadow: "hover:shadow-indigo-500/20",
  },
  {
    icon: Wind,
    title: "Meditación & mindfulness",
    description:
      "Sesiones diseñadas para cultivar la atención plena, la calma interior y la claridad mental, ayudando a mantener el equilibrio emocional y el bienestar diario.",
    gradient: "from-teal-400 to-cyan-500",
    shadow: "hover:shadow-teal-500/20",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

function ServiceCard({ service }: { service: (typeof services)[number] }) {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = service.icon;

  return (
    <motion.div
      variants={item}
      className={`group glass rounded-2xl border border-brand-violet/12 p-6 hover:border-brand-violet/30 hover:shadow-2xl ${service.shadow} transition-all duration-500`}
    >
      <div
        className={`inline-flex p-2.5 rounded-xl bg-gradient-to-br ${service.gradient} mb-5`}
      >
        <Icon size={20} className="text-white" />
      </div>
      <h3 className="font-heading text-xl font-semibold text-brand-text mb-2">
        {service.title}
      </h3>
      <p
        className={`text-brand-muted text-sm leading-relaxed ${
          isOpen ? "" : "line-clamp-3"
        }`}
      >
        {service.description}
      </p>
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-violet-light hover:text-brand-text transition-colors cursor-pointer"
      >
        {isOpen ? "Leer menos" : "Leer más"}
        <ChevronDown
          size={16}
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
    </motion.div>
  );
}

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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start"
        >
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
