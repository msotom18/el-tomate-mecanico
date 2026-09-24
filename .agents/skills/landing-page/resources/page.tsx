/* ═══════════════════════════════════════════════════════════════════
   EL MOLDE DE LA LANDING · va en app/page.tsx

   Tiene dos mitades:
     1. LOS DATOS  → los rellenas con la fuente oficial del proyecto
     2. LA PÁGINA  → no la rediseñes: ya está resuelta

   Regla: si un dato no está en la fuente, NO lo inventes. Avisa y pide.
   ═══════════════════════════════════════════════════════════════════ */

/* ══════════════════ 1. LOS DATOS · esto es lo que cambias ══════════════════ */

const NEGOCIO = {
  nombre: "NOMBRE DEL NEGOCIO",
  // PROMESA: qué gana quien entra, en una frase. No el nombre solo.
  promesa: "La promesa en una frase: qué gana quien entra aquí",
  // Una línea que aterriza la promesa: para quién es y qué recibe.
  bajada: "Una sola línea que aterriza la promesa: para quién es esto y qué recibe.",
  // EL LLAMADO A LA ACCIÓN. Es el mismo en toda la página, no cambia por sección.
  cta: "Quiero postular",
};

// Tres datos duros que dan confianza. Salen de la fuente, no del aire.
const DATOS_HERO: { valor: string; texto: string }[] = [
  { valor: "00", texto: "un dato de la fuente" },
  { valor: "00", texto: "otro dato de la fuente" },
  { valor: "00", texto: "un tercer dato de la fuente" },
];

// PRUEBA · por qué creerte. Tres, no más.
const PRUEBA: { titulo: string; texto: string }[] = [
  { titulo: "Razón uno", texto: "Una o dos líneas concretas, con datos de la fuente." },
  { titulo: "Razón dos", texto: "Una o dos líneas concretas, con datos de la fuente." },
  { titulo: "Razón tres", texto: "Una o dos líneas concretas, con datos de la fuente." },
];

// OFERTA · qué se ofrece y cuánto cuesta. Sin letra chica.
const OFERTA_TITULO = "Lo que ofrecemos";
const OFERTA: { nombre: string; detalle: string; precio: string; nota: string }[] = [
  { nombre: "Opción A", detalle: "a quién le sirve", precio: "$0", nota: "cada cuánto se paga" },
  { nombre: "Opción B", detalle: "a quién le sirve", precio: "$0", nota: "cada cuánto se paga" },
  { nombre: "Opción C", detalle: "a quién le sirve", precio: "$0", nota: "cada cuánto se paga" },
];

// Descuentos, becas o extras. Cortos: son etiquetas, no párrafos.
const EXTRAS: string[] = ["Extra uno", "Extra dos", "Extra tres"];

// CÓMO SE HACE · los pasos, para bajarle la ansiedad a quien decide.
const PASOS: { titulo: string; texto: string }[] = [
  { titulo: "Paso uno", texto: "Qué hace la persona y qué pasa después." },
  { titulo: "Paso dos", texto: "Qué hace la persona y qué pasa después." },
  { titulo: "Paso tres", texto: "Qué hace la persona y qué pasa después." },
  { titulo: "Paso cuatro", texto: "Qué hace la persona y qué pasa después." },
];

// EL FORMULARIO · los campos que pida el encargo. Hoy no envía a ningún lado.
type Campo = {
  name: string;
  label: string;
  tipo: "text" | "email" | "tel" | "number" | "textarea";
  ancho?: "completo";
};
const CAMPOS: Campo[] = [
  { name: "nombre", label: "Tu nombre", tipo: "text" },
  { name: "correo", label: "Correo", tipo: "email" },
  { name: "telefono", label: "Celular", tipo: "tel" },
  { name: "referencia", label: "Nombre de la persona interesada", tipo: "text" },
  { name: "edad", label: "Edad", tipo: "number" },
  { name: "mensaje", label: "Tu pregunta", tipo: "textarea", ancho: "completo" },
];

const CONTACTO = {
  direccion: "Dirección de la fuente",
  correo: "correo@de-la-fuente",
  telefono: "+56 0 0000 0000",
};

/* ══════════════════ 2. LA PÁGINA · de aquí abajo no se toca ══════════════════ */

export const metadata = {
  title: NEGOCIO.nombre,
  description: NEGOCIO.promesa,
};

export default function Home() {
  return (
    <div className="flex flex-1 flex-col pb-20 md:pb-0">
      {/* ── Barra de arriba ── */}
      <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3.5">
          <span className="text-lg font-bold tracking-tight">{NEGOCIO.nombre}</span>
          <a href="#postular" className="btn hidden px-5 py-2.5 text-sm sm:inline-flex">
            {NEGOCIO.cta}
          </a>
        </div>
      </header>

      {/* ── 1 · PORTADA: la promesa y el llamado a la acción ── */}
      <section className="bg-primary text-white">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:py-24">
          <h1 className="max-w-3xl text-balance text-[clamp(2.1rem,7vw,3.6rem)] font-bold leading-[1.08] tracking-tight">
            {NEGOCIO.promesa}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">{NEGOCIO.bajada}</p>
          <a href="#postular" className="btn btn-inverso mt-8">
            {NEGOCIO.cta}
          </a>

          <dl className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-white/25 sm:grid-cols-3">
            {DATOS_HERO.map((d) => (
              <div key={d.texto} className="bg-primary px-5 py-5">
                <dt className="text-3xl font-bold tabular-nums">{d.valor}</dt>
                <dd className="mt-1 text-sm text-white/80">{d.texto}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── 2 · PRUEBA: por qué creerte ── */}
      <section className="bg-paper">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
          <h2 className="text-[clamp(1.6rem,4vw,2.2rem)] font-bold tracking-tight">
            Por qué elegirnos
          </h2>
          <div className="mt-9 grid gap-5 sm:grid-cols-3">
            {PRUEBA.map((p, i) => (
              <article key={p.titulo} className="rounded-2xl border border-line p-6">
                <span className="text-sm font-bold tabular-nums text-primary-ink">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-xl font-bold leading-snug">{p.titulo}</h3>
                <p className="mt-2 leading-relaxed text-muted">{p.texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3 · OFERTA: qué incluye y cuánto cuesta ── */}
      <section className="bg-soft">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
          <h2 className="text-[clamp(1.6rem,4vw,2.2rem)] font-bold tracking-tight">
            {OFERTA_TITULO}
          </h2>
          <div className="mt-9 grid gap-5 sm:grid-cols-3">
            {OFERTA.map((o) => (
              <article
                key={o.nombre}
                className="flex flex-col rounded-2xl border border-line bg-paper p-6"
              >
                <h3 className="text-xl font-bold leading-snug">{o.nombre}</h3>
                <p className="mt-1 text-sm text-muted">{o.detalle}</p>
                <p className="mt-auto pt-5 text-3xl font-bold tabular-nums text-primary-ink">
                  {o.precio}
                </p>
                <p className="mt-1 text-sm text-muted">{o.nota}</p>
              </article>
            ))}
          </div>
          {EXTRAS.length > 0 && (
            <ul className="mt-7 flex flex-wrap gap-2.5">
              {EXTRAS.map((e) => (
                <li
                  key={e}
                  className="rounded-full border border-line bg-paper px-4 py-2 text-sm font-medium"
                >
                  {e}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* ── 4 · CÓMO SE HACE: los pasos ── */}
      <section className="bg-paper">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
          <h2 className="text-[clamp(1.6rem,4vw,2.2rem)] font-bold tracking-tight">
            Cómo es el proceso
          </h2>
          <ol className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PASOS.map((p, i) => (
              <li key={p.titulo} className="border-t-2 border-primary pt-4">
                <span className="text-sm font-bold tabular-nums text-primary-ink">
                  Paso {i + 1}
                </span>
                <h3 className="mt-1 text-lg font-bold leading-snug">{p.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── 5 · EL LLAMADO FINAL: el formulario ── */}
      <section id="postular" className="bg-soft">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
          <h2 className="text-[clamp(1.6rem,4vw,2.2rem)] font-bold tracking-tight">
            {NEGOCIO.cta}
          </h2>
          <p className="mt-2 text-muted">Déjanos tus datos y te respondemos.</p>
          <form action="#" className="mt-8 grid gap-4 sm:grid-cols-2">
            {CAMPOS.map((c) => (
              <div key={c.name} className={c.ancho === "completo" ? "sm:col-span-2" : undefined}>
                <label htmlFor={c.name} className="mb-1.5 block text-sm font-semibold">
                  {c.label}
                </label>
                {c.tipo === "textarea" ? (
                  <textarea
                    id={c.name}
                    name={c.name}
                    rows={4}
                    className="w-full rounded-xl border border-line bg-paper px-4 py-3 outline-none focus:border-primary"
                  />
                ) : (
                  <input
                    id={c.name}
                    name={c.name}
                    type={c.tipo}
                    className="w-full rounded-xl border border-line bg-paper px-4 py-3 outline-none focus:border-primary"
                  />
                )}
              </div>
            ))}
            <div className="sm:col-span-2">
              <button type="submit" className="btn btn-bloque">
                {NEGOCIO.cta}
              </button>
              <p className="mt-3 text-center text-sm text-muted">
                O escríbenos a {CONTACTO.correo}
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* ── Pie ── */}
      <footer className="border-t border-line bg-paper">
        <div className="mx-auto grid max-w-5xl gap-2 px-5 py-10 text-sm text-muted sm:grid-cols-3">
          <p className="font-bold text-ink">{NEGOCIO.nombre}</p>
          <p>{CONTACTO.direccion}</p>
          <p>
            {CONTACTO.correo} · {CONTACTO.telefono}
          </p>
        </div>
      </footer>

      {/* ── El mismo botón, fijo abajo, solo en celular ── */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-paper/95 p-3 backdrop-blur md:hidden">
        <a href="#postular" className="btn btn-bloque">
          {NEGOCIO.cta}
        </a>
      </div>
    </div>
  );
}
