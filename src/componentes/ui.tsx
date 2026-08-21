import { useEffect, useRef, useState, type ReactNode } from "react";

/** Ancho de lectura común a todas las secciones. */
export function Contenedor({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto w-full max-w-[1120px] px-6 md:px-10 ${className}`}>{children}</div>;
}

/**
 * Aparición al entrar en pantalla.
 *
 * Se desconecta del observador después del primer disparo: reanimar al volver
 * a subir convertiría una transición en un parpadeo cada vez que alguien
 * relee un párrafo.
 */
export function Aparece({
  children,
  retraso = 0,
  className = "",
}: {
  children: ReactNode;
  retraso?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const nodo = ref.current;
    if (!nodo) return;
    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada?.isIntersecting) {
          setVisible(true);
          observador.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    observador.observe(nodo);
    return () => observador.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`aparece ${className}`}
      data-visible={visible}
      style={{ transitionDelay: `${retraso}ms` }}
    >
      {children}
    </div>
  );
}

/** Encabezado de sección: numeral monoespaciado + regla de acento. */
export function Rotulo({ numeral, children }: { numeral: string; children: ReactNode }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="rotulo text-lime">{numeral}</span>
      <span className="h-px w-8 bg-lime/50" aria-hidden="true" />
      <span className="rotulo">{children}</span>
    </div>
  );
}

export function Titulo({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={`font-display text-[30px] leading-[1.12] font-extrabold tracking-[-0.025em] text-balance md:text-[44px] ${className}`}
    >
      {children}
    </h2>
  );
}

export function Parrafo({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`text-[16px] leading-[1.7] text-paper-soft md:text-[17px] ${className}`}>
      {children}
    </p>
  );
}

/** Sección con separador superior y anclaje para la navegación. */
export function Seccion({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-20 border-t border-ink-line py-20 md:py-28 ${className}`}>
      {children}
    </section>
  );
}

/**
 * Cifra con su unidad y su glosa.
 *
 * La glosa es obligatoria por decisión, no por estilo: un número sin decir de
 * dónde sale es decoración, y en un proyecto de tesis eso es peor que no
 * mostrarlo.
 */
export function Cifra({
  valor,
  unidad,
  glosa,
}: {
  valor: string;
  unidad?: string;
  glosa: string;
}) {
  return (
    <div>
      <div className="font-display text-[40px] leading-none font-extrabold tracking-[-0.03em] text-lime md:text-[52px]">
        {valor}
        {unidad ? <span className="ml-1 text-[20px] font-bold md:text-[24px]">{unidad}</span> : null}
      </div>
      <p className="mt-3 text-[13.5px] leading-[1.55] text-paper-soft">{glosa}</p>
    </div>
  );
}
