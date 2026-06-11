# ReprogrÁmate — Landing Page

Landing page para **ReprogrÁmate**, empresa de terapias alternativas (Barras de Access, Alineación de Chakras, Meditación Guiada, Limpiezas Energéticas).

## Stack

- [Next.js 16](https://nextjs.org) (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion (animaciones)
- React Hook Form + Zod (formulario de contacto)
- Lucide React (íconos)

## Empezar (desarrollo local)

Instalar dependencias:

```bash
npm install
```

Levantar el servidor de desarrollo:

```bash
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

## Estructura del proyecto

```
src/
├── app/
│   ├── layout.tsx       # layout raíz: fuentes y metadata SEO
│   ├── page.tsx         # ensambla todas las secciones de la landing
│   └── globals.css      # estilos globales / Tailwind
└── components/
    ├── layout/           # Navbar, Footer
    └── sections/         # Hero, Services, About, Process, Testimonials, FAQ, Contact
```

## Scripts disponibles

| Comando         | Descripción                              |
| --------------- | ----------------------------------------- |
| `npm run dev`   | Servidor de desarrollo con Hot Reload      |
| `npm run build` | Build de producción                        |
| `npm run start` | Sirve el build de producción               |
| `npm run lint`  | Linter (ESLint)                            |
