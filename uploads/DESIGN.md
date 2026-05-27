# DESIGN.md — Sistema de Diseño Web
## Yabem-Vehu Seguridad Privada
**Versión:** 1.0  
**Fecha:** Mayo 2026  
**Autor:** Elías Oscar Rico Contreras  
**Fuente de verdad visual:** Brandbook Yabem-Vehu V1.0  
**Proyecto:** Funnel de Leads — Nueva Arquitectura Web

---

## 1. Paleta de Colores

### Colores institucionales (del brandbook)

| Token | Hex | Nombre | Uso |
|---|---|---|---|
| `--color-primary` | `#202F4F` | Navy | Fondos hero, header, secciones oscuras, texto principal sobre blanco |
| `--color-accent` | `#992824` | Red | CTAs, líneas decorativas, elementos de urgencia, etiquetas de sección |
| `--color-neutral` | `#777678` | Gray | **Solo texto secundario y bordes.** Nunca como fondo de sección. |
| `--color-white` | `#FFFFFF` | White | Fondos claros, texto sobre navy, áreas de respiro |

### Colores derivados del sistema

| Token | Hex | Uso |
|---|---|---|
| `--color-primary-hover` | `#2E4270` | Hover state del primary, fondos de sección alternada oscura |
| `--color-accent-hover` | `#7A1F1C` | Hover state del botón CTA |
| `--color-surface` | `#F4F6F8` | Fondo de secciones alternadas claras, cards, inputs |
| `--color-border` | `#E2E8F0` | Bordes de cards, separadores, outline de inputs |
| `--color-text-primary` | `#202F4F` | Texto principal sobre fondo blanco (reutiliza navy) |
| `--color-text-secondary` | `#777678` | Texto secundario, captions, labels de formulario |
| `--color-text-on-dark` | `#FFFFFF` | Cualquier texto sobre fondo navy o rojo |
| `--color-whatsapp` | `#25D366` | Botón flotante WhatsApp — única excepción de paleta |

### Regla de contraste (WCAG AA)

| Combinación | Ratio | Estado |
|---|---|---|
| `#FFFFFF` sobre `#202F4F` | 11.2:1 | ✓ Pasa |
| `#FFFFFF` sobre `#992824` | 5.8:1 | ✓ Pasa |
| `#202F4F` sobre `#FFFFFF` | 11.2:1 | ✓ Pasa |
| `#777678` sobre `#FFFFFF` | 4.6:1 | ✓ Pasa (solo 16px+) |
| `#777678` sobre `#F4F6F8` | 4.3:1 | ⚠ Solo en texto 18px+ o bold |

> `#777678` nunca se usa como fondo de sección. Como superficie produce contraste insuficiente y no comunica la seriedad de la marca.

---

## 2. Tipografía

**Familia:** Inter (Google Fonts — self-hosted para performance óptima en móvil)  
**Pesos usados:** 400 (Regular) y 700 (Bold). Solo estos dos.

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

font-family: 'Inter', sans-serif;
```

### Escala tipográfica — Desktop

| Token | Elemento | Tamaño | Peso | Line-height | Uso |
|---|---|---|---|---|---|
| `--text-display` | H1 hero | 52px | Bold | 1.15 | Headline principal de cada landing |
| `--text-h1` | H1 interior | 40px | Bold | 1.2 | Títulos de página interior |
| `--text-h2` | H2 sección | 32px | Bold | 1.25 | Títulos de cada sección |
| `--text-h3` | H3 subsección | 24px | Bold | 1.3 | Subtítulos, encabezados de card |
| `--text-h4` | H4 label | 18px | Bold | 1.4 | Labels de paso, títulos pequeños |
| `--text-body-lg` | Cuerpo grande | 18px | Regular | 1.6 | Párrafos de hero e intro |
| `--text-body` | Cuerpo normal | 16px | Regular | 1.6 | Texto de contenido general |
| `--text-body-sm` | Cuerpo pequeño | 14px | Regular | 1.5 | Captions, notas, labels de form |
| `--text-label` | Label | 12px | Bold | 1.4 | Tags, etiquetas, breadcrumbs |
| `--text-button` | Botón | 16px | Bold | 1 | Solo botones y CTAs |

### Escala tipográfica — Móvil (< 768px)

| Token | Desktop | Móvil |
|---|---|---|
| `--text-display` | 52px | 36px |
| `--text-h1` | 40px | 28px |
| `--text-h2` | 32px | 24px |
| `--text-h3` | 24px | 20px |
| Todo lo demás | — | Sin cambio |

### Reglas tipográficas

- Inter Regular para todo el cuerpo de texto sin excepción.
- Inter Bold para títulos, botones, labels y cualquier texto que requiera jerarquía.
- No usar pesos intermedios (500, 600). Solo 400 y 700.
- No usar `text-transform: uppercase` en cuerpo de texto. Solo permitido en micro-labels (12px).
- Tracking (`letter-spacing`) solo en labels uppercase pequeños: `0.08em`.

---

## 3. Logotipo

Reglas directas del Brandbook Yabem-Vehu V1.0.

### Versiones permitidas

| Versión | Uso |
|---|---|
| Principal (color) | Sobre `#FFFFFF` o `--color-surface` |
| Negativa (blanco) | Sobre `--color-primary` o cualquier fondo oscuro |
| Escala de grises | Solo en usos monocromáticos (PDF, impresiones, fax) |

### Posición en web

Header, esquina superior izquierda. Siempre. Sin excepciones.

### Restricciones técnicas

- **Tamaño mínimo digital:** 80px de ancho. No usar por debajo.
- **Área de seguridad:** Espacio mínimo alrededor del logo = X (altura del ícono central, la flecha roja). Ningún elemento puede invadir ese espacio.

### Prohibiciones absolutas (del brandbook)

- No cambiar los colores del logotipo.
- No deformar ni estirar proporciones.
- No agregar sombras, efectos, filtros ni overlays.
- No rotar bajo ningún ángulo.
- No colocar sobre fondos que comprometan legibilidad.
- No modificar la tipografía del wordmark.

---

## 4. Espaciado

Sistema base de 8px. Toda distancia entre elementos es múltiplo de 8.

| Token | Valor | Uso típico |
|---|---|---|
| `--space-1` | 4px | Espacio mínimo, interno de componentes muy pequeños |
| `--space-2` | 8px | Gap entre elementos inline, padding de badges |
| `--space-3` | 16px | Padding interno de botones (vertical), gap de listas |
| `--space-4` | 24px | Padding interno de cards, gap de columnas en móvil |
| `--space-5` | 32px | Margen entre secciones pequeñas, padding horizontal móvil |
| `--space-6` | 48px | Separación entre secciones en móvil |
| `--space-7` | 64px | Separación entre secciones en desktop |
| `--space-8` | 80px | Padding vertical de hero en móvil |
| `--space-9` | 96px | Padding vertical de hero en desktop |
| `--space-10` | 128px | Secciones de gran peso visual en desktop |

---

## 5. Layout y Grid

```css
--container-max:    1200px;
--container-px-mobile:  24px;
--container-px-tablet:  48px;
--container-px-desktop: 80px;

--grid-columns:  12;
--grid-gap-desktop: 24px;
--grid-gap-mobile:  16px;
```

### Breakpoints

| Token | Valor | Descripción |
|---|---|---|
| `--bp-sm` | 480px | Móvil grande |
| `--bp-md` | 768px | Tablet |
| `--bp-lg` | 1024px | Desktop pequeño |
| `--bp-xl` | 1280px | Desktop estándar |

### Regla mobile-first — obligatoria

El 92.9% del tráfico actual de Yabem llega desde móvil (dato del reporte Digital Ascent, mar–abr 2026). **Mobile-first no es opcional.** Cada decisión de layout se toma primero en 390px y luego se expande con `min-width` media queries.

```css
/* ✓ Correcto — mobile first */
.grid { grid-template-columns: 1fr; }
@media (min-width: 768px) { .grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .grid { grid-template-columns: repeat(3, 1fr); } }

/* ✗ Incorrecto — desktop first */
.grid { grid-template-columns: repeat(3, 1fr); }
@media (max-width: 768px) { .grid { grid-template-columns: 1fr; } }
```

---

## 6. Bordes y Elevación

### Border radius

| Token | Valor | Uso |
|---|---|---|
| `--radius-sm` | 4px | Badges, tags, inputs, numeración de pasos |
| `--radius-md` | 8px | Botones, formularios, cards estándar |
| `--radius-lg` | 12px | Cards destacadas |

### Sombras

Sombras sutiles. Nunca decorativas — solo para separar niveles de z-index.

| Token | Valor CSS | Uso |
|---|---|---|
| `--shadow-sm` | `0 1px 3px rgba(0,0,0,0.08)` | Cards en reposo |
| `--shadow-md` | `0 4px 12px rgba(0,0,0,0.10)` | Cards en hover, formularios |
| `--shadow-lg` | `0 8px 24px rgba(0,0,0,0.12)` | Elementos flotantes |

> Sombras **prohibidas en el logotipo** (restricción del brandbook). Sombra sutil permitida en cards y botones flotantes.

---

## 7. Componentes

### 7.1 Botón CTA principal

El único botón primario del sistema. Una sola instancia visible above the fold en móvil.

```css
.btn-primary {
  background-color: #992824;
  color: #FFFFFF;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 700;
  padding: 14px 32px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: background-color 200ms ease;
}

.btn-primary:hover  { background-color: #7A1F1C; }
.btn-primary:focus  { outline: 3px solid #202F4F; outline-offset: 2px; }
.btn-primary:disabled { opacity: 0.5; cursor: not-allowed; }
```

**Textos de CTA permitidos:**
- "Solicitar cotización"
- "Cotizar ahora"
- "Enviar solicitud"
- "Hablar con un asesor"

No usar textos genéricos como "Enviar", "Click aquí" o "Ver más" en el CTA principal.

---

### 7.2 Botón secundario

```css
.btn-secondary {
  background-color: transparent;
  color: #202F4F;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 700;
  padding: 12px 32px;
  border-radius: 8px;
  border: 2px solid #202F4F;
  cursor: pointer;
  transition: background-color 200ms ease, color 200ms ease;
}

.btn-secondary:hover {
  background-color: #202F4F;
  color: #FFFFFF;
}
```

---

### 7.3 Card de servicio

```css
.card-service {
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-top: 4px solid #202F4F;   /* navy por defecto */
  border-radius: 12px;
  padding: 32px 24px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
  transition: box-shadow 200ms ease;
}

.card-service:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.10);
}

.card-service--accent {
  border-top-color: #992824;       /* variante roja para énfasis */
}
```

**Estructura interna de una card de servicio:**
1. Ícono outline (24px, color navy)
2. H3 Bold — nombre del servicio
3. Párrafo Regular — descripción breve
4. Texto-link en rojo — "Solicitar este servicio →"

---

### 7.4 Numeración de paso (proceso)

Patrón visual del brandbook para los 4 pasos del proceso de trabajo.

```css
.step-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #202F4F;
  color: #FFFFFF;
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  font-weight: 700;
  border-radius: 4px;
  flex-shrink: 0;
  margin-right: 16px;
}
```

Formato de número: 01, 02, 03, 04 — siempre con cero previo.

---

### 7.5 Decorador de sección (línea roja)

Elemento de identidad visual derivado del brandbook. Aparece antes del H2 principal de cada sección.

```css
.section-marker {
  display: block;
  width: 48px;
  height: 4px;
  background-color: #992824;
  border-radius: 2px;
  margin-bottom: 16px;
}
```

Uso: inmediatamente antes de cada `<h2>` de sección. No usar en H3 ni elementos menores.

---

### 7.6 Badge de certificación

```css
.badge-cert {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #F4F6F8;
  border: 1px solid #E2E8F0;
  border-radius: 4px;
  padding: 6px 12px;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 700;
  color: #202F4F;
  letter-spacing: 0.02em;
}
```

**Certificaciones que aplican:**
- REPSE — ARR23960/2024
- DGSP CDMX 0605-15 / Exp. 3788-14 — Permiso 0605-15
- ASIS International Member
- IFPO Member
- ANERPV — Centinela 2.0
- ALAS Member

---

### 7.7 Header / Navbar

```css
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: #FFFFFF;
  border-bottom: 1px solid #E2E8F0;
  height: 72px;          /* desktop */
}

@media (max-width: 768px) {
  .header { height: 64px; }
}
```

**Estructura:**
- Izquierda: logotipo versión principal (color), mínimo 80px ancho
- Centro (desktop): nav links — Inter Bold, 14px, `#202F4F`
- Derecha: Botón CTA principal en tamaño reducido (`padding: 10px 20px`)
- Móvil: logo izquierda + ícono hamburger derecha (color navy). Menú desplegable fondo blanco.

---

### 7.8 Sección Hero

```css
.hero {
  background-color: #202F4F;
  padding: 96px 0;       /* desktop */
  color: #FFFFFF;
}

@media (max-width: 768px) {
  .hero { padding: 80px 0; }
}

.hero__headline {
  font-size: 52px;       /* --text-display */
  font-weight: 700;
  line-height: 1.15;
  color: #FFFFFF;
}

.hero__subtitle {
  font-size: 18px;
  font-weight: 400;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
  margin-top: 16px;
  margin-bottom: 32px;
}

@media (max-width: 768px) {
  .hero__headline { font-size: 36px; }
}
```

**Cuando se usa fotografía de fondo:**
```css
.hero--photo {
  background-image: url('...');
  background-size: cover;
  background-position: center;
}

.hero--photo::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(32, 47, 79, 0.78);  /* overlay navy */
}
```

---

### 7.9 Formulario de contacto (V1)

Mecanismo de calificación de leads. Sin chatbot ni GHL en esta fase.

```css
.form-label {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #202F4F;
  display: block;
  margin-bottom: 6px;
}

.form-input,
.form-select {
  width: 100%;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  padding: 12px 16px;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #202F4F;
  background: #FFFFFF;
  transition: border-color 200ms ease;
  appearance: none;
}

.form-input::placeholder { color: #777678; }

.form-input:focus,
.form-select:focus {
  outline: none;
  border-color: #202F4F;
  border-width: 2px;
}

.form-input--error { border-color: #992824; }

.form-error-msg {
  font-size: 13px;
  font-weight: 400;
  color: #992824;
  margin-top: 4px;
  display: block;
}
```

**Campos del formulario de calificación:**

| # | Campo | Tipo | Nota |
|---|---|---|---|
| 1 | Nombre completo | text | Requerido |
| 2 | Empresa | text | Requerido |
| 3 | Correo corporativo | email | Validar: no Gmail, Hotmail, Yahoo |
| 4 | Número de guardias requeridos | select | Opciones: 1–3 / 4–10 / 11–25 / 26+ |
| 5 | Zona de servicio | select | Opciones: CDMX / Estado de México / Ambas |

El botón de envío usa el estilo `.btn-primary` en ancho completo en móvil.

**Validación del correo corporativo:**
```javascript
const isFreeEmail = /^[^@]+@(gmail|hotmail|yahoo|outlook|live|icloud)\./i.test(email);
if (isFreeEmail) {
  showError('Por favor usa tu correo corporativo.');
}
```

---

### 7.10 Botón flotante de WhatsApp

Presente en todas las páginas del funnel. Es el CTA de menor fricción para el 93% de tráfico móvil. Solo visible en móvil (< 768px).

```css
.whatsapp-float {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 56px;
  height: 56px;
  background-color: #25D366;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.18);
  z-index: 999;
  text-decoration: none;
  transition: transform 150ms ease;
}

.whatsapp-float:hover { transform: scale(1.05); }
.whatsapp-float svg   { width: 28px; height: 28px; fill: #FFFFFF; }

@media (min-width: 768px) {
  .whatsapp-float { display: none; }
}
```

```html
<a 
  href="https://wa.me/525578792146?text=Hola%2C%20me%20interesa%20cotizar%20un%20servicio%20de%20seguridad."
  class="whatsapp-float"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Contactar por WhatsApp"
>
  <!-- SVG del ícono de WhatsApp -->
</a>
```

---

## 8. Iconografía

**Estilo:** Outline (solo trazo). Sin relleno sólido.  
**Stroke:** 1.5px  
**Tamaño base:** 24px × 24px  
**Color por defecto:** `#202F4F` (navy)  
**Color de énfasis:** `#992824` (rojo) — para iconos en CTAs de texto o highlights  
**Librería recomendada:** Lucide Icons o Heroicons — outline, SVG, sin dependencias pesadas.

---

## 9. Fotografía

**Estilo:** Guardias Yabem en uniformes reales (gris + negro con logotipo). Instalaciones reales de clientes. No stock genérico.  
**Tratamiento:** Sin filtros de color. Contraste natural.  
**Overlay en hero:** `rgba(32, 47, 79, 0.78)` sobre cualquier fotografía de fondo para garantizar legibilidad del texto blanco.  
**Formato:** WebP con fallback JPG. Máximo 200KB por imagen optimizada.  
**Alt text:** Descriptivo y específico — nunca vacío, nunca genérico como "imagen de seguridad".

---

## 10. Restricciones de implementación (V1)

Estas restricciones son obligatorias para la prueba piloto. Se revisarán en V2.

| Restricción | Motivo |
|---|---|
| Sin chatbot | V2. Solo formulario de contacto en esta fase. |
| Sin GoHighLevel | V2. El formulario envía a endpoint simple (email o webhook). |
| Sin animaciones complejas | Performance en móvil. Solo `transition` CSS de máximo 200ms. Nada de parallax, scroll animations ni librerías de animación. |
| Sin JS pesado | Vanilla JS o Alpine.js si es necesario. No React ni Vue. |
| Sin WordPress | Webflow o HTML/CSS puro. |
| Sin gradientes en la UI | El brandbook no los usa. La UI debe ser flat y limpia. |
| Mobile-first obligatorio | 92.9% del tráfico actual es móvil. |

---

## 11. Variables CSS — referencia completa

```css
:root {
  /* Colores institucionales */
  --color-primary:         #202F4F;
  --color-primary-hover:   #2E4270;
  --color-accent:          #992824;
  --color-accent-hover:    #7A1F1C;
  --color-neutral:         #777678;
  --color-white:           #FFFFFF;
  --color-surface:         #F4F6F8;
  --color-border:          #E2E8F0;
  --color-whatsapp:        #25D366;

  /* Texto */
  --color-text-primary:    #202F4F;
  --color-text-secondary:  #777678;
  --color-text-on-dark:    #FFFFFF;

  /* Tipografía */
  --font-base:             'Inter', sans-serif;
  --text-display:          52px;
  --text-h1:               40px;
  --text-h2:               32px;
  --text-h3:               24px;
  --text-h4:               18px;
  --text-body-lg:          18px;
  --text-body:             16px;
  --text-body-sm:          14px;
  --text-label:            12px;
  --text-button:           16px;

  /* Espaciado */
  --space-1:    4px;
  --space-2:    8px;
  --space-3:    16px;
  --space-4:    24px;
  --space-5:    32px;
  --space-6:    48px;
  --space-7:    64px;
  --space-8:    80px;
  --space-9:    96px;
  --space-10:   128px;

  /* Layout */
  --container-max:           1200px;
  --container-px-mobile:     24px;
  --container-px-tablet:     48px;
  --container-px-desktop:    80px;

  /* Bordes */
  --radius-sm:   4px;
  --radius-md:   8px;
  --radius-lg:   12px;

  /* Sombras */
  --shadow-sm:   0 1px 3px rgba(0,0,0,0.08);
  --shadow-md:   0 4px 12px rgba(0,0,0,0.10);
  --shadow-lg:   0 8px 24px rgba(0,0,0,0.12);

  /* Breakpoints (referencia — usar en media queries) */
  --bp-sm:   480px;
  --bp-md:   768px;
  --bp-lg:   1024px;
  --bp-xl:   1280px;
}

/* Escala móvil */
@media (max-width: 768px) {
  :root {
    --text-display: 36px;
    --text-h1:      28px;
    --text-h2:      24px;
    --text-h3:      20px;
  }
}
```

---

## 12. Accesibilidad

- Todos los inputs tienen `<label>` visible. No depender solo del `placeholder`.
- Botón flotante de WhatsApp tiene `aria-label="Contactar por WhatsApp"`.
- Imágenes con `alt` descriptivo. Imágenes decorativas con `alt=""`.
- Contraste mínimo 4.5:1 para texto normal, 3:1 para texto grande (18px+).
- Estados focus visibles en todos los elementos interactivos.
- Formulario con mensajes de error textuales — no solo cambio de color.
- Orden de lectura del DOM coherente con el orden visual.

---

*Documento generado en Mayo 2026. Actualizar cuando cambien los tokens de marca o el scope del proyecto.*
