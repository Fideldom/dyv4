/* DYLANDE MOTION SYSTEM — Magnetic
  Micro-atração de 2–6px aplicada apenas aos CTAs mais importantes
  (Solicitar proposta, Falar com especialista, WhatsApp). Apenas desktop
  com ponteiro fino; nunca em touch; nunca em prefers-reduced-motion.
 */
import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";

const MAX_OFFSET = 6;

export function Magnetic({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const reduceMotion = useReducedMotion();

  const isFinePointer =
    typeof window !== "undefined" &&
    window.matchMedia?.("(pointer: fine)").matches;
  const disabled = reduceMotion || !isFinePointer;

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    if (disabled || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const relY = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setPos({ x: relX * MAX_OFFSET, y: relY * MAX_OFFSET });
  }

  function reset() {
    setPos({ x: 0, y: 0 });
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 260, damping: 18, mass: 0.4 }}
      style={{ display: "inline-flex" }}
    >
      {children}
    </motion.div>
  );
}
