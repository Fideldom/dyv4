/**
 * DYLANDE — Navy Precision / Corporate Rebuild
 * Fallback simples para rotas não encontradas.
 */
import { Link } from "wouter";
import { MotionHeroTitle } from "@/components/motion/MotionHeroTitle";
import { Reveal } from "@/components/motion/Reveal";
import { Magnetic } from "@/components/motion/Magnetic";

export default function NotFound() {
  return (
    <div className="inner-page not-found-view">
      <div className="container page-intro not-found-box">
        <MotionHeroTitle
          as="h1"
          variant="blur"
          eyebrow="404 · Rota não encontrada"
          title="Este caminho não está no mapa."
        />
        <Reveal delay={0.15} trigger="mount">
          <div className="not-found-actions">
            <p>Volta ao início para explorar as soluções e serviços DYLANDE.</p>
            <Magnetic>
              <Link href="/" className="button button-primary">
                Voltar ao início
              </Link>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
