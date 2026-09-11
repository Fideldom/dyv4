/* DYLANDE — Navy Precision / Corporate Rebuild
  Página de produto: demonstração visual, módulos sectoriais e caminho para compra.
 */
import { Link } from "wouter";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Download,
  Layers3,
} from "lucide-react";
import { PageIntro } from "@/components/SiteLayout";
import { Reveal } from "@/components/motion/Reveal";
import { Magnetic } from "@/components/motion/Magnetic";
import { trackEvent } from "@/lib/analytics";
const m = "/media/";
const brochure = `${m}dylande-soft-ux-ui.pdf`;
const products = [
  [
    "Faturação e Stock",
    "O núcleo",
    "Facturação electrónica, produtos, clientes, fornecedores, stock e relatórios num fluxo mais controlado.",
    "IMG-20260905-WA0032.jpg",
  ],
  [
    "Restauração",
    "Turnos que fluem",
    "Pedidos, mesas, produtos e caixa com uma leitura operacional pensada para a realidade da restauração.",
    "IMG-20260911-WA0010 - Cópia.jpg",
  ],
  [
    "Hotelaria e Restauração",
    "Hospitalidade com controlo",
    "Uma base digital para ligar reservas, serviços, consumos e gestão diária.",
    "IMG-20260905-WA0026.jpg",
  ],
  [
    "Lavandaria",
    "Cada peça importa",
    "Registo de entrada, estados, clientes e entregas para reduzir perdas e dar visibilidade ao trabalho.",
    "IMG-20260911-WA0015.jpg",
  ],
  [
    "Barbearia",
    "Agenda em ordem",
    "Serviços, profissionais, agenda e histórico num sistema simples de operar.",
    "IMG-20260905-WA0030.jpg",
  ],
  [
    "Oficina",
    "Da recepção à entrega",
    "Ordens de serviço, peças, clientes e acompanhamento para uma oficina mais previsível.",
    "IMG-20260911-WA0013.jpg",
  ],
];
export default function Software() {
  return (
    <div className="inner-page">
      <div className="container">
        <PageIntro
          variant="fill"
          kicker="Software DYLANDE"
          title="Soluções Inteligentes para Seu Negócio."
          text="Módulos especializados para cada segmento. Transforme sua gestão com tecnologia inovadora e resultados comprovados."
        />
      </div>
      <section className="container product-feature">
        <Reveal>
          <span className="eyebrow">Software empresarial</span>
          <h2>Facilitar e dinamizar o seu trabalho no dia a dia.</h2>
          <p>
            O DYLANDE SOFTWARE foi concebido para dar continuidade ao dia a dia:
            informação acessível, processos claros e suporte quando a equipa
            precisa.
          </p>
          <ul className="check-list">
            <li>
              <Check size={16} />
              Facturação electrónica certificada
            </li>
            <li>
              <Check size={16} />
              Gestão de stock e indicadores
            </li>
            <li>
              <Check size={16} />
              Acesso online e operação local
            </li>
          </ul>
          <div className="product-actions">
            <Magnetic>
              <a href="https://wa.me/244928271370?text=Olá%2C%20gostaria%20de%20solicitar%20um%20orçamento" 
              className="button button-primary">
                Solicitar orçamento <ArrowRight size={16} />
              </a>
            </Magnetic>
            <a
              href={brochure}
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              Ver guia visual do software <ArrowUpRight size={15} />
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.15} className="product-image">
          <img
            src={`${m}IMG-20260901-WA0009.jpg`}
            alt="Interface DYLANDE SOFTWARE em vários dispositivos"
          />
          <span>01 / 06 · Sistema multi-dispositivo</span>
        </Reveal>
      </section>
      <section className="container product-catalog">
        <div className="section-head">
          <div>
            {/* <span className="eyebrow">Escolha por operação</span> */}
            <h2>Nossos Softwares.</h2>
          </div>
          <Layers3 size={25} />
        </div>
        <Reveal as="div" className="product-list" amount={0.1}>
          {products.map(([name, label, text, image], i) => (
            <article className="product-row" key={name}>
              <div className="product-row-num">0{i + 1}</div>
              <div className="product-row-copy">
                <span className="eyebrow">{label}</span>
                <h3>{name}</h3>
                <p>{text}</p>
                <div className="product-row-actions">
                  <Link href="/contacto" className="text-link">
                    Falar sobre esta solução <ArrowUpRight size={15} />
                  </Link>
                  <a
                    className="button button-primary"
                    href={brochure}
                    download
                    onClick={() =>
                      trackEvent("software_download", { software: name })
                    }
                  >
                    <Download size={14} /> Baixar software
                  </a>
                </div>
              </div>
              <img src={`${m}${image}`} alt="" />
            </article>
          ))}
        </Reveal>
      </section>
      <section className="container product-video">
        <Reveal delay={0}>
          <video autoPlay
              muted
              loop
              playsInline
              controls
              poster={`${m}IMG-20260901-WA0008.jpg`}>
            <source src={`${m}VID-20260901-WA0007.mp4`} type="video/mp4" />
          </video>
        </Reveal>
        <Reveal delay={0.1}>
          <span className="eyebrow">Ver em contexto</span>
          <h2>Facilitar e dinamizar o seu trabalho no dia a dia.</h2>
          <p>
            Veja como o ecossistema visualiza a operação e depois fale connosco
            sobre a sua realidade.
          </p>
        </Reveal>
      </section>
    </div>
  );
}
