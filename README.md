# El Tomate Mecánico · Escuela de Fútbol Formativo

Landing page oficial desarrollada en **Next.js** y **Tailwind CSS** con metodología Mobile-First y estructura orientada a conversión.

---

## 🚀 Despliegue en Vercel

Este proyecto está optimizado para desplegarse directamente en [Vercel](https://vercel.com):

1. **Importar Repositorio:** Conecta tu cuenta de GitHub e importa `msotom18/el-tomate-mecanico`.
2. **Root Directory:** Si despliegas desde este repositorio raíz, selecciona la carpeta `tomate-b` como **Root Directory**.
3. **Framework Preset:** Selecciona `Next.js`.
4. **Build & Output Settings:** Vercel detectará automáticamente `npm run build` y la salida `.next`.

---

## 📁 Estructura del Proyecto

* **`tomate-b/`**: Aplicación web completa en Next.js (App Router, Tailwind 4, TypeScript).
  * `app/page.tsx`: Landing page con datos duros, prueba con IA, aranceles 2026 y formulario.
  * `app/globals.css`: Tokens de diseño y colores institucionales (`#c62828`).
  * `app/layout.tsx`: Layout principal y metadatos SEO.
* **`tomate-a/`**: Versión estática pura en HTML/CSS (`index.html`).
* **`tomate/`**: Fuente de verdad (`ficha-tomate.md`) y directrices del club (`AGENTS.md`).
* **`.agents/`**: Skills y plugins de automatización (skill `landing-page`).
