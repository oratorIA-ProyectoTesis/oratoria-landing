import { Aparece, Contenedor, Parrafo, Rotulo, Seccion, Titulo } from "../componentes/ui";

const GARANTIAS = [
  {
    afirmacion: "El video nunca sale de tu dispositivo",
    como: "El análisis de postura, gesto y mirada corre dentro del navegador. Lo que viaja al servidor son descriptores numéricos por segundo, no imágenes.",
    prueba: "Verificable abriendo el panel de red del navegador: no hay ninguna carga de video.",
  },
  {
    afirmacion: "No se almacena tu nombre ni tu correo",
    como: "Los participantes se identifican con un código anónimo asignado al inscribirse. La tabla de usuarios no tiene columna para datos personales.",
    prueba: "Exigido por la Ley 29733 de protección de datos personales del Perú.",
  },
  {
    afirmacion: "Las grabaciones de evaluación quedan en tu equipo",
    como: "Las exposiciones que califican los jueces del estudio se guardan como referencias locales. El sistema rechaza cualquier referencia que parezca una dirección remota.",
    prueba: "El modelo de datos lanza un error si detecta un enlace externo, en vez de aceptarlo.",
  },
  {
    afirmacion: "Lo que se exporta son puntajes",
    como: "El conjunto de datos del estudio contiene métricas, patrones detectados e intervenciones entregadas. No contiene audio ni video.",
    prueba: "La exportación está protegida y falla cerrada: ante la duda no entrega nada.",
  },
];

export default function Privacidad() {
  return (
    <Seccion id="privacidad">
      <Contenedor>
        <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
          <div>
            <Aparece>
              <Rotulo numeral="06">Privacidad</Rotulo>
              <Titulo>
                Practicar hablando en público{" "}
                <span className="text-lime">expone</span>
              </Titulo>
              <Parrafo className="mt-6">
                Grabarte fallando delante de una cámara es incómodo, y esa incomodidad se vuelve
                mayor si no sabes a dónde va el archivo. Por eso la respuesta no es una política de
                privacidad: es una decisión de arquitectura tomada antes de escribir la primera
                línea.
              </Parrafo>
            </Aparece>
          </div>

          <div>
            {GARANTIAS.map((g, i) => (
              <Aparece key={g.afirmacion} retraso={i * 70}>
                <div className="border-t border-ink-line py-7 first:border-t-0 first:pt-0">
                  <h3 className="flex items-baseline gap-3 text-[16.5px] leading-snug font-bold text-balance">
                    <span aria-hidden="true" className="mt-[7px] h-1.5 w-1.5 shrink-0 bg-lime" />
                    {g.afirmacion}
                  </h3>
                  <p className="mt-3 pl-[1.125rem] text-[14px] leading-[1.68] text-paper-soft">
                    {g.como}
                  </p>
                  <p className="mt-2.5 pl-[1.125rem] font-mono text-[11.5px] leading-[1.6] text-paper-faint">
                    {g.prueba}
                  </p>
                </div>
              </Aparece>
            ))}
          </div>
        </div>
      </Contenedor>
    </Seccion>
  );
}
