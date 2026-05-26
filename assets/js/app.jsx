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
    // Update document title per page
    const titles = {
      '/': 'Empresa de Seguridad Privada en CDMX | Yabem Vehu',
      '/nosotros': 'Nosotros | Yabem Vehu — Seguridad Privada con 15 Años',
      '/guardias': 'Guardias de Seguridad Intramuros en CDMX | Yabem Vehu',
      '/analisis': 'Análisis de Riesgos Empresariales en CDMX | Yabem Vehu',
      '/consultoria': 'Consultoría en Seguridad Privada | Yabem Vehu',
      '/contacto': 'Contacto | Cotiza tu Servicio de Seguridad | Yabem Vehu',
      '/oportunidades': 'Oportunidades Laborales | Únete a Yabem Vehu',
    };
    document.title = titles[path] || titles['/'];
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
