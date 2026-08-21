import { Aparece, Contenedor } from "../componentes/ui";

/**
 * Los patrones del ejemplo del hero.
 *
 * `entregado` marca los dos que el motor de priorización seleccionaría en un
 * segmento con esta mezcla. El resto se detectó igual —no se perdió—, pero no
 * se entrega ahora. Esa distinción ES el producto, y por eso el hero la
 * muestra en vez de describirla.
 */
const PATRONES = [
  { texto: "Muletillas al inicio de frase", dim: "Fluidez", entregado: true },
  { texto: "Contacto visual bajo con la audiencia", dim: "Corporal", entregado: false },
  { texto: "Ritmo por encima de 190 palabras/min", dim: "Fluidez", entregado: true },
  { texto: "Manos fuera del encuadre", dim: "Corporal", entregado: false },
  { texto: "Cierre sin síntesis del argumento", dim: "Estructura", entregado: false },
  { texto: "Volumen decreciente al final de frase", dim: "Voz", entregado: false },
  { texto: "Postura estática durante el segmento", dim: "Corporal", entregado: false },
];

export default function Hero() {
  return (
    <header className="relative overflow-hidden pt-14 pb-20 md:pt-20 md:pb-28">
      {/* Halo de acento. Puramente decorativo y muy tenue: da profundidad sin
          competir con el texto ni disparar un degradado de catálogo. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[26rem] left-1/2 h-[46rem] w-[46rem] -translate-x-1/2 rounded-full opacity-[0.10] blur-[130px]"
        style={{ background: "radial-gradient(circle, #c6ff3d 0%, transparent 68%)" }}
      />

      <Contenedor className="relative">
        <Aparece>
          <div className="flex items-baseline gap-3">
            <span className="font-display text-[19px] font-extrabold tracking-[-0.02em]">
              Orator<span className="text-lime">IA</span>
            </span>
            <span className="rotulo hidden sm:inline">Tesis · UPC · 2026</span>
          </div>
        </Aparece>

        <div className="mt-14 grid items-start gap-14 md:mt-20 md:grid-cols-[1.05fr_0.95fr] md:gap-16">
          <div>
            <Aparece retraso={60}>
              <h1 className="font-display text-[38px] leading-[1.05] font-extrabold tracking-[-0.035em] text-balance sm:text-[52px] md:text-[60px]">
                No listamos todo lo que salió mal.
                <br />
                <span className="marcado">Decidimos qué corregir primero.</span>
              </h1>
            </Aparece>

            <Aparece retraso={140}>
              <p className="mt-8 max-w-[46ch] text-[17px] leading-[1.65] text-paper-soft md:text-[19px]">
                OratorIA escucha, observa y evalúa una exposición en tiempo real. Al cerrar cada
                segmento no devuelve un inventario de errores: devuelve las{" "}
                <strong className="font-semibold text-paper">dos o tres correcciones</strong> que
                más mueven la aguja en ese momento, con la explicación de por qué esas.
              </p>
            </Aparece>

            <Aparece retraso={220}>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                <a
                  href="#producto"
                  className="rounded-sm bg-lime px-6 py-3.5 text-[14.5px] font-bold text-ink transition-colors hover:bg-lime-dim"
                >
                  Cómo funciona
                </a>
                <a
                  href="#segmento"
                  className="border-b border-paper-faint pb-1 text-[14.5px] font-semibold text-paper transition-colors hover:border-lime hover:text-lime"
                >
                  Para quién es
                </a>
              </div>
            </Aparece>
          </div>

          {/* Demostración del criterio, no una captura de pantalla. */}
          <Aparece retraso={280}>
            <figure className="rounded-lg border border-ink-line bg-ink-raised p-6 md:p-7">
              <figcaption className="mb-5 flex items-center justify-between gap-4">
                <span className="rotulo">Segmento 3 · 90 s</span>
                <span className="font-mono text-[11px] text-paper-faint">7 detectados</span>
              </figcaption>

              <ul className="space-y-px">
                {PATRONES.map((p) => (
                  <li
                    key={p.texto}
                    className={`flex items-baseline gap-3 py-2.5 ${
                      p.entregado ? "" : "opacity-40"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full ${
                        p.entregado ? "bg-lime" : "bg-paper-faint"
                      }`}
                    />
                    <span
                      className={`flex-1 text-[13.5px] leading-snug ${
                        p.entregado ? "font-medium text-paper" : "text-paper-soft"
                      }`}
                    >
                      {p.texto}
                    </span>
                    <span className="font-mono text-[10.5px] tracking-wider text-paper-faint uppercase">
                      {p.dim}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-5 border-t border-ink-line pt-4 text-[12.5px] leading-[1.6] text-paper-soft">
                <span className="font-semibold text-lime">Se entregan 2.</span> Los otros cinco
                quedan registrados y compiten en el siguiente segmento. Nada se descarta; se
                ordena.
              </p>
            </figure>
          </Aparece>
        </div>
      </Contenedor>
    </header>
  );
}
