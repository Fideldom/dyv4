/*
  DYLANDE — Navy Precision / Corporate Rebuild
  Homepage orientada a decisão: clareza de oferta, produto visível e confiança comprovável.
 */
import { useEffect, useState, type ReactNode } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock,
  Headphones,
  MonitorSmartphone,
  Percent,
  Play,
  ShieldCheck,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { Magnetic } from "@/components/motion/Magnetic";
import { Reveal } from "@/components/motion/Reveal";
import { siteConfig } from "@/lib/siteConfig";
import { trackEvent } from "@/lib/analytics";

const media = "/media/";
const HERO_INTERVAL_MS = 4500;

const resellerBenefits: Array<[LucideIcon, string, string, string, string]> = [
  [
    Percent,
    "100%",
    "Comissão Direta",
    "Comissões Generosas",
    "Ganhe 100% do lucro em cada venda.",
  ],
  [
    Headphones,
    "24/7",
    "Suporte Técnico",
    "Suporte Especializado",
    "Treinamento completo e suporte contínuo.",
  ],
  [
    ShieldCheck,
    "100%",
    "Exclusividade",
    "Território Protegido",
    "Exclusividade e leads qualificados na sua zona.",
  ],
  [
    TrendingUp,
    "∞",
    "Potencial de Crescimento",
    "Crescimento Garantido",
    "Plano de carreira estruturado.",
  ],
];

const resellerPlans = [
  {
    kicker: "Para pessoas jurídicas",
    title: "Empresa",
    price: "50.000 Kz",
    priceLabel: "Taxa de Adesão",
    items: [
      "Cópia do Alvará ou NIF",
      "Cópia do Bilhete do representante",
      "Treinamento 6 horas (3 dias)",
    ],
  },
  {
    kicker: "Para pessoas físicas",
    title: "Singular",
    price: "30.000 Kz",
    priceLabel: "Taxa de Adesão",
    items: [
      "Cópia do Bilhete de Identidade",
      "1 Foto tipo passe",
      "Treinamento 6 horas (3 dias)",
    ],
  },
  {
    kicker: "Capacitação completa",
    title: "Treinamento",
    price: "6h",
    priceLabel: "Carga Horária",
    items: ["Até 3 participantes", "2 horas por dia", "Certificado garantido"],
  },
  {
    kicker: "Vantagens exclusivas",
    title: "Benefícios",
    price: "100%",
    priceLabel: "Comissão",
    items: ["Suporte 24/7", "Material de venda", "Território protegido"],
  },
];

const home4Highlights: Array<[LucideIcon, string]> = [
  [Clock, "A qualquer momento"],
  [MonitorSmartphone, "Em qualquer dispositivo"],
  [ShieldCheck, "Mais segurança"],
  [TrendingUp, "Mais eficiência"],
];

interface HeroSlideItem {
  id: string;
  image: string;
  ariaLabel: string;
  renderTitle: () => ReactNode;
  renderLead: () => ReactNode;
  showHighlights?: boolean;
}

const heroSlides: HeroSlideItem[] = [
  {
    id: "home2",
    image: `${media}home2.jpeg`,
    ariaLabel: "DYLANDE Software e certificação AGT",
    renderTitle: () => (
      <h1>
        Facturação <em>Electrónica</em>
      </h1>
    ),
    renderLead: () => <p>Tecnologia Dylande Soft em conformidade com AGT</p>,
  },
  {
    id: "home4",
    image: `${media}home4.jpeg`,
    ariaLabel: "Software prático e simples Dylande",
    renderTitle: () => (
      <h1 className="hero-title-home3">
        <span>Faturação Eletrónica</span>
        <br />
        <span>é com o Dylande Soft</span>
      </h1>
    ),
    renderLead: () => (
      <p className="hero-lead-home3">
        <br />
        <strong></strong>
      </p>
    ),
  },
  {
    id: "home3",
    image: `${media}home3.jpeg`,
    ariaLabel: "Facturação Electrónica é com o Dylande Soft",
    showHighlights: true,
    renderTitle: () => (
      <h1 className="hero-title-home4">
        <span className="hero-title-black">software</span>
        <br />
        <span className="hero-title-blue">prático e</span>
        <br />
        <span className="hero-title-blue">simples</span>
      </h1>
    ),
    renderLead: () => (
      <p className="hero-lead-home4">
        Gerencie o seu negócio de forma
        <br />
        <strong>fácil, rápida e segura.</strong>
      </p>
    ),
  },
];

export default function Home() {
  const [slideIndex, setSlideIndex] = useState(0);

  const goToPreviousSlide = () => {
    setSlideIndex((current) =>
      current === 0 ? heroSlides.length - 1 : current - 1,
    );
  };

  const goToNextSlide = () => {
    setSlideIndex((current) => (current + 1) % heroSlides.length);
  };

  useEffect(() => {
    const interval = window.setInterval(() => {
      setSlideIndex((current) => (current + 1) % heroSlides.length);
    }, HERO_INTERVAL_MS);

    return () => window.clearInterval(interval);
  }, [slideIndex]);

  const currentSlide = heroSlides[slideIndex];

  return (
    <div className="home-page">
      {/* Hero: a imagem fica no fundo (hero-banner-art) e os dizeres à esquerda */}
      <section
        className={`hero-new hero-banner${currentSlide.id === "home3" ? " is-slide-home3" : ""}`}
      >
        <button
          type="button"
          className="hero-arrow hero-arrow-prev"
          aria-label="Slide anterior"
          onClick={goToPreviousSlide}
        >
          <ChevronLeft size={26} strokeWidth={2} />
        </button>

        <button
          type="button"
          className="hero-arrow hero-arrow-next"
          aria-label="Próximo slide"
          onClick={goToNextSlide}
        >
          <ChevronRight size={26} strokeWidth={2} />
        </button>

        <div className="container hero-new-inner">
          <div className="hero-new-copy">
            <Reveal
              key={`title-${currentSlide.id}`}
              delay={0.1}
              trigger="mount"
            >
              {currentSlide.renderTitle()}
            </Reveal>
            <Reveal
              key={`lead-${currentSlide.id}`}
              delay={0.3}
              trigger="mount"
              className="hero-banner-lead"
            >
              {currentSlide.renderLead()}
            </Reveal>
            {currentSlide.showHighlights && (
              <Reveal
                key={`highlights-${currentSlide.id}`}
                delay={0.38}
                trigger="mount"
              >
                <div className="hero-home4-highlights">
                  {home4Highlights.map(([Icon, label]) => (
                    <div className="hero-home4-highlight" key={label}>
                      <Icon size={22} strokeWidth={1.9} />
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            )}
            <Reveal delay={0.45} trigger="mount" className="hero-new-actions">
              <Magnetic>
                <Link href="/software" className="button button-primary">
                  Conhecer os softwares <ArrowUpRight size={16} />
                </Link>
              </Magnetic>
              <Magnetic>
                <Link href="/agt" className="button button-quiet">
                  Facturação Eletrónica <ArrowRight size={16} />
                </Link>
              </Magnetic>
            </Reveal>
          </div>
        </div>
        <div
          className="hero-banner-art"
          role="img"
          aria-label={currentSlide.ariaLabel}
          style={{ backgroundImage: `url("${encodeURI(currentSlide.image)}")` }}
        />
      </section>
      <section className="section-new intro-split">
        <div className="container split-grid">
          <Reveal>
            {/* <span className="eyebrow">Mais do que tecnologia</span> */}
            <h2>
              Uma equipa para organizar o que mantém o negócio em movimento.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lead">
              Da emissão da factura ao controlo de stock, da recepção do hotel à
              oficina: desenhamos ferramentas para que cada pessoa saiba o que
              fazer e cada gestor saiba o que está a acontecer.
            </p>
            <Link href="/empresa" className="text-link">
              Conhecer a DYLANDE <ArrowUpRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>
      <section className="section-new dark-panel">
        <div className="container dark-panel-grid">
          <Reveal>
            {/* <span className="eyebrow">O produto no centro</span> */}
            <h2>
              Software empresarial com o aspecto de uma operação bem organizada.
            </h2>
            <p>
              Interfaces claras, indicadores accionáveis e módulos que respeitam
              o modo como as empresas realmente trabalham.
            </p>
            <Magnetic>
              <Link href="/software" className="button button-light">
                Ver catálogo de software <ArrowRight size={16} />
              </Link>
            </Magnetic>
          </Reveal>
          <Reveal delay={0.15} className="video-card">
            <video
              autoPlay
              muted
              loop
              playsInline
              poster={`${media}IMG-20260901-WA0009.jpg`}
            >
              <source
                src={`${media}VID-20260901-WA0006.mp4`}
                type="video/mp4"
              />
            </video>
            <span>
              <Play size={14} fill="currentColor" /> Demonstração visual
            </span>
          </Reveal>
        </div>
      </section>
      <section className="section-new software-preview">
        <div className="container">
          <div className="section-head">
            <div>
              {/* <span className="eyebrow">O seu sector. O seu sistema.</span> */}
              <h2>Seis operações. Uma visão mais simples.</h2>
            </div>
            <Link href="/software" className="text-link">
              Explorar todos <ArrowUpRight size={15} />
            </Link>
          </div>
          <Reveal className="software-grid-new">
            {[
              "Faturação e Stock",
              "Restauração",
              "Hotelaria e Restauração",
              "Lavandaria",
              "Barbearia",
              "Oficina",
            ].map((name, i) => (
              <Link href="/software" className="software-tile" key={name}>
                <span>0{i + 1}</span>
                <h3>{name}</h3>
                <small>
                  Ver solução <ArrowUpRight size={13} />
                </small>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>
      <section className="section-new authority-strip">
        <div className="container authority-grid">
          <Reveal>
            {/* <ShieldCheck size={25} />
            <span className="eyebrow">Confiança documentada</span> */}
            <h2>Quando o software é crítico, a prova também é.</h2>
            <p>
              Os dois certificados AGT são apresentados com transparência,
              contexto e acesso aos documentos originais.
            </p>
          </Reveal>
          <Magnetic>
            <Link href="/certificacoes" className="authority-link">
              Ver certificações <ArrowUpRight size={17} />
            </Link>
          </Magnetic>
        </div>
      </section>
      <section className="section-new reseller-section" id="revendedores">
        <div className="container reseller-hero">
          <Reveal>
            {/* <span className="eyebrow">Revendedor DYLANDE</span> */}
            <h2>Oportunidade de negócio exclusiva.</h2>
            <p>
              Torne-se nosso parceiro e ganhe 100% de comissão. Transforme a sua
              carreira com as melhores soluções de gestão empresarial do
              mercado.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="reseller-actions">
            <Magnetic>
              <a
                className="button button-primary"
                href={`https://wa.me/${siteConfig.reseller.whatsapp}?text=${encodeURIComponent(siteConfig.reseller.whatsappMessage)}`}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackEvent("reseller_whatsapp_click", {})}
              >
                Tornar-se Revendedor <ArrowUpRight size={16} />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                className="button button-quiet"
                href={siteConfig.reseller.loginUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackEvent("reseller_login_click", {})}
              >
                Logar como Revendedor
              </a>
            </Magnetic>
          </Reveal>
        </div>
        <Reveal as="div" className="container reseller-stats" amount={0.15}>
          {resellerBenefits.map(([Icon, badge, badgeLabel, title, desc]) => (
            <div className="reseller-stat-card" key={title}>
              <Icon size={22} />
              <b>{badge}</b>
              <span>{badgeLabel}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </Reveal>
        <div className="container reseller-plans-head">
          <Reveal>
            {/* <span className="eyebrow">Como se tornar parceiro</span> */}
            <h2>Requisitos necessários para se tornar revendedor.</h2>
            <p>
              Documentos e condições essenciais para se tornar o nosso parceiro
              oficial.
            </p>
          </Reveal>
        </div>
        <Reveal as="div" className="container reseller-plans" amount={0.15}>
          {resellerPlans.map((plan) => (
            <article className="reseller-plan-card" key={plan.title}>
              <span className="eyebrow">{plan.kicker}</span>
              <h3>{plan.title}</h3>
              <div className="reseller-plan-price">
                <b>{plan.price}</b>
                <span>{plan.priceLabel}</span>
              </div>
              <ul className="check-list">
                {plan.items.map((item) => (
                  <li key={item}>
                    <Check size={14} />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </Reveal>
      </section>
      <section className="section-new final-cta">
        <div className="container final-cta-inner">
          <Reveal>
            {/* <span className="eyebrow">O próximo passo é concreto</span> */}
            <h2>faça crescer o seu negócio connosco</h2>
            <Magnetic>
              <Link href="/contacto" className="button button-primary">
                Agendar conversa <ArrowUpRight size={16} />
              </Link>
            </Magnetic>
          </Reveal>
          <Reveal>
            <img src={`${media}orcamento.png`} alt="orcamento" />
          </Reveal>
        </div>
      </section>
      <br></br>
    </div>
  );
}
