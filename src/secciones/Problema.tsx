import { Aparece, Contenedor, Parrafo, Rotulo, Seccion, Titulo } from "../componentes/ui";

const FALLAS = [
  {
    modo: "El ensayo solo",
    limite:
      "Sin audiencia no hay presión, y sin presión no se practica lo que falla bajo presión. El estudiante repite el guion, no la exposición.",
  },
  {
    modo: "La grabación que se revisa después",
    limite:
      "Devuelve todo a la vez y varias horas tarde. Cuando llega, ya no hay nada que ajustar: solo una lista con la que sentirse mal.",
  },
  {
    modo: "La herramienta que mide y reporta",
    limite:
      "Cuenta muletillas, mide ritmo, calcula contacto visual — y entrega los quince hallazgos juntos. Medir no es enseñar: nadie corrige quince cosas a la vez.",
  },
];

export default function Problema() {
  return (
    <Seccion id="problema">
      <Contenedor>
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <div>
            <Aparece>
              <Rotulo numeral="01">El problema</Rotulo>
              <Titulo>
                El problema no es detectar errores.
                <br />
                Es <span className="text-lime">saber cuál importa hoy</span>.
              </Titulo>
            </Aparece>
          </div>

          <div>
            <Aparece retraso={80}>
              <Parrafo>
                Los estudiantes universitarios llegan a sustentar con deficiencias reales en su
                competencia oral, y las herramientas disponibles fallan casi todas por el mismo
                lado: confunden <em className="text-paper not-italic">medir</em> con{" "}
                <em className="text-paper not-italic">enseñar</em>.
              </Parrafo>
              <Parrafo className="mt-5">
                Un orador novato ya está saturado sosteniendo el contenido, el cuerpo y los nervios
                al mismo tiempo. Entregarle quince observaciones al final de la práctica no le da
                quince mejoras: le da una lista que no puede procesar, y la sensación de que todo
                está mal.
              </Parrafo>
            </Aparece>

            <Aparece retraso={160}>
              <ul className="mt-11 space-y-0">
                {FALLAS.map((f, i) => (
                  <li
                    key={f.modo}
                    className="grid grid-cols-[auto_1fr] gap-x-5 border-t border-ink-line py-6"
                  >
                    <span className="font-mono text-[12px] text-lime">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-[15.5px] font-bold text-paper">{f.modo}</h3>
                      <p className="mt-2 text-[14.5px] leading-[1.65] text-paper-soft">
                        {f.limite}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </Aparece>
          </div>
        </div>
      </Contenedor>
    </Seccion>
  );
}
