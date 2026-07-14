import { Heart } from "lucide-react";
import KairosLogo from "@/components/ui/KairosLogo";

export default function Footer() {
  return (
    <footer className="border-t border-brand-violet/10 py-10 px-6 bg-brand-surface">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-brand-muted text-sm">
        <div className="flex items-center gap-2 font-heading text-xl">
          <KairosLogo className="w-9 h-9" />
          <span className="gradient-text">Kairos</span>
        </div>
        <p className="flex items-center gap-1.5">
          Hecho con{" "}
          <Heart size={13} className="text-brand-rose fill-brand-rose inline" />{" "}
          para tu transformación
        </p>
        <p>© {new Date().getFullYear()} Kairos. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
