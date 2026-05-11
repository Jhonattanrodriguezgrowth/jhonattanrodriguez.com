// ─── CTA LINKS ────────────────────────────────────────────────────────────────
// Centralizado para facilitar edicion

export const CTA_LINKS = {
  whatsapp: "https://wa.me/573045818587",
  calendar: "https://cal.com/jhonattan-rodriguez", // placeholder - reemplazar con tu link real
};

export const WHATSAPP_MESSAGES = {
  general: "?text=Hola%20Jhonattan%2C%20me%20gustaría%20conversar%20contigo.",
  growth: "?text=Hola%20Jhonattan%2C%20me%20interesa%20saber%20más%20sobre%20tus%20servicios%20de%20Growth.",
  filmmaker: "?text=Hola%20Jhonattan%2C%20me%20interesa%20saber%20más%20sobre%20producción%20de%20video.",
  builder: "?text=Hola%20Jhonattan%2C%20tengo%20un%20proyecto%20de%20IA%20que%20me%20gustaría%20discutir.",
};

export function getWhatsAppLink(context: keyof typeof WHATSAPP_MESSAGES = "general") {
  return CTA_LINKS.whatsapp + WHATSAPP_MESSAGES[context];
}

export function getCalendarLink() {
  return CTA_LINKS.calendar;
}
