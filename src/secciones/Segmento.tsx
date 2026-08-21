import { Aparece, Contenedor, Parrafo, Rotulo, Seccion, Titulo } from "../componentes/ui";

const NUCLEO = [
  {
    titulo: "Estudiantes de últimos ciclos",
    cuerpo:
      "Los que tienen una sustentación de tesis o de proyecto por delante y una fecha en el calendario. La necesidad es concreta y el plazo es real.",
  },
  {
    titulo: "En Lima Metropolitana",
    cuerpo:
      "El estudio se ejecuta con estudiantes de varias instituciones limeñas, en español peruano y con las condiciones de conectividad y equipo que efectivamente tienen.",
  },
  {
    titulo: "Sin práctica con audiencia",
    cuerpo:
      "Quien puede ensayar frente a un grupo que le dé retroalimentación honesta no necesita esto. La mayoría no puede: ensaya solo, frente a un espejo o a nadie.",
  },
];

const DECISIONES = [
  [
    "Corre en una laptop modesta",
    "El equipo de referencia es una laptop con procesador de gama de entrada, no una máquina con tarjeta gráfica dedicada. Si solo funcionara en equipos caros, no serviría para el segmento que dice atender.",
  ],
  [
    "Español peruano, no español genérico",
    "El reconocimiento de habla se evalúa contra un corpus grabado localmente y un glosario de terminología académica, porque el acento y el vocabulario de una sustentación limeña no son los de un dataset internacional.",
  ],
  [
    "Funciona en el navegador",
    "Sin instalación, sin permisos de administrador, sin depender de que la universidad autorice software en sus equipos.",
  ],
];

export default function Segmento() {
  return (
    <Seccion id="segmento">
      <Contenedor>
        <Aparece>
          <Rotulo numeral="05">Segmento objetivo</Rotulo>
          <Titulo className="max-w-[20ch]">
            Para quien tiene que sustentar y <span className="text-lime">no tiene con quién ensayar</span>
          </Titulo>
        </Aparece>

        <div className="mt-12 grid gap-px sm:grid-cols-3 md:mt-14">
          {NUCLEO.map((n, i) => (
            <Aparece key={n.titulo} retraso={i * 70}>
              <div className="h-full border-t-2 border-lime pt-6 pr-6">
                <h3 className="text-[16.5px] leading-snug font-bold text-balance">{n.titulo}</h3>
                <p className="mt-3 text-[13.5px] leading-[1.65] text-paper-soft">{n.cuerpo}</p>
              </div>
            </Aparece>
          ))}
        </div>

        <Aparece>
          <div className="mt-20 grid gap-10 border-t border-ink-line pt-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16 md:pt-14">
            <div>
              <h3 className="font-display text-[22px] leading-[1.18] font-extrabold tracking-[-0.02em] text-balance md:text-[27px]">
                Tres decisiones que se tomaron por ese segmento
              </h3>
              <Parrafo className="mt-5">
                Declarar un público objetivo es fácil; construir para él obliga a renunciar a cosas.
                Estas tres son las renuncias.
              </Parrafo>
            </div>

            <ul>
              {DECISIONES.map(([titulo, cuerpo]) => (
                <li key={titulo} className="border-b border-ink-line py-5 first:pt-0">
                  <h4 className="text-[15px] font-semibold text-paper">{titulo}</h4>
                  <p className="mt-2 max-w-[64ch] text-[13.5px] leading-[1.68] text-paper-soft">
                    {cuerpo}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Aparece>
      </Contenedor>
    </Seccion>
  );
}
