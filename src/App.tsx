import { useEffect, useState } from "react";

import { Contenedor } from "./componentes/ui";
import ComoFunciona from "./secciones/ComoFunciona";
import Funcionalidades from "./secciones/Funcionalidades";
import Hero from "./secciones/Hero";
import Modelo from "./secciones/Modelo";
import PieDePagina from "./secciones/PieDePagina";
import Privacidad from "./secciones/Privacidad";
import Problema from "./secciones/Problema";
import Proyecto from "./secciones/Proyecto";
import Segmento from "./secciones/Segmento";

const ENLACES = [
  ["#problema", "Problema"],
  ["#producto", "Cómo funciona"],
  ["#modelo", "Modelo"],
  ["#funcionalidades", "Funcionalidades"],
  ["#segmento", "Para quién"],
  ["#proyecto", "Proyecto"],
];

/**
 * Barra superior.
 *
 * Aparece recién cuando el hero salió de pantalla: mostrarla desde el inicio
 * le quitaría aire al titular, que es lo único que tiene que leerse primero.
 */
function Navegacion() {
  const [fija, setFija] = useState(false);

  useEffect(() => {
    const alDesplazar = () => setFija(window.scrollY > 520);
    alDesplazar();
    window.addEventListener("scroll", alDesplazar, { passive: true });
    return () => window.removeEventListener("scroll", alDesplazar);
  }, []);

  return (
    <nav
      aria-label="Secciones"
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        fija
          ? "border-ink-line bg-ink/90 backdrop-blur-md"
          : "pointer-events-none -translate-y-full border-transparent"
      }`}
    >
      <Contenedor className="flex h-14 items-center justify-between gap-6">
        <a href="#inicio" className="font-display text-[15px] font-extrabold tracking-[-0.02em]">
          Orator<span className="text-lime">IA</span>
        </a>
        <ul className="hidden items-center gap-7 md:flex">
          {ENLACES.map(([href, texto]) => (
            <li key={href}>
              <a
                href={href}
                className="text-[13px] font-medium text-paper-soft transition-colors hover:text-lime"
              >
                {texto}
              </a>
            </li>
          ))}
        </ul>
      </Contenedor>
    </nav>
  );
}

export default function App() {
  return (
    <div id="inicio">
      <Navegacion />
      <Hero />
      <main>
        <Problema />
        <ComoFunciona />
        <Modelo />
        <Funcionalidades />
        <Segmento />
        <Privacidad />
        <Proyecto />
      </main>
      <PieDePagina />
    </div>
  );
}
