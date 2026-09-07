/**
 * DYLANDE — WhatsApp global (secções 44–47 do briefing)
 * Persistente em toda a experiência, bottom-right, com tooltip no desktop,
 * mensagem contextual por página e número centralizado em siteConfig.
 * Nunca pulsação exagerada; respeita reduced motion.
 */
import { useLocation } from "wouter";
import { MessageCircle } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { siteConfig } from "@/lib/siteConfig";
import { trackEvent } from "@/lib/analytics";
import { Magnetic } from "./motion/Magnetic";

export function WhatsAppButton() {
  const [location] = useLocation();
  const reduceMotion = useReducedMotion();
  const message = siteConfig.whatsappMessages[location] ?? siteConfig.whatsappMessages.default;
  const href = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;

  const button = (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`whatsapp-float${reduceMotion ? "" : " whatsapp-float-live"}`}
      aria-label="Fale connosco pelo WhatsApp"
      onClick={() => trackEvent("whatsapp_click", { page: location })}
    >
      <MessageCircle size={24} fill="currentColor" strokeWidth={0} />
      <span className="whatsapp-tooltip">Fale connosco pelo WhatsApp</span>
    </a>
  );

  return <Magnetic className="whatsapp-float-wrap">{button}</Magnetic>;
}
