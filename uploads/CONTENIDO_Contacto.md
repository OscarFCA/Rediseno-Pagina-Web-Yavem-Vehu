# CONTENIDO — Contáctanos
**URL:** `cotiza.yabem-vehu.com.mx/contacto`  
**Persona objetivo:** Cualquier perfil listo para dar el paso  
**Keyword principal:** cotizar guardias de seguridad CDMX  
**Keywords secundarias:** contratar empresa de seguridad CDMX, empresa de vigilancia privada contacto  
**Prioridad:** Crítica  
**Estado:** Pendiente de construcción

---

## Meta SEO

```
<title>Contacto | Cotiza tu Servicio de Seguridad Privada | Yabem-Vehu</title>
<meta name="description" content="Cotiza guardias de seguridad, análisis de riesgos o consultoría para tu empresa en CDMX. Respondemos en menos de 24 horas. REPSE activo.">
<link rel="canonical" href="https://cotiza.yabem-vehu.com.mx/contacto">
```

---

## Sección 1 — Navbar

Igual que Home. Ver `CONTENIDO_Home.md` — Sección 1.

---

## Sección 2 — Hero de página

**Supertítulo (label):** `Formulario de contacto`

**H1:**
> Cotiza tu servicio de seguridad

**Subtítulo:**
> Déjanos tu información y te enviamos una propuesta personalizada en menos de 24 horas.

**Cambios vs. sitio actual:**
- H1: de "Contáctanos" → orientado a acción con keyword
- Subtítulo: agrega promesa de tiempo de respuesta

**Imágenes:** No requiere — hero con fondo navy sólido o superficie clara

---

## Sección 3 — Layout principal (2 columnas en desktop)

### Columna izquierda — Formulario

**Campos del formulario de calificación:**

| # | Campo | Tipo | Validación | Placeholder |
|---|---|---|---|---|
| 1 | Nombre completo | text | Requerido | Tu nombre |
| 2 | Empresa | text | Requerido | Nombre de tu empresa |
| 3 | Correo corporativo | email | No Gmail/Hotmail/Yahoo/Outlook/Live | correo@tuempresa.com |
| 4 | Teléfono | tel | Requerido | 55 XXXX XXXX |
| 5 | Servicio de interés | select | Requerido | Guardias / Análisis de Riesgos / Consultoría / No sé todavía |
| 6 | Número de guardias | select | Requerido si campo 5 = Guardias | 1–3 / 4–10 / 11–25 / 26+ |
| 7 | Zona de servicio | select | Requerido | CDMX / Estado de México / Ambas |
| 8 | Mensaje / necesidades | textarea | Opcional | Cuéntanos brevemente qué necesitas |

**Cambios vs. sitio actual:**
- Agrega campo "Servicio de interés" — para calificar el tipo de lead
- Agrega campo "Número de guardias" (select, no texto libre)
- Agrega campo "Zona de servicio" (select, no texto libre)
- Elimina reCAPTCHA — reemplazar por honeypot field (campo oculto anti-spam)
- El textarea ahora es opcional y el placeholder es más específico

**Texto del botón submit:** `Enviar solicitud` — rojo `#992824`, ancho completo

**Validación de correo corporativo:**
```
Mensaje de error: "Por favor usa tu correo corporativo, no un correo personal."
Dominios bloqueados: gmail.com, hotmail.com, yahoo.com, yahoo.com.mx, 
                     outlook.com, live.com, icloud.com, hotmail.es
```

**Texto de confianza debajo del botón:**
> 🔒 Tu información es confidencial. Respondemos en menos de 24 horas hábiles.

---

### Columna derecha — Información de contacto

**Título:** `Otras formas de contactar`

**Card: WhatsApp (CTA principal)**
- Ícono: WhatsApp
- Texto: `Escríbenos por WhatsApp`
- Subtexto: `Respuesta inmediata en horario de oficina`
- Link: `https://wa.me/5215578792146?text=Buen día, quisiera cotizar un servicio de seguridad para mi empresa.`
- Estilo: card con borde verde WhatsApp `#25D366`

**Card: Correo**
- Ícono: mail
- Texto: `ventas@yabem-vehu.com`

**Card: Teléfono**
- Ícono: phone
- Línea 1: `55 7879 2146`
- Línea 2: `55 4127 5596`

**Card: Dirección**
- Ícono: map-pin
- Texto: `Av. Insurgentes Sur No. 216, Int. 206, Col. Roma Norte, Alcaldía Cuauhtémoc, CDMX`

**Cambios vs. sitio actual:**
- Se agrega card de WhatsApp como CTA principal de la columna derecha
- Se elimina el bloque "¿En busca de una oportunidad laboral?" — ese link contamina el tráfico B2B
- Se agrega la dirección como dato de contacto

---

## Página de confirmación (post-envío)

**Mostrar mensaje en la misma página (sin redirigir):**

**Título:** `¡Recibimos tu solicitud!`

**Cuerpo:**
> Alguien de nuestro equipo revisará tu información y te contactará en menos de 24 horas hábiles.
>
> Si necesitas respuesta inmediata, escríbenos por WhatsApp:

**CTA:** `Escríbenos ahora` → WhatsApp directo

**Propósito:** Este estado de confirmación dispara el evento `form_submit` en Google Analytics para tracking de conversiones.

---

## Footer

Igual que Home. Ver `CONTENIDO_Home.md` — Footer.

---

## Inventario de imágenes

**Imágenes nuevas requeridas:** 0

Todos los elementos son tipográficos, íconos SVG o campos de formulario.

---

## Notas para el desarrollador

- El campo "Número de guardias" solo aparece si el usuario seleccionó "Guardias" en "Servicio de interés" — conditional show/hide con JS mínimo
- El honeypot es un input `type="text"` con `display:none` — si llega con valor, no procesar
- El evento GA4 `form_submit` se dispara al recibir 200 del servidor o al mostrar el mensaje de confirmación
- El reCAPTCHA del sitio actual se elimina — añade fricción en móvil y el honeypot es suficiente para este volumen
- Eliminar el bloque de Oportunidades Laborales es crítico — fue identificado como fuente de tráfico no calificado
- En móvil: formulario primero, información de contacto debajo (columna única)
