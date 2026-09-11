/* DYLANDE — Navy Precision / Corporate Rebuild
  Soluções: linguagem de negócio, comparação rápida e caminhos de compra claros.
 */
import { Link } from "wouter";
import { ArrowUpRight, Check, CircleDot } from "lucide-react";
import { PageIntro } from "@/components/SiteLayout";
import { Reveal } from "@/components/motion/Reveal";
const m = "/media/";
const sectors = [
  [
    "Gestão Integrada",
    "Sistema completo de gestão empresarial com módulos integrados para controle total do seu negócio em uma única plataforma.",
  ],
  [
    "Multi-Banco de Dados",
    "Compatibilidade com MySQL, SQL Server e outros bancos de dados para flexibilidade total na sua infraestrutura.",
  ],
  [
    "Acesso Multiplataforma",
    "Solução Desktop e Web para acesso total aos seus dados de qualquer lugar, a qualquer momento e em qualquer dispositivo.",
  ],
  [
    "Seja um Revendedor",
    "Torne-se nosso parceiro e fique com 100% do lucro. Modelo de negócio comissionado para crescimento mútuo.",
  ],
];

const sectors1 = [
  [
    "Gestão de Vendas",
    "Sistema completo para gerenciamento do funil de vendas.",
    "CRM integrado e personalizável",
    "Automação de pedidos e faturação",
    "Relatórios de desempenho em tempo real"
  ],
  [
    "Controle de Estoque",
    "Controle preciso do seu inventário com alertas automáticos.",
    "Alertas automáticos de reposição",
    "Gestão de múltiplos armazéns"
  ],
  [
    "Gestão Financeira",
    "Solução completa para controle financeiro, fluxo de caixa.",
    "Conciliação bancária automática",
    "Relatórios fiscais e contábeis"
  ],
  [
    "Recursos Humanos",
    "Plataforma integrada para gestão de pessoas.",
    "Gestão de recrutamento e seleção",
    "Controle de horários e pagamentos",
    "  "
  ],
];

export default function Solutions() {
  return (
    <div className="inner-page">
      <div className="container">
        <PageIntro
          variant="drift"
          kicker="Soluções por sector"
          title="Soluções Completas para o Seu Negócio."
          text="Software de gestão empresarial desenvolvido para otimizar suas operações e maximizar resultados."
        />
      </div>
      <Reveal as="section" className="container sector-grid" amount={0.1}>
        {sectors.map(([title, text], i) => (
          <Link href="/contacto" className="sector-card" key={title}>
            <span>0{i + 1}</span>
            <CircleDot size={18} />
            <h2>{title}</h2>
            <p>{text}</p>
            <b>
              Explorar possibilidade <ArrowUpRight size={15} />
            </b>
          </Link>
        ))}
      </Reveal>

      <div className="container solution-callout kit">
        <Reveal>
          <span className="eyebrow">O próximo passo é concreto</span>
          <h2>Kit Completo de Faturação - Apartir de 295.000 kz!</h2>
          <p>
            Inclui computador, Impressora Térmica, Leitor de Código de Barras,
            Gaveta Electrónica e o Software já pronto a usar!
          </p><br></br>
          <button className="button button-primary">
            <a
            href="https://wa.me/244928271370?text=Olá%2C%20gostaria%20de%20solicitar%20o%20kit%20de%20faturação%C3%A7%C3%A3o"
            className="cta-button aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Solicitar kit 
            <i className="fas fa-arrow-right"></i>
          </a>
          </button>
          
        </Reveal>
        <Reveal>
          <img src={`${m}kitspc.jpeg`} alt="orcamento" />
        </Reveal>
      </div><br></br>

        <Reveal as="section" className="container sector-grid" amount={0.1}>
        {sectors1.map(([title, text, list1, list2, list3], i) => (
          <Link href="/contacto" className="sector-card" key={title}>
            <span>0{i + 5}</span>
            <CircleDot size={18} />
            <h2>{title}</h2>
            <p>{text}</p>
            <ul className="check-list">
              <li><Check size={16} /> {list1}</li>
              <li><Check size={16} /> {list2}</li>
              <li><Check size={16} /> {list3}</li>
            </ul>
            <b>
              Explorar possibilidade <ArrowUpRight size={15} />
            </b>
          </Link>
        ))}
      </Reveal>

      <section className="container solution-callout">
        <Reveal>
          <span className="eyebrow">A medida certa</span>
          <h2>Nem tudo precisa de ser complexo para ser robusto.</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p>
            Começamos pelo que é essencial para o seu dia a dia e deixamos
            espaço para aquilo que o negócio ainda vai precisar.
          </p>
          <ul className="check-list">
            <li>
              <Check size={16} />
              Implementação faseada
            </li>
            <li>
              <Check size={16} />
              Formação e suporte
            </li>
            <li>
              <Check size={16} />
              Evolução sem ruptura
            </li>
          </ul>
        </Reveal>
      </section>
      <br></br>
    </div>
  );
}
