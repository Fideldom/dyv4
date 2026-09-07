/**
 * DYLANDE — Navy Precision / Corporate Rebuild
 * Empresa: autoridade humana, proximidade local e método visível.
 */
import { Link } from "wouter";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Check,
  Compass,
  Eye,
  FileCheck2,
  MapPin,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  type LucideIcon,
} from "lucide-react";
import { PageIntro } from "@/components/SiteLayout";
import { Reveal } from "@/components/motion/Reveal";
import { Magnetic } from "@/components/motion/Magnetic";
const m = "/media/";

const differentials: Array<[LucideIcon, string, string, string, string]> = [
  [
    Target,
    "2020",
    "",
    "Missão",
    "Fornecer soluções inteligentes em software de gestão.",
  ],
  [
    Eye,
    "Líder",
    "Posição no Mercado",
    "Visão",
    "Ser líder em soluções tecnológicas de gestão.",
  ],
  [
    Compass,
    "4+",
    "Princípios Fundamentais",
    "Valores",
    "Compromisso com excelência e inovação.",
  ],
];

const timeline: Array<[LucideIcon, string, string, string, string]> = [
  [
    Sparkles,
    "500+",
    "Implementações IA",
    "Inovação Tecnológica",
    "Líderes em soluções com Inteligência Artificial.",
  ],
  [
    Rocket,
    "2021",
    "Ano de Fundação",
    "Fundação",
    "Início da nossa jornada revolucionária.",
  ],
  [
    Award,
    "1º",
    "Cliente Corporativo",
    "Primeiro Cliente",
    "Validação e confiança no mercado.",
  ],
  [
    MapPin,
    "18+",
    "Províncias Atendidas",
    "Expansão Nacional",
    "Crescimento exponencial em toda Angola.",
  ],
];

const team = [
  [
    "Horácio Sassonde",
    "Diretor Geral Administrativo",
    "Líder executivo com vasta experiência em gestão empresarial e estratégias de negócio.",
  ],
  [
    "Daniel Bula",
    "Gestor de Projecto & Suporte Técnico",
    "Desenvolvedor especializado com foco em gestão de projetos e soluções tecnológicas inovadoras.",
  ],
  ["Esmael Andrade", "Desenvolvedor Backend", "Suporte Técnico"],
  ["Nelson", "Desenvolvedor Desktop", "Suporte Técnico"],
  ["Edson António", "Desenvolvedor Web", ""],
  ["Fidel Maluto", "Desenvolvedor Web/APP", ""],
];

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function Company() {
  return (
    <div className="inner-page">
      <div className="container">
        <PageIntro
          variant="blur"
          kicker="Sobre a DYLANDE"
          title="Tecnologia próxima. Decisões mais seguras."
          text="Somos uma empresa angolana de software, serviços e consultoria de tecnologia. Desde 2020, somos referência em Angola em soluções que otimizam operações e impulsionam o crescimento."
        />
      </div>

      <section className="container company-feature">
        <Reveal className="company-photo">
          <img
            src={`${m}IMG-20260901-WA0011.jpg`}
            alt="Soluções DYLANDE em vários dispositivos"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <span className="eyebrow">A nossa forma de estar</span>
          <h2>Seriedade sem distância.</h2>
          <p>
            Não acreditamos em tecnologia feita para impressionar numa
            apresentação e complicar na segunda-feira. Acreditamos em sistemas
            claros, suporte acessível e relações que se constroem com
            consistência.
          </p>
          <div className="principles">
            {[
              "Clareza antes da complexidade",
              "Compromisso depois da entrega",
              "Segurança em cada decisão",
            ].map((x, i) => (
              <span key={x}>
                <b>0{i + 1}</b>
                {x}
              </span>
            ))}
          </div>
          <Link href="/contacto" className="text-link">
            Conversar com a DYLANDE <ArrowUpRight size={15} />
          </Link>
        </Reveal>
      </section>

      <section className="container company-differentials">
        <Reveal>
          <span className="eyebrow">Diferenciais exclusivos</span>
          <h2>O que torna a DYLANDE líder em soluções de gestão.</h2>
        </Reveal>
        <Reveal as="div" className="differentials-grid" amount={0.15}>
          {differentials.map(([Icon, badge, badgeLabel, title, desc]) => (
            <article className="differential-card" key={title}>
              <Icon size={22} />
              <b>{badge}</b>
              {badgeLabel && <span>{badgeLabel}</span>}
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </Reveal>
      </section>

      <section className="container values-band">
        <span className="eyebrow">O que orienta cada projecto</span>
        <Reveal as="div" className="values-big" amount={0.2}>
          <div>
            <b>01</b>
            <h3>Inovação útil</h3>
            <p>
              Usamos tecnologia para resolver melhor, não para adicionar ruído.
            </p>
          </div>
          <div>
            <b>02</b>
            <h3>Qualidade contínua</h3>
            <p>Construímos com cuidado e acompanhamos depois de entregar.</p>
          </div>
          <div>
            <b>03</b>
            <h3>Confiança verificável</h3>
            <p>Documentos, processos e comunicação que deixam tudo claro.</p>
          </div>
        </Reveal>
      </section>

      <section className="company-certs">
        <div className="container">
          <Reveal>
            <ShieldCheck size={25} />
            <span className="eyebrow">Certificações e documentos</span>
            <h2>Conformidade fiscal, comprovada.</h2>
          </Reveal>
          <Reveal as="div" className="company-certs-grid" amount={0.15}>
            <div className="company-cert-block">
              <h3>Certificação SAF-T</h3>
              <p>
                A DYLANDE possui a certificação SAF-T, comprovando a
                conformidade dos nossos sistemas com os padrões exigidos pela
                Administração Geral Tributária (AGT).
              </p>
              <ul>
                <li>
                  <FileCheck2 size={15} />
                  Conformidade fiscal garantida segundo os padrões SAF-T da AGT
                </li>
                <li>
                  <FileCheck2 size={15} />
                  Emissão e gestão de documentos fiscais com total transparência
                </li>
                <li>
                  <FileCheck2 size={15} />
                  Sistemas certificados com elevados padrões de qualidade e
                  segurança
                </li>
              </ul>
            </div>
            <div className="company-cert-block">
              <h3>Certificação de Faturação Eletrónica</h3>
              <p>
                Soluções de faturação eletrónica certificadas, desenvolvidas em
                conformidade com os requisitos da AGT, preparadas para garantir
                segurança e transparência fiscal.
              </p>
              <ul>
                <li>
                  <FileCheck2 size={15} />
                  Emissão de faturas eletrónicas certificadas em conformidade
                  com as normas da AGT
                </li>
                <li>
                  <FileCheck2 size={15} />
                  Gestão completa de documentos fiscais com controlo e
                  rastreabilidade
                </li>
                <li>
                  <FileCheck2 size={15} />
                  Proteção avançada de dados e integridade das informações
                  financeiras
                </li>
              </ul>
            </div>
          </Reveal>
          <Magnetic>
            <Link
              href="/certificacoes"
              className="text-link company-certs-link"
            >
              Ver os certificados originais <ArrowUpRight size={15} />
            </Link>
          </Magnetic>
        </div>
      </section>

      <section className="container timeline-band">
        <Reveal>
          <span className="eyebrow">Nossa trajetória</span>
          <h2>A evolução da DYLANDE até nos tornarmos referência.</h2>
        </Reveal>
        <Reveal as="div" className="timeline-grid" amount={0.15}>
          {timeline.map(([Icon, badge, badgeLabel, title, desc]) => (
            <div className="timeline-item" key={title}>
              <Icon size={20} />
              <b>{badge}</b>
              <span>{badgeLabel}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </Reveal>
      </section>

      <section className="container team-band">
        <Reveal>
          <span className="eyebrow">Nossa equipa</span>
          <h2>As pessoas por trás da DYLANDE.</h2>
        </Reveal>
        <Reveal as="div" className="team-grid" amount={0.1}>
          {team.map(([name, role, desc]) => (
            <article className="team-card" key={name}>
              <div className="team-avatar">{initials(name)}</div>
              <h3>{name}</h3>
              <span>{role}</span>
              {desc && <p>{desc}</p>}
            </article>
          ))}
        </Reveal>
      </section>

      <section className="container company-cta">
        <Reveal>
          <span className="eyebrow">Prontos para o próximo capítulo</span>
          <h2>Uma conversa bem orientada já é parte da solução.</h2>
        </Reveal>
        <Magnetic>
          <Link href="/contacto" className="button button-primary">
            Falar connosco <ArrowRight size={16} />
          </Link>
        </Magnetic>
      </section>
    </div>
  );
}
