// Direção visual: Brasil em Movimento Editorial — editorialismo cívico, assimetria, base marfim, azul-petróleo e acentos verde/amarelo/coral; presença humana antes da promessa.
import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  CalendarDays,
  ChevronRight,
  Clock3,
  GraduationCap,
  Facebook,
  Handshake,
  Instagram,
  Landmark,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Scale,
  ShieldCheck,
  Users,
  Wheat,
  X,
  Youtube,
} from "lucide-react";
import { toast } from "sonner";

const logoUrl = "/manus-storage/julio-logo_54e754fb.webp";
const number406Url = "/manus-storage/numero-406_e5375f9c.webp";
const heroImage = "/manus-storage/julio-hero-brasilia_4d400003.jpg";
const parliamentImage = "/manus-storage/julio-parliament_1c7e8352.jpg";
const communityImage = "/manus-storage/julio-community_9ee5f3bd.jpg";
const markImage = "/manus-storage/julio-mark_b168c756.png";

const navItems = [
  { label: "Atuação", href: "#atuacao" },
  { label: "Agenda", href: "#agenda" },
  { label: "Resultados", href: "#resultados" },
  { label: "Trajetória", href: "#trajetoria" },
  { label: "Participe", href: "#participe" },
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

const fronts = [
  {
    icon: ShieldCheck,
    number: "01",
    title: "Segurança e cidadania",
    text: "Defesa de políticas que devolvem tranquilidade às famílias e valorizam quem protege a população.",
    color: "green",
  },
  {
    icon: Wheat,
    number: "02",
    title: "Campo que produz",
    text: "Mais segurança jurídica, crédito e infraestrutura para quem trabalha e movimenta a economia.",
    color: "yellow",
  },
  {
    icon: Landmark,
    number: "03",
    title: "Gestão responsável",
    text: "Recursos públicos bem cuidados, prioridades claras e transparência para cada decisão.",
    color: "coral",
  },
  {
    icon: GraduationCap,
    number: "04",
    title: "Educação que abre caminhos",
    text: "Apoio à aprendizagem, à formação profissional e às oportunidades para a próxima geração.",
    color: "blue",
  },
  {
    icon: Handshake,
    number: "05",
    title: "Saúde mais próxima",
    text: "Trabalho para aproximar atendimento, prevenção e dignidade de quem mais precisa.",
    color: "green",
  },
  {
    icon: Scale,
    number: "06",
    title: "Liberdade para empreender",
    text: "Menos burocracia e mais confiança para quem cria negócios, empregos e soluções locais.",
    color: "yellow",
  },
];

const timeline = [
  {
    year: "Antes do mandato",
    title: "A experiência começa no território",
    text: "A escuta de famílias, produtores, empreendedores e trabalhadores forma a base de cada pauta.",
  },
  {
    year: "Primeiro ciclo",
    title: "Presença no Congresso",
    text: "A atuação parlamentar transforma demandas reais em projetos, emendas e fiscalização do poder público.",
  },
  {
    year: "Agora",
    title: "Um mandato que presta contas",
    text: "Resultados precisam ser acompanhados de perto: o cidadão sabe o que foi feito, por quê e qual é o próximo passo.",
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

          <ScrollLink href="#contato" className="header-cta">
            Fale com o mandato <ArrowUpRight size={16} strokeWidth={2.2} />
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
          <ScrollLink href="#contato" className="mobile-nav-link mobile-nav-cta" onClick={closeMenu}>
            Fale com o mandato <ArrowUpRight size={16} />
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
                  Conheça a atuação <ArrowUpRight size={18} />
                </ScrollLink>
                <ScrollLink href="#agenda" className="text-link text-link-dark">
                  Acompanhe o mandato <ChevronRight size={18} />
                </ScrollLink>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-image-frame">
                <img src={heroImage} alt="Júlio Barreto em Brasília" />
                <div className="hero-image-caption"><span>Brasília, DF</span></div>
              </div>
              <div className="hero-stamp"><img src={markImage} alt="" aria-hidden="true" /><span>TRABALHO<br />QUE SE VÊ</span></div>
            </div>
          </div>
          <div className="hero-bottom-line" aria-hidden="true"><span /><span /><span /></div>
        </section>


        <section id="atuacao" className="about-section section-pad">
          <div className="container about-grid">
            <div className="about-visual-wrap">
              <div className="about-image-main"><img src={parliamentImage} alt="Júlio Barreto ouvindo representantes da comunidade" /></div>
              <div className="about-image-small"><img src={communityImage} alt="Júlio Barreto conversando com trabalhadores" /></div>
              <div className="about-note"><span>01</span><strong>O mandato começa<br />por ouvir.</strong></div>
            </div>
            <div className="about-copy">
              <SectionKicker>Atuação</SectionKicker>
              <h2>Um gabinete aberto para quem faz o Brasil acontecer.</h2>
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
              <div className="agenda-intro"><p>O Brasil não cabe em um gabinete. Por isso, a agenda do mandato combina presença no território, escuta de lideranças e trabalho permanente no Congresso.</p><ScrollLink href="#contato" className="text-link text-link-light">Ver agenda completa <ChevronRight size={18} /></ScrollLink></div>
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

        <section id="resultados" className="results-section section-pad">
          <div className="container">
            <div className="results-header">
              <div><SectionKicker>Frentes de trabalho</SectionKicker><h2>Diagnóstico claro.<br /><em>Ação de verdade.</em></h2></div>
              <p>O mandato se organiza em prioridades que atravessam a vida de quem vive nas cidades e no campo. Sem promessa vazia: com acompanhamento, cobrança e entrega.</p>
            </div>
            <div className="results-grid">
              {fronts.map((front) => {
                const Icon = front.icon;
                return <article className={`result-card result-card-${front.color}`} key={front.number}><div className="result-top"><span className="result-number">{front.number}</span><Icon size={28} strokeWidth={1.5} /></div><h3>{front.title}</h3><p>{front.text}</p><span className="result-arrow"><ArrowUpRight size={18} /></span></article>;
              })}
            </div>
          </div>
        </section>

        <section id="trajetoria" className="trajectory-section section-pad">
          <div className="container trajectory-grid">
            <div className="trajectory-heading"><SectionKicker>Trajetória</SectionKicker><h2>Uma vida em movimento,<br /><em>um mandato com direção.</em></h2><p>Experiência não é ponto de chegada. É o que permite seguir avançando com os pés no chão.</p><div className="trajectory-mark"><img src={markImage} alt="" aria-hidden="true" /></div></div>
            <div className="timeline">
              {timeline.map((item, index) => <article className="timeline-item" key={item.year}><div className="timeline-marker"><span>{String(index + 1).padStart(2, "0")}</span></div><div className="timeline-content"><span className="timeline-year">{item.year}</span><h3>{item.title}</h3><p>{item.text}</p></div></article>)}
            </div>
          </div>
        </section>

        <section id="participe" className="participate-section">
          <div className="participate-shape participate-shape-yellow" aria-hidden="true" />
          <div className="participate-shape participate-shape-green" aria-hidden="true" />
          <div className="container participate-inner">
            <div className="participate-copy"><SectionKicker dark>Participe</SectionKicker><h2>O mandato é público.<br /><em>A conversa também.</em></h2><p>Envie uma sugestão, acompanhe o trabalho e ajude a construir prioridades que façam sentido para a sua cidade.</p></div>
            <div className="participate-actions"><button className="participate-card participate-card-dark" onClick={() => placeholderAction("Canal do mandato")}><span className="participate-card-icon"><MessageCircle size={22} /></span><span><strong>Canal do mandato</strong><small>Receba atualizações e convites</small></span><ArrowUpRight size={20} /></button><ScrollLink href="#contato" className="participate-card participate-card-light"><span className="participate-card-icon"><Users size={22} /></span><span><strong>Fale com a equipe</strong><small>Envie sua pauta ou sugestão</small></span><ArrowUpRight size={20} /></ScrollLink></div>
          </div>
        </section>

        <section id="contato" className="contact-section section-pad">
          <div className="container contact-grid">
            <div><SectionKicker>Contato</SectionKicker><h2>Quer conversar<br /><em>sobre o seu território?</em></h2><p>Este espaço é seu. Conte o que precisa entrar na agenda do mandato.</p></div>
            <div className="contact-panel"><div className="contact-item"><Mail size={19} /><div><span>Fale com o gabinete</span><a href="mailto:contato@juliobarreto.com.br">contato@juliobarreto.com.br</a></div></div><div className="contact-item"><MapPin size={19} /><div><span>Gabinete em Brasília</span><strong>Câmara dos Deputados — Brasília, DF</strong></div></div><div className="contact-actions"><button className="button button-primary" onClick={() => placeholderAction("Formulário de contato")}>Enviar uma mensagem <ArrowUpRight size={18} /></button><span>Retorno em até 2 dias úteis</span></div></div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-top"><div className="footer-brand"><img src={logoUrl} alt="Logo Júlio Barreto" /><p>Brasília Além da Divisa</p></div><div className="footer-links"><div><span className="footer-heading">Navegue</span>{navItems.slice(0, 4).map((item) => <ScrollLink key={item.href} href={item.href}>{item.label}</ScrollLink>)}</div><div><span className="footer-heading">Siga o mandato</span><div className="social-links"><button aria-label="Instagram" onClick={() => placeholderAction("Instagram")}><Instagram size={18} /></button><button aria-label="Facebook" onClick={() => placeholderAction("Facebook")}><Facebook size={18} /></button><button aria-label="YouTube" onClick={() => placeholderAction("YouTube")}><Youtube size={18} /></button><button aria-label="LinkedIn" onClick={() => placeholderAction("LinkedIn")}><Linkedin size={18} /></button></div></div></div></div>
        <div className="container footer-bottom"><span>© 2026 Júlio Barreto. Conteúdo demonstrativo para validação do layout.</span><div><a href="#contato">Privacidade</a><a href="#contato">Transparência</a><a href="#topo" className="back-to-top">Voltar ao topo <ArrowDown size={14} /></a></div></div>
      </footer>
    </div>
  );
}
