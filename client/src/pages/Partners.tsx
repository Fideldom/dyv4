/* DYLANDE — Página Parceiros
  Substitui o carrossel Swiper (jQuery) do site antigo por uma faixa contínua em CSS puro,
  sem dependências externas, acessível e respeitando prefers-reduced-motion.
 */
import { PageIntro } from "@/components/SiteLayout";
import { Reveal } from "@/components/motion/Reveal";

const m = "/media/parceiros/";

/* Adicione aqui cada parceiro novo. "name" é usado apenas como alt/acessibilidade — o logótipo é que aparece visualmente. */
const partners = [
  { name: "Logiaabe", file: "logiaabe.png" },
  { name: "Logonel", file: "logonel.png" },
  { name: "logodav", file: "logodav.png" },
  { name: "Log", file: "log.png" },
  { name: "Netping", file: "netping.png" },
];

export default function Partners() {
  /* Duplicamos a lista para a faixa rodar em loop contínuo sem salto visível. */
  const loop = [...partners, ...partners];
  return (
    <div className="inner-page">
      <div className="container">
        <PageIntro
          variant="fill"
          kicker="Ecossistema DYLANDE"
          title="Parceiros que tornam esta operação possível."
          text="Trabalhamos lado a lado com parceiros tecnológicos e institucionais para entregar software, suporte e infraestrutura em que o cliente pode confiar."
        />

        <a
          className="button button-primary"
          href="https://dylande.com"
          target="_blank"
          rel="noreferrer"
        >
          logar como parceiro
        </a>
      </div>

      <section className="container section-new partners-section">
        <Reveal className="section-head">
          <div>
            <span className="eyebrow">Rede de parceiros</span>
            <h2>Quem caminha connosco</h2>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="partners-marquee" amount={0.2}>
          <div className="partners-track">
            {loop.map((p, i) => (
              <div className="partners-logo" key={`${p.file}-${i}`}>
                <img src={`${m}${p.file}`} alt={p.name} loading="lazy" />
              </div>
            ))}
          </div>
        </Reveal>

        {/* Grelha estática — visível para leitores de ecrã e quando o movimento está reduzido. */}
        <div className="partners-grid" aria-hidden="true">
          {partners.map((p) => (
            <div className="partners-logo" key={p.file}>
              <img src={`${m}${p.file}`} alt="" loading="lazy" />
            </div>
          ))}
        </div>
        <br />
      </section>
    </div>
  );
}
