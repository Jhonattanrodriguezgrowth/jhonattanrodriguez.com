export type DeveloperAIPhilosophySection = {
  terminalLabel: string;
  quote: string;
  attribution: string;
  paragraphs: string[];
  closingLine: string;
};

export const DEVELOPER_AI_PHILOSOPHY: DeveloperAIPhilosophySection = {
  terminalLabel: "> philosophy --skunk-works",
  quote: "Un ingeniero capaz vale por mil técnicos ejecutores.",
  attribution:
    "Kelly Johnson · Diseñador del SR-71 Blackbird · Lockheed Skunk Works",
  paragraphs: [
    "El SR-71 Blackbird voló por primera vez en 1964. Sigue siendo el avión más rápido jamás construido.",
    "No lo hizo un ejército. Lo hizo el Skunk Works: un equipo pequeño, con criterio absoluto sobre el problema, que pensaba el sistema completo antes de construir una sola pieza.",
  ],
  closingLine:
    "Esa es la diferencia entre ejecutar instrucciones y desarrollar una solución.",
};
