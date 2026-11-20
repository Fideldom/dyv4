/* DYLANDE — Página Software
   Catálogo com o design "Nossos Softwares." (cartões numerados) + secções originais mantidas abaixo.
*/
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronUp,
  Download,
} from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Magnetic } from "@/components/motion/Magnetic";
import { trackEvent } from "@/lib/analytics";
import "./Software.css";
import "./background.css";

const m = "/media/";
const brochure = `${m}dylande-soft-ux-ui.pdf`;

// Mude para true se quiser mostrar o botão "Baixar" em cada cartão (não aparece na imagem).
const SHOW_DOWNLOAD = false;

interface ProductItem {
  name: string;
  text: string;
  image: string;
  features: string[];
}

/* Dados (os mesmos 6 produtos da página original com as funcionalidades de cada software) */
const products: ProductItem[] = [
  {
    name: "Faturação e Stock",
    text: "Facturação electrónica, produtos, clientes, fornecedores, stock e relatórios num fluxo mais controlado.",
    image: "IMG-20260905-WA0032.jpg",
    features: [
      "Facturas, facturas-recibo e recibos",
      "Orçamentos, facturas proforma e conversão de orçamentos em facturas",
      "Guias de remessa e guias de transporte",
      "Notas de débito e notas de crédito",
      "Gestão de clientes e fornecedores",
      "Gestão financeira e controlo de contas a receber e a pagar",
      "Abertura e fecho de caixa",
      "Gestão de stock, inventários, entradas e baixas",
      "Alertas de stock mínimo",
      "Relatórios",
      "Facturação electrónica",
      "Exportação SAF-T (AO)",
      "Contabilidade integrada",
      "Recursos Humanos integrados",
    ],
  },
  {
    name: "Restauração",
    text: "Pedidos, mesas, produtos e caixa com uma leitura operacional pensada para a realidade da restauração.",
    image: "IMG-20260911-WA0010.jpg",
    features: [
      "Gestão de pedidos e mesas",
      "Gestão de pedidos para takeaway",
      "Gestão de menus e preçários",
      "Envio de pedidos para a cozinha e o bar",
      "Transferência de pedidos entre mesas",
      "Divisão de contas",
      "Fichas técnicas dos pratos",
      "Baixa automática de ingredientes",
      "Gestão de stock",
      "Gestão de fornecedores",
      "Relatórios",
      "Facturação electrónica",
      "Exportação SAF-T (AO)",
      "Contabilidade integrada",
      "Recursos Humanos integrados",
    ],
  },
  {
    name: "Hotelaria e Restauração",
    text: "Uma base digital para ligar reservas, serviços, consumos e gestão diária.",
    image: "IMG-20260905-WA0026.jpg",
    features: [
      "Gestão de quartos, disponibilidade e ocupação",
      "Calendário de reservas",
      "Check-in e check-out",
      "Gestão de limpeza e manutenção dos quartos",
      "Alarmes",
      "Gestão de pedidos e mesas do restaurante",
      "Lançamento de consumos na conta do quarto",
      "Facturação da estadia no check-out",
      "Gestão de stock",
      "Gestão de fornecedores",
      "Relatórios",
      "Facturação electrónica",
      "Exportação SAF-T (AO)",
      "Contabilidade integrada",
      "Recursos Humanos integrados",
    ],
  },
  {
    name: "Lavandaria",
    text: "Registo de entrada, estados, clientes e entregas para reduzir perdas e dar visibilidade ao trabalho.",
    image: "IMG-20260911-WA0015.jpg",
    features: [
      "Gestão de roupas e encomendas",
      "Registo de recepção e entrega de roupas",
      "Acompanhamento do estado das encomendas",
      "Etiquetas por peça ou encomenda",
      "Preçário por serviço, peça ou quilo",
      "Notificação de roupa pronta",
      "Facturas, facturas-recibo e recibos",
      "Orçamentos e facturas proforma",
      "Guias de remessa e guias de transporte",
      "Notas de débito e notas de crédito",
      "Gestão de fornecedores",
      "Relatórios",
      "Facturação electrónica",
      "Exportação SAF-T (AO)",
      "Contabilidade integrada",
      "Recursos Humanos integrados",
    ],
  },
  {
    name: "Barbearia",
    text: "Serviços, profissionais, agenda e histórico num sistema simples de operar.",
    image: "IMG-20260905-WA0030.jpg",
    features: [
      "Gestão de cortes e outros serviços",
      "Preçário de cortes e serviços",
      "Gestão de barbeiros",
      "Agenda e disponibilidade por barbeiro",
      "Gestão de agendamentos e lembretes",
      "Gestão de clientes e histórico de atendimentos",
      "Cálculo de comissões por barbeiro",
      "Gestão de fornecedores",
      "Relatórios",
      "Facturação electrónica",
      "Exportação SAF-T (AO)",
      "Contabilidade integrada",
      "Recursos Humanos integrados",
    ],
  },
  {
    name: "Oficina",
    text: "Ordens de serviço, peças, clientes e acompanhamento para uma oficina mais previsível.",
    image: "IMG-20260911-WA0013.jpg",
    features: [
      "Gestão de entrada e saída de viaturas",
      "Registo de quilometragem e estado da viatura na recepção",
      "Orçamentos de reparação e aprovação pelo cliente",
      "Gestão de folhas de obra",
      "Acompanhamento do estado das reparações",
      "Registo de peças e mão de obra por folha de obra",
      "Histórico de manutenção por matrícula",
      "Gestão de stock de peças",
      "Gestão de fornecedores",
      "Relatórios",
      "Facturação electrónica",
      "Exportação SAF-T (AO)",
      "Contabilidade integrada",
      "Recursos Humanos integrados",
    ],
  },
];

export default function Software() {
  const [openSoftware, setOpenSoftware] = useState<string | null>(null);

  const toggleDetails = (name: string) => {
    setOpenSoftware((prev) => {
      const next = prev === name ? null : name;
      if (next) {
        trackEvent("software_details_open", { software: name });
      }
      return next;
    });
  };

  return (
    <div className="inner-page">
      {/* Catálogo — design da imagem */}
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
            {products.map(({ name, text, image, features }, i) => {
              const isOpen = openSoftware === name;

              return (
                <Reveal as="div" delay={i * 0.08} key={name}>
                  <article className="sw-card">
                    <div className="sw-num">0{i + 1}</div>
                    <div className="sw-sep" />

                    <div className="sw-body">
                      <h2>{name}</h2>
                      <p>{text}</p>
                      <div className="sw-actions">
                        <button
                          type="button"
                          className="sw-more"
                          aria-expanded={isOpen}
                          onClick={() => toggleDetails(name)}
                        >
                          {isOpen ? (
                            <>
                              <ChevronUp size={18} strokeWidth={2.4} />
                              Ocultar detalhes
                            </>
                          ) : (
                            <>
                              <ArrowRight size={18} strokeWidth={2.4} />
                              Saber mais
                            </>
                          )}
                        </button>

                        {SHOW_DOWNLOAD && (
                          <a
                            className="sw-more sw-ghost"
                            href={brochure}
                            download
                            onClick={() =>
                              trackEvent("software_download", {
                                software: name,
                              })
                            }
                          >
                            <Download size={16} />
                            Baixar
                          </a>
                        )}
                      </div>

                      {isOpen && (
                        <div className="sw-details">
                          <h3>Funcionalidades — {name}</h3>
                          <ul className="sw-features-list">
                            {features.map((item) => (
                              <li key={item}>
                                <Check size={15} />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="sw-details-footer">
                            <a
                              href={brochure}
                              download
                              className="sw-more"
                              onClick={() =>
                                trackEvent("software_download", {
                                  software: name,
                                })
                              }
                            >
                              <Download size={16} />
                              Baixar
                            </a>
                          </div>
                        </div>
                      )}
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
                      </a>
                    </div>

                    <div className="download-row"></div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Secções originais (mantidas) */}
      <section className="container product-feature">
        <Reveal>
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
