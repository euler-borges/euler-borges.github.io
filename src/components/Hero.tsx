import React from "react";
import { useTranslation } from "react-i18next";

import profile from "../data/profile";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero card">
      <span className="section-label">{t("hero.label")}</span>
      <h1 className="hero-name">{t("site.name")}</h1>
      <p className="hero-role">
        {t("site.role")} • {t("site.location")}
      </p>
      <p className="hero-copy">{t("site.summary")}</p>
      <div className="hero-actions">
        <a href="#projetos" className="button primary">
          {t("hero.primaryCta")}
        </a>
        <a href="#contato" className="button secondary">
          {t("hero.secondaryCta")}
        </a>
      </div>
    </section>
  );
}
