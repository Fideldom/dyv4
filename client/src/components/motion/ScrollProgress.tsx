/**
 * DYLANDE MOTION SYSTEM — ScrollProgress
 * Barra fina no topo, discreta, que acompanha o progresso da página.
 * Não é decorativa: dá orientação (o visitante sabe onde está no percurso).
 */
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const reduceMotion = useReducedMotion();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 24, restDelta: 0.001 });

  if (reduceMotion) return null;

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX }}
      aria-hidden
    />
  );
}
