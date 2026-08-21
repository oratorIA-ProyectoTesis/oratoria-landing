import { Aparece, Contenedor, Parrafo, Rotulo, Seccion, Titulo } from "../componentes/ui";

const PILA = [
  ["Cliente", "React · TypeScript · Vite. Percepción visual con MediaPipe y audiencia animada en Rive, ambas dentro del navegador."],
  ["Servidor", "Python · FastAPI, con arquitectura limpia y dominio puro verificado en integración continua."],
  ["Audio", "WebSocket con marco binario propio: PCM16 a 16 kHz en bloques de 160 ms, con marca de tiempo de origen en cada bloque."],
  ["Reconocimiento de habla", "Motor de código abierto autoalojado en un servidor en Lima, elegido por medición propia y no por catálogo."],
  ["Datos", "PostgreSQL. Toda la calibración vive en tablas, nunca en el código."],
];

const REPOS = [
  ["oratoria-plataforma", "Servidor y cliente de la aplicación"],
  ["oratoria-landing", "Esta página"],
  ["oratoria-presentacion", "Sustentación de la tesis"],
  ["oratoria-mcp-server", "Contexto documental para asistentes de IA"],
];

export default function Proyecto() {
  return (
    <Seccion id="proyecto">
      <Contenedor>
        <Aparece>
          <Rotulo numeral="07">El proyecto</Rotulo>
          <div className="grid gap-8 md:grid-cols-[1.05fr_0.95fr] md:gap-16">
            <Titulo className="max-w-[18ch]">
              Una investigación, no un producto en venta
            </Titulo>
            <Parrafo className="md:pt-2">
              OratorIA es el trabajo de tesis de dos estudiantes de Ingeniería de Software de la
              UPC. Todavía no está abierto al público: el sistema está en desarrollo y el estudio de
              campo con participantes reales aún no comienza.
            </Parrafo>
          </div>
        </Aparece>

        <Aparece>
          <div className="mt-14 grid gap-10 border-t border-ink-line pt-12 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
            <div>
              <h3 className="font-display text-[21px] leading-[1.18] font-extrabold tracking-[-0.02em]">
                Qué se está midiendo
              </h3>
              <Parrafo className="mt-4">
                El estudio compara dos versiones del sistema: una que entrega todas las
                observaciones detectadas y otra que entrega solo las priorizadas por el modelo. La
                pregunta es si priorizar mejora efectivamente la competencia oral, o si solo lo
                parece.
              </Parrafo>
              <p className="mt-5 border-l-2 border-lime pl-5 text-[13.5px] leading-[1.7] text-paper-soft">
                Los participantes no saben en qué grupo están, y quienes califican las exposiciones
                tampoco. Si lo supieran, sus notas dejarían de ser evidencia independiente.
              </p>
            </div>

            <div>
              <span className="rotulo">Cómo está construido</span>
              <ul className="mt-5">
                {PILA.map(([capa, detalle]) => (
                  <li
                    key={capa}
                    className="grid gap-x-6 gap-y-1 border-b border-ink-line py-4 sm:grid-cols-[9.5rem_1fr]"
                  >
                    <span className="font-mono text-[11.5px] tracking-wide text-lime uppercase">
                      {capa}
                    </span>
                    <span className="text-[13.5px] leading-[1.62] text-paper-soft">{detalle}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Aparece>

        <Aparece>
          <div className="mt-16 border-t border-ink-line pt-12">
            <span className="rotulo">Repositorios · organización oratorIA-ProyectoTesis</span>
            <ul className="mt-6 grid gap-x-10 gap-y-4 sm:grid-cols-2">
              {REPOS.map(([nombre, que]) => (
                <li key={nombre} className="flex flex-wrap items-baseline gap-x-3">
                  <span className="font-mono text-[13px] font-medium text-paper">{nombre}</span>
                  <span className="text-[13px] text-paper-faint">— {que}</span>
                </li>
              ))}
            </ul>
          </div>
        </Aparece>
      </Contenedor>
    </Seccion>
  );
}
