# oratoria-landing

Página pública de OratorIA: qué es el producto, cómo funciona, qué funcionalidades tiene y a quién está dirigido.

Forma parte del proyecto de tesis **OratorIA** (UPC, 2026), junto con `oratoria-plataforma`, `oratoria-presentacion` y `oratoria-mcp-server`.

## Qué comunica esta página

Está escrita para alguien que llega sin contexto —un jurado, un asesor, un participante potencial— y tiene que entender el producto en una pasada. El orden de las secciones es el orden en que se sostiene el argumento:

| Sección              | Responde a                                                                    |
| -------------------- | ----------------------------------------------------------------------------- |
| Hero                 | Qué hace distinto: prioriza en vez de listar                                  |
| 01 · Problema        | Por qué las alternativas fallan: confunden medir con enseñar                  |
| 02 · Cómo funciona   | El ciclo de práctica, y la regla de no interrumpir mientras se expone         |
| 03 · Modelo          | El modelo RPP con su fórmula, que es la contribución del proyecto             |
| 04 · Funcionalidades | Qué hace, agrupado por momento de uso y trazado a los requisitos de la tesis  |
| 05 · Segmento        | Para quién es, y las tres renuncias que se tomaron por ese segmento           |
| 06 · Privacidad      | Cuatro garantías, cada una con cómo se cumple y cómo se comprueba             |
| 07 · Proyecto        | Que es una investigación en curso, no un producto en venta                    |

### Dos decisiones de contenido

**La fórmula está a la vista.** Esconder el modelo detrás de "algoritmo propietario" sería lo contrario de una tesis: la contribución es justamente que el criterio se pueda auditar y discutir.

**No hay registro ni lista de espera.** El sistema está en desarrollo y el estudio de campo no ha comenzado. Una página que invite a registrarse prometería algo que hoy no existe.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:5181
npm run build    # verifica tipos y genera dist/
npm run preview
```

## Stack

React 19 · TypeScript · Vite 6 · Tailwind CSS v4. Sin dependencias de tiempo de ejecución más allá de React: la página es estática y no consulta ningún servicio.

Tipografías desde Google Fonts (Plus Jakarta Sans y JetBrains Mono), con familias del sistema como respaldo.

## Estructura

```
src/
  App.tsx              # composición de secciones y barra superior
  index.css            # tokens de color y tipografía; utilidades .rotulo y .marcado
  componentes/ui.tsx   # Contenedor, Seccion, Titulo, Rotulo, Cifra, Aparece
  secciones/           # una sección por archivo, en el orden en que aparecen
```

Los textos viven como datos al inicio de cada sección, no incrustados en el marcado, para poder revisarlos sin leer JSX.

## Accesibilidad

- Contraste verificado sobre el fondo `#050505`; los tonos tenues se aclararon hasta superar el mínimo AA para texto pequeño.
- La única animación es la aparición al desplazar, y se desactiva por completo con `prefers-reduced-motion`.
- La barra superior es un `<nav>` con etiqueta, y el desplazamiento suave se apaga con la misma preferencia.

## Despliegue

Sitio estático. En Vercel: framework Vite, salida `dist/`, sin variables de entorno.
