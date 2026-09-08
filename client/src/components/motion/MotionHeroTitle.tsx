/* DYLANDE MOTION TYPOGRAPHY SYSTEM
  Componente central de tipografia animada. Cada página usa uma variante
  diferente para que a assinatura visual da DYLANDE seja o próprio texto,
  nunca decoração gratuita. Todas as variantes:
   - renderizam texto real e semântico (h1/h2, sem canvas);
   - respeitam prefers-reduced-motion (fallback instantâneo);
   - animam apenas transform / opacity / filter / clip-path (performance).
 */
import { motion, useReducedMotion } from "framer-motion";
import { splitLetters, splitWords, driftOffset } from "./textSplit";

export type MotionTitleVariant =
  "cinematic" | "mask" | "fill" | "drift" | "blur" | "outline" | "split";

const EASE = [0.23, 1, 0.32, 1] as const;

interface MotionHeroTitleProps {
  as?: "h1" | "h2";
  eyebrow?: string;
  eyebrowClassName?: string;
  eyebrowDot?: boolean;
  title: string;
  accent?: string;
  variant: MotionTitleVariant;
  className?: string;
}

export function MotionHeroTitle({
  as = "h1",
  eyebrow,
  eyebrowClassName = "eyebrow",
  eyebrowDot = false,
  title,
  accent,
  variant,
  className,
}: MotionHeroTitleProps) {
  const reduceMotion = useReducedMotion();
  const Tag = as === "h2" ? motion.h2 : motion.h1;

  const eyebrowNode = eyebrow ? (
    <motion.span
      className={eyebrowClassName}
      initial={reduceMotion ? false : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: EASE }}
    >
      {eyebrowDot && <i />}
      {eyebrow}
    </motion.span>
  ) : null;

  return (
    <>
      {eyebrowNode}
      <Tag className={className}>
        <TitleBody
          title={title}
          accent={accent}
          variant={variant}
          reduceMotion={!!reduceMotion}
        />
      </Tag>
    </>
  );
}

function TitleBody({
  title,
  accent,
  variant,
  reduceMotion,
}: {
  title: string;
  accent?: string;
  variant: MotionTitleVariant;
  reduceMotion: boolean;
}) {
  if (reduceMotion) {
    return (
      <>
        {title}{" "}
        {accent && (
          <em style={{ color: "var(--mint)", fontStyle: "normal" }}>
            {accent}
          </em>
        )}
      </>
    );
  }

  switch (variant) {
    case "cinematic":
      return <Cinematic title={title} accent={accent} />;
    case "drift":
      return <Drift title={title} accent={accent} />;
    case "blur":
      return <Blur title={title} />;
    case "mask":
      return <Mask title={title} />;
    case "fill":
      return <FillReveal title={title} />;
    case "outline":
      return <OutlineReveal title={title} />;
    case "split":
      return <SplitReassembly title={title} />;
    default:
      return <>{title}</>;
  }
}

/* CINEMATIC — Home: palavras nascem com blur + escala + leve subida,     */
/* o destaque final entra com um pequeno "pop" de mola — é a assinatura   */
function Cinematic({ title, accent }: { title: string; accent?: string }) {
  const words = splitWords(title);
  return (
    <motion.span
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.06, delayChildren: 0.05 }}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          style={{ display: "inline-block" }}
          variants={{
            hidden: { opacity: 0, y: 32, scale: 0.94, filter: "blur(12px)" },
            visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
          }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          {word}<span style={{marginLeft: "12px"}}></span>
        </motion.span>
      ))}{" "}
      {accent && (
        <em style={{ fontStyle: "normal", color: "var(--mint)" }}>
          {splitWords(accent).map((word, i) => (
            <motion.span
              key={`accent-${word}-${i}`}
              style={{ display: "inline-block" }}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 36,
                  scale: 0.86,
                  filter: "blur(14px)",
                },
                visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
              }}
              transition={{
                type: "spring",
                stiffness: 130,
                damping: 13,
                mass: 0.7,
              }}
            >
              {word}{" "}
            </motion.span>
          ))}
        </em>
      )}
    </motion.span>
  );
}

/* DRIFT — Soluções: letras nascem afastadas, rodadas e reduzidas,        */
/* depois convergem em posição, ângulo e escala — sensação de "montagem" */
function Drift({ title, accent }: { title: string; accent?: string }) {
  const full = accent ? `${title} ${accent}` : title;
  const letters = splitLetters(full);
  return (
    <motion.span
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.02 }}
    >
      {letters.map((letter, i) => {
        const { x, y } = driftOffset(i);
        const rotate = ((i * 13) % 10) - 5;
        return (
          <motion.span
            key={i}
            style={{ display: "inline-block", whiteSpace: "pre" }}
            variants={{
              hidden: { opacity: 0, x, y, rotate, scale: 0.9 },
              visible: { opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 },
            }}
            transition={{ duration: 0.55, ease: EASE }}
          >
            {letter}
          </motion.span>
        );
      })}
    </motion.span>
  );
}

/* BLUR — Empresa: desfocado, maior e ligeiramente abaixo, entra em foco  */
/* com uma leve subida — sensação de "assentar" no lugar                 */
function Blur({ title }: { title: string }) {
  return (
    <motion.span
      style={{ display: "inline-block" }}
      initial={{ opacity: 0, y: 14, filter: "blur(16px)", scale: 1.06 }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
      transition={{ duration: 1.1, ease: EASE }}
    >
      {title}
    </motion.span>
  );
}

/* MASK — Serviços: máscara horizontal atravessa o texto com um leve      */
/* desalinhamento (skew) que se corrige durante a revelação — wipe        */
/* cinematográfico, não um simples corte reto                            */
function Mask({ title }: { title: string }) {
  return (
    <motion.span
      style={{ display: "inline-block" }}
      initial={{ clipPath: "inset(0 100% 0 0)", y: 20, skewX: 6 }}
      animate={{ clipPath: "inset(0 0% 0 0)", y: 0, skewX: 0 }}
      transition={{ duration: 1.05, ease: EASE }}
    >
      {title}
    </motion.span>
  );
}

/* FILL — Software: energia preenche a palavra e, perto do fim, uma       */
/* aresta luminosa em menta atravessa o texto — o "acender" da energia    */
function FillReveal({ title }: { title: string }) {
  return (
    <span style={{ position: "relative", display: "inline-block" }}>
      <span aria-hidden style={{ opacity: 0.12 }}>
        {title}
      </span>
      <motion.span
        style={{
          position: "absolute",
          inset: 0,
          display: "inline-block",
          backgroundImage:
            "linear-gradient(90deg, var(--ink) 0%, var(--ink) 80%, var(--mint) 92%, var(--ink) 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{ duration: 1.3, ease: EASE }}
      >
        {title}
      </motion.span>
    </span>
  );
}

/* OUTLINE — Certificações: contorno visível, preenchimento sólido a      */
/* seguir e um micro "assentar" de escala no instante em que fecha        */
function OutlineReveal({ title }: { title: string }) {
  return (
    <span style={{ position: "relative", display: "inline-block" }}>
      <span
        aria-hidden
        style={{ color: "transparent", WebkitTextStroke: "1.5px var(--blue)" }}
      >
        {title}
      </span>
      <motion.span
        style={{ position: "absolute", inset: 0, display: "inline-block" }}
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)", scale: [1, 1.015, 1] }}
        transition={{
          clipPath: { duration: 1.2, ease: EASE, delay: 0.18 },
          scale: { duration: 1.2, times: [0, 0.85, 1], delay: 0.18 },
        }}
      >
        {title}
      </motion.span>
    </span>
  );
}

/* SPLIT — Contactos: dois blocos convergem com física de mola (leve      */
/* rotação que se anula) — um "encaixe" com mais carácter que um fade     */
function SplitReassembly({ title }: { title: string }) {
  const words = splitWords(title);
  const mid = Math.ceil(words.length / 2);
  const left = words.slice(0, mid).join(" ");
  const right = words.slice(mid).join(" ");
  return (
    <motion.span
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.09 }}
      style={{ display: "inline-block" }}
    >
      <motion.span
        style={{ display: "inline-block" }}
        variants={{
          hidden: { opacity: 0, x: -60, rotate: -3 },
          visible: { opacity: 1, x: 0, rotate: 0 },
        }}
        transition={{ type: "spring", stiffness: 170, damping: 16, mass: 0.7 }}
      >
        {left}{" "}
      </motion.span>
      <motion.span
        style={{ display: "inline-block" }}
        variants={{
          hidden: { opacity: 0, x: 60, rotate: 3 },
          visible: { opacity: 1, x: 0, rotate: 0 },
        }}
        transition={{ type: "spring", stiffness: 170, damping: 16, mass: 0.7 }}
      >
        {right}
      </motion.span>
    </motion.span>
  );
}
