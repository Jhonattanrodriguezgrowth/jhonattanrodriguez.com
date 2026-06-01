"use client";

import type { ReactNode } from "react";
import { CTACalendar } from "@/components/cta-buttons";
import type { PlanSurface } from "@/lib/filmmaker-plan-surface";
import type { FILM_PLANS } from "@/lib/design-tokens";

type FilmPlan = (typeof FILM_PLANS)[number];

type PlanCardProps = {
  plan: FilmPlan;
  surface: PlanSurface;
  siteDark: boolean;
  accent: string;
  accentSolid: string;
  selected: boolean;
  onToggle: () => void;
};

export function PlanCard({
  plan,
  surface,
  siteDark,
  accent,
  accentSolid,
  selected,
  onToggle,
}: PlanCardProps) {
  const isOpen = selected;

  return (
    <article
      className="relative rounded-2xl p-6 sm:p-8 transition-shadow duration-250 flex flex-col"
      style={{
        background: surface.bg,
        border: surface.border,
        boxShadow: plan.featured
          ? siteDark
            ? "0 24px 48px rgba(251,146,60,0.12)"
            : "0 24px 48px rgba(0,0,0,0.25)"
          : "none",
        outline: isOpen ? `2px solid ${accent}` : "none",
        outlineOffset: isOpen ? 2 : 0,
      }}
    >
      {plan.featured && (
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 sm:left-6 sm:translate-x-0 text-[10px] sm:text-xs font-semibold px-4 py-1.5 rounded-full"
          style={{
            fontFamily: "var(--font-lato), sans-serif",
            background: accent,
            color: accentSolid,
          }}
        >
          Más popular
        </div>
      )}

      <div className="mb-6">
        <h3
          id={`plan-${plan.id}-title`}
          className="font-semibold text-xl mb-2"
          style={{ fontFamily: "var(--font-quicksand), sans-serif", color: surface.title }}
        >
          {plan.name}
        </h3>
        <p
          className="text-sm leading-relaxed"
          style={{ fontFamily: "var(--font-lato), sans-serif", color: surface.body }}
        >
          {plan.tagline}
        </p>
      </div>

      <div className="mb-6">
        <div
          className="font-bold text-2xl sm:text-3xl tracking-tight"
          style={{ fontFamily: "var(--font-quicksand), sans-serif", color: surface.price }}
        >
          {plan.price}
        </div>
        {plan.priceUSD && (
          <div
            className="text-[15px] mt-1"
            style={{ fontFamily: "var(--font-lato), sans-serif", color: surface.body }}
          >
            {plan.priceUSD}
          </div>
        )}
      </div>

      {plan.production && (
        <div
          className="text-xs font-medium px-3 py-1.5 rounded-lg inline-block mb-6"
          style={{
            fontFamily: "var(--font-lato), sans-serif",
            background: surface.chipBg,
            color: surface.chipText,
            border: `1px solid ${surface.chipBorder}`,
          }}
        >
          {plan.production}
        </div>
      )}

      {plan.includes && (
        <ul className="space-y-2.5 mb-6">
          {plan.includes.slice(0, 4).map((item, j) => (
            <li
              key={j}
              className="flex items-start gap-3 text-sm"
              style={{ fontFamily: "var(--font-lato), sans-serif", color: surface.body }}
            >
              <span className="mt-0.5 shrink-0" style={{ color: surface.price }}>
                <CheckIcon />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {"isCustom" in plan && plan.isCustom && plan.description && (
        <p
          className="text-sm leading-relaxed mb-6"
          style={{
            fontFamily: "var(--font-lato), sans-serif",
            color: surface.body,
            lineHeight: 1.65,
          }}
        >
          {plan.description}
        </p>
      )}

      <CTACalendar
        variant={surface.ctaVariant}
        dark={surface.ctaDark}
        accentColor={surface.ctaAccent}
        accentSolidColor={surface.ctaAccentSolid}
        className="w-full justify-center text-sm"
      />

      <button
        type="button"
        onClick={onToggle}
        className="w-full mt-4 min-h-[44px] inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-250 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/60 focus-visible:ring-offset-2"
        style={{
          fontFamily: "var(--font-lato), sans-serif",
          border: `1px solid ${surface.detailPanelBorder}`,
          color: surface.title,
          background: surface.detailPanelBg,
        }}
        aria-expanded={isOpen}
        aria-controls={`plan-${plan.id}-details`}
      >
        <span>{isOpen ? "Ocultar detalles" : "Ver detalles"}</span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 12 12"
          fill="none"
          className="shrink-0 transition-transform duration-250 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
          style={{
            color: surface.chevron,
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
          aria-hidden
        >
          <path
            d="M2.5 4.5L6 8L9.5 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div
        id={`plan-${plan.id}-details`}
        role="region"
        aria-labelledby={`plan-${plan.id}-title`}
        hidden={!isOpen}
      >
        {isOpen && !("isCustom" in plan && plan.isCustom) && (
          <div
            className="mt-6 pt-6 space-y-6"
            style={{ borderTop: `1px solid ${surface.detailBorder}` }}
          >
            {"framework" in plan && plan.framework && (
              <DetailSection title="Framework estratégico" surface={surface}>
                <div className="space-y-3">
                  {plan.framework.map((f, k) => (
                    <div
                      key={k}
                      className="flex items-center justify-between p-3 rounded-xl"
                      style={{
                        background: surface.detailPanelBg,
                        border: `1px solid ${surface.detailPanelBorder}`,
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="text-lg font-bold"
                          style={{
                            fontFamily: "var(--font-quicksand), sans-serif",
                            color: surface.detailAccent,
                          }}
                        >
                          {f.count}
                        </span>
                        <span
                          className="text-sm font-medium"
                          style={{
                            fontFamily: "var(--font-quicksand), sans-serif",
                            color: surface.title,
                          }}
                        >
                          {f.type}
                        </span>
                      </div>
                      <span
                        className="text-xs text-right max-w-[140px]"
                        style={{
                          fontFamily: "var(--font-lato), sans-serif",
                          color: surface.detailBody,
                        }}
                      >
                        {f.goal}
                      </span>
                    </div>
                  ))}
                </div>
              </DetailSection>
            )}

            {"deliverables" in plan && plan.deliverables && (
              <DetailSection title="Entregables al mes" surface={surface}>
                <div className="grid grid-cols-2 gap-3">
                  {plan.deliverables.map((d, k) => (
                    <div
                      key={k}
                      className={
                        "count" in d
                          ? "p-3 rounded-xl text-center"
                          : "p-3 rounded-xl text-left col-span-2"
                      }
                      style={{
                        background: surface.detailPanelBg,
                        border: `1px solid ${surface.detailPanelBorder}`,
                      }}
                    >
                      {"count" in d ? (
                        <>
                          <span
                            className="text-2xl font-bold block"
                            style={{
                              fontFamily: "var(--font-quicksand), sans-serif",
                              color: surface.detailAccent,
                            }}
                          >
                            {d.count}
                          </span>
                          <span
                            className="text-xs"
                            style={{
                              fontFamily: "var(--font-lato), sans-serif",
                              color: surface.detailBody,
                            }}
                          >
                            {d.type}
                          </span>
                        </>
                      ) : (
                        <>
                          <span
                            className="text-sm font-semibold block mb-1"
                            style={{
                              fontFamily: "var(--font-quicksand), sans-serif",
                              color: surface.title,
                            }}
                          >
                            {d.type}
                          </span>
                          <span
                            className="text-xs leading-relaxed block"
                            style={{
                              fontFamily: "var(--font-lato), sans-serif",
                              color: surface.detailBody,
                            }}
                          >
                            {d.desc}
                          </span>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </DetailSection>
            )}

            {"payment" in plan && plan.payment && (
              <DetailSection title="Estructura de pago" surface={surface}>
                <div className="space-y-3">
                  {plan.payment.map((p, k) => (
                    <div
                      key={k}
                      className="flex items-start justify-between gap-3 p-3 rounded-xl"
                      style={{
                        background: surface.paymentPanelBg,
                        border: `1px solid ${surface.detailPanelBorder}`,
                      }}
                    >
                      <div>
                        <span
                          className="text-sm font-medium block"
                          style={{
                            fontFamily: "var(--font-quicksand), sans-serif",
                            color: surface.title,
                          }}
                        >
                          {p.stage}
                        </span>
                        <span
                          className="text-xs"
                          style={{
                            fontFamily: "var(--font-lato), sans-serif",
                            color: surface.detailBody,
                          }}
                        >
                          {p.desc}
                        </span>
                      </div>
                      <span
                        className="text-sm font-semibold shrink-0 text-right"
                        style={{
                          fontFamily: "var(--font-quicksand), sans-serif",
                          color: surface.detailAccent,
                        }}
                      >
                        {p.amount}
                      </span>
                    </div>
                  ))}
                </div>
              </DetailSection>
            )}

            {"costPerPiece" in plan && plan.costPerPiece && (
              <div
                className="p-4 rounded-xl text-center space-y-2"
                style={{
                  background: surface.detailPanelBg,
                  border: `1px solid ${surface.detailPanelBorder}`,
                }}
              >
                <span
                  className="text-sm block"
                  style={{
                    fontFamily: "var(--font-lato), sans-serif",
                    color: surface.detailBody,
                  }}
                >
                  {plan.costPerPiece}
                </span>
                {"savings" in plan && plan.savings && (
                  <span
                    className="block text-xs font-medium"
                    style={{ color: surface.detailAccent }}
                  >
                    {plan.savings}
                  </span>
                )}
                {"addon" in plan && plan.addon && (
                  <span
                    className="block text-xs"
                    style={{
                      fontFamily: "var(--font-lato), sans-serif",
                      color: surface.muted,
                    }}
                  >
                    {plan.addon}
                  </span>
                )}
              </div>
            )}
          </div>
        )}

        {isOpen && "isCustom" in plan && plan.isCustom && plan.forWho && (
          <div
            className="mt-8 pt-6 space-y-6"
            style={{ borderTop: `1px solid ${surface.detailBorder}` }}
          >
            <DetailSection title="Ideal para" surface={surface}>
              <ul className="space-y-2">
                {plan.forWho.map((item, k) => (
                  <li
                    key={k}
                    className="flex items-start gap-3 text-sm"
                    style={{
                      fontFamily: "var(--font-lato), sans-serif",
                      color: surface.detailBody,
                    }}
                  >
                    <span className="mt-0.5 shrink-0" style={{ color: surface.detailAccent }}>
                      <CheckIcon />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </DetailSection>
            {"deliverables" in plan && plan.deliverables && (
              <DetailSection title="Entregables" surface={surface}>
                <div className="space-y-3">
                  {plan.deliverables.map((d, k) => (
                    <div
                      key={k}
                      className="p-3 rounded-xl"
                      style={{
                        background: surface.detailPanelBg,
                        border: `1px solid ${surface.detailPanelBorder}`,
                      }}
                    >
                      <span
                        className="text-sm font-medium block"
                        style={{
                          fontFamily: "var(--font-quicksand), sans-serif",
                          color: surface.title,
                        }}
                      >
                        {d.type}
                      </span>
                      <span
                        className="text-xs"
                        style={{
                          fontFamily: "var(--font-lato), sans-serif",
                          color: surface.detailBody,
                        }}
                      >
                        {d.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </DetailSection>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

function DetailSection({
  title,
  surface,
  children,
}: {
  title: string;
  surface: PlanSurface;
  children: ReactNode;
}) {
  return (
    <div>
      <h4
        className="text-xs tracking-[0.2em] uppercase font-medium mb-4"
        style={{ fontFamily: "var(--font-lato), sans-serif", color: surface.detailLabel }}
      >
        {title}
      </h4>
      {children}
    </div>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
      <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
    </svg>
  );
}
