/* global React, ReactDOM, Header, Footer, WhatsAppFloat, HomePage, NosotrosPage, GuardiasPage, AnalisisPage, ConsultoriaPage, ContactoPage, OportunidadesPage */
const { useState, useEffect } = React;

const ROUTES = {
  '/': HomePage,
  '/nosotros': NosotrosPage,
  '/guardias': GuardiasPage,
  '/analisis': AnalisisPage,
  '/consultoria': ConsultoriaPage,
  '/contacto': ContactoPage,
  '/oportunidades': OportunidadesPage,
};

function pathFromHash() {
  const h = window.location.hash.replace(/^#/, '');
  return ROUTES[h] ? h : '/';
}

function App() {
  const [path, setPath] = useState(pathFromHash());

  useEffect(() => {
    const onHash = () => setPath(pathFromHash());
    const onNav = (e) => {
      const p = e.detail;
      window.location.hash = p;
      setPath(p);
      window.scrollTo({top: 0, behavior: 'instant'});
    };
    window.addEventListener('hashchange', onHash);
    window.addEventListener('yv:navigate', onNav);
    return () => {
      window.removeEventListener('hashchange', onHash);
      window.removeEventListener('yv:navigate', onNav);
    };
  }, []);

  useEffect(() => {
    // Update document title + meta description per route (SPA SEO + GA4 pageview)
    const meta = {
      '/':              { t: 'Empresa de Seguridad Privada en CDMX | Yabem Vehu — 15 años, REPSE Activo',
                          d: 'Empresa de seguridad privada en CDMX y Estado de México. Guardias intramuros, análisis de riesgos y consultoría. REPSE ARR23960/2024.' },
      '/nosotros':      { t: 'Nosotros | Yabem Vehu — Seguridad Privada con 15 Años',
                          d: 'Empresa 100% mexicana con 15 años protegiendo activos. REPSE, SSC, ASIS, IFPO.' },
      '/guardias':      { t: 'Guardias de Seguridad Intramuros para Empresas en CDMX | Yabem Vehu',
                          d: 'Guardias certificados, REPSE activo ARR23960/2024. Cotiza en menos de 24 horas.' },
      '/analisis':      { t: 'Análisis de Riesgos Empresariales en CDMX | Yabem Vehu',
                          d: 'Diagnóstico integral de vulnerabilidades y plan de acción. Especialistas ASIS/IFPO.' },
      '/consultoria':   { t: 'Consultoría en Seguridad Privada en CDMX | Yabem Vehu',
                          d: 'Estrategia y diagnóstico de seguridad empresarial. Consultores certificados.' },
      '/contacto':      { t: 'Cotiza tu Servicio de Guardias — Respuesta en Menos de 24 Horas | Yabem Vehu',
                          d: 'Cotiza guardias, análisis de riesgos o consultoría para tu empresa. REPSE activo.' },
      '/oportunidades': { t: 'Oportunidades Laborales | Únete a Yabem Vehu',
                          d: 'Postúlate para guardia, supervisor, analista o consultor de seguridad. Empresa 100% mexicana, REPSE activo.' },
    };
    const m = meta[path] || meta['/'];
    document.title = m.t;
    let descTag = document.querySelector('meta[name="description"]');
    if (descTag) descTag.setAttribute('content', m.d);
    // GA4 pageview por ruta SPA
    if (window.yvTrack) window.yvTrack('page_view', { page_path: path, page_title: m.t });
  }, [path]);

  const Page = ROUTES[path] || HomePage;
  return (
    <>
      <Header current={path} />
      <main key={path}>
        <Page />
      </main>
      <Footer />
      <WhatsAppFloat current={path} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
