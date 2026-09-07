/**
 * DYLANDE — Navy Precision / Corporate Rebuild
 * Soluções: linguagem de negócio, comparação rápida e caminhos de compra claros.
 */
import { Link } from "wouter";
import { ArrowUpRight, Check, CircleDot } from "lucide-react";
import { PageIntro } from "@/components/SiteLayout";
import { Reveal } from "@/components/motion/Reveal";
const sectors = [
  [
    "Pequenas e médias empresas",
    "Uma base de gestão para sair do improviso e crescer com mais visibilidade.",
  ],
  [
    "Restauração e hotelaria",
    "Turnos, produtos e atendimento alinhados para a operação não perder o ritmo.",
  ],
  [
    "Serviços especializados",
    "Agendas, ordens, clientes e entregas organizados num fluxo simples.",
  ],
  [
    "Comércio e distribuição",
    "Stock, facturação e informação comercial no mesmo lugar.",
  ],
];
export default function Solutions() {
  return (
    <div className="inner-page">
      <div className="container">
        <PageIntro
          variant="drift"
          kicker="Soluções por sector"
          title="Tecnologia que fala a língua do seu negócio."
          text="Escolha uma realidade próxima da sua. A partir daí, construímos a combinação certa entre software, serviço e suporte."
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
      </section><br></br>
    </div>
  );
}
