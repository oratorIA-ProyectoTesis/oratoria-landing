import { Aparece, Contenedor, Parrafo, Rotulo, Seccion, Titulo } from "../componentes/ui";

type Funcion = { rf: string; nombre: string; detalle: string; estado?: "opcional" | "futuro" };

const BLOQUES: { fase: string; nota: string; funciones: Funcion[] }[] = [
  {
    fase: "Antes de empezar",
    nota: "Consentimiento explícito y una línea base contra la cual medir el progreso.",
    funciones: [
      {
        rf: "RF-01",
        nombre: "Cuenta anónima y consentimiento informado",
        detalle:
          "El participante se identifica con un código, no con su nombre ni su correo. Ningún dato personal se almacena.",
      },
      {
        rf: "RF-02",
        nombre: "Diagnóstico inicial",
        detalle:
          "Una primera exposición fija el punto de partida por dimensión. Sin línea base, la priorización no tiene contra qué comparar.",
      },
    ],
  },
  {
    fase: "Durante la exposición",
    nota: "Todo lo que ocurre en vivo, con la regla de no interrumpir.",
    funciones: [
      {
        rf: "RF-08",
        nombre: "Audiencia virtual reactiva",
        detalle:
          "Personajes animados que responden a cómo va la exposición con conducta no verbal: atención, distracción, interés.",
      },
      {
        rf: "RF-04",
        nombre: "Transcripción en tiempo real",
        detalle:
          "Reconocimiento de habla en español con detección de muletillas y titubeos.",
      },
      {
        rf: "RF-05",
        nombre: "Análisis de prosodia",
        detalle: "Ritmo, pausas, volumen y variación tonal, calculados localmente.",
      },
      {
        rf: "RF-03",
        nombre: "Percepción visual en el navegador",
        detalle:
          "Postura, gesto y orientación de la mirada. El video se procesa en tu equipo y no se transmite ni se guarda.",
      },
      {
        rf: "RF-09a",
        nombre: "Indicador ambiental de disfluencias",
        detalle:
          "Densidad de muletillas en la periferia de la pantalla. Sin texto, sin alarma, sin movimiento.",
      },
    ],
  },
  {
    fase: "Al cerrar cada segmento",
    nota: "El momento en que sí se corrige, y la razón por la que el producto existe.",
    funciones: [
      {
        rf: "RF-06 · RF-07",
        nombre: "Intervenciones priorizadas",
        detalle:
          "Las dos o tres correcciones de mayor prioridad, seleccionadas por el modelo RPP entre todo lo detectado.",
      },
      {
        rf: "RF-09b",
        nombre: "Observación → Explicación → Ejemplo → Ejercicio",
        detalle:
          "Cada intervención llega con esa estructura fija, y con la opción de repetir el segmento para aplicarla en caliente.",
      },
    ],
  },
  {
    fase: "Después de la sesión",
    nota: "Lo que queda para revisar con calma y para llevar al asesor.",
    funciones: [
      {
        rf: "RF-10",
        nombre: "Reporte redactado",
        detalle:
          "Un texto que explica el desempeño del segmento citando fragmentos verificables de lo que realmente dijiste.",
      },
      {
        rf: "RF-11",
        nombre: "Progreso por dimensión",
        detalle:
          "Evolución sesión a sesión en fluidez, voz, lenguaje corporal y estructura, sobre la misma rúbrica.",
      },
      { rf: "RF-12", nombre: "Exportación a PDF", detalle: "Para archivar o compartir con el asesor." },
    ],
  },
  {
    fase: "Más allá del núcleo",
    nota: "Funciones fuera de la ruta crítica del estudio.",
    funciones: [
      {
        rf: "RF-17 · RF-18",
        nombre: "Modo jurado",
        detalle:
          "Preguntas habladas sobre lo que acabas de exponer, ancladas a fragmentos citables del transcrito, con registro auditable de por qué se formuló cada una.",
        estado: "opcional",
      },
      {
        rf: "RF-16",
        nombre: "Panel docente",
        detalle:
          "Vista agregada por curso para el profesor. Está fuera del MVP y del alcance de la tesis.",
        estado: "futuro",
      },
    ],
  },
];

const LEYENDA: Record<NonNullable<Funcion["estado"]>, string> = {
  opcional: "No se activa durante las sesiones del estudio",
  futuro: "Fuera del alcance actual",
};

export default function Funcionalidades() {
  return (
    <Seccion id="funcionalidades">
      <Contenedor>
        <Aparece>
          <Rotulo numeral="04">Funcionalidades</Rotulo>
          <div className="grid gap-8 md:grid-cols-[1.05fr_0.95fr] md:gap-16">
            <Titulo className="max-w-[17ch]">Qué hace, ordenado por cuándo lo hace</Titulo>
            <Parrafo className="md:pt-2">
              Cada función traza a un requisito del documento de la tesis. El código a la izquierda
              no es adorno: permite ir del producto al requisito, del requisito a la hipótesis que
              habilita, y de ahí a la evidencia que lo justifica.
            </Parrafo>
          </div>
        </Aparece>

        <div className="mt-14 md:mt-16">
          {BLOQUES.map((bloque, bi) => (
            <Aparece key={bloque.fase} retraso={bi * 50}>
              <div className="border-t border-ink-line pt-8 pb-4 md:pt-10">
                <div className="grid gap-x-10 gap-y-6 md:grid-cols-[15rem_1fr]">
                  <div className="md:sticky md:top-20 md:self-start">
                    <h3 className="text-[17px] leading-snug font-bold text-balance text-lime">
                      {bloque.fase}
                    </h3>
                    <p className="mt-2 max-w-[34ch] text-[13px] leading-[1.6] text-paper-faint">
                      {bloque.nota}
                    </p>
                  </div>

                  <ul>
                    {bloque.funciones.map((f) => (
                      <li
                        key={f.rf + f.nombre}
                        className="grid grid-cols-[6.25rem_1fr] gap-x-5 border-b border-ink-line py-5 last:border-b-0"
                      >
                        <span className="font-mono text-[11px] whitespace-nowrap text-paper-faint">
                          {f.rf}
                        </span>
                        <div>
                          <h4 className="text-[15px] leading-snug font-semibold text-paper">
                            {f.nombre}
                            {f.estado ? (
                              <span className="ml-2.5 font-mono text-[10.5px] font-normal tracking-wide text-paper-faint uppercase">
                                · {LEYENDA[f.estado]}
                              </span>
                            ) : null}
                          </h4>
                          <p className="mt-1.5 max-w-[68ch] text-[13.5px] leading-[1.65] text-paper-soft">
                            {f.detalle}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Aparece>
          ))}
        </div>
      </Contenedor>
    </Seccion>
  );
}
