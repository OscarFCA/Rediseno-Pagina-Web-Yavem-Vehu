# Templates de correo — Yabem-Vehu

Templates HTML diseñados con el sistema de diseño del Brandbook Yabem-Vehu (DESIGN.md). Compatibles con todos los clientes de correo comunes (Gmail, Outlook, Apple Mail, iOS/Android).

## Archivos

| Archivo | Destino | Cuándo se dispara |
|---|---|---|
| `cotizacion.html` | `ventas@yabem-vehu.com` | Cualquier formulario de cotización (Home, Guardias, Análisis, Consultoría, Contacto) |
| `postulacion.html` | `contacto@yabem-vehu.com` | Formulario de Oportunidades Laborales |

## Cómo cargarlos en EmailJS

1. Entra a https://dashboard.emailjs.com/admin/templates
2. **Create New Template** → ponle el nombre `Yabem · Cotización` o `Yabem · Postulación`.
3. Cambia el editor a **Code Editor** (icono `</>` en la esquina del editor).
4. Pega el contenido completo del archivo HTML correspondiente.
5. Configura los metadatos del template:

### Cotización
```
To Email:    ventas@yabem-vehu.com
From Name:   {{from_name}}
Reply To:    {{reply_to}}
Subject:     {{nivel_emoji}} {{nivel_texto}} ({{score}}/100) — {{empresa}}
```

### Postulación
```
To Email:    contacto@yabem-vehu.com
From Name:   {{from_name}}
Reply To:    {{reply_to}}
Subject:     Postulación — {{puesto}} — {{from_name}}
```

6. **Save**. Copia el `template_id` que aparece arriba (ej. `template_abc123`).
7. Pásamelos y los conecto al código de la web.

## Variables que envía la web (referencia)

### Cotización (QualForm)
| Variable | Contenido |
|---|---|
| `from_name` | Nombre del prospecto |
| `empresa` | Empresa |
| `email` | Correo del prospecto |
| `telefono` | Teléfono |
| `reply_to` | Igual que `email` (para el botón Responder) |
| `servicio` | Guardias / Análisis / Consultoría / No sé todavía |
| `guardias` | Rango seleccionado (`1-3`, `4-10`, `11-25`, `26+`) o vacío |
| `zonas` | Estados separados por coma |
| `mensaje` | Mensaje libre del prospecto |
| `score` | Puntaje 0–100 |
| `nivel` | A / B / C / ⊘ |
| `nivel_emoji` | 🔴 / 🟡 / ⚫ / ⊘ |
| `nivel_texto` | "CLIENTE CALIENTE", "CLIENTE TIBIO", "LEAD FRÍO", "DESCALIFICADO" |
| `nivel_tiempo` | "Responder en menos de 2 horas" etc. |
| `b_servicio` `b_guardias` `b_zona` `b_correo` `b_empresa` | Breakdown del scoring |
| `lang` | `es-MX` |

### Postulación (CareerForm)
| Variable | Contenido |
|---|---|
| `from_name` | Nombre del candidato |
| `telefono` | Teléfono |
| `email` | Correo (opcional) |
| `reply_to` | Igual que `email` |
| `puesto` | Vacante de interés |
| `mensaje` | Texto del candidato sobre su perfil |

## Sistema de diseño

Tokens usados (todos del brandbook):

| Token | Hex | Uso |
|---|---|---|
| `--color-primary` | `#202F4F` | Header, texto principal, line-marker |
| `--color-accent`  | `#992824` | Banner del nivel, marker, links, CTA llamar |
| `--color-surface` | `#F4F6F8` | Body background, blockquote del mensaje |
| `--color-border`  | `#E2E8F0` | Borde del card, separadores de tabla |
| `--color-whatsapp`| `#25D366` | CTA WhatsApp |

Tipografía: **Inter** con fallback a `Helvetica Neue, Arial, sans-serif` (Outlook usa Arial vía conditional comment).

Layout: tablas `role="presentation"` para máxima compatibilidad, max-width 600px, padding 32px, radius 12px.
