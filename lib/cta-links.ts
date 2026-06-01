// ─── CTA LINKS ────────────────────────────────────────────────────────────────
// Centralizado para facilitar edicion

export const CTA_LINKS = {
  whatsapp: "https://wa.me/573045818587",
  calendar:
    "https://calendly.com/jhonattanrodriguezgrowth/sesion-de-reconocimiento-growth-hack",
  githubProfile: "https://github.com/Jhonattanrodriguezgrowth",
  filmmakerYoutube: "https://www.youtube.com/@jhonattansfilm",
};

export const WHATSAPP_MESSAGES = {
  general: "?text=Hola%20Jhonattan%2C%20me%20gustaría%20conversar%20contigo.",
  growth: "?text=Hola%20Jhonattan%2C%20me%20interesa%20saber%20más%20sobre%20tus%20servicios%20de%20Growth.",
  filmmaker: "?text=Hola%20Jhonattan%2C%20me%20interesa%20saber%20más%20sobre%20producción%20de%20video.",
  builder: "?text=Hola%20Jhonattan%2C%20tengo%20un%20proyecto%20de%20Developer%20AI%20y%20sistemas%20integrados%20con%20IA%20que%20me%20gustaría%20discutir.",
};

export function getWhatsAppLink(context: keyof typeof WHATSAPP_MESSAGES = "general") {
  return CTA_LINKS.whatsapp + WHATSAPP_MESSAGES[context];
}

export function getCalendarLink() {
  return CTA_LINKS.calendar;
}

export function getGitHubProfileLink() {
  return CTA_LINKS.githubProfile;
}

export function getFilmmakerYouTubeLink() {
  return CTA_LINKS.filmmakerYoutube;
}
