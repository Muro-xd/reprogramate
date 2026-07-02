# Neuroconsciencia — Landing Page

Landing page para **Neuroconsciencia**, empresa de terapias alternativas (Barras de Access, Biomagnetismo, Liberación de emociones, Tapping, Flores de Bach, Meditación y más).

## Stack

- [Next.js 16](https://nextjs.org) (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion (animaciones)
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
│   ├── layout.tsx          # Layout raíz: fuentes y metadata SEO
│   ├── page.tsx            # Ensambla todas las secciones de la landing
│   └── globals.css         # Estilos globales / Tailwind
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Navegación fija con scroll effect
│   │   └── Footer.tsx      # Footer con logo y copyright
│   ├── sections/
│   │   ├── Hero.tsx        # Sección principal con CTA a WhatsApp
│   │   ├── Services.tsx    # Grilla de servicios con cards expandibles
│   │   ├── Products.tsx    # Catálogo de productos (deshabilitado temporalmente)
│   │   ├── About.tsx       # Historia y valores del negocio
│   │   ├── Process.tsx     # Pasos del proceso de sesión
│   │   ├── Testimonials.tsx# Testimonios de clientes
│   │   ├── FAQ.tsx         # Preguntas frecuentes
│   │   └── Contact.tsx     # CTA final + info de contacto
│   └── ui/
│       └── WhatsAppFAB.tsx # Botón flotante CTA de WhatsApp
└── lib/
    └── constants.ts        # Número y mensaje de WhatsApp compartidos
```

## Secciones activas

| Sección       | Estado      | Componente          |
| ------------- | ----------- | ------------------- |
| Hero          | ✅ Activa   | `Hero.tsx`          |
| Servicios     | ✅ Activa   | `Services.tsx`      |
| Nosotros      | ✅ Activa   | `About.tsx`         |
| Proceso       | ✅ Activa   | `Process.tsx`       |
| Testimonios   | ✅ Activa   | `Testimonials.tsx`  |
| FAQ           | ✅ Activa   | `FAQ.tsx`           |
| Contacto      | ✅ Activa   | `Contact.tsx`       |
| Productos     | ⏸ Pendiente | `Products.tsx`      |

> Para reactivar la sección Productos: descomentar el import y `<Products />` en `page.tsx`, y descomentar el link en `Navbar.tsx`.

## Contacto (WhatsApp)

El número y mensaje pre-llenado están centralizados en `src/lib/constants.ts`. Editar ese archivo para cambiar cualquier CTA de WhatsApp en toda la aplicación.

## Scripts disponibles

| Comando         | Descripción                          |
| --------------- | ------------------------------------- |
| `npm run dev`   | Servidor de desarrollo con Hot Reload |
| `npm run build` | Build de producción                   |
| `npm run start` | Sirve el build de producción          |
| `npm run lint`  | Linter (ESLint)                       |
