/* DYLANDE MOTION SYSTEM — PageTransition
  Troca suave e animada entre páginas (secção 26 do briefing). Usa a mesma
  "assinatura" do resto do motion system: fade + leve deslocamento vertical
  + um traço de blur, nunca um simples corte seco entre rotas.
  Faz scroll para o topo apenas depois da página anterior ter saído,
  para a transição nunca parecer um salto brusco.
 */
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.23, 1, 0.32, 1] as const;

export function PageTransition({
  location,
  children,
}: {
  location: string;
  children: ReactNode;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <main>{children}</main>;
  }

  return (
    <main>
      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() =>
          window.scrollTo({ top: 0, left: 0, behavior: "auto" })
        }
      >
        <motion.div
          key={location}
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -12, filter: "blur(3px)" }}
          transition={{ duration: 0.45, ease: EASE }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
