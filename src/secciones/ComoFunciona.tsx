import { Aparece, Cifra, Contenedor, Parrafo, Rotulo, Seccion, Titulo } from "../componentes/ui";

const PASOS = [
  {
    n: "01",
    titulo: "Expones ante una audiencia que reacciona",
    cuerpo:
      "Personajes animados que asienten, se distraen o se inclinan hacia adelante según cómo va la exposición. No es decoración: es la presión que el ensayo a solas no tiene, y es lo que hace que practiques la sustentación y no el guion.",
    marca: "En vivo",
  },
  {
    n: "02",
    titulo: "El sistema escucha y observa",
    cuerpo:
      "Transcripción del habla, prosodia —ritmo, pausas, volumen— y postura, gesto y mirada. El análisis de video corre entero dentro de tu navegador: las imágenes nunca salen del dispositivo.",
    marca: "Multimodal",
  },
  {
    n: "03",
    titulo: "Traduce señales en patrones evaluables",
    cuerpo:
      "Las señales crudas se comparan contra los umbrales de una rúbrica y se convierten en patrones con severidad medida por dimensión: fluidez, voz, lenguaje corporal, estructura del contenido.",
    marca: "Rúbrica",
  },
  {
    n: "04",
    titulo: "Decide qué corregir primero",
    cuerpo:
      "El motor de priorización pondera qué tan grave es el patrón, qué peso tiene esa dimensión en la rúbrica y qué tan mejorable es en la práctica. Ordena, y entrega solo la cima de esa lista.",
    marca: "Modelo RPP",
  },
  {
    n: "05",
    titulo: "Interviene al cerrar el segmento",
    cuerpo:
      "Cada intervención llega con la misma estructura —observación, explicación, ejemplo y ejercicio— y con la opción de repetir el segmento inmediatamente para aplicar lo que acabas de leer.",
    marca: "Al cierre",
  },
];

const RESTRICCIONES = [
  ["Sin texto que indique qué hacer", "Un enunciado prescriptivo exige procesar; un registro no."],
  ["Sin parpadeo ni animación al subir", "El movimiento captura la mirada involuntariamente."],
  ["Sin color de alarma", "El rojo convierte el indicador en una interrupción."],
  ["Densidad, no contador que sube", "Un número creciente invita a mirarlo y a perseguir puntaje."],
  ["En la periferia", "Fuera del eje visual donde está la audiencia."],
];

export default function ComoFunciona() {
  return (
    <Seccion id="producto">
      <Contenedor>
        <Aparece>
          <Rotulo numeral="02">Cómo funciona</Rotulo>
          <Titulo className="max-w-[19ch]">
            Un ciclo de práctica, no un informe al final
          </Titulo>
        </Aparece>

        <ol className="mt-14 md:mt-16">
          {PASOS.map((p, i) => (
            <Aparece key={p.n} retraso={i * 60}>
              <li className="grid grid-cols-1 gap-x-8 gap-y-3 border-t border-ink-line py-8 md:grid-cols-[5.5rem_1fr_7rem] md:py-9">
                <span className="font-display text-[26px] leading-none font-extrabold tracking-[-0.03em] text-lime md:text-[32px]">
                  {p.n}
                </span>
                <div>
                  <h3 className="text-[18px] leading-snug font-bold text-balance md:text-[20px]">
                    {p.titulo}
                  </h3>
                  <p className="mt-3 max-w-[62ch] text-[14.5px] leading-[1.68] text-paper-soft md:text-[15px]">
                    {p.cuerpo}
                  </p>
                </div>
                <span className="rotulo self-start md:pt-2 md:text-right">{p.marca}</span>
              </li>
            </Aparece>
          ))}
        </ol>

        {/* La regla de oro. Es la decisión de producto más contraintuitiva del
            proyecto, así que se explica con sus razones y no como una viñeta. */}
        <Aparece>
          <div className="mt-20 border-t-2 border-lime pt-10 md:mt-24">
            <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-14">
              <div>
                <Rotulo numeral="—">La regla de oro</Rotulo>
                <h3 className="font-display text-[24px] leading-[1.15] font-extrabold tracking-[-0.02em] text-balance md:text-[30px]">
                  Mientras expones, el sistema se calla.
                </h3>
                <Parrafo className="mt-5">
                  Corregir a alguien que está hablando lo saca de la exposición. Durante el
                  segmento solo se muestra un indicador ambiental de densidad de muletillas, en la
                  periferia, y con cinco restricciones que existen para que puedas ignorarlo sin
                  esfuerzo.
                </Parrafo>
              </div>

              <ul>
                {RESTRICCIONES.map(([regla, motivo]) => (
                  <li
                    key={regla}
                    className="grid gap-x-6 gap-y-1 border-b border-ink-line py-4 sm:grid-cols-[1fr_1.15fr]"
                  >
                    <span className="text-[14px] font-semibold text-paper">{regla}</span>
                    <span className="text-[13.5px] leading-[1.6] text-paper-soft">{motivo}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Aparece>

        <Aparece>
          <div className="mt-20 grid gap-10 border-t border-ink-line pt-12 sm:grid-cols-3 md:mt-24">
            <Cifra
              valor="≤500"
              unidad="ms"
              glosa="Objetivo de latencia media entre lo que dices y la reacción visible de la audiencia. Se mide de punta a punta, desde la captura en el navegador."
            />
            <Cifra
              valor="4"
              glosa="Dimensiones evaluadas por la rúbrica: fluidez, voz, lenguaje corporal y estructura del contenido."
            />
            <Cifra
              valor="0"
              glosa="Fotogramas de video que salen de tu dispositivo. El análisis visual corre completo en el navegador."
            />
          </div>
        </Aparece>
      </Contenedor>
    </Seccion>
  );
}
