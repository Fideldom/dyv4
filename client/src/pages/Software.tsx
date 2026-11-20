/* 
  DYLANDE — Página Software
  Catálogo com o design "Nossos Softwares." (cartões numerados) + secções originais mantidas abaixo.
*/
import { Link } from "wouter";
import { ArrowRight, ArrowUpRight, Check, Download } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Magnetic } from "@/components/motion/Magnetic";
import { trackEvent } from "@/lib/analytics";
import "./Software.css";
import "./background.css";

const m = "/media/";
const brochure = `${m}dylande-soft-ux-ui.pdf`;

// Mude para true se quiser mostrar o botão "Baixar" em cada cartão (não aparece na imagem).
const SHOW_DOWNLOAD = false;

/*  Dados (os mesmos 6 produtos da página original)  */
//                           string,
const products: Array<[string, string, string]> = [
  [
    "Faturação e Stock",
    // "O núcleo",
    "Facturação electrónica, produtos, clientes, fornecedores, stock e relatórios num fluxo mais controlado.",
    "IMG-20260905-WA0032.jpg",
  ],
  [
    "Restauração",
    // "Turnos que fluem",
    "Pedidos, mesas, produtos e caixa com uma leitura operacional pensada para a realidade da restauração.",
    "IMG-20260911-WA0010.jpg",
  ],
  [
    "Hotelaria e Restauração",
    // "Hospitalidade com controlo",
    "Uma base digital para ligar reservas, serviços, consumos e gestão diária.",
    "IMG-20260905-WA0026.jpg",
  ],
  [
    "Lavandaria",
    // "Cada peça importa",
    "Registo de entrada, estados, clientes e entregas para reduzir perdas e dar visibilidade ao trabalho.",
    "IMG-20260911-WA0015.jpg",
  ],
  [
    "Barbearia",
    // "Agenda em ordem",
    "Serviços, profissionais, agenda e histórico num sistema simples de operar.",
    "IMG-20260905-WA0030.jpg",
  ],
  [
    "Oficina",
    // "Da recepção à entrega",
    "Ordens de serviço, peças, clientes e acompanhamento para uma oficina mais previsível.",
    "IMG-20260911-WA0013.jpg",
  ],
];

export default function Software() {
  return (
    <div className="inner-page">
      {/*  Catálogo — design da imagem  */}
      <section className="sw-page">
        <div className="sw-container">
          <header className="sw-head">
            <h1>
              Nossos <span>Softwares.</span>
            </h1>
            <p>Soluções inteligentes para o seu negócio.</p>
            <i className="sw-bar" />
          </header>

          <div className="sw-list">
            {/*                  label, */}
            {products.map(([name, text, image], i) => (
              <Reveal as="div" delay={i * 0.08} key={name}>
                <article className="sw-card">
                  <div className="sw-num">0{i + 1}</div>
                  <div className="sw-sep" />

                  <div className="sw-body">
                    {/* <span className="sw-tag">
                      <i />
                      {label}
                    </span> */}
                    <h2>{name}</h2>
                    <p>{text}</p>
                    <div className="sw-actions">
                      <Link href="/contacto" className="sw-more">
                        <ArrowRight size={18} strokeWidth={2.4} />
                        Saber mais
                      </Link>
                      {SHOW_DOWNLOAD && (
                        <a
                          className="sw-more sw-ghost"
                          href={brochure}
                          download
                          onClick={() =>
                            trackEvent("software_download", { software: name })
                          }
                        >
                          <Download size={16} />
                          Baixar
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="sw-media">
                    <img
                      src={encodeURI(`${m}${image}`)}
                      alt={`Interface do software ${name}`}
                      loading="lazy"
                    />
                    <a
                      href={encodeURI(`${m}${image}`)}
                      download={`${name}.png`}
                      className="download-btn"
                      title={`Baixar ${name}`}
                    >
                      <Download size={18}></Download>
                      <span>Baixar</span>
                    </a>
                  </div>
                  {/* Ô ícone deve ficar aqui! */}
                  <div className="download-row"></div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/*  Secções originais (mantidas)  */}
      <section className="container product-feature">
        <Reveal>
          {/* <span className="eyebrow">Software empresarial</span> */}
          <h2>Facilitar e dinamizar o seu trabalho no dia a dia.</h2>
          <p>
            O DYLANDE SOFTWARE foi concebido para dar continuidade ao dia a dia:
            informação acessível, processos claros e suporte quando a equipa
            precisa.
          </p>
          <ul className="check-list">
            <li>
              <Check size={16} /> Facturação electrónica certificada
            </li>
            <li>
              <Check size={16} /> Gestão de stock e indicadores
            </li>
            <li>
              <Check size={16} /> Acesso online e operação local
            </li>
          </ul>
          <div className="product-actions">
            <Magnetic>
              <a
                href="https://wa.me/244928271370?text=Olá%2C%20gostaria%20de%20solicitar%20um%20orçamento"
                className="button button-primary"
              >
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
      <br />
      <br />

    </div>
  );
}
