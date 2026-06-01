/* global React */
const { useState, useEffect, useRef } = React;

// ============================================================
// ICONS (Lucide-style outline, 1.5 stroke)
// ============================================================
const Icon = {
  ShieldCheck: (p) =>
  <svg width={p.size || 24} height={p.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></svg>,

  Search: (p) =>
  <svg width={p.size || 24} height={p.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>,

  Clipboard: (p) =>
  <svg width={p.size || 24} height={p.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><path d="M12 11h4" /><path d="M12 16h4" /><path d="M8 11h.01" /><path d="M8 16h.01" /></svg>,

  Globe: (p) =>
  <svg width={p.size || 24} height={p.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>,

  Mail: (p) =>
  <svg width={p.size || 24} height={p.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>,

  Phone: (p) =>
  <svg width={p.size || 24} height={p.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>,

  MapPin: (p) =>
  <svg width={p.size || 24} height={p.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 7-8 12-8 12s-8-5-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>,

  WhatsApp: (p) =>
  <svg width={p.size || 24} height={p.size || 24} viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>,

  Menu: (p) =>
  <svg width={p.size || 24} height={p.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M3 6h18" /><path d="M3 12h18" /><path d="M3 18h18" /></svg>,

  Close: (p) =>
  <svg width={p.size || 24} height={p.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>,

  ChevronDown: (p) =>
  <svg width={p.size || 16} height={p.size || 16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>,

  ArrowRight: (p) =>
  <svg width={p.size || 16} height={p.size || 16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>,

  Check: (p) =>
  <svg width={p.size || 14} height={p.size || 14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>,

  Facebook: (p) =>
  <svg width={p.size || 18} height={p.size || 18} viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>,

  Linkedin: (p) =>
  <svg width={p.size || 18} height={p.size || 18} viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.063 2.063 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>,

  Lock: (p) =>
  <svg width={p.size || 16} height={p.size || 16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>,

  Award: (p) =>
  <svg width={p.size || 24} height={p.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" /></svg>,

  Radio: (p) =>
  <svg width={p.size || 24} height={p.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" /><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" /><circle cx="12" cy="12" r="2" /><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" /><path d="M19.1 4.9C23 8.8 23 15.1 19.1 19" /></svg>,

  Users: (p) =>
  <svg width={p.size || 24} height={p.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,

  Building: (p) =>
  <svg width={p.size || 24} height={p.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" /><path d="M9 22v-4h6v4" /><path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M12 6h.01" /><path d="M12 10h.01" /><path d="M12 14h.01" /><path d="M16 10h.01" /><path d="M16 14h.01" /><path d="M8 10h.01" /><path d="M8 14h.01" /></svg>,

  Target: (p) =>
  <svg width={p.size || 24} height={p.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>,

  Flask: (p) =>
  <svg width={p.size || 24} height={p.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2v6L4.5 18.5A2 2 0 0 0 6.24 21.5h11.52A2 2 0 0 0 19.5 18.5L14 8V2"/><path d="M9 2h6"/><path d="M7.5 13h9"/></svg>,

  Car: (p) =>
  <svg width={p.size || 24} height={p.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2"/><circle cx="6.5" cy="16.5" r="2.5"/><circle cx="16.5" cy="16.5" r="2.5"/></svg>,

  ShoppingBag: (p) =>
  <svg width={p.size || 24} height={p.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>,

  Scissors: (p) =>
  <svg width={p.size || 24} height={p.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="3"/><path d="M8.12 8.12 12 12"/><path d="M20 4 8.12 15.88"/><circle cx="6" cy="18" r="3"/><path d="M14.8 14.8 20 20"/></svg>,

  Wrench: (p) =>
  <svg width={p.size || 24} height={p.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,

  Home: (p) =>
  <svg width={p.size || 24} height={p.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,

  HardHat: (p) =>
  <svg width={p.size || 24} height={p.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 18h20v-2a8 8 0 0 0-8-8h-4a8 8 0 0 0-8 8z"/><path d="M10 8V4h4v4"/><path d="M2 21h20"/></svg>

};

// ============================================================
// NAVIGATION
// ============================================================
const NAV_LINKS = [
{ path: '/', label: 'Inicio' },
{ path: '/nosotros', label: 'Nosotros' },
{ path: 'services', label: 'Servicios', children: [
  { path: '/guardias', label: 'Guardias de Seguridad', desc: 'Intramuros para empresas' },
  { path: '/analisis', label: 'Análisis de Riesgos', desc: 'Diagnóstico especializado' },
  { path: '/consultoria', label: 'Consultoría', desc: 'Estrategia y planeación' }]
},
{ path: '/oportunidades', label: 'Oportunidades laborales' }];


const WA_PHONE = '5215578792146';
function waLink(message) {
  const msg = message || 'Buen día, quisiera más información sobre Yabem-Vehu.';
  return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(msg)}`;
}
const WA_MESSAGES = {
  generic: 'Buen día, vi su sitio web y quisiera más información sobre Yabem-Vehu.',
  cotizar: 'Buen día, quisiera cotizar un servicio de seguridad para mi empresa.',
  guardias: 'Buen día, me interesa cotizar el servicio de guardias de seguridad intramuros para mi empresa.',
  analisis: 'Buen día, me interesa solicitar un análisis de riesgos para mi empresa.',
  consultoria: 'Buen día, me interesa el servicio de consultoría en seguridad privada para mi empresa.',
  nosotros: 'Buen día, vi su sitio web y quisiera conocer más sobre los servicios de Yabem-Vehu.',
  contacto: 'Buen día, quisiera contactar a Yabem-Vehu para una cotización.',
  oportunidades: 'Buen día, vi sus oportunidades laborales en el sitio y me gustaría postular para una vacante.',
  qualForm: 'Buen día, acabo de enviar la solicitud en su sitio y me gustaría dar seguimiento a mi cotización.',
  careerForm: 'Buen día, acabo de enviar mi postulación en su sitio y me gustaría dar seguimiento.'
};
const WA_LINK = waLink(WA_MESSAGES.cotizar);

function navigate(path) {
  window.dispatchEvent(new CustomEvent('yv:navigate', { detail: path }));
}

// ============================================================
// HEADER
// ============================================================
function Header({ current }) {
  const [open, setOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header className={"header " + (scrolled ? "is-scrolled" : "")} data-screen-label="Header">
        <div className="container header__inner">
          <a className="header__logo" onClick={(e) => {e.preventDefault();navigate('/');}} href="/" aria-label="Yabem-Vehu — Inicio">
            <img src="assets/img/header-logo.png" alt="Yabem-Vehu — Seguridad Privada" width="214" height="56" />
          </a>
          <nav className="nav-desktop" aria-label="Navegación principal">
            {NAV_LINKS.map((l) =>
            l.children ?
            <div className="nav-dropdown" key={l.path}>
                  <button className={"nav-dropdown__toggle " + (l.children.some((c) => c.path === current) ? "is-active" : "")} aria-haspopup="true" type="button" onMouseDown={(e) => e.preventDefault()}>
                    {l.label} <Icon.ChevronDown size={14} />
                  </button>
                  <div className="nav-dropdown__menu" role="menu">
                    {l.children.map((c) =>
                <a key={c.path} className={"nav-dropdown__item " + (current === c.path ? "is-active" : "")} role="menuitem"
                onClick={(e) => {e.preventDefault();navigate(c.path);}} href={c.path}>
                        <strong>{c.label}</strong>
                        <small>{c.desc}</small>
                      </a>
                )}
                  </div>
                </div> :

            <a key={l.path} className={"nav-link " + (current === l.path ? "is-active" : "")}
            onClick={(e) => {e.preventDefault();navigate(l.path);}} href={l.path}>{l.label}</a>

            )}
          </nav>
          <a className="btn btn-primary btn-sm header__cta" onClick={(e) => {e.preventDefault();navigate('/contacto');}} href="/contacto">Cotiza ahora</a>
          <button className="hamburger" aria-label={open ? "Cerrar menú" : "Abrir menú"} onClick={() => setOpen(!open)}>
            {open ? <Icon.Close /> : <Icon.Menu />}
          </button>
        </div>
      </header>

      <div className={"mobile-menu " + (open ? "is-open" : "")} {...(open ? {} : { inert: '' })}>
        <a className="mobile-menu__link" onClick={(e) => {e.preventDefault();navigate('/');setOpen(false);}} href="/">Inicio</a>
        <a className="mobile-menu__link" onClick={(e) => {e.preventDefault();navigate('/nosotros');setOpen(false);}} href="/nosotros">Nosotros</a>
        <a className="mobile-menu__link" onClick={(e) => {e.preventDefault();setSvcOpen(!svcOpen);}} href="#" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          Servicios <Icon.ChevronDown size={18} />
        </a>
        {svcOpen &&
        <div>
            <a className="mobile-menu__sublink" onClick={(e) => {e.preventDefault();navigate('/guardias');setOpen(false);}} href="/guardias">Guardias de Seguridad</a>
            <a className="mobile-menu__sublink" onClick={(e) => {e.preventDefault();navigate('/analisis');setOpen(false);}} href="/analisis">Análisis de Riesgos</a>
            <a className="mobile-menu__sublink" onClick={(e) => {e.preventDefault();navigate('/consultoria');setOpen(false);}} href="/consultoria">Consultoría</a>
          </div>
        }
        <a className="mobile-menu__link" onClick={(e) => {e.preventDefault();navigate('/contacto');setOpen(false);}} href="/contacto">Contáctanos</a>
        <a className="mobile-menu__link" onClick={(e) => {e.preventDefault();navigate('/oportunidades');setOpen(false);}} href="/oportunidades">Oportunidades laborales</a>
        <a className="btn btn-primary btn-full" onClick={(e) => {e.preventDefault();navigate('/contacto');setOpen(false);}} href="/contacto">Cotiza ahora</a>
      </div>
    </>);

}

// ============================================================
// FOOTER
// ============================================================
function Footer() {
  return (
    <footer className="footer" data-screen-label="Footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <img src="assets/img/footer-logo.png" alt="Yabem-Vehu" width="350" height="92" loading="lazy" />
            <p className="footer__tagline">El Factor Humano de su Seguridad. 15 años protegiendo activos en CDMX y Estado de México.</p>
          </div>
          <div>
            <div className="footer__col-title">Navegación</div>
            <ul className="footer__list">
              <li><a onClick={(e) => {e.preventDefault();navigate('/');}} href="/">Inicio</a></li>
              <li><a onClick={(e) => {e.preventDefault();navigate('/nosotros');}} href="/nosotros">Nosotros</a></li>
              <li><a onClick={(e) => {e.preventDefault();navigate('/guardias');}} href="/guardias">Guardias de Seguridad</a></li>
              <li><a onClick={(e) => {e.preventDefault();navigate('/analisis');}} href="/analisis">Análisis de Riesgos</a></li>
              <li><a onClick={(e) => {e.preventDefault();navigate('/consultoria');}} href="/consultoria">Consultoría</a></li>
              <li><a onClick={(e) => {e.preventDefault();navigate('/contacto');}} href="/contacto">Contáctanos</a></li>
              <li><a onClick={(e) => {e.preventDefault();navigate('/oportunidades');}} href="/oportunidades">Oportunidades laborales</a></li>
            </ul>
          </div>
          <div>
            <div className="footer__col-title">Contacto</div>
            <div className="footer__contact">
              <div className="footer__contact-item"><Icon.Mail size={16} /> ventas@yabem-vehu.com</div>
              <div className="footer__contact-item"><Icon.Phone size={16} /> +52 55 7879 2146</div>
              <div className="footer__contact-item"><Icon.MapPin size={16} /> Av. Insurgentes Sur No. 216, Int. 206-5 Col. Roma Norte, Alcaldía Cuauhtémoc, CDMX</div>
            </div>
          </div>
          <div>
            <div className="footer__col-title">Síguenos</div>
            <div className="footer__social">
              <a href="https://www.facebook.com/EmpresarialYabemVehu" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Icon.Facebook /></a>
              <a href="https://www.facebook.com/ReclutamientoYabemVehu" target="_blank" rel="noopener noreferrer" aria-label="Facebook Reclutamiento"><Icon.Facebook /></a>
              <a href="https://www.linkedin.com/company/yabem-vehu/posts/?feedView=all" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Icon.Linkedin /></a>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div>© 2026 Empresarial Yabem-Vehu S.A. de C.V. Todos los derechos reservados.</div>
          <div>REPSE ARR23960/2024 · DGSP CDMX 0605-15 / Exp. 3788-14</div>
        </div>
      </div>
    </footer>);

}

// ============================================================
// WHATSAPP FLOAT (mobile only)
// ============================================================
const WA_MESSAGE_BY_PATH = {
  '/': WA_MESSAGES.cotizar,
  '/nosotros': WA_MESSAGES.nosotros,
  '/guardias': WA_MESSAGES.guardias,
  '/analisis': WA_MESSAGES.analisis,
  '/consultoria': WA_MESSAGES.consultoria,
  '/contacto': WA_MESSAGES.contacto,
  '/oportunidades': WA_MESSAGES.oportunidades
};

function WhatsAppFloat({ current = '/' }) {
  const href = waLink(WA_MESSAGE_BY_PATH[current] || WA_MESSAGES.generic);
  const onClick = () => { if (window.yvWAClick) window.yvWAClick('float', { page_path: current }); };
  return (
    <a className="whatsapp-float" data-track-location="float" onClick={onClick} href={href} target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp">
      <Icon.WhatsApp size={28} />
    </a>);

}

// ============================================================
// CLIENTS MARQUEE
// ============================================================
const CLIENT_LOGOS = [
{ src: 'assets/img/client-toyota.png', alt: 'Toyota' },
{ src: 'assets/img/client-via.webp', alt: 'Vía Insurgentes' },
{ src: 'assets/img/client-polo.webp', alt: 'Royal County of Berkshire Polo Club' },
{ src: 'assets/img/client-imu.webp', alt: 'Grupo IMU' },
{ src: 'assets/img/client-disark.webp', alt: 'Disark' },
{ src: 'assets/img/client-piramide.webp', alt: 'Grupo Pirámide' },
{ src: 'assets/img/client-bh.webp', alt: 'BH Cosmetics' },
{ src: 'assets/img/client-pelcco.webp', alt: 'Pelcco' }];

function ClientsMarquee({ title = 'Empresas que confían en nosotros' }) {
  return (
    <section className="clients" data-screen-label="Clientes">
      <div className="container">
        <div className="clients__title">{title}</div>
        <div className="marquee">
          <div className="marquee__track">
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((l, i) =>
            <div className="marquee__item" key={i}><img src={l.src} alt={l.alt} loading="lazy" width="146" height="98" /></div>
            )}
          </div>
        </div>
      </div>
    </section>);

}

// ============================================================
// CTA FINAL (used on multiple pages)
// ============================================================
function CtaFinal({ title, body, primary = 'Solicitar cotización', primaryHref = '/contacto', waMessage, trackLocation = 'cta_final' }) {
  const waHref = waMessage ? waLink(waMessage) : WA_LINK;
  const onWAClick = () => { if (window.yvWAClick) window.yvWAClick(trackLocation); };
  return (
    <section className="cta-final" data-screen-label="CTA Final">
      <svg className="cta-final__shield cta-final__shield--left" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <path d="M32 4 L56 12 V30 C56 45, 46 55, 32 60 C18 55, 8 45, 8 30 V12 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M32 14 L48 19 V30 C48 41, 41 48, 32 52 C23 48, 16 41, 16 30 V19 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M22 31 L29 38 L43 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <svg className="cta-final__shield cta-final__shield--right" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <path d="M32 4 L56 12 V30 C56 45, 46 55, 32 60 C18 55, 8 45, 8 30 V12 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M22 31 L29 38 L43 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div className="container">
        <div className="cta-final__inner">
          <span className="section-marker" style={{ margin: '0 auto 16px' }}></span>
          <h2 className="cta-final__title" style={{ fontSize: "clamp(26px, 6vw, 40px)" }}>{title}</h2>
          <p className="cta-final__body">{body}</p>
          <div className="cta-final__ctas">
            <a className="btn btn-primary" onClick={(e) => {e.preventDefault();navigate(primaryHref);}} href={primaryHref}>{primary}</a>
            <a className="btn btn-secondary-light" data-track-location={trackLocation} onClick={onWAClick} href={waHref} target="_blank" rel="noopener noreferrer">
              <Icon.WhatsApp size={18} /> Cotizar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>);

}

// ============================================================
// TESTIMONIAL
// ============================================================
const TESTIMONIALS = [
{
  quote: "Desde hace más de 10 años que contratamos los servicios de seguridad con Empresarial Yabem-Vehu, ha disminuido el índice de robo en nuestra mercancía, y siempre teniendo una estrecha comunicación para brindar mejoras en el servicio que actualmente nos brindan, sobretodo la confianza y lealtad que hemos adquirido hacia la compañía.",
  author: "Lic. Alejandro Amui Abboud",
  company: "Modelos Secra, S.A. de C.V.",
  sector: "Sector Textil"
},
{
  quote: "Desde hace muchos años he contratado los servicios de Empresarial Yabem-Vehu para encargarse de la seguridad de mi empresa; de la misma forma, mi familia ha hecho lo mismo en sus empresas. Nunca hemos tenido ningún problema ni ninguna falla. Son un conjunto de personas muy cumplidas, profesionales y amables, que llevan a cabo de manera excelente su cometido.",
  author: "Dra. Sara Sefchovich Wasongarz",
  company: "Inmobiliaria Avena, S.A.",
  sector: "Sector Inmobiliario"
},
{
  quote: "En el desarrollo de mi actividad profesional, he observado que Empresarial Yabem-Vehu ejerce su labor de seguridad y vigilancia con tal eficiencia, que reditúa en la confianza que durante años ha otorgado a la empresa.",
  author: "Arq. Gerardo Aquino Ignacio",
  sector: "Sector Inmobiliario"
}];


function Testimonial({ quote, author, company, sector }) {
  return (
    <article className="testimonial">
      <div className="testimonial__quote-mark">"</div>
      <p className="testimonial__quote">{quote}</p>
      <div className="testimonial__author">
        <strong>{author}</strong>
        {company && <span>{company}</span>}
        {sector && <div className="testimonial__sector">{sector}</div>}
      </div>
    </article>);

}

// ============================================================
// TESTIMONIAL CAROUSEL
// ============================================================
function TestimonialCarousel({ items = TESTIMONIALS, perPage = 2, autoplayMs = 30000, mobileBreakpoint = 768 }) {
  // On mobile, ditch the carousel entirely and stack all cards so users can
  // scan through them naturally (no swipe / no autoplay).
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia(`(max-width: ${mobileBreakpoint - 1}px)`).matches
  );
  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${mobileBreakpoint - 1}px)`);
    const onChange = (e) => setIsMobile(e.matches);
    // Safari < 14 falls back to addListener
    if (mql.addEventListener) mql.addEventListener('change', onChange);
    else mql.addListener(onChange);
    return () => {
      if (mql.removeEventListener) mql.removeEventListener('change', onChange);
      else mql.removeListener(onChange);
    };
  }, [mobileBreakpoint]);

  // Group items into pages of `perPage`. If the last page is short, pad it by
  // wrapping around to the start so every page always shows `perPage` cards.
  const pages = [];
  if (items.length) {
    for (let i = 0; i < items.length; i += perPage) {
      const page = [];
      for (let j = 0; j < perPage; j++) {
        page.push(items[(i + j) % items.length]);
      }
      pages.push(page);
    }
  }

  const [idx, setIdx] = useState(0);
  const total = pages.length;
  const prev = () => setIdx((i) => (i - 1 + total) % total);
  const next = () => setIdx((i) => (i + 1) % total);

  // Auto-advance every `autoplayMs` (default 30s). Resets timer when idx changes
  // (e.g. user clicks prev/next/dot) so the new slide gets its full dwell time.
  // Disabled on mobile since the carousel is replaced by a static stack.
  useEffect(() => {
    if (isMobile || total <= 1 || !autoplayMs) return;
    const id = setInterval(() => {
      setIdx((i) => (i + 1) % total);
    }, autoplayMs);
    return () => clearInterval(id);
  }, [idx, total, autoplayMs, isMobile]);

  if (isMobile) {
    return (
      <div className="testimonials-stack">
        {items.map((t, i) => <Testimonial key={i} {...t} />)}
      </div>);
  }

  return (
    <div className="testimonial-carousel">
      <div className="testimonial-carousel__viewport">
        <div
          className="testimonial-carousel__track"
          style={{ transform: `translateX(-${idx * 100}%)` }}>
          {pages.map((page, i) =>
          <div
            className="testimonial-carousel__slide"
            key={i}
            aria-hidden={i !== idx}>
            <div className="testimonial-carousel__pair" data-count={page.length}>
              {page.map((t, j) => <Testimonial key={j} {...t} />)}
            </div>
          </div>
          )}
        </div>
      </div>
      <div className="testimonial-carousel__controls">
        <button
          type="button"
          className="testimonial-carousel__nav"
          onClick={prev}
          aria-label="Testimonio anterior">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 6 L9 12 L15 18" />
          </svg>
        </button>
        <div className="testimonial-carousel__dots" role="tablist">
          {pages.map((_, i) =>
          <button
            type="button"
            key={i}
            role="tab"
            className={`testimonial-carousel__dot ${i === idx ? 'is-active' : ''}`}
            onClick={() => setIdx(i)}
            aria-label={`Ir a la página ${i + 1}`}
            aria-selected={i === idx}
            tabIndex={i === idx ? 0 : -1} />

          )}
        </div>
        <button
          type="button"
          className="testimonial-carousel__nav"
          onClick={next}
          aria-label="Siguiente testimonio">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 6 L15 12 L9 18" />
          </svg>
        </button>
      </div>
    </div>);

}

// ============================================================
// QUALIFICATION FORM (reused by pages)
// ============================================================
const FREE_EMAIL_RE = /@(gmail|hotmail|yahoo|outlook|live|icloud|protonmail|aol)\./i;

const MX_STATES = [
'Aguascalientes', 'Baja California', 'Baja California Sur', 'Campeche',
'Chiapas', 'Chihuahua', 'Ciudad de México', 'Coahuila', 'Colima',
'Durango', 'Estado de México', 'Guanajuato', 'Guerrero', 'Hidalgo',
'Jalisco', 'Michoacán', 'Morelos', 'Nayarit', 'Nuevo León', 'Oaxaca',
'Puebla', 'Querétaro', 'Quintana Roo', 'San Luis Potosí', 'Sinaloa',
'Sonora', 'Tabasco', 'Tamaulipas', 'Tlaxcala', 'Veracruz', 'Yucatán',
'Zacatecas'];


function ZonaMultiSelect({ value, onChange, error, id = 'zona' }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onClickOut = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onClickOut);
    return () => document.removeEventListener('mousedown', onClickOut);
  }, []);

  const toggle = (state) => {
    if (value.includes(state)) {
      onChange(value.filter((s) => s !== state));
    } else {
      onChange([...value, state]);
    }
  };

  const summary = value.length === 0 ?
  'Selecciona uno o más estados' :
  value.length + ' ' + (value.length === 1 ? 'estado seleccionado' : 'estados seleccionados');

  return (
    <div className="zona-multiselect" ref={ref}>
      <button type="button"
      className={"zona-multiselect__toggle " + (error ? "zona-multiselect__toggle--error " : "") + (open ? "is-open" : "")}
      onClick={() => setOpen(!open)}
      aria-haspopup="listbox"
      aria-expanded={open}
      id={id}>
        <span className={value.length === 0 ? "zona-multiselect__placeholder" : ""}>{summary}</span>
        <Icon.ChevronDown size={16} />
      </button>
      {value.length > 0 &&
      <div className="zona-multiselect__chips">
          {value.map((s) =>
        <span key={s} className="zona-chip">
              {s}
              <button type="button" onClick={() => toggle(s)} aria-label={`Quitar ${s}`}>×</button>
            </span>
        )}
        </div>
      }
      {open &&
      <div className="zona-multiselect__menu" role="listbox">
          {MX_STATES.map((s) =>
        <label key={s} className={"zona-multiselect__option " + (value.includes(s) ? "is-selected" : "")}>
              <input type="checkbox" checked={value.includes(s)} onChange={() => toggle(s)} />
              <span>{s}</span>
            </label>
        )}
        </div>
      }
    </div>);

}

// ============================================================
// LEAD SCORING (interno — nunca se muestra al prospecto)
// Doc: SCORING_Leads_Yabem.md v1.0
// ============================================================
const SERVICE_LABELS = {
  guardias:    'Guardias de Seguridad',
  analisis:    'Análisis de Riesgos',
  consultoria: 'Consultoría en Seguridad',
  indeciso:    'No sé todavía / No especificó'
};
const SCORE_SERVICIO = { guardias: 25, analisis: 18, consultoria: 13, indeciso: 5 };
const SCORE_GUARDIAS = { '26+': 25, '11-25': 18, '4-10': 10, '1-3': 4 };
const SCORE_ZONA_NAME = {
  'Ciudad de México': 30, 'Estado de México': 28,
  'Puebla': 20, 'Tlaxcala': 18,
  'Hidalgo': 12, 'Morelos': 12, 'Querétaro': 12,
  'Guanajuato': 10, 'Jalisco': 10, 'Nuevo León': 10,
  'Veracruz': 8
};
const EMPRESA_VACIA = ['', 'na', 'n/a', 'no aplica', 'no tengo', '-', '.'];
const COMPETITOR_KEYWORDS = ['seguridad', 'guardias', 'vigilancia', 'protección', 'proteccion'];

function calcLeadScore(v) {
  let score = 0;
  const breakdown = {};

  const svcKey = SERVICE_LABELS[v.servicio] ? v.servicio : 'indeciso';
  breakdown.servicio = SCORE_SERVICIO[svcKey];
  score += breakdown.servicio;

  if (svcKey === 'guardias') {
    breakdown.guardias = SCORE_GUARDIAS[v.guardias] || 0;
  } else {
    breakdown.guardias = 10;
  }
  score += breakdown.guardias;

  const zonas = v.zona || [];
  const ptsArr = zonas.map((z) => SCORE_ZONA_NAME[z] !== undefined ? SCORE_ZONA_NAME[z] : 6);
  let ptsZ = ptsArr.length ? Math.max.apply(null, ptsArr) : 0;
  if (zonas.length >= 5) ptsZ += 8;
  else if (zonas.length >= 3) ptsZ += 5;
  breakdown.zona = Math.min(30, ptsZ);
  score += breakdown.zona;

  const esLibre = FREE_EMAIL_RE.test(v.email || '');
  breakdown.correo = esLibre ? -15 : 10;
  score += breakdown.correo;

  const empresaLow = (v.empresa || '').trim().toLowerCase();
  const sinEmpresa = EMPRESA_VACIA.includes(empresaLow);
  breakdown.empresa = sinEmpresa ? -5 : 10;
  score += breakdown.empresa;

  const descalificado = !sinEmpresa && COMPETITOR_KEYWORDS.some((k) => empresaLow.includes(k));
  const finalScore = descalificado ? 0 : Math.max(0, score);

  return { score: finalScore, raw: score, descalificado, breakdown };
}

function classifyLead(score, descalificado) {
  if (descalificado) return { nivel: '⊘', emoji: '⊘', texto: 'POSIBLE COMPETIDOR — DESCALIFICADO', tiempo: 'No prioritario' };
  if (score >= 70)   return { nivel: 'A', emoji: '🔴', texto: 'CLIENTE CALIENTE', tiempo: 'Responder en menos de 2 horas' };
  if (score >= 40)   return { nivel: 'B', emoji: '🟡', texto: 'CLIENTE TIBIO',     tiempo: 'Responder en menos de 24 horas' };
  return                  { nivel: 'C', emoji: '⚫', texto: 'LEAD FRÍO',          tiempo: 'Responder en 48 a 72 horas' };
}

function buildLeadMailto(values, score, level, breakdown) {
  const subj = `${level.emoji} ${level.texto} (${score}/100) — ${values.empresa || values.nombre}`;
  const servicio = SERVICE_LABELS[values.servicio] || 'No especificado';
  const lines = [
    `${level.emoji} NIVEL ${level.nivel} — ${level.texto}`,
    `Acción: ${level.tiempo}`,
    `Score: ${score}/100`,
    '',
    '— Datos del prospecto —',
    `Nombre: ${values.nombre}`,
    `Empresa: ${values.empresa || '(vacío)'}`,
    `Correo: ${values.email}`,
    values.telefono ? `Teléfono: ${values.telefono}` : '',
    `Servicio: ${servicio}`,
    values.guardias ? `Guardias: ${values.guardias}` : '',
    `Zona(s): ${(values.zona || []).join(', ') || '(no especificada)'}`,
    '',
    '— Mensaje del prospecto —',
    values.mensaje || '(sin mensaje)',
    '',
    '— Detalle del scoring (interno) —',
    `Servicio: ${breakdown.servicio} · Guardias: ${breakdown.guardias} · Zona: ${breakdown.zona} · Correo: ${breakdown.correo} · Empresa: ${breakdown.empresa}`,
    '',
    '—',
    'Lead generado automáticamente desde yabem-vehu.com.mx'
  ].filter(Boolean);
  return `mailto:ventas@yabem-vehu.com?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(lines.join('\n'))}`;
}

function buildLeadPayload(values, score, level, breakdown) {
  return {
    from_name:    values.nombre || '',
    empresa:      values.empresa || '(no proporcionada)',
    email:        values.email || '',
    telefono:     values.telefono || '(no proporcionado)',
    reply_to:     values.email || 'ventas@yabem-vehu.com',
    servicio:     SERVICE_LABELS[values.servicio] || 'No especificado',
    guardias:     values.guardias || '(no aplica)',
    zonas:        (values.zona || []).join(', ') || '(no especificada)',
    mensaje:      values.mensaje || '(sin mensaje)',
    score:        String(score),
    nivel:        level.nivel,
    nivel_emoji:  level.emoji,
    nivel_texto:  level.texto,
    nivel_tiempo: level.tiempo,
    b_servicio:   String(breakdown.servicio),
    b_guardias:   String(breakdown.guardias),
    b_zona:       String(breakdown.zona),
    b_correo:     String(breakdown.correo),
    b_empresa:    String(breakdown.empresa),
    lang:         'es-MX'
  };
}

function QualForm({ buttonText = 'Solicitar cotización', includeService = false, includePhone = false, includeMessage = false, hideGuardias = false, defaultService = '', onSubmit }) {
  const [values, setValues] = useState({
    nombre: '', empresa: '', email: '', telefono: '',
    servicio: '', guardias: '', zona: [], mensaje: '', honeypot: ''
  });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(false);
  const formStartedRef = useRef(false);

  const set = (k) => (e) => setValues((v) => ({ ...v, [k]: e.target.value }));

  // GA4: dispara form_start una sola vez en el primer focus/change del formulario.
  // Permite calcular tasa de abandono (form_start vs lead_form_submit).
  function onFirstInteraction() {
    if (formStartedRef.current) return;
    formStartedRef.current = true;
    if (window.yvTrack) window.yvTrack('form_start', { form: 'cotizacion' });
  }

  async function submit(e) {
    e.preventDefault();
    const errs = {};
    if (!values.nombre.trim()) errs.nombre = 'Ingresa tu nombre completo.';
    if (!values.empresa.trim()) errs.empresa = 'Ingresa el nombre de tu empresa.';
    if (!values.email.trim()) errs.email = 'Ingresa tu correo.';
    if (includePhone && !values.telefono.trim()) errs.telefono = 'Ingresa un teléfono de contacto.';
    if (includeService && !values.servicio) errs.servicio = 'Selecciona un servicio.';
    const guardiasReq = !hideGuardias && (includeService ? values.servicio === 'guardias' : true);
    if (guardiasReq && !values.guardias) errs.guardias = 'Selecciona el número de guardias.';
    if (!values.zona || values.zona.length === 0) errs.zona = 'Selecciona al menos un estado.';
    if (values.honeypot) return; // bot
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    const effectiveServicio = values.servicio || defaultService || 'indeciso';
    const enriched = { ...values, servicio: effectiveServicio };
    const { score, descalificado, breakdown } = calcLeadScore(enriched);
    const level = classifyLead(score, descalificado);
    if (window.yvTrack) {
      window.yvTrack('lead_form_submit', {
        score: score, nivel: level.nivel,
        servicio: effectiveServicio, guardias: enriched.guardias || '',
        zonas: (enriched.zona || []).join('|')
      });
    }
    if (onSubmit) {
      onSubmit({ ...enriched, _score: score, _nivel: level.nivel, _descalificado: descalificado });
      return;
    }

    setSending(true); setSendError(false);
    const payload = buildLeadPayload(enriched, score, level, breakdown);
    try {
      if (!window.emailjs || !window.EMAILJS_SERVICE_ID || !window.EMAILJS_TEMPLATE_COTIZACION) {
        throw new Error('EmailJS no disponible');
      }
      await window.emailjs.send(window.EMAILJS_SERVICE_ID, window.EMAILJS_TEMPLATE_COTIZACION, payload);
      if (window.yvTrack) window.yvTrack('lead_email_sent', { nivel: level.nivel });
      // Navega dentro del SPA → Header/Footer permanecen, conversion event se dispara en mount
      navigate('/gracias-cotizacion');
    } catch (err) {
      console.error('EmailJS send failed:', err);
      if (window.yvTrack) window.yvTrack('lead_email_error', { message: String(err && err.message || err) });
      setSendError(true);
      setSending(false);
    }
  }

  const showGuardias = !hideGuardias && (!includeService || values.servicio === 'guardias' || !values.servicio);

  return (
    <form className="form" onSubmit={submit} onFocus={onFirstInteraction} onChange={onFirstInteraction} noValidate>
      <input className="honeypot" type="text" tabIndex="-1" autoComplete="off"
      value={values.honeypot} onChange={set('honeypot')} aria-hidden="true" />

      <div className="form-row form-row--2">
        <div className="form-field">
          <label className="form-label" htmlFor="nombre">Nombre completo <span className="req">*</span></label>
          <input id="nombre" type="text" className={"form-input " + (errors.nombre ? "form-input--error" : "")}
          placeholder="Tu nombre" value={values.nombre} onChange={set('nombre')} />
          {errors.nombre && <div className="form-error">{errors.nombre}</div>}
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="empresa">Empresa <span className="req">*</span></label>
          <input id="empresa" type="text" className={"form-input " + (errors.empresa ? "form-input--error" : "")}
          placeholder="Nombre de tu empresa" value={values.empresa} onChange={set('empresa')} />
          {errors.empresa && <div className="form-error">{errors.empresa}</div>}
        </div>
      </div>

      <div className={"form-row " + (includePhone ? "form-row--2" : "")}>
        <div className="form-field">
          <label className="form-label" htmlFor="email">Correo <span className="req">*</span></label>
          <input id="email" type="email" className={"form-input " + (errors.email ? "form-input--error" : "")}
          placeholder="correo@tuempresa.com" value={values.email} onChange={set('email')} />
          {errors.email && <div className="form-error">{errors.email}</div>}
        </div>
        {includePhone &&
        <div className="form-field">
            <label className="form-label" htmlFor="tel">Teléfono <span className="req">*</span></label>
            <input id="tel" type="tel" className={"form-input " + (errors.telefono ? "form-input--error" : "")}
          placeholder="55 XXXX XXXX" value={values.telefono} onChange={set('telefono')} />
            {errors.telefono && <div className="form-error">{errors.telefono}</div>}
          </div>
        }
      </div>

      {includeService &&
      <div className="form-field">
          <label className="form-label" htmlFor="svc">Servicio de interés <span className="req">*</span></label>
          <select id="svc" className={"form-select " + (errors.servicio ? "form-select--error" : "")}
        value={values.servicio} onChange={set('servicio')}>
            <option value="">Selecciona un servicio</option>
            <option value="guardias">Guardias de Seguridad Intramuros</option>
            <option value="analisis">Análisis de Riesgos</option>
            <option value="consultoria">Consultoría en Seguridad</option>
            <option value="indeciso">No sé todavía — necesito orientación</option>
          </select>
          {errors.servicio && <div className="form-error">{errors.servicio}</div>}
        </div>
      }

      {showGuardias &&
      <div className="form-field">
          <label className="form-label" htmlFor="guardias">Número de guardias <span className="req">*</span></label>
          <select id="guardias" className={"form-select " + (errors.guardias ? "form-select--error" : "")}
        value={values.guardias} onChange={set('guardias')}>
            <option value="">Selecciona</option>
            <option value="1-3">1 a 3</option>
            <option value="4-10">4 a 10</option>
            <option value="11-25">11 a 25</option>
            <option value="26+">26 o más</option>
          </select>
          {errors.guardias && <div className="form-error">{errors.guardias}</div>}
        </div>
      }

      <div className="form-field">
        <label className="form-label" htmlFor="zona">Zona de servicio <span className="req">*</span></label>
        <ZonaMultiSelect
          id="zona"
          value={values.zona}
          onChange={(v) => setValues((vv) => ({ ...vv, zona: v }))}
          error={errors.zona} />

        {errors.zona && <div className="form-error">{errors.zona}</div>}
      </div>

      {includeMessage &&
      <div className="form-field">
          <label className="form-label" htmlFor="msg">Mensaje o necesidades</label>
          <textarea id="msg" className="form-textarea"
        placeholder="Cuéntanos brevemente qué necesitas (opcional)"
        value={values.mensaje} onChange={set('mensaje')}></textarea>
        </div>
      }

      <button type="submit" className="btn btn-primary btn-full" disabled={sending}>{sending ? 'Enviando…' : buttonText}</button>
      {sendError &&
        <div role="alert" style={{ marginTop: 12, padding: '12px 16px', background: '#FFF1F0', border: '1px solid #FECACA', borderLeft: '4px solid #992824', borderRadius: 8, color: '#7A1F1C', fontSize: 14, lineHeight: 1.5 }}>
          No pudimos enviar tu solicitud en este momento. Intenta de nuevo en unos segundos o escríbenos por <a data-track-location="form_error_contacto" onClick={() => { if (window.yvWAClick) window.yvWAClick('form_error_contacto'); }} href={waLink(WA_MESSAGES.qualForm)} target="_blank" rel="noopener noreferrer" style={{ color: '#7A1F1C', textDecoration: 'underline', fontWeight: 700 }}>WhatsApp</a>.
        </div>
      }

      <div className="form-help">
        <Icon.Lock size={14} /> Tu información es confidencial. Respondemos en menos de 24 horas hábiles.
      </div>
    </form>);

}

// ============================================================
// PAGE HERO ART (per-page brand-aligned composition)
// ============================================================
const HERO_ART_VARIANTS = {
  nosotros: { num: '15', tag: 'Acerca de', side: 'Yabem-Vehu · 15 años', badgeNum: '+30', badgeLabel: 'Años de experiencia\ndel equipo consultor', deco: 'rings' },
  guardias: { num: '01', tag: 'Servicio 01', side: 'Guardias intramuros', badgeNum: 'REPSE', badgeLabel: 'ARR23960/2024\nProveedor activo STPS', deco: 'rings' },
  analisis: { num: '02', tag: 'Servicio 02', side: 'Diagnóstico de riesgos', badgeNum: '5', badgeLabel: 'Entregables del\ndiagnóstico integral', deco: 'rings' },
  consultoria: { num: '03', tag: 'Servicio 03', side: 'Estrategia y planeación', badgeNum: 'ASIS', badgeLabel: 'Member · IFPO\nEstándares globales', deco: 'rings' },
  carreras: { num: 'YV', tag: 'Únete al equipo', side: 'Talento que protege', badgeNum: '+200', badgeLabel: 'Colaboradores activos\nen CDMX y EDOMEX', deco: 'rings' }
};

function PageHeroArt({ variant = 'guardias' }) {
  const v = HERO_ART_VARIANTS[variant] || HERO_ART_VARIANTS.guardias;
  return (
    <div className="page-hero-art" data-variant={variant} aria-hidden="true">
      <div className="page-hero-art__grid"></div>
      <div className="page-hero-art__triangle"></div>
      <div className="page-hero-art__side">{v.side}</div>

      {v.deco === 'rings' &&
      <>
          <div className="page-hero-art__rings">
            <span></span><span></span><span></span><span></span>
          </div>
          <div className="page-hero-art__core"></div>
        </>
      }

      <div className="page-hero-art__num">{v.num}</div>
    </div>);

}

// ============================================================
// PAGE HERO (interior pages)
// ============================================================
function PageHero({ eyebrow, title, subtitle, variant, primary = 'Solicitar cotización', primaryHref = '/contacto', secondary, secondaryHref = WA_LINK, secondaryExternal = true, badges, trackLocation = 'hero' }) {
  const onWAClick = () => { if (window.yvWAClick) window.yvWAClick(trackLocation); };
  return (
    <section className="hero" data-screen-label="Hero">
      <div className="container hero__inner">
        <div className="hero__grid">
          <div style={{ width: "100%", maxWidth: "543px" }}>
            <span className="eyebrow eyebrow--light">{eyebrow}</span>
            <h1 className="hero__headline">{title}</h1>
            <p className="hero__subtitle">{subtitle}</p>
            <div className="hero__ctas">
              <a className="btn btn-primary" onClick={(e) => {
                if (primaryHref.startsWith('#')) {
                  e.preventDefault();
                  const el = document.querySelector(primaryHref);
                  if (el) {
                    const top = el.getBoundingClientRect().top + window.scrollY - 80;
                    window.scrollTo({ top, behavior: 'smooth' });
                  }
                } else if (!primaryHref.startsWith('http')) {
                  e.preventDefault();
                  navigate(primaryHref);
                }
              }} href={primaryHref}>{primary}</a>
              {secondary && (
              secondaryExternal ?
              <a className="btn btn-secondary-light" data-track-location={trackLocation} onClick={onWAClick} href={secondaryHref} target="_blank" rel="noopener noreferrer"><Icon.WhatsApp size={18} /> {secondary}</a> :
              <a className="btn btn-secondary-light" onClick={(e) => {e.preventDefault();navigate(secondaryHref);}} href={secondaryHref}>{secondary}</a>)
              }
            </div>
            {badges &&
            <div className="hero__badges">
                {badges.map((b, i) => <span className="badge-cert" key={i}><span className="dot"></span>{b}</span>)}
              </div>
            }
          </div>
          {variant && <PageHeroArt variant={variant} />}
        </div>
      </div>
      <div className="hero__corner"></div>
    </section>);

}

// Export to window for cross-script access
Object.assign(window, {
  Icon, Header, Footer, WhatsAppFloat, ClientsMarquee, CtaFinal, Testimonial, TestimonialCarousel, TESTIMONIALS, QualForm, PageHero, PageHeroArt,
  navigate, WA_LINK, WA_MESSAGES, waLink
});