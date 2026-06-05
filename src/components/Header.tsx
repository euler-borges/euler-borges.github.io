import React from "react";
import { useTranslation } from "react-i18next";

import profile from "../data/profile";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const { t } = useTranslation();

  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="brand">
          <span className="site-title">{t("site.name")}</span>
          <span className="site-subtitle">{t("site.role")}</span>
        </div>
        <div className="header-actions">
          <nav className="contact-links" aria-label={t("nav.aria")}>
            <a href="#sobre">{t("nav.about")}</a>
            <a href="#projetos">{t("nav.projects")}</a>
            <a href="#contato">{t("nav.contact")}</a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              {t("nav.github")}
            </a>
          </nav>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
