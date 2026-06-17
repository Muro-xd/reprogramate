"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Leaf,
  Brain,
  Zap,
  Shield,
  Flame,
  Sun,
  Coffee,
  Sparkles,
  Star,
  Wind,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const WHATSAPP_NUMBER = "51902154049";

type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  gradient: string;
  icon: LucideIcon;
  // Ruta local: "/products/{id}.webp" — null mientras no haya imagen
  image: string | null;
};

const products: Product[] = [
  {
    id: "ashwagandha",
    name: "Ashwagandha",
    category: "Adaptógeno",
    description:
      "Raíz adaptógena que reduce el cortisol, combate el estrés crónico y restaura el equilibrio del sistema nervioso.",
    gradient: "from-amber-700 to-orange-600",
    icon: Leaf,
    image: null,
  },
  {
    id: "melena-de-leon",
    name: "Melena de León",
    category: "Hongo funcional",
    description:
      "Nootrópico natural que estimula el NGF, mejora la memoria, concentración y protege la salud neurológica.",
    gradient: "from-yellow-500 to-amber-600",
    icon: Brain,
    image: null,
  },
  {
    id: "hongos-psilocibina",
    name: "Hongos de Psilocibina",
    category: "Psilocibina",
    description:
      "Expansores de conciencia con profundo potencial terapéutico. Apoyo en procesos de introspección y sanación emocional.",
    gradient: "from-violet-600 to-purple-700",
    icon: Sparkles,
    image: null,
  },
  {
    id: "reishi",
    name: "Reishi",
    category: "Hongo funcional",
    description:
      "El 'hongo de la inmortalidad'. Potente inmunomodulador con efectos adaptógenos y propiedades antiestrés profundas.",
    gradient: "from-red-700 to-rose-600",
    icon: Shield,
    image: null,
  },
  {
    id: "chaga",
    name: "Chaga",
    category: "Hongo funcional",
    description:
      "Rey de los antioxidantes. Fortalece el sistema inmune, reduce la inflamación y protege a nivel celular.",
    gradient: "from-stone-600 to-amber-800",
    icon: Zap,
    image: null,
  },
  {
    id: "cordyceps",
    name: "Cordyceps",
    category: "Hongo funcional",
    description:
      "Potenciador natural de energía y resistencia física. Favorece la oxigenación celular y el rendimiento atlético.",
    gradient: "from-orange-500 to-red-600",
    icon: Flame,
    image: null,
  },
  {
    id: "maca",
    name: "Maca Andina",
    category: "Adaptógeno",
    description:
      "Raíz sagrada de los Andes que equilibra hormonas, aumenta la vitalidad y refuerza el sistema reproductivo.",
    gradient: "from-yellow-600 to-orange-500",
    icon: Sun,
    image: null,
  },
  {
    id: "cacao-ceremonial",
    name: "Cacao Ceremonial",
    category: "Ceremonial",
    description:
      "Cacao puro de origen ancestral para rituales de conexión interior, apertura cardíaca y presencia plena.",
    gradient: "from-yellow-900 to-amber-800",
    icon: Coffee,
    image: null,
  },
  {
    id: "bacopa",
    name: "Bacopa Monnieri",
    category: "Nootrópico",
    description:
      "Hierba ayurvédica que mejora la retención de memoria, reduce la ansiedad y potencia la función cognitiva.",
    gradient: "from-teal-600 to-cyan-700",
    icon: Wind,
    image: null,
  },
  {
    id: "curcuma",
    name: "Cúrcuma & Pimienta Negra",
    category: "Antiinflamatorio",
    description:
      "Combinación sinérgica con curcumina de alta biodisponibilidad. Potente antiinflamatorio y neuroprotector.",
    gradient: "from-yellow-400 to-amber-500",
    icon: Star,
    image: null,
  },
  {
    id: "mucuna",
    name: "Mucuna Pruriens",
    category: "Nootrópico",
    description:
      "Fuente natural de L-DOPA, precursor de la dopamina. Eleva el estado de ánimo, motivación y bienestar general.",
    gradient: "from-violet-500 to-indigo-600",
    icon: Sparkles,
    image: null,
  },
  {
    id: "rhodiola",
    name: "Rhodiola Rosea",
    category: "Adaptógeno",
    description:
      "Adaptógeno nórdico que aumenta la resistencia al estrés, combate la fatiga mental y mejora el enfoque sostenido.",
    gradient: "from-rose-500 to-pink-600",
    icon: Leaf,
    image: null,
  },
];

const CATEGORIES = Array.from(new Set(products.map((p) => p.category)));
const TABS = ["Todos", ...CATEGORIES];

const categoryColors: Record<string, string> = {
  Adaptógeno: "bg-amber-500/15 text-amber-300 border-amber-500/25",
  "Hongo funcional": "bg-emerald-500/15 text-emerald-300 border-emerald-500/25",
  Psilocibina: "bg-violet-500/15 text-violet-300 border-violet-500/25",
  Ceremonial: "bg-rose-500/15 text-rose-300 border-rose-500/25",
  Nootrópico: "bg-cyan-500/15 text-cyan-300 border-cyan-500/25",
  Antiinflamatorio: "bg-yellow-500/15 text-yellow-300 border-yellow-500/25",
};

function ProductCard({ product }: { product: Product }) {
  const Icon = product.icon;
  const badgeClass =
    categoryColors[product.category] ??
    "bg-brand-violet/15 text-brand-violet-light border-brand-violet/25";
  const waMessage = encodeURIComponent(
    `Hola ReprogrÁmate, me interesa el producto *${product.name}*. ¿Me pueden dar más información?`
  );

  return (
    <article className="group glass rounded-2xl border border-brand-violet/12 overflow-hidden hover:border-brand-violet/30 hover:shadow-2xl hover:shadow-brand-violet/10 transition-all duration-500 flex flex-col w-[80vw] sm:w-[300px]">
      <div className="relative w-full aspect-[4/3] overflow-hidden flex-shrink-0">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 80vw, 300px"
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div
            className={`w-full h-full bg-gradient-to-br ${product.gradient} flex items-center justify-center group-hover:scale-105 transition-transform duration-700`}
          >
            <Icon size={52} className="text-white/40" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="p-5 flex flex-col">
        <span
          className={`self-start text-xs font-medium px-2.5 py-1 rounded-full border mb-3 ${badgeClass}`}
        >
          {product.category}
        </span>

        <h3 className="font-heading text-xl font-semibold text-brand-text mb-2 leading-snug line-clamp-2 h-[3.5rem]">
          {product.name}
        </h3>

        <p className="text-brand-muted text-sm leading-relaxed line-clamp-3 h-[4.3rem] mb-5">
          {product.description}
        </p>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-[#25D366]/10 border border-[#25D366]/25 text-[#4ADE80] text-sm font-medium hover:bg-[#25D366] hover:text-white hover:border-transparent transition-all duration-300"
        >
          <MessageCircle size={15} />
          Consultar precio
        </a>
      </div>
    </article>
  );
}

export default function Products() {
  const [activeTab, setActiveTab] = useState("Todos");
  const trackRef = useRef<HTMLDivElement>(null);

  const filtered =
    activeTab === "Todos"
      ? products
      : products.filter((p) => p.category === activeTab);

  useEffect(() => {
    if (trackRef.current) trackRef.current.scrollLeft = 0;
  }, [activeTab]);

  const scroll = (dir: "left" | "right") => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: dir === "left" ? -324 : 324, behavior: "smooth" });
  };

  return (
    <section id="productos" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-rose/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-brand-violet-light text-sm font-medium tracking-widest uppercase">
            Tienda natural
          </span>
          <h2 className="font-heading text-5xl md:text-6xl font-light mt-3 mb-4">
            Nuestros{" "}
            <span className="gradient-text font-semibold italic">productos</span>
          </h2>
          <p className="text-brand-muted text-lg max-w-xl mx-auto">
            Suplementos naturales, adaptógenos y hongos funcionales seleccionados
            para potenciar tu bienestar desde adentro.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex gap-2 overflow-x-auto pb-2 mb-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-none px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                activeTab === tab
                  ? "bg-brand-violet text-white border-brand-violet shadow-lg shadow-brand-violet/30"
                  : "bg-transparent text-brand-muted border-brand-violet/20 hover:border-brand-violet/50 hover:text-brand-text"
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Carousel — alineado al mismo contenedor que el header y las tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="relative"
        >
          {/* Flechas de navegación */}
          <button
            onClick={() => scroll("left")}
            aria-label="Anterior"
            className="absolute left-2 md:left-4 top-[45%] -translate-y-1/2 z-20 w-9 h-9 rounded-full glass border border-brand-violet/25 hidden md:flex items-center justify-center text-brand-muted hover:text-brand-text hover:border-brand-violet/50 transition-all duration-300"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Siguiente"
            className="absolute right-2 md:right-4 top-[45%] -translate-y-1/2 z-20 w-9 h-9 rounded-full glass border border-brand-violet/25 hidden md:flex items-center justify-center text-brand-muted hover:text-brand-text hover:border-brand-violet/50 transition-all duration-300"
          >
            <ChevronRight size={18} />
          </button>

          {/* Track */}
          <div
            ref={trackRef}
            className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {filtered.map((product) => (
              <div key={product.id} className="snap-start flex-none">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
