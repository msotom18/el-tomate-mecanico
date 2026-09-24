# Ejemplo de mapeo · Academia de Natación Delfines

Este es un caso **de ejemplo**, de otro negocio, para mostrar cómo se pasa de una
ficha de datos a las constantes del molde. No copies estos datos: copia el método.

La ficha de esta academia tenía cinco bloques: niveles y horarios, precios, becas,
cómo inscribirse y la piscina. Así se repartieron.

| Lo que decía la fuente | A qué constante del molde fue |
|---|---|
| "Enseñamos a nadar a adultos que le tienen miedo al agua" | `NEGOCIO.promesa` → "Aprende a nadar aunque hoy no te atrevas a soltar el borde" |
| "Adultos desde 18 años, sin experiencia previa" | `NEGOCIO.bajada` |
| "Inscripción abierta todo el año" | `NEGOCIO.cta` → "Quiero inscribirme" |
| 12 años funcionando · 3 niveles · 6 alumnos por clase | `DATOS_HERO` (los tres números duros) |
| Profesores certificados · grupos de 6 · piscina temperada | `PRUEBA` (una razón por card) |
| Nivel Inicial / Intermedio / Avanzado, con su horario y su precio | `OFERTA` (una card por nivel) |
| 15% por hermanos · 10% pagando el año | `EXTRAS` (etiquetas cortas) |
| Inscripción online → clase de nivelación → asignación de grupo → primera clase | `PASOS` (cuatro pasos) |
| Los campos que pidió el encargo | `CAMPOS` |
| Dirección, correo y teléfono de la piscina | `CONTACTO` |
| Reglamento interno, historia del club, currículum de cada profesor | **Nada.** No entró a la página |

## Las tres decisiones que valen

1. **La promesa no es el nombre del negocio.** "Academia Delfines" no es una promesa;
   "aprende a nadar aunque hoy no te atrevas" sí.
2. **Lo que sobra, se deja fuera.** La ficha tenía historia y reglamento. Una landing
   con todo adentro no lleva a ninguna acción.
3. **Un dato que no estaba, no se inventó.** La ficha no traía testimonios, así que la
   sección de prueba se armó con hechos verificables, y se avisó al entregar.
