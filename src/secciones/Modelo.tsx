import { Aparece, Contenedor, Parrafo, Rotulo, Seccion, Titulo } from "../componentes/ui";

const FACTORES = [
  {
    simbolo: "Sev",
    nombre: "Severidad",
    pregunta: "¿Qué tan lejos está del criterio?",
    cuerpo:
      "Propiedad del desempeño observado. Vale 0 cuando el patrón apenas roza el umbral de la rúbrica y 1 cuando llega al punto de saturación.",
  },
  {
    simbolo: "Imp",
    nombre: "Importancia",
    pregunta: "¿Cuánto pesa esa dimensión?",
    cuerpo:
      "Constante del sistema, no del estudiante: sale de los pesos que un panel de expertos asigna a cada dimensión de la rúbrica.",
  },
  {
    simbolo: "Mej",
    nombre: "Mejorabilidad",
    pregunta: "¿Se puede corregir practicando?",
    cuerpo:
      "Propiedad de la intervención. Ajustar el ritmo en un reintento es plausible; reconstruir la estructura de un argumento, no tanto.",
  },
];

export default function Modelo() {
  return (
    <Seccion id="modelo">
      <Contenedor>
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <div>
            <Aparece>
              <Rotulo numeral="03">El modelo</Rotulo>
              <Titulo>
                Tres preguntas deciden{" "}
                <span className="text-lime">qué escuchas primero</span>
              </Titulo>
              <Parrafo className="mt-6">
                Cada corrección posible recibe un puntaje de prioridad. No es una heurística
                improvisada ni una lista fija: es un modelo formal, con pesos calibrados por un
                panel de expertos, que se puede auditar, discutir y reproducir.
              </Parrafo>
            </Aparece>
          </div>

          <div>
            <Aparece retraso={80}>
              {/* La fórmula como pieza central. Está en la landing a propósito:
                  es la contribución del proyecto, y esconderla detrás de
                  "algoritmo propietario" sería justo lo contrario de una tesis. */}
              <div className="rounded-lg border border-ink-line bg-ink-raised p-7 md:p-9">
                <span className="rotulo">Puntaje de prioridad</span>
                <div className="mt-6 space-y-4 font-mono text-[14.5px] leading-relaxed md:text-[16px]">
                  <p>
                    <span className="text-lime">B(i)</span>
                    <span className="text-paper-faint"> = </span>
                    w<sub className="text-paper-faint">S</sub>·Sev
                    <span className="text-paper-faint"> + </span>w
                    <sub className="text-paper-faint">I</sub>·Imp
                    <span className="text-paper-faint"> + </span>w
                    <sub className="text-paper-faint">M</sub>·Mej
                  </p>
                  <p>
                    <span className="text-lime">P(i)</span>
                    <span className="text-paper-faint"> = </span>B(i)
                    <span className="text-paper-faint"> · </span>(1
                    <span className="text-paper-faint"> + </span>λ·Sev)
                  </p>
                </div>
                <p className="mt-7 border-t border-ink-line pt-5 text-[13.5px] leading-[1.68] text-paper-soft">
                  La severidad aparece dos veces y no es un descuido. La primera la pone a competir
                  con los otros factores; la segunda protege la urgencia: un problema grave no
                  puede quedar sepultado por dos leves que juntos suman más. Con{" "}
                  <span className="font-mono text-paper">λ = 0</span> ese refuerzo se apaga, y esa
                  es exactamente la comparación que el estudio corre para saber si sirve.
                </p>
              </div>
            </Aparece>

            <div className="mt-10 grid gap-px sm:grid-cols-3">
              {FACTORES.map((f, i) => (
                <Aparece key={f.simbolo} retraso={140 + i * 70}>
                  <div className="h-full border-t-2 border-lime/60 pt-5">
                    <span className="font-mono text-[13px] font-bold text-lime">{f.simbolo}</span>
                    <h3 className="mt-2 text-[15px] font-bold">{f.nombre}</h3>
                    <p className="mt-1.5 text-[13px] font-medium text-paper-soft italic">
                      {f.pregunta}
                    </p>
                    <p className="mt-3 text-[13px] leading-[1.62] text-paper-soft">{f.cuerpo}</p>
                  </div>
                </Aparece>
              ))}
            </div>

            <Aparece retraso={360}>
              <p className="mt-9 border-l-2 border-ink-line pl-5 text-[13.5px] leading-[1.7] text-paper-soft">
                Los tres factores miden cosas distintas a propósito: uno describe el desempeño, otro
                el sistema y otro la intervención. Si dos midieran lo mismo, la prioridad contaría
                ese mismo hecho dos veces sin que nadie lo notara.
              </p>
            </Aparece>
          </div>
        </div>
      </Contenedor>
    </Seccion>
  );
}
