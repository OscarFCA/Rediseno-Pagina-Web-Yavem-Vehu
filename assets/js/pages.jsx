/* global React, Icon, Header, Footer, WhatsAppFloat, ClientsMarquee, CtaFinal, Testimonial, TestimonialCarousel, TESTIMONIALS, QualForm, PageHero, navigate, WA_LINK, WA_MESSAGES, waLink, PUESTOS */
const { useState } = React;

// ============================================================
// HOME PAGE
// ============================================================
function HomePage() {
  return (
    <div className="page-fade" data-screen-label="01 Home">
      {/* Hero — full-bleed video background + navy gradient overlay */}
      <section className="hero hero--video" data-screen-label="Hero">
        <div className="hero__bg" aria-hidden="true">
          {/* Drop your hero video file at assets/video/hero-bg.mp4 (and .webm for fallback). */}
          {/* While no video file is present, the poster image below shows with a subtle Ken Burns zoom. */}
          <video
            className="hero__bg-video"
            ref={(el) => {if (el) {el.muted = true;el.defaultMuted = true;el.volume = 0;}}}
            autoPlay muted loop playsInline preload="metadata"
            poster="assets/img/hero-image.webp"
            aria-hidden="true">
            
            <source src="assets/video/hero-bg.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero__overlay" aria-hidden="true"></div>
        <div className="hero__noise" aria-hidden="true"></div>

        <div className="container hero__inner">
          <div className="hero__content">
            <span className="eyebrow eyebrow--light">Seguridad Privada</span>
            <h1 className="hero__headline" style={{ fontSize: "clamp(34px, 8.5vw, 70px)" }}>Protegemos lo que<br/>más te importa</h1>
            <p className="hero__subtitle">Más de 15 años protegiendo activos empresariales en México.

            </p>
            <div className="hero__ctas">
              <a className="btn btn-primary" onClick={(e) => {e.preventDefault();navigate('/contacto');}} href="/contacto">Cotiza ahora</a>
              <a className="btn btn-secondary-light" onClick={(e) => {e.preventDefault();document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' });}} href="#servicios">Nuestros servicios</a>
            </div>

            <div className="hero-cert-row" aria-label="Certificaciones y registros oficiales">
              <a className="hero-cert" href="#" onClick={(e) => e.preventDefault()} aria-label="REPSE Activo — Registro oficial ante la STPS. Operamos 100% dentro del marco legal.">
                <span className="hero-cert__logo">
                  <span dangerouslySetInnerHTML={{ __html: '<!-- REPSE Activo: Registro oficial ante la Secretaría del Trabajo y Previsión Social (STPS). Operamos 100% dentro del marco legal. -->' }} />
                  <img src="assets/img/cert-repse.webp" alt="REPSE Activo — Registro oficial ante la STPS. Operamos 100% dentro del marco legal." />
                </span>
              </a>
              <a className="hero-cert" href="#" onClick={(e) => e.preventDefault()} aria-label="ASIS International — Miembro activo de la asociación internacional de seguridad.">
                <span className="hero-cert__logo">
                  <span dangerouslySetInnerHTML={{ __html: '<!-- ASIS International: Miembro activo de la asociación internacional de seguridad. -->' }} />
                  <img src="assets/img/cert-asis.webp" alt="ASIS International — Miembro activo de la asociación internacional de seguridad." />
                </span>
              </a>
              <a className="hero-cert" href="#" onClick={(e) => e.preventDefault()} aria-label="DGSP CDMX 0605-15 / Exp. 3788-14 — Permiso de operación vigente ante la Secretaría de Seguridad Ciudadana.">
                <span className="hero-cert__logo">
                  <span dangerouslySetInnerHTML={{ __html: '<!-- DGSP CDMX 0605-15 / Exp. 3788-14: Permiso de operación vigente ante la Secretaría de Seguridad Ciudadana. -->' }} />
                  <img src="assets/img/cert-ssc.webp" alt="DGSP CDMX 0605-15 / Exp. 3788-14 — Permiso de operación vigente ante la Secretaría de Seguridad Ciudadana." />
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="hero__corner"></div>
      </section>

      <ClientsMarquee />

      {/* Servicios */}
      <section className="section section--surface" id="servicios" data-screen-label="Servicios">
        <div className="container">
          <div className="section__header section__header--centered">
            <span className="section-marker"></span>
            <h2 className="section__title">Nuestros servicios de seguridad</h2>
            <p className="section__subtitle">Soluciones especializadas para cada necesidad de tu empresa.</p>
          </div>

          <div className="cards-grid cards-grid--3">
            <article className="card">
              <div className="card__icon"><Icon.ShieldCheck /></div>
              <h3 className="card__title">Guardias de Seguridad Intramuros</h3>
              <p className="card__body">Guardias capacitados bajo estándares internacionales y supervisados, seleccionados con rigor para proteger tus instalaciones y activos.</p>
              <a className="btn-link card__cta" onClick={(e) => {e.preventDefault();navigate('/guardias');}} href="/guardias" aria-label="Ver servicio de Guardias de Seguridad Intramuros">Ver servicio <Icon.ArrowRight /></a>
            </article>
            <article className="card">
              <div className="card__icon"><Icon.Search /></div>
              <h3 className="card__title">Análisis de Riesgos Empresariales</h3>
              <p className="card__body">Diagnosticamos vulnerabilidades en tus instalaciones y diseñamos estrategias preventivas para tu operación.</p>
              <a className="btn-link card__cta" onClick={(e) => {e.preventDefault();navigate('/analisis');}} href="/analisis" aria-label="Ver servicio de Análisis de Riesgos Empresariales">Ver servicio <Icon.ArrowRight /></a>
            </article>
            <article className="card">
              <div className="card__icon"><Icon.Clipboard /></div>
              <h3 className="card__title">Consultoría en Seguridad Privada</h3>
              <p className="card__body">Asesoría estratégica para identificar amenazas, diseñar planes de acción y fortalecer tu postura de seguridad.</p>
              <a className="btn-link card__cta" onClick={(e) => {e.preventDefault();navigate('/consultoria');}} href="/consultoria" aria-label="Ver servicio de Consultoría en Seguridad Privada">Ver servicio <Icon.ArrowRight /></a>
            </article>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="section" data-screen-label="Testimonios">
        <div className="container">
          <div className="section__header section__header--centered">
            <span className="section-marker"></span>
            <h2 className="section__title">Lo que dicen nuestros clientes</h2>
            <p className="section__subtitle">15 años de clientes satisfechos hablan por sí mismos.</p>
          </div>
          <div className="testimonials testimonials--carousel">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      <CtaFinal
        title="Da el primer paso hacia una seguridad integral"
        body="Cuéntanos sobre tu empresa y recibe una propuesta personalizada. Respondemos en menos de 24 horas." />
      
    </div>);

}

// ============================================================
// NOSOTROS PAGE
// ============================================================
function NosotrosPage() {
  return (
    <div className="page-fade" data-screen-label="02 Nosotros">
      <PageHero
        eyebrow="Seguridad Privada"
        title={<>Conoce más<br />sobre nosotros</>}
        subtitle="Más de 15 años protegiendo activos empresariales en México."
        variant="nosotros"
        primary="Cotiza con nosotros"
        primaryHref="/contacto"
        secondary="Nuestros servicios"
        secondaryHref="/guardias"
        secondaryExternal={false} />
      

      <ClientsMarquee />

      {/* Quiénes somos */}
      <section className="section" data-screen-label="Quiénes somos">
        <div className="container">
          <div className="about-grid">
            <div>
              <span className="section-marker"></span>
              <h2 className="section__title" style={{ fontSize: "clamp(26px, 6vw, 40px)" }}>¿Quiénes somos?</h2>
              <div className="about-grid__body mt-3">
                <p>Somos una empresa <strong style={{ color: 'var(--color-primary)' }}>100% mexicana</strong> y sus aliados estratégicos en protección. Hemos consolidado un legado de confianza y tranquilidad para nuestros clientes.</p>
                <p>Nuestra fortaleza radica en la excelencia operativa y el estricto cumplimiento normativo. No solo garantizamos servicios de seguridad de la más alta calidad, sino que aseguramos la total legalidad y transparencia en cada operación, contando con todos los permisos y registros vigentes.</p>
                <p>Detrás de cada servicio se encuentra nuestro equipo: profesionales altamente certificados y con una amplia trayectoria en el ámbito de la seguridad, listos para anticipar y mitigar cualquier riesgo.</p>
              </div>
              <div className="metrics">
                <div className="metric"><div className="metric__value">15</div><div className="metric__label">Años de experiencia</div></div>
                <div className="metric"><div className="metric__value">+100</div><div className="metric__label">Clientes resguardados</div></div>
                <div className="metric"><div className="metric__value">+30</div><div className="metric__label">Años equipo consultor</div></div>
              </div>
            </div>
            <img src="assets/img/yb-equipo.webp" alt="Equipo Yabem-Vehu" />
          </div>
        </div>
      </section>

      {/* Experiencia del equipo */}
      <section className="section section--surface" data-screen-label="Experiencia">
        <div className="container">
          <div className="section__header">
            <span className="section-marker"></span>
            <h2 className="section__title" style={{ fontSize: "clamp(26px, 6vw, 40px)" }}>Experiencia de nuestro equipo</h2>
          </div>
          <div className="cards-grid">
            <article className="card">
              <div className="card__icon"><Icon.Users /></div>
              <h3 className="card__title">+30 años de experiencia especializada</h3>
              <p className="card__body">Nuestro equipo de especialistas o consultores tienen más de 30 años de experiencia en áreas de la Seguridad y Prevención de Pérdidas, Seguridad Patrimonial, Seguridad Física, Protección Civil e Investigaciones Internas, algunos con certificaciones de Estándares de Competencia CONOCER-SEP.</p>
            </article>
            <article className="card card--accent">
              <div className="card__icon"><Icon.Award /></div>
              <h3 className="card__title">Reclutamiento riguroso de personal</h3>
              <p className="card__body">Nuestra área de Gestión Humana realiza procesos rigurosos de reclutamiento y selección de personal, incorporando Inteligencia Artificial en las evaluaciones para seleccionar el mejor talento. Diseñamos e implementamos cursos de capacitación apegados a la Ley Federal de Seguridad Privada y bajo estándares de competencias laborales.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Misión Visión Valores */}
      <section className="section" data-screen-label="Principios">
        <div className="container">
          <div className="section__header section__header--centered">
            <span className="section-marker"></span>
            <h2 className="section__title" style={{ fontSize: "clamp(26px, 6vw, 40px)" }}>Nuestros principios</h2>
            <p className="section__subtitle">La brújula que guía cada operación, cada turno y cada decisión.</p>
          </div>
          <div className="principles">
            <article className="principle">
              <div className="principle__icon" aria-hidden="true">
                {/* Misión: target / crosshair */}
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="32" r="22" stroke="currentColor" strokeWidth="3" />
                  <circle cx="32" cy="32" r="13" stroke="currentColor" strokeWidth="3" />
                  <circle cx="32" cy="32" r="4.5" fill="currentColor" />
                  <path d="M32 4 V14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  <path d="M32 50 V60" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  <path d="M4 32 H14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  <path d="M50 32 H60" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>
              <div className="principle__body">
                <div className="principle__label">Misión</div>
                <h3 className="principle__title">Innovación al servicio del activo del cliente</h3>
                <p>Ser un centro de innovación y desarrollo de mejores prácticas para el resguardo de los activos de nuestros clientes, a través del valor humano y el cumplimiento.</p>
              </div>
            </article>
            <article className="principle">
              <div className="principle__icon" aria-hidden="true">
                {/* Visión: eye + horizon */}
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 32 C12 18, 22 12, 32 12 C42 12, 52 18, 60 32 C52 46, 42 52, 32 52 C22 52, 12 46, 4 32 Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
                  <circle cx="32" cy="32" r="9" stroke="currentColor" strokeWidth="3" />
                  <circle cx="32" cy="32" r="3.5" fill="currentColor" />
                </svg>
              </div>
              <div className="principle__body">
                <div className="principle__label">Visión</div>
                <h3 className="principle__title">El socio comercial referente</h3>
                <p>Ser el socio comercial referente de nuestros clientes en seguridad privada.</p>
              </div>
            </article>
            <article className="principle">
              <div className="principle__icon" aria-hidden="true">
                {/* Valores: shield + check */}
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32 6 L54 14 V30 C54 43, 45 52, 32 58 C19 52, 10 43, 10 30 V14 Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M22 31 L29 38 L43 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="principle__body">
                <div className="principle__label">Valores</div>
                <h3 className="principle__title">Lo que nos define</h3>
                <div className="values-chips">
                  {['Honestidad', 'Cumplimiento', 'Humanidad', 'Equidad', 'Respeto', 'Colaboración', 'Fidelidad'].map((v) =>
                  <span className="value-chip" key={v}>{v}</span>
                  )}
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Certificaciones & registros */}
      <section className="section section--navy" data-screen-label="Certificaciones">
        <div className="container">
          <div className="section__header">
            <span className="section-marker"></span>
            <h2 className="section__title" style={{ fontSize: "clamp(26px, 6vw, 40px)" }}>¿Por qué elegirnos?</h2>
            <p className="section__subtitle" style={{ fontWeight: 700, color: '#fff' }}>
              Elegir a Yabem-Vehu es optar por un socio de seguridad con visión de futuro y compromiso total. Nos distinguimos por nuestro estricto cumplimiento normativo, operando siempre con todos los permisos y registros en regla.
            </p>
          </div>

          <h3 className="h4" style={{ color: '#fff', marginBottom: 16, opacity: 0.85, fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Registros oficiales</h3>
          <div className="cards-grid cards-grid--3" style={{ marginBottom: 48 }}>
            <article className="cert-card" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.12)' }}>
              <div className="cert-card__logo" style={{ background: 'rgba(255,255,255,0.08)' }}><img src="assets/img/cert-repse.webp" alt="REPSE" /></div>
              <div>
                <div className="cert-card__title" style={{ color: '#fff' }}>REPSE</div>
                <div className="cert-card__code">ARR23960/2024</div>
                <div className="cert-card__body" style={{ color: 'rgba(255,255,255,0.78)' }}>Proveedor registrado ante la STPS. Contratar con nosotros no genera contingencias laborales.</div>
              </div>
            </article>
            <article className="cert-card" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.12)' }}>
              <div className="cert-card__logo" style={{ background: 'rgba(255,255,255,0.08)' }}><img src="assets/img/cert-ssc.webp" alt="DGSP CDMX 0605-15 / Exp. 3788-14" /></div>
              <div>
                <div className="cert-card__title" style={{ color: '#fff' }}>DGSP CDMX 0605-15 / Exp. 3788-14</div>
                <div className="cert-card__code">Permiso 0605-15 / Exp. 3788-14</div>
                <div className="cert-card__body" style={{ color: 'rgba(255,255,255,0.78)' }}>Operamos con autorización vigente de la Secretaría de Seguridad Ciudadana.</div>
              </div>
            </article>
            <article className="cert-card" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.12)' }}>
              <div className="cert-card__logo" style={{ background: 'rgba(255,255,255,0.08)' }}><img src="assets/img/cert-asis.webp" alt="ASIS" /></div>
              <div>
                <div className="cert-card__title" style={{ color: '#fff' }}>ASIS International</div>
                <div className="cert-card__code">Member</div>
                <div className="cert-card__body" style={{ color: 'rgba(255,255,255,0.78)' }}>Miembros activos. Acceso a los estándares internacionales de seguridad corporativa.</div>
              </div>
            </article>
          </div>

          <h3 className="h4" style={{ color: '#fff', marginBottom: 16, opacity: 0.85, fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Asociaciones</h3>
          <div className="cert-row">
            <span className="badge-cert"><span className="dot"></span>ASIS Internacional — Member</span>
            <span className="badge-cert"><span className="dot"></span>IFPO (International Foundation for Protection Officers) — Member</span>
          </div>

          <div className="tech-box">
            <div className="tech-box__icon"><Icon.Radio /></div>
            <div>
              <div className="tech-box__title">Diferenciador tecnológico</div>
              <p className="tech-box__body">Nuestros dispositivos están programados con un Botón de Pánico con GPS enlazado a un Centro de Monitoreo empleando el programa Centinela 2.0 de la ANERPV, conectado a los centros de mando C4 y C5 de gobiernos estatales y la Guardia Nacional.</p>
            </div>
          </div>
        </div>
      </section>

      <CtaFinal
        title="Da el primer paso hacia una seguridad integral"
        body="Cuéntanos sobre tu empresa y recibe una propuesta personalizada. Respondemos en menos de 24 horas." />
      
    </div>);

}

// ============================================================
// SERVICE PAGE TEMPLATE pieces (reused)
// ============================================================
function PainSection({ title, items }) {
  return (
    <section className="section" data-screen-label="Problema">
      <div className="container">
        <div className="section__header">
          <span className="section-marker"></span>
          <h2 className="section__title" style={{ fontSize: "clamp(26px, 6vw, 40px)" }}>{title}</h2>
        </div>
        <div className="cards-grid cards-grid--3">
          {items.map((it, i) =>
          <article className="pain-card" key={i}>
              <div className="pain-card__num">{String(i + 1).padStart(2, '0')}</div>
              <h3 className="pain-card__title">{it.title}</h3>
              <p className="pain-card__body">{it.body}</p>
            </article>
          )}
        </div>
      </div>
    </section>);

}

function ValueSection({ title, items, surface = true }) {
  return (
    <section className={"section " + (surface ? "section--surface" : "")} data-screen-label="Diferenciadores">
      <div className="container">
        <div className="section__header">
          <span className="section-marker"></span>
          <h2 className="section__title" style={{ fontSize: "clamp(26px, 6vw, 40px)" }}>{title}</h2>
        </div>
        <div className="value-list">
          {items.map((it, i) =>
          <article className="value-item" key={i}>
              <h3 className="value-item__title">{it.title}</h3>
              <p className="value-item__body">{it.body}</p>
            </article>
          )}
        </div>
      </div>
    </section>);

}

function SectorsSection({ title, sectors, surface = false }) {
  return (
    <section className={"section " + (surface ? "section--surface" : "")} data-screen-label="Sectores">
      <div className="container">
        <div className="section__header">
          <span className="section-marker"></span>
          <h2 className="section__title">{title}</h2>
        </div>
        <div className="sectors-grid">
          {sectors.map((s, i) => {
            const IconComp = s.icon && Icon[s.icon];
            return (
              <article className="sector-card" key={i}>
                {IconComp && <div className="sector-card__icon"><IconComp size={28} /></div>}
                <h3 className="sector-card__title">{s.title}</h3>
                <p className="sector-card__body">{s.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>);

}

function StepsSection({ title, steps, surface = false, navy = false }) {
  const cls = navy ? "section--navy" : surface ? "section--surface" : "";
  return (
    <section className={"section " + cls} data-screen-label="Proceso">
      <div className="container">
        <div className="section__header">
          <span className="section-marker"></span>
          <h2 className="section__title" style={{ fontSize: "clamp(26px, 6vw, 40px)" }}>{title}</h2>
        </div>
        <div className="steps">
          {steps.map((s, i) =>
          <article className="step" key={i}>
              <div className="step-number">{String(i + 1).padStart(2, '0')}</div>
              <h3 className="step__title">{s.title}</h3>
              <p className="step__body">{s.body}</p>
            </article>
          )}
        </div>
      </div>
    </section>);

}

function CertsCardsSection({ title, body, items, surface = true, large = false }) {
  return (
    <section className={"section " + (surface ? "section--surface" : "")} data-screen-label="Certificaciones">
      <div className="container">
        <div className="section__header">
          <span className="section-marker"></span>
          <h2 className="section__title">{title}</h2>
          {body && <p className="section__subtitle">{body}</p>}
        </div>
        <div className={"cert-cards" + (large ? " cert-cards--large" : "")}>
          {items.map((c, i) =>
          <article className="cert-card" key={i}>
              <div className="cert-card__logo">{c.logo ? <img src={c.logo} alt={c.title} /> : <Icon.Award size={28} />}</div>
              <div>
                <div className="cert-card__title">{c.title}</div>
                {c.code && <div className="cert-card__code">{c.code}</div>}
                <div className="cert-card__body">{c.body}</div>
              </div>
            </article>
          )}
        </div>
      </div>
    </section>);

}

function FinalFormSection({ title, subtitle, buttonText, hideGuardias = false, waMessage, defaultService = '' }) {
  const waHref = waMessage ? waLink(waMessage) : WA_LINK;
  return (
    <section className="section section--navy" data-screen-label="Formulario">
      <div className="container">
        <div className="contact-layout">
          <div>
            <span className="eyebrow eyebrow--light">Cotización</span>
            <h2 className="section__title" style={{ color: '#fff', fontSize: "clamp(26px, 6vw, 40px)" }}>{title}</h2>
            <p className="section__subtitle">{subtitle}</p>
            <p className="mt-3 muted" style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15 }}>
              ¿Prefieres hablar ahora? &nbsp;
              <a href={waHref} target="_blank" rel="noopener noreferrer" style={{ color: '#fff', borderBottom: '1px solid rgba(255,255,255,0.4)' }}>
                Escríbenos por WhatsApp →
              </a>
            </p>

            <div className="quick-contact">
              <a className="quick-contact__card" href="tel:+525578792146">
                <span className="quick-contact__icon"><Icon.Phone size={20} /></span>
                <span className="quick-contact__body">
                  <span className="quick-contact__label">Llámanos</span>
                  <span className="quick-contact__value">+52 55 7879 2146</span>
                </span>
              </a>
              <a className="quick-contact__card" href="mailto:ventas@yabem-vehu.com">
                <span className="quick-contact__icon"><Icon.Mail size={20} /></span>
                <span className="quick-contact__body">
                  <span className="quick-contact__label">Escríbenos</span>
                  <span className="quick-contact__value">ventas@yabem-vehu.com</span>
                </span>
              </a>
            </div>
          </div>
          <div className="contact-layout__form" style={{ width: "100%", maxWidth: "430px" }}>
            <QualForm buttonText={buttonText} hideGuardias={hideGuardias} defaultService={defaultService} />
          </div>
        </div>
      </div>
    </section>);

}

// ============================================================
// GUARDIAS PAGE
// ============================================================
function GuardiasPage() {
  return (
    <div className="page-fade" data-screen-label="03 Guardias">
      <PageHero
        eyebrow="Guardias de Seguridad"
        title="Seguridad Intramuros para tus Activos Empresariales"
        subtitle="Profesionales certificados, seleccionados con rigor y capacitados bajo estándares internacionales. Tu operación, protegida."
        variant="guardias"
        primary="Solicitar cotización"
        secondary="Cotizar ahora"
        secondaryHref={waLink(WA_MESSAGES.guardias)}
        badges={['ASIS Member', 'DGSP CDMX · Permiso 0605-15 · Exp. 3788-14', 'REPSE Activo']} />
      

      <PainSection
        title="¿Qué pasa cuando la seguridad no es la correcta?"
        items={[
        { title: 'Guardias sin preparación real', body: 'Personal que no conoce los protocolos de tu industria ni sabe cómo reaccionar ante una emergencia.' },
        { title: 'Proveedor sin cumplimiento legal', body: 'Empresas sin REPSE activo que generan contingencias laborales para tu empresa al contratar con ellas.' },
        { title: 'Rotación constante de personal', body: 'Guardias que cambian cada semana, sin continuidad ni conocimiento de tu operación.' }]
        } />
      

      <ValueSection
        title={<>Por qué nuestros guardias<br />son diferentes</>}
        items={[
        { title: 'Reclutamiento y selección riguroso', body: 'Cada guardia pasa por un proceso riguroso: evaluación psicométrica, antecedentes, capacitación certificada y prueba de campo antes de ingresar a tu instalación.' },
        { title: 'Capacitación bajo estándares internacionales', body: 'Formación continua apegada a la Ley Federal de Seguridad Privada, estándares de competencia CONOCER SEP y estándares de ASIS Internacional.' },
        { title: 'REPSE activo ARR23960/2024', body: 'Contratar con Yabem-Vehu no genera contingencias laborales para tu empresa. Operamos 100% dentro del marco legal.' }]
        } />
      

      <SectorsSection
        title="Experiencia en tu sector"
        sectors={[
        { icon: 'Flask',       title: 'Farmacéutico',  body: 'Control de acceso a laboratorios, almacenes de materia prima y áreas de manufactura. Protección de activos regulados y cadena de custodia certificada.' },
        { icon: 'Car',         title: 'Automotriz',    body: 'Seguridad en agencias, talleres y patios de vehículos. Control de acceso de personal, proveedores y clientes. Prevención de robo de partes y unidades.' },
        { icon: 'ShoppingBag', title: 'Retail',        body: 'Prevención de merma en tienda, control de acceso a bodegas y protección de cajas. Guardias entrenados para entornos de alto flujo de personas.' },
        { icon: 'Scissors',    title: 'Textil',        body: 'Diagnóstico y reducción de merma en líneas de producción y almacenes. Identificación de vectores de robo interno y externo en plantas activas.' },
        { icon: 'Wrench',      title: 'Industrial',    body: 'Vigilancia perimetral, control de carga y descarga, y protección de maquinaria de alto valor. Esquemas de seguridad para operaciones 24/7.' },
        { icon: 'Home',        title: 'Residencial',   body: 'Control de acceso vehicular y peatonal, rondines programados y comunicación directa con administración. Servicio para fraccionamientos, condominios y torres corporativas.' },
        { icon: 'Building',    title: 'Corporativo',   body: 'Protección de instalaciones de oficinas, control de visitantes y colaboradores, y protocolos de respuesta ante incidentes en edificios con múltiples inquilinos.' },
        { icon: 'HardHat',     title: 'Construcción',  body: 'Custodia de materiales, maquinaria y equipo en obra. Control de acceso de trabajadores y proveedores. Vigilancia nocturna y en fines de semana cuando la obra está sin personal.' }]
        } />
      

      <StepsSection
        title="Cómo trabajamos"
        navy
        steps={[
        { title: 'Levantamiento y Análisis de Riesgo', body: 'Analizamos tus instalaciones para identificar vulnerabilidades y definir el perfil de guardia ideal para tu operación.' },
        { title: 'Diseño del plan operativo', body: 'Diseñamos el plan de seguridad específico: turnos, puntos de control, protocolos de reacción y comunicación.' },
        { title: 'Ejecución', body: 'Ingresan nuestros colaboradores cuidadosamente reclutados y capacitados para tu industria.' },
        { title: 'Mejora continua', body: 'Supervisión constante, comunicación fluida y ajustes periódicos para mantener la eficiencia del servicio.' }]
        } />
      

      <CertsCardsSection
        title="Operamos con todos los permisos en regla"
        items={[
        { logo: 'assets/img/cert-repse.webp', title: 'REPSE', code: 'ARR23960/2024', body: 'Registro de Prestadoras de Servicios Especializados ante la STPS. Contratar con nosotros no te genera riesgos laborales.' },
        { logo: 'assets/img/cert-ssc.webp', title: 'DGSP CDMX', code: 'Permiso 0605-15 · Expediente 3788-14', body: 'Dirección General de Seguridad Privada de la Ciudad de México (DGSP CDMX), permiso 0605-15, expediente 3788-14. Autorización vigente para operar en la CDMX.' },
        { logo: 'assets/img/cert-asis.webp', title: 'ASIS International', code: 'Member', body: 'Nuestros directivos reciben formación de vanguardia en seguridad.' }]
        } />


      <section className="section" data-screen-label="Testimonio">
        <div className="container">
          <div className="section__header section__header--centered">
            <span className="section-marker"></span>
            <h2 className="section__title" style={{ fontSize: "clamp(26px, 6vw, 40px)" }}>Confianza de quienes nos contratan</h2>
          </div>
          <div className="testimonials testimonials--carousel">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      <FinalFormSection
        title="Cotiza guardias de seguridad para tu empresa"
        subtitle="Cuéntanos tus necesidades y te enviamos una propuesta en menos de 24 horas."
        buttonText="Solicitar cotización"
        defaultService="guardias"
        waMessage={WA_MESSAGES.guardias} />
      
    </div>);

}

// ============================================================
// ANALISIS PAGE
// ============================================================
function AnalisisPage() {
  return (
    <div className="page-fade" data-screen-label="04 Analisis">
      <PageHero
        eyebrow="Análisis de Riesgos"
        title="Protege la continuidad de tu negocio antes de que ocurra un riesgo"
        subtitle="Identificamos vulnerabilidades y diseñamos estrategias para la continuidad de tu negocio."
        variant="analisis"
        primary="Solicitar diagnóstico"
        secondary="Cotizar ahora"
        secondaryHref={waLink(WA_MESSAGES.analisis)}
        badges={['Diagnóstico integral', 'Plan accionable', 'ASIS Internacional']} />
      

      <PainSection
        title="¿Cuándo necesitas un análisis de riesgos?"
        items={[
        { title: 'Robos o incidentes recurrentes', body: 'Pérdidas en almacén, robo de mercancía o incidentes de seguridad que no disminuyen a pesar de los controles actuales.' },
        { title: 'Apertura de una nueva instalación', body: 'Antes de operar, necesitas saber exactamente qué medidas implementar y qué perfil de guardia requiere ese sitio.' },
        { title: 'Auditoría interna o exigencia corporativa', body: 'Tu dirección o corporativo solicita un diagnóstico formal de vulnerabilidades antes de renovar el contrato de seguridad.' }]
        } />
      

      <ValueSection
        title="Nuestro enfoque es diferente"
        items={[
        { title: 'Filosofía adaptativa', body: 'No aplicamos plantillas genéricas. Cada análisis parte del contexto real de tu operación, infraestructura y perfiles de puesto.' },
        { title: 'Diagnóstico integral', body: 'Abarcamos riesgos físicos, electrónicos, de proceso e internos. No solo lo que se ve — también lo que no se ve.' },
        { title: 'Resultado accionable', body: 'No entregamos un reporte para archivar. Entregamos un plan de acción con prioridades claras y pasos concretos para implementar.' }]
        } />
      

      <section className="section" data-screen-label="Entregables">
        <div className="container">
          <div className="about-grid">
            <div>
              <span className="section-marker"></span>
              <h2 className="section__title">Qué incluye el diagnóstico</h2>
              <p className="muted mt-3" style={{ marginBottom: 24 }}>Un entregable completo, accionable y listo para presentar a dirección o corporativo.</p>
              <ul className="check-list">
                {[
                'Diagnóstico operativo detallado',
                'Evaluación de riesgos internos y externos',
                'Diseño de perfiles de seguridad adecuados al entorno',
                'Priorización de amenazas y vulnerabilidades',
                'Plan de acción con recomendaciones específicas'].
                map((t, i) =>
                <li key={i}>
                    <span className="check-list__icon"><Icon.Check /></span>
                    {t}
                  </li>
                )}
              </ul>
            </div>
            <img src="assets/img/yv-analisis.webp" alt="Especialistas Yabem realizando análisis de riesgos" />
          </div>
        </div>
      </section>

      <SectorsSection
        surface
        title="Sectores donde hemos trabajado"
        sectors={[
        { icon: 'Flask',       title: 'Farmacéutico',  body: 'Control de acceso a laboratorios, almacenes de materia prima y áreas de manufactura. Protección de activos regulados y cadena de custodia certificada.' },
        { icon: 'Scissors',    title: 'Textil',        body: 'Diagnóstico y reducción de merma en líneas de producción y almacenes. Identificación de vectores de robo interno y externo en plantas activas.' },
        { icon: 'Home',        title: 'Residencial',   body: 'Control de acceso vehicular y peatonal, rondines programados y comunicación directa con administración. Servicio para fraccionamientos, condominios y torres corporativas.' },
        { icon: 'Building',    title: 'Corporativo',   body: 'Protección de instalaciones de oficinas, control de visitantes y colaboradores, y protocolos de respuesta ante incidentes en edificios con múltiples inquilinos.' },
        { icon: 'Car',         title: 'Automotriz',    body: 'Seguridad en agencias, talleres y patios de vehículos. Control de acceso de personal, proveedores y clientes. Prevención de robo de partes y unidades.' },
        { icon: 'Wrench',      title: 'Industrial',    body: 'Vigilancia perimetral, control de carga y descarga, y protección de maquinaria de alto valor. Esquemas de seguridad para operaciones 24/7.' },
        { icon: 'ShoppingBag', title: 'Retail',        body: 'Prevención de merma en tienda, control de acceso a bodegas y protección de cajas. Guardias entrenados para entornos de alto flujo de personas.' },
        { icon: 'HardHat',     title: 'Construcción',  body: 'Custodia de materiales, maquinaria y equipo en obra. Control de acceso de trabajadores y proveedores. Vigilancia nocturna y en fines de semana cuando la obra está sin personal.' }]
        } />
      

      <StepsSection
        title="Cómo realizamos el análisis"
        navy
        steps={[
        { title: 'Visita a tus instalaciones', body: 'Nuestro equipo especialista recorre y evalúa cada área de tu operación: accesos, almacenes, áreas de producción, perímetro y flujo de personal.' },
        { title: 'Entrevistas y levantamiento', body: 'Hablamos con los responsables de operación para entender los procesos internos, incidentes previos y vulnerabilidades conocidas.' },
        { title: 'Análisis y diagnóstico', body: 'Procesamos la información y construimos el mapa de riesgos: qué amenazas existen, cuáles son prioritarias y cuál es el nivel de exposición actual.' },
        { title: 'Entrega del plan de acción', body: 'Presentamos el diagnóstico con recomendaciones específicas, organizadas por prioridad y costo de implementación.' }]
        } />
      

      <CertsCardsSection
        title={<span style={{ textWrap: 'balance', hyphens: 'manual', wordBreak: 'normal', overflowWrap: 'normal' }}>Respaldados por una<br/>formación internacional.</span>}
        large
        items={[
        { logo: 'assets/img/cert-asis.webp', title: 'ASIS Internacional', code: 'Member', body: 'Nuestros especialistas en análisis de riesgos están alineados a los estándares internacionales más exigentes.' },
        { logo: 'assets/img/cert-ifpo.png',  title: 'IFPO',               code: 'Member', body: 'International Foundation for Protection Officers. Formación especializada en protección y gestión de riesgos.' }]
        } />
      

      <section className="section" data-screen-label="Testimonio">
        <div className="container">
          <div className="section__header section__header--centered">
            <span className="section-marker"></span>
            <h2 className="section__title">Lo que dicen quienes nos eligen</h2>
          </div>
          <div className="testimonials testimonials--carousel">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      <FinalFormSection
        title="Solicita tu diagnóstico de riesgos"
        subtitle="Cuéntanos sobre tu instalación y agenda una visita con nuestros especialistas."
        buttonText="Solicitar diagnóstico"
        hideGuardias
        defaultService="analisis"
        waMessage={WA_MESSAGES.analisis} />
      
    </div>);

}

// ============================================================
// CONSULTORIA PAGE
// ============================================================
function ConsultoriaPage() {
  return (
    <div className="page-fade" data-screen-label="05 Consultoria">
      <PageHero
        eyebrow="Consultoría en Seguridad"
        title="Diagnóstico avanzado de seguridad empresarial"
        subtitle="Analizamos tu entorno operativo, identificamos amenazas y diseñamos el plan de acción para proteger la continuidad de tu negocio."
        variant="consultoria"
        primary="Hablar con un consultor"
        secondary="Contactar ahora"
        secondaryHref={waLink(WA_MESSAGES.consultoria)}
        badges={['ASIS Member', 'IFPO Member', 'CONOCER-SEP']} />
      

      <PainSection
        title="¿Cuándo necesitas una consultoría de seguridad?"
        items={[
        { title: 'Cambio de proveedor de seguridad', body: 'Necesitas evaluar si tu esquema actual es el correcto antes de renovar o cambiar de empresa de seguridad.' },
        { title: 'Crecimiento o cambio de operación', body: 'Tu empresa abre nuevas sedes, cambia procesos o escala operaciones y el esquema de seguridad actual ya no es suficiente.' },
        { title: 'Incidente grave o auditoría', body: 'Un incidente reciente o una auditoría exige revisar a fondo la estrategia de seguridad y presentar un plan formal de mejora.' }]
        } />
      

      <ValueSection
        title="Qué obtienes con nuestra consultoría"
        items={[
        { title: 'Diagnóstico personalizado', body: 'No generamos recomendaciones genéricas. Cada consultoría parte del contexto real de tu empresa: operación, industria, incidentes previos y objetivos de negocio.' },
        { title: 'Visión integral', body: 'Evaluamos amenazas físicas, procesos internos, perfiles de riesgo y sistemas existentes. No solo lo que está roto — también lo que puede romperse.' },
        { title: 'Plan de acción concreto', body: 'Entregamos acciones priorizadas, con responsables, plazos y métricas. Un documento que puedes presentar a dirección o al corporativo.' }]
        } />
      

      <section className="section" data-screen-label="Metodología">
        <div className="container">
          <div className="section__header">
            <span className="section-marker"></span>
            <h2 className="section__title">Nuestra metodología</h2>
            <p className="section__subtitle">Cuatro componentes que se ajustan al contexto de tu operación.</p>
          </div>
          <div className="cards-grid cards-grid--4">
            {[
            { icon: <Icon.Search />, t: 'Detección de vulnerabilidades', b: 'Identificamos puntos débiles en sistemas, procesos e infraestructura física. Desde accesos hasta protocolos internos de manejo de activos.' },
            { icon: <Icon.Target />, t: 'Análisis de amenazas', b: 'Mapeamos riesgos derivados de actores internos y externos: robo, sabotaje, fuga de información, accesos no autorizados.' },
            { icon: <Icon.Clipboard />, t: 'Diagnóstico personalizado', b: 'Recomendaciones adaptadas al contexto real de tu operación, sector y objetivos de la empresa.' },
            { icon: <Icon.ShieldCheck />, t: 'Planes de acción estratégicos', b: 'Acciones concretas, priorizadas y medibles para mitigar riesgos y fortalecer tu postura de seguridad.' }].
            map((c, i) =>
            <article className="card" key={i}>
                <div className="card__icon">{c.icon}</div>
                <h3 className="card__title" style={{ fontSize: 18 }}>{c.t}</h3>
                <p className="card__body">{c.b}</p>
              </article>
            )}
          </div>
        </div>
      </section>

      <SectorsSection
        surface
        title="Experiencia en tu sector"
        sectors={[
        { icon: 'Flask',       title: 'Farmacéutico',  body: 'Control de acceso a laboratorios, almacenes de materia prima y áreas de manufactura. Protección de activos regulados y cadena de custodia certificada.' },
        { icon: 'Car',         title: 'Automotriz',    body: 'Seguridad en agencias, talleres y patios de vehículos. Control de acceso de personal, proveedores y clientes. Prevención de robo de partes y unidades.' },
        { icon: 'ShoppingBag', title: 'Retail',        body: 'Prevención de merma en tienda, control de acceso a bodegas y protección de cajas. Guardias entrenados para entornos de alto flujo de personas.' },
        { icon: 'Scissors',    title: 'Textil',        body: 'Diagnóstico y reducción de merma en líneas de producción y almacenes. Identificación de vectores de robo interno y externo en plantas activas.' },
        { icon: 'Wrench',      title: 'Industrial',    body: 'Vigilancia perimetral, control de carga y descarga, y protección de maquinaria de alto valor. Esquemas de seguridad para operaciones 24/7.' },
        { icon: 'Home',        title: 'Residencial',   body: 'Control de acceso vehicular y peatonal, rondines programados y comunicación directa con administración. Servicio para fraccionamientos, condominios y torres corporativas.' },
        { icon: 'Building',    title: 'Corporativo',   body: 'Protección de instalaciones de oficinas, control de visitantes y colaboradores, y protocolos de respuesta ante incidentes en edificios con múltiples inquilinos.' },
        { icon: 'HardHat',     title: 'Construcción',  body: 'Custodia de materiales, maquinaria y equipo en obra. Control de acceso de trabajadores y proveedores. Vigilancia nocturna y en fines de semana cuando la obra está sin personal.' }]
        } />
      

      <CertsCardsSection
        surface={false}
        title={<span style={{ textWrap: 'balance', hyphens: 'manual', wordBreak: 'normal', overflowWrap: 'normal' }}>Consultores con formación<br/>internacional</span>}
        body="Cuando contratas consultoría con Yabem-Vehu, trabajas con especialistas alineados a estándares globales."
        items={[
        { logo: 'assets/img/cert-asis.webp',    title: 'ASIS Internacional', code: 'Member',             body: 'Estándares internacionales de gestión de riesgos y seguridad corporativa.' },
        { logo: 'assets/img/cert-ifpo.png',     title: 'IFPO',               code: 'Member',             body: 'Formación especializada en protección y consultoría de seguridad.' },
        { logo: 'assets/img/logo-EI-conocer-transparente-1-300x238.png', title: 'CONOCER SEP', code: 'Evaluador Independiente', body: 'Red CONOCER de Prestadores de Servicios. Acreditación de competencias laborales en seguridad privada.' }]
        } />
      

      <section className="section section--surface" data-screen-label="Testimonio">
        <div className="container">
          <div className="section__header section__header--centered">
            <span className="section-marker"></span>
            <h2 className="section__title">Confianza de socios estratégicos</h2>
          </div>
          <div className="testimonials testimonials--carousel">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      <FinalFormSection
        title="Agenda una sesión con nuestros consultores"
        subtitle="Cuéntanos el reto de seguridad que enfrenta tu empresa y definimos juntos el alcance del diagnóstico."
        buttonText="Solicitar consultoría"
        hideGuardias
        defaultService="consultoria"
        waMessage={WA_MESSAGES.consultoria} />
      
    </div>);

}

// ============================================================
// CONTACTO PAGE
// ============================================================
function ContactoPage() {
  return (
    <div className="page-fade" data-screen-label="06 Contacto">
      <section className="section section--surface contacto-section" data-screen-label="Formulario">
        <div className="container">
          <div className="contact-layout">
            <div className="contacto-form-card">
              <span className="eyebrow">Formulario de contacto</span>
              <h1 className="contacto-title">Contáctanos</h1>
              <p className="contacto-lead">
                Déjanos tu información y nos pondremos en contacto contigo a la brevedad
                para conocer a detalle tus necesidades.
              </p>
              <p className="muted contacto-required-note">
                Todos los campos marcados con <span style={{ color: 'var(--color-accent)', fontWeight: 700 }}>*</span> son requeridos.
              </p>
              <QualForm buttonText="Enviar solicitud" includeService includePhone includeMessage />
            </div>

            <div className="contact-layout__info" style={{ padding: "40px 4px 0px 0px" }}>
              <h3 className="contact-layout__info-title">Otras formas de contactar</h3>
              <p className="contact-layout__info-sub">Elige el canal que más te acomode. Respondemos rápido por todos.</p>

              <div className="contact-cards">
                <a className="contact-card" href="mailto:ventas@yabem-vehu.com">
                  <div className="contact-card__icon"><Icon.Mail size={20} /></div>
                  <div>
                    <div className="contact-card__title">Correo electrónico</div>
                    <div className="contact-card__value" style={{ fontSize: 15 }}>ventas@yabem-vehu.com</div>
                  </div>
                </a>
                <a className="contact-card" href="tel:+525578792146">
                  <div className="contact-card__icon"><Icon.Phone size={20} /></div>
                  <div>
                    <div className="contact-card__title">Teléfono</div>
                    <div className="contact-card__value">55 7879 2146</div>
                    <div className="contact-card__sub">55 4127 5596</div>
                  </div>
                </a>
                <a className="contact-card contact-card--wa" href={waLink(WA_MESSAGES.contacto)} target="_blank" rel="noopener noreferrer">
                  <div className="contact-card__icon"><Icon.WhatsApp size={22} /></div>
                  <div>
                    <div className="contact-card__title">WhatsApp</div>
                    <div className="contact-card__value">Escríbenos por WhatsApp</div>
                    <div className="contact-card__sub">Respuesta inmediata en horario de oficina.</div>
                  </div>
                </a>
                <div className="contact-card">
                  <div className="contact-card__icon"><Icon.MapPin size={20} /></div>
                  <div>
                    <div className="contact-card__title">Oficinas</div>
                    <div className="contact-card__value" style={{ fontSize: 14, lineHeight: 1.5 }}>
                      Insurgentes Sur 216, interior 206-5, Ciudad de México. (Yabem-Vehu)
                    </div>
                    <div className="contact-card__sub" style={{ marginTop: 6 }}>Lunes a viernes, 8:00 a.m. – 5:00 p.m.</div>
                  </div>
                </div>
              </div>

              <div className="contacto-careers-card">
                <div className="contact-card__icon"><Icon.Users size={22} /></div>
                <div className="contacto-careers-card__body">
                  <h4 className="contacto-careers-card__title">¿En busca de una oportunidad laboral?</h4>
                  <p className="contacto-careers-card__text">
                    Únete a nuestro equipo de guardias intramuros y desarrolla tu carrera con
                    formación continua, condiciones competitivas y proyección profesional.
                  </p>
                  <a
                    className="btn btn-secondary btn-sm"
                    onClick={(e) => {e.preventDefault();navigate('/oportunidades');}}
                    href="/oportunidades">
                    Oportunidades laborales
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>);

}

// ============================================================
// OPORTUNIDADES LABORALES PAGE
// ============================================================
const PUESTOS = [
{ value: 'guardia', label: 'Guardia de Seguridad Intramuros' },
{ value: 'supervisor', label: 'Supervisor de Operaciones' },
{ value: 'analista', label: 'Analista de Riesgos' },
{ value: 'consultor', label: 'Consultor de Seguridad' },
{ value: 'gestion-humana', label: 'Gestión Humana / Reclutamiento' },
{ value: 'administrativo', label: 'Administrativo / Soporte' },
{ value: 'otro', label: 'Otro puesto / Indeciso' }];


function CareerForm() {
  const [values, setValues] = useState({
    nombre: '', email: '', telefono: '', puesto: '', mensaje: '', honeypot: ''
  });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(false);

  const set = (k) => (e) => setValues((v) => ({ ...v, [k]: e.target.value }));

  async function submit(e) {
    e.preventDefault();
    const errs = {};
    if (!values.nombre.trim()) errs.nombre = 'Ingresa tu nombre completo.';
    if (!values.telefono.trim()) errs.telefono = 'Ingresa un teléfono donde contactarte.';
    if (!values.puesto) errs.puesto = 'Selecciona el puesto que te interesa.';
    if (!values.mensaje.trim()) errs.mensaje = 'Cuéntanos brevemente sobre ti.';
    if (values.honeypot) return; // bot
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    const puestoLabel = (PUESTOS.find((p) => p.value === values.puesto) || {}).label || values.puesto;
    if (window.yvTrack) window.yvTrack('career_form_submit', { puesto: values.puesto });

    setSending(true); setSendError(false);
    const payload = {
      from_name: values.nombre,
      telefono:  values.telefono,
      email:     values.email || '(no proporcionado)',
      reply_to:  values.email || 'contacto@yabem-vehu.com',
      puesto:    puestoLabel,
      mensaje:   values.mensaje
    };
    try {
      if (!window.emailjs || !window.EMAILJS_SERVICE_ID || !window.EMAILJS_TEMPLATE_POSTULACION) {
        throw new Error('EmailJS no disponible');
      }
      await window.emailjs.send(window.EMAILJS_SERVICE_ID, window.EMAILJS_TEMPLATE_POSTULACION, payload);
      // Navega dentro del SPA → Header/Footer permanecen, conversion event se dispara en mount
      navigate('/gracias-postulacion');
    } catch (err) {
      console.error('EmailJS send failed (postulación):', err);
      if (window.yvTrack) window.yvTrack('career_email_error', { message: String(err && err.message || err) });
      setSendError(true);
      setSending(false);
    }
  }

  return (
    <form className="form" onSubmit={submit} noValidate>
      <input className="honeypot" type="text" tabIndex="-1" autoComplete="off"
      value={values.honeypot} onChange={set('honeypot')} aria-hidden="true" />

      <div className="form-row form-row--2">
        <div className="form-field">
          <label className="form-label" htmlFor="c-nombre">Nombre completo <span className="req">*</span></label>
          <input id="c-nombre" type="text" className={"form-input " + (errors.nombre ? "form-input--error" : "")}
          placeholder="Tu nombre" value={values.nombre} onChange={set('nombre')} />
          {errors.nombre && <div className="form-error">{errors.nombre}</div>}
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="c-tel">Teléfono <span className="req">*</span></label>
          <input id="c-tel" type="tel" className={"form-input " + (errors.telefono ? "form-input--error" : "")}
          placeholder="55 XXXX XXXX" value={values.telefono} onChange={set('telefono')} />
          {errors.telefono && <div className="form-error">{errors.telefono}</div>}
        </div>
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor="c-email">Correo electrónico <span className="form-label-opt">(opcional)</span></label>
        <input id="c-email" type="email" className={"form-input " + (errors.email ? "form-input--error" : "")}
        placeholder="tucorreo@ejemplo.com" value={values.email} onChange={set('email')} />
        {errors.email && <div className="form-error">{errors.email}</div>}
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor="c-puesto">Puesto de interés <span className="req">*</span></label>
        <select id="c-puesto" className={"form-select " + (errors.puesto ? "form-select--error" : "")}
        value={values.puesto} onChange={set('puesto')}>
          <option value="">Selecciona un puesto</option>
          {PUESTOS.map((p) => <option key={p.value} value={p.value}>{p.label}</option>)}
        </select>
        {errors.puesto && <div className="form-error">{errors.puesto}</div>}
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor="c-msg">Platícanos un poco sobre ti <span className="req">*</span></label>
        <textarea id="c-msg" className={"form-textarea " + (errors.mensaje ? "form-input--error" : "")}
        placeholder="Experiencia previa, certificaciones, disponibilidad de horario, zona donde vives, etc."
        value={values.mensaje} onChange={set('mensaje')}></textarea>
        {errors.mensaje && <div className="form-error">{errors.mensaje}</div>}
      </div>

      <button type="submit" className="btn btn-primary btn-full" disabled={sending}>{sending ? 'Enviando…' : 'Enviar postulación'}</button>
      {sendError &&
        <div role="alert" style={{ marginTop: 12, padding: '12px 16px', background: '#FFF1F0', border: '1px solid #FECACA', borderLeft: '4px solid #992824', borderRadius: 8, color: '#7A1F1C', fontSize: 14, lineHeight: 1.5 }}>
          No pudimos enviar tu postulación en este momento. Intenta de nuevo o escríbenos por <a href={waLink(WA_MESSAGES.careerForm)} target="_blank" rel="noopener noreferrer" style={{ color: '#7A1F1C', textDecoration: 'underline', fontWeight: 700 }}>WhatsApp</a>.
        </div>
      }

      <div className="form-help">
        <Icon.Lock size={14} /> Tu información se utiliza únicamente para procesos de reclutamiento interno.
      </div>
    </form>);
}

function OportunidadesPage() {
  return (
    <div className="page-fade" data-screen-label="07 Oportunidades">
      <PageHero
        eyebrow="Oportunidades laborales"
        title={<>¿Quieres colaborar<br />con nosotros?</>}
        subtitle="Continuamente estamos en búsqueda de personas con alto compromiso y entusiasmo por crecer dentro de una empresa con 15 años protegiendo activos empresariales."
        variant="carreras"
        primary="Postúlate ahora"
        primaryHref="#postular"
        secondary="Pregunta por WhatsApp"
        secondaryHref={waLink(WA_MESSAGES.oportunidades)}
        badges={['REPSE activo', 'Empresa 100% mexicana', '+15 años de operación']} />

      <section className="section section--surface" data-screen-label="Qué buscamos">
        <div className="container">
          <div className="section__header">
            <span className="section-marker"></span>
            <h2 className="section__title" style={{ fontSize: "clamp(26px, 6vw, 40px)" }}>¿Qué buscamos en ti?</h2>
            <p className="section__subtitle" style={{ maxWidth: 720 }}>El perfil que valoramos no se trata sólo de experiencia previa. Buscamos personas con actitud y vocación de servicio.</p>
          </div>
          <div className="cards-grid cards-grid--3">
            <article className="card">
              <div className="card__icon"><Icon.ShieldCheck /></div>
              <h3 className="card__title">Compromiso y responsabilidad</h3>
              <p className="card__body">Cumplimiento de horarios, integridad en la operación y cuidado del cliente como si fuera propio.</p>
            </article>
            <article className="card">
              <div className="card__icon"><Icon.Target /></div>
              <h3 className="card__title">Entusiasmo por crecer</h3>
              <p className="card__body">Disposición para capacitarte, asumir nuevos retos y construir una trayectoria de largo plazo en seguridad privada.</p>
            </article>
            <article className="card">
              <div className="card__icon"><Icon.Users /></div>
              <h3 className="card__title">Trabajo en equipo</h3>
              <p className="card__body">Comunicación clara con compañeros, supervisores y cliente. La seguridad es resultado de un equipo coordinado.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" data-screen-label="Proceso">
        <div className="container">
          <div className="section__header section__header--centered">
            <span className="section-marker"></span>
            <h2 className="section__title">Así es nuestro proceso de selección</h2>
            <p className="section__subtitle">Un proceso transparente y profesional, igual al rigor con el que protegemos a nuestros clientes.</p>
          </div>
          <div className="steps">
            <div className="step">
              <div className="step__num">01</div>
              <h3 className="step__title">Postulación</h3>
              <p className="step__body">Llena el formulario con tu información básica y el puesto que te interesa.</p>
            </div>
            <div className="step">
              <div className="step__num">02</div>
              <h3 className="step__title">Entrevista inicial</h3>
              <p className="step__body">Nuestro equipo de Gestión Humana te contacta para conocer tu perfil y expectativas.</p>
            </div>
            <div className="step">
              <div className="step__num">03</div>
              <h3 className="step__title">Evaluaciones</h3>
              <p className="step__body">Evaluación psicométrica, verificación de antecedentes y prueba de campo según el puesto.</p>
            </div>
            <div className="step">
              <div className="step__num">04</div>
              <h3 className="step__title">Bienvenida e inducción</h3>
              <p className="step__body">Capacitación inicial y asignación a la operación de un cliente.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--navy" data-screen-label="Postular" id="postular">
        <div className="container">
          <div className="contact-layout">
            <div>
              <span className="eyebrow eyebrow--light">Postúlate ahora</span>
              <h2 className="hero__headline" style={{ fontSize: "clamp(28px, 6.5vw, 44px)", marginBottom: 16 }}>Únete al equipo que protege a más de 50 empresas en CDMX</h2>
              <p className="hero__subtitle" style={{ marginBottom: 28 }}>Déjanos tus datos y un mensaje breve sobre ti. Si tu perfil coincide con una vacante abierta, nuestro equipo de Gestión Humana te contactará en los próximos días hábiles.</p>

              <div className="contact-cards" style={{ maxWidth: 380 }}>
                <a className="contact-card contact-card--wa" href={waLink(WA_MESSAGES.oportunidades)} target="_blank" rel="noopener noreferrer">
                  <div className="contact-card__icon"><Icon.WhatsApp size={22} /></div>
                  <div>
                    <div className="contact-card__title">WhatsApp directo</div>
                    <div className="contact-card__value">Escríbenos por WhatsApp</div>
                    <div className="contact-card__sub">Respuesta inmediata en horario de oficina.</div>
                  </div>
                </a>
                <a className="contact-card" href="mailto:contacto@yabem-vehu.com">
                  <div className="contact-card__icon"><Icon.Mail size={20} /></div>
                  <div>
                    <div className="contact-card__title">Correo de reclutamiento</div>
                    <div className="contact-card__value">contacto@yabem-vehu.com</div>
                    <div className="contact-card__sub">Envíanos tu CV directo.</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="contact-layout__form" style={{ width: "100%", maxWidth: "430px" }}>
              <CareerForm />
            </div>
          </div>
        </div>
      </section>
    </div>);
}

// ============================================================
// THANK YOU PAGES (post-formulario)
// ============================================================
function ThanksCard({ eyebrow, title, body, conversionEvent }) {
  React.useEffect(() => {
    if (conversionEvent && window.yvTrack) window.yvTrack(conversionEvent, { event_category: 'conversion' });
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);
  return (
    <section className="section section--surface" data-screen-label="Confirmación">
      <div className="container" style={{ maxWidth: 760 }}>
        <article className="card" style={{ textAlign: 'center', padding: 'var(--space-6) var(--space-5)' }}>
          <div aria-hidden="true" style={{ width: 72, height: 72, background: '#FFFFFF', border: '3px solid var(--color-accent)', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--space-4)', color: 'var(--color-accent)' }}>
            <Icon.Check size={36} />
          </div>
          {eyebrow && <span className="eyebrow" style={{ marginBottom: 'var(--space-2)' }}>{eyebrow}</span>}
          <span className="section-marker" style={{ margin: '0 auto var(--space-3)' }}></span>
          <h1 className="h1" style={{ margin: '0 0 var(--space-2)', color: 'var(--color-primary)' }}>{title}</h1>
          <p className="body-lg" style={{ color: 'var(--color-text-secondary)', margin: '0 auto var(--space-5)', maxWidth: 560 }}>{body}</p>
          <div className="hero__ctas" style={{ justifyContent: 'center' }}>
            <a className="btn btn-primary" href={WA_LINK} target="_blank" rel="noopener noreferrer">
              <Icon.WhatsApp size={18} /> Escríbenos por WhatsApp
            </a>
            <a className="btn btn-secondary" onClick={(e) => { e.preventDefault(); navigate('/'); }} href="/">Volver al inicio</a>
          </div>
        </article>
      </div>
    </section>);
}

function GraciasCotizacionPage() {
  return (
    <div className="page-fade" data-screen-label="Gracias cotización">
      <ThanksCard
        eyebrow="Confirmación de cotización"
        title="Recibimos tu solicitud"
        body={<>Gracias por contactar a <strong style={{ color: 'var(--color-primary)' }}>Yabem-Vehu</strong>. Nuestro equipo de ventas revisará tu información y te contactará en <strong>menos de 24 horas hábiles</strong> con una propuesta personalizada.</>}
        conversionEvent="conversion_cotizacion" />
    </div>);
}

function GraciasPostulacionPage() {
  return (
    <div className="page-fade" data-screen-label="Gracias postulación">
      <ThanksCard
        eyebrow="Confirmación de postulación"
        title="¡Recibimos tu postulación!"
        body={<>Gracias por tu interés en formar parte de <strong style={{ color: 'var(--color-primary)' }}>Yabem-Vehu</strong>. Nuestro equipo de Gestión Humana revisará tu perfil y, si coincide con una vacante abierta, te contactará en los próximos días hábiles.</>}
        conversionEvent="conversion_postulacion" />
    </div>);
}

// Export to window
Object.assign(window, {
  HomePage, NosotrosPage, GuardiasPage, AnalisisPage, ConsultoriaPage, ContactoPage, OportunidadesPage,
  GraciasCotizacionPage, GraciasPostulacionPage
});