/* DYLANDE — Navy Precision / Corporate Rebuild
  Layout partilhado: editorial B2B, confiança, hierarquia e conversão sem ruído.
 */
import { Link, useLocation } from "wouter";
import { Menu, Moon, Sun, ArrowUpRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { siteConfig } from "@/lib/siteConfig";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { Magnetic } from "@/components/motion/Magnetic";
import {
  MotionHeroTitle,
  type MotionTitleVariant,
} from "@/components/motion/MotionHeroTitle";
import { Reveal } from "@/components/motion/Reveal";
import { PageTransition } from "@/components/motion/PageTransition";

const logo = "/media/IMG-20260831-WA0000.jpg";

const nav = [
  ["Empresa", "/empresa"],
  ["Serviços", "/servicos"],
  ["Soluções", "/solucoes"],
  ["Software", "/software"],
  ["Certificações", "/certificacoes"],
];

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  const { theme, toggleTheme } = useTheme();
  const close = () => setOpen(false);
  useEffect(close, [location]);

  return (
    <div className="app-shell">
      <ScrollProgress />
      <header
        className={`global-header ${location !== "/" ? "header-solid" : ""}`}
      >
        <Link href="/" className="brand-lockup" onClick={close}>
          <img src={logo} alt="DYLANDE" />
          <span>
            <b>DYLANDE</b>
            <small>Prestação de Serviços e Comércio Geral</small>
          </span>
        </Link>
        <nav
          className={open ? "mobile-open" : ""}
          aria-label="Navegação principal"
        >
          {nav.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className={location === href ? "active" : ""}
              onClick={close}
            >
              {label}
            </Link>
          ))}
          <Magnetic>
            <Link href="/contacto" className="header-cta" onClick={close}>
              Falar com a DYLANDE <ArrowUpRight size={15} />
            </Link>
          </Magnetic>
        </nav>
        <div className="header-tools">
          <button
            className="icon-button"
            aria-label={
              theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"
            }
            onClick={() => toggleTheme?.()}
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button
            className="menu-toggle"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>
      <PageTransition location={location}>{children}</PageTransition>
      <footer className="global-footer">
        <div className="container footer-main">
          <div>
            <Link href="/" className="footer-logo">
              <img src={logo} alt="" />
              <b>DYLANDE</b>
            </Link>
            <p>
              Tecnologia feita para tornar o negócio mais claro, mais controlado
              e mais preparado para crescer.
            </p>
          </div>
          <div>
            <span className="footer-label">Explorar</span>
            {nav.slice(0, 4).map(([label, href]) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
          </div>
          <div>
            <span className="footer-label">Contacto</span>
            <a href={`mailto:${siteConfig.contact.email}`}>
              {siteConfig.contact.email}
            </a>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}`}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp comercial
            </a>
            <span>{siteConfig.contact.location.split(" · ")[0]}</span>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 DYLANDE — Prestação de Serviços Comércio Geral</span>
          <span>Feito para operações que não podem parar.</span>
        </div>
      </footer>
      <WhatsAppButton />
    </div>
  );
}

export function PageIntro({
  kicker,
  title,
  text,
  variant = "mask",
}: {
  kicker: string;
  title: string;
  text: string;
  variant?: MotionTitleVariant;
}) {
  return (
    <div className="page-intro">
      <MotionHeroTitle
        as="h1"
        eyebrow={kicker}
        title={title}
        variant={variant}
      />
      <Reveal delay={0.15} trigger="mount">
        <p>{text}</p>
      </Reveal>
    </div>
  );
}

export function MediaCard({
  image,
  label,
  title,
  text,
  href = "/contacto",
}: {
  image: string;
  label: string;
  title: string;
  text: string;
  href?: string;
}) {
  return (
    <article className="media-card">
      <img src={image} alt="" />
      <div className="media-card-body">
        <span className="eyebrow">{label}</span>
        <h3>{title}</h3>
        <p>{text}</p>
        <Link href={href} className="text-link">
          Explorar <ArrowUpRight size={15} />
        </Link>
      </div>
    </article>
  );
}
