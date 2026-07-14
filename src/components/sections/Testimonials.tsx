"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";

const testimonials = [
  {
    name: "Manuel García",
    role: "Emprendedor",
    text: "No sabía exactamente qué esperar de mi primera sesión de Barras Access, pero me sorprendió profundamente. A los pocos minutos entré en un estado de relajación tan profundo que me quedé dormido. Al despertar me sentía ligero, con la mente despejada y una tranquilidad difícil de explicar. Sentí que la sesión me ayudó a conectar con aspectos de mi mundo interior y a soltar pensamientos que llevaba cargando desde hacía mucho tiempo.",
    stars: 5,
    initials: "MG",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    name: "Daniel Barco",
    role: "Técnico",
    text: "Siempre fui una persona bastante escéptica y me gusta entender el porqué de las cosas. Durante la sesión comprendí mejor cómo nuestro cuerpo funciona a través de procesos bioeléctricos y campos electromagnéticos naturales. Eso despertó mi interés por el Biomagnetismo. Más allá de la experiencia, me fui con una sensación de equilibrio, relajación y una nueva forma de comprender la relación entre el cuerpo y la energía.",
    stars: 5,
    initials: "DC",
    gradient: "from-teal-500 to-cyan-600",
  },
  {
    name: "Alejandro Cárdenas",
    role: "Profesional",
    text: "Conocí el Método Yuen por recomendación de un familiar y superó mis expectativas. Durante la sesión sentí un proceso muy profundo de introspección y al finalizar experimenté una mayor claridad mental y confianza para enfrentar situaciones que antes me generaban inseguridad. Agradezco el profesionalismo y la dedicación con la que fui acompañado durante toda la experiencia.",
    stars: 5,
    initials: "AC",
    gradient: "from-indigo-400 to-violet-500",
  },
  {
    name: "Tania Sebastián",
    role: "Profesora",
    text: "No imaginaba cuánto podían influir las emociones que había guardado durante tantos años. La sesión de Liberación de Emociones me permitió comprender mejor mi mundo interior y sentir un gran alivio emocional. Salí con una sensación de tranquilidad y una nueva perspectiva para afrontar mi día a día. Fue una experiencia que realmente marcó un antes y un después para mí.",
    stars: 5,
    initials: "TS",
    gradient: "from-fuchsia-500 to-pink-600",
  },
  {
    name: "Lenin Ramon",
    role: "Estudiante",
    text: "Al llegar, me explicó la cosmovisión andina y el significado de cada parte de la sesión. Me gustó que no fuera solo una terapia, sino también una oportunidad para comprender cómo nuestros ancestros entendían la relación entre la naturaleza, la energía y el ser humano. Durante la experiencia sentí un ambiente de mucha paz y respeto. Al finalizar, me fui con una profunda sensación de equilibrio, conexión conmigo mismo y una mayor valoración de esta sabiduría ancestral. Sin duda, fue una experiencia muy enriquecedora.",
    stars: 5,
    initials: "LR",
    gradient: "from-orange-400 to-amber-500",
  },
];

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
};

function TestimonialCard({ t }: { t: (typeof testimonials)[number] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="glass rounded-2xl border border-brand-violet/12 p-8 flex flex-col gap-5 hover:border-brand-violet/30 transition-colors duration-300">
      <Quote size={26} className="text-brand-violet/35" />

      <div
        className="relative overflow-hidden"
        style={{
          maxHeight: expanded ? "600px" : "6rem",
          transition: "max-height 0.35s ease-in-out",
        }}
      >
        <p className="text-brand-muted leading-relaxed italic text-[0.95rem]">
          &ldquo;{t.text}&rdquo;
        </p>
        {!expanded && (
          <div
            className="absolute bottom-0 left-0 right-0 h-10 pointer-events-none"
            style={{ background: "linear-gradient(to top, #1B1440, transparent)" }}
          />
        )}
      </div>

      <button
        type="button"
        onClick={() => setExpanded((e) => !e)}
        className="self-start inline-flex items-center gap-1 text-sm font-medium text-brand-violet-light hover:text-brand-text transition-colors"
      >
        {expanded ? "Leer menos" : "Leer más"}
        <ChevronDown
          size={14}
          className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
        />
      </button>

      <div className="flex gap-1">
        {Array.from({ length: t.stars }).map((_, idx) => (
          <Star key={idx} size={13} className="text-brand-gold fill-brand-gold" />
        ))}
      </div>

      <div className="flex items-center gap-3 pt-3 border-t border-brand-violet/10">
        <div
          className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
        >
          {t.initials}
        </div>
        <div>
          <div className="text-brand-text font-semibold text-sm">{t.name}</div>
          <div className="text-brand-muted text-xs">{t.role}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const navigate = useCallback((dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length);
  }, []);

  const goTo = useCallback(
    (index: number) => {
      if (index === current) return;
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  useEffect(() => {
    if (isPaused) return;
    const timer = setTimeout(() => navigate(1), 5000);
    return () => clearTimeout(timer);
  }, [current, isPaused, navigate]);

  return (
    <section
      id="testimonios"
      className="py-24 px-6 relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
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

        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <TestimonialCard t={testimonials[current]} />
            </motion.div>
          </AnimatePresence>

          {/* Controles de navegación */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => navigate(-1)}
              className="p-2.5 rounded-full glass border border-brand-violet/20 text-brand-violet-light hover:text-brand-text hover:border-brand-violet/40 transition-all duration-200"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-6 bg-brand-violet"
                      : "w-2 bg-brand-violet/30 hover:bg-brand-violet/50"
                  }`}
                  aria-label={`Ir al testimonio ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => navigate(1)}
              className="p-2.5 rounded-full glass border border-brand-violet/20 text-brand-violet-light hover:text-brand-text hover:border-brand-violet/40 transition-all duration-200"
              aria-label="Testimonio siguiente"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
