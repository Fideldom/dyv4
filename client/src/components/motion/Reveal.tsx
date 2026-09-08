/* DYLANDE MOTION SYSTEM — Reveal
  Entrada genérica para parágrafos, cards e blocos secundários.
  Não é a assinatura tipográfica (isso é o MotionHeroTitle) — é o motion
  de secção: discreto, reutilizável, sempre com uma função (orientar o olhar
  pela hierarquia da página).
 */
import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.23, 1, 0.32, 1] as const;

const MOTION_TAGS = {
  div: motion.div,
  span: motion.span,
  li: motion.li,
  article: motion.article,
  section: motion.section,
} as const;

const PLAIN_TAGS = { div: "div", span: "span", li: "li", article: "article", section: "section" } as const;

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  as?: "div" | "span" | "li" | "article" | "section";
  className?: string;
  once?: boolean;
  amount?: number;
  /** "scroll" (padrão) anima ao entrar em vista — para conteúdo mais abaixo na página.
   *  "mount" anima assim que o componente monta — obrigatório para tudo o que fica
   *  acima da dobra (subtítulos de hero, CTAs iniciais), porque esse conteúdo já
   *  está visível ao carregar e nunca "entra" em vista por scroll. */
  trigger?: "scroll" | "mount";
}

export function Reveal({ children, delay = 0, y = 16, as = "div", className, once = true, amount = 0.3, trigger = "scroll" }: RevealProps) {
  const reduceMotion = useReducedMotion();
  const Tag = MOTION_TAGS[as];

  if (reduceMotion) {
    const Static = PLAIN_TAGS[as];
    return <Static className={className}>{children}</Static>;
  }

  const variants: Variants = {
    hidden: { opacity: 0, y },
    visible: { opacity: 1, y: 0 },
  };

  const triggerProps = trigger === "mount" ? { animate: "visible" } : { whileInView: "visible", viewport: { once, amount } };

  return (
    <Tag
      className={className}
      initial="hidden"
      variants={variants}
      transition={{ duration: 0.55, ease: EASE, delay }}
      {...triggerProps}
    >
      {children}
    </Tag>
  );
}

/** Contentor com stagger para grelhas de cards — os filhos usam StaggerItem. */
export function Stagger({ children, className, gap = 0.06 }: { children: ReactNode; className?: string; gap?: number }) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: gap }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className, as = "div" }: { children: ReactNode; className?: string; as?: "div" | "article" | "li" }) {
  const Tag = MOTION_TAGS[as];
  const variants: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <Tag className={className} variants={variants} transition={{ duration: 0.5, ease: EASE }}>
      {children}
    </Tag>
  );
}
