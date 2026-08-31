// Direção visual: Brasil em Movimento Editorial — editorialismo cívico, assimetria, base marfim, azul-petróleo e acentos verde/amarelo/coral; presença humana antes da promessa.
import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Menu,
  MessageCircle,
  X,
  Youtube,
} from "lucide-react";
import { toast } from "sonner";

const logoUrl = "/manus-storage/julio-logo_54e754fb.webp";
const number406Url = "/manus-storage/numero-406_e5375f9c.webp";
const heroImage = "/manus-storage/JulioBarreto_c742e036.webp";
const parliamentImage = "/manus-storage/julio-parliament_1c7e8352.jpg";
const communityImage = "/manus-storage/julio-community_9ee5f3bd.jpg";

const navItems = [
  { label: "Início", href: "#topo" },
  { label: "Projeto", href: "#atuacao" },
  { label: "Agenda", href: "#agenda" },
  { label: "Sobre", href: "#atuacao" },
];

const agenda = [
  {
    day: "12",
    month: "SET",
    time: "08h30",
    title: "Café com lideranças do interior",
    location: "Goiânia — GO",
    type: "Escuta pública",
  },
  {
    day: "18",
    month: "SET",
    time: "14h",
    title: "Audiência sobre infraestrutura regional",
    location: "Brasília — DF",
    type: "Agenda parlamentar",
  },
  {
    day: "26",
    month: "SET",
    time: "19h",
    title: "Encontro aberto com a comunidade",
    location: "Anápolis — GO",
    type: "Mandato presente",
  },
];

function SectionKicker({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className={`section-kicker ${dark ? "section-kicker-dark" : ""}`}>
      <span className="kicker-line" />
      <span>{children}</span>
    </div>
  );
}

function ScrollLink({ href, children, className = "", onClick }: { href: string; children: React.ReactNode; className?: string; onClick?: () => void }) {
  return (
    <a className={className} href={href} onClick={onClick}>
      {children}
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const placeholderAction = (label: string) => {
    toast(`${label}: link oficial será conectado pela equipe do mandato.`);
  };

  return (
    <div className="site-shell">
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>

      <header className={`site-header ${scrolled ? "site-header-scrolled" : ""}`}>
        <div className="header-inner">
          <ScrollLink href="#topo" className="brand-lockup" aria-label="Júlio Barreto — início">
            <img src={logoUrl} alt="Logo Júlio Barreto" className="brand-logo" />
            <img src={number406Url} alt="406" className="brand-406" />
          </ScrollLink>

          <nav className="desktop-nav" aria-label="Navegação principal">
            {navItems.map((item) => (
              <ScrollLink key={item.href} href={item.href} className="nav-link">
                {item.label}
              </ScrollLink>
            ))}
          </nav>

          <ScrollLink href="#participe" className="header-cta">
            Participe <ArrowUpRight size={16} strokeWidth={2.2} />
          </ScrollLink>

          <button className="mobile-menu-toggle" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className={`mobile-nav ${menuOpen ? "mobile-nav-open" : ""}`}>
          {navItems.map((item) => (
            <ScrollLink key={item.href} href={item.href} className="mobile-nav-link" onClick={closeMenu}>
              {item.label} <ArrowUpRight size={16} />
            </ScrollLink>
          ))}
          <ScrollLink href="#participe" className="mobile-nav-link mobile-nav-cta" onClick={closeMenu}>
            Participe <ArrowUpRight size={16} />
          </ScrollLink>
        </div>
      </header>

      <main id="conteudo">
        <section id="topo" className="hero-section">
          <div className="hero-paper-texture" />
          <div className="hero-content container">
            <div className="hero-copy">
              <SectionKicker>Deputado federal</SectionKicker>
              <h1>Brasília Além da <em>Divisa.</em></h1>
              <div className="hero-actions">
                <ScrollLink href="#atuacao" className="button button-primary">
                  Conheça o Projeto <ArrowUpRight size={18} />
                </ScrollLink>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-image-frame">
                <img src={heroImage} alt="Júlio Barreto em Brasília" />
                <div className="hero-image-caption"><span>Brasília, DF</span></div>
              </div>
            </div>
          </div>
          <div className="hero-bottom-line" aria-hidden="true"><span /><span /><span /></div>
        </section>


        <section id="atuacao" className="about-section section-pad">
          <div className="container about-grid">
            <div className="about-visual-wrap">
              <div className="about-image-main"><img src={parliamentImage} alt="Júlio Barreto ouvindo representantes da comunidade" /></div>
              <div className="about-image-small"><img src={communityImage} alt="Júlio Barreto conversando com trabalhadores" /></div>
            </div>
            <div className="about-copy">
              <SectionKicker>Pré-Projeto</SectionKicker>
              <h2 style={{fontSize: '34px'}}>Novo marco com planejamento, gestão e autonomia administrativa</h2>
              <p className="lead-paragraph">Júlio Barreto leva para Brasília a experiência de quem conhece o país de perto. O trabalho começa na escuta, passa pela construção de soluções e termina na prestação de contas.</p>
              <p>Cada pauta precisa responder a uma pergunta simples: como isso melhora a vida de quem trabalha, empreende, cuida da família e espera um serviço público que funcione?</p>
              <div className="about-signature"><span className="signature-line" /><span>Júlio Barreto<br /><small>Deputado federal</small></span></div>
            </div>
          </div>
        </section>

        <section id="agenda" className="agenda-section section-pad section-dark">
          <div className="agenda-decor agenda-decor-left" aria-hidden="true" />
          <div className="container">
            <div className="agenda-header">
              <div>
                <SectionKicker dark>Agenda</SectionKicker>
                <h2>De onde vem<br /><em>a força do mandato.</em></h2>
              </div>
              <div className="agenda-intro"><p>O Brasil não cabe em um gabinete. Por isso, a agenda do mandato combina presença no território, escuta de lideranças e trabalho permanente no Congresso.</p></div>
            </div>
            <div className="agenda-list">
              {agenda.map((item, index) => (
                <article className="agenda-item" key={item.title}>
                  <div className="agenda-date"><strong>{item.day}</strong><span>{item.month}</span></div>
                  <div className="agenda-time"><Clock3 size={15} />{item.time}</div>
                  <div className="agenda-details"><span className="agenda-type">{item.type}</span><h3>{item.title}</h3><p><MapPin size={14} />{item.location}</p></div>
                  <span className="agenda-index">0{index + 1}</span>
                </article>
              ))}
            </div>
            <div className="agenda-footnote"><span className="live-dot" /> Agenda ilustrativa — atualize com os compromissos oficiais do mandato.</div>
          </div>
        </section>

        <section id="participe" className="participate-section">
          <div className="participate-shape participate-shape-yellow" aria-hidden="true" />
          <div className="participate-shape participate-shape-green" aria-hidden="true" />
          <div className="container participate-inner">
            <div className="participate-copy"><SectionKicker dark>Participe</SectionKicker><h2>O mandato é público.<br /><em>A conversa também.</em></h2><p>Envie uma sugestão, acompanhe o trabalho e ajude a construir prioridades que façam sentido para a sua cidade.</p></div>
            <div className="participate-actions"><button className="participate-card participate-card-dark" onClick={() => placeholderAction("Canal do mandato")}><span className="participate-card-icon"><MessageCircle size={22} /></span><span><strong>Canal do mandato</strong><small>Receba atualizações e convites</small></span><ArrowUpRight size={20} /></button></div>
          </div>
        </section>

      </main>

      <footer className="site-footer">
        <div className="container footer-top"><div className="footer-brand"><img src={logoUrl} alt="Logo Júlio Barreto" /><p>Brasília Além da Divisa</p></div><div className="footer-links"><div><span className="footer-heading">Navegue</span>{navItems.slice(0, 4).map((item) => <ScrollLink key={item.href} href={item.href}>{item.label}</ScrollLink>)}</div><div><span className="footer-heading">Siga o Projeto</span><div className="social-links"><button aria-label="Instagram" onClick={() => placeholderAction("Instagram")}><Instagram size={18} /></button><button aria-label="Facebook" onClick={() => placeholderAction("Facebook")}><Facebook size={18} /></button><button aria-label="YouTube" onClick={() => placeholderAction("YouTube")}><Youtube size={18} /></button><button aria-label="LinkedIn" onClick={() => placeholderAction("LinkedIn")}><Linkedin size={18} /></button></div></div></div></div>
        <div className="container footer-bottom"><span>© 2026 Júlio Barreto</span><div><a href="#topo" className="back-to-top">Voltar ao topo <ArrowDown size={14} /></a></div></div>
      </footer>
    </div>
  );
}
