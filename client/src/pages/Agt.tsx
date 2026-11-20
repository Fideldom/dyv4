/*
  DYLANDE — Página AGT: o que é a facturação electrónica.
  Usa as classes hero-new e hero-banner do hero da página inicial.
 */
import { Reveal } from "@/components/motion/Reveal";

const media = "/media/";

export default function Agt() {
  return (
    <div className="agt-page">
      <section className="hero-new hero-banner agt-hero">
        <div className="container hero-new-inner">
          <div className="hero-new-copy">
            <Reveal delay={0.1} trigger="mount">
              <h1>o que é a facturação electrónica?</h1>
            </Reveal>
            <Reveal delay={0.3} trigger="mount" className="agt-lead">
              <p>
                É o processo de emitir facturas em formato digital através de um
                software certificado, com comunicação directa dos dados da
                factura à Administração Geral Tributária (AGT).
              </p>
            </Reveal>
          </div>
        </div>
        <div
          className="hero-banner-art"
          role="img"
          aria-label="Painel de facturação electrónica DYLANDE com o selo AGT"
          style={{ backgroundImage: `url(${media}agt-fundo.jpg)` }}
        />
      </section>
    </div>
  );
}
