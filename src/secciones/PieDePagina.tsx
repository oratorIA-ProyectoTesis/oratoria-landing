import { Contenedor } from "../componentes/ui";

const AUTORES = [
  ["Cortez Flores, Ely Rivaldo", "U202215313"],
  ["Ventura Chancafe, Eduardo Renato", "U202212645"],
];

export default function PieDePagina() {
  return (
    <footer className="border-t border-ink-line py-14 md:py-16">
      <Contenedor>
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:gap-16">
          <div>
            <span className="font-display text-[17px] font-extrabold tracking-[-0.02em]">
              Orator<span className="text-lime">IA</span>
            </span>
            <p className="mt-3 max-w-[52ch] text-[13.5px] leading-[1.65] text-paper-soft">
              Modelo de retroalimentación multimodal priorizada para el desarrollo de la competencia
              oral en estudiantes universitarios de Lima Metropolitana.
            </p>
          </div>

          <div className="text-[13px] leading-[1.7] md:text-right">
            <span className="rotulo">Autores</span>
            <ul className="mt-3 space-y-1">
              {AUTORES.map(([nombre, codigo]) => (
                <li key={codigo} className="text-paper-soft">
                  {nombre}{" "}
                  <span className="font-mono text-[11.5px] text-paper-faint">{codigo}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-paper-soft">
              <span className="rotulo">Asesor</span>
              <br />
              <span className="mt-1 inline-block">Castro Veramendi, Rafael Oswaldo</span>
            </p>
          </div>
        </div>

        <p className="mt-12 border-t border-ink-line pt-6 font-mono text-[11.5px] text-paper-faint">
          Universidad Peruana de Ciencias Aplicadas · Ingeniería de Software · 2026
        </p>
      </Contenedor>
    </footer>
  );
}
