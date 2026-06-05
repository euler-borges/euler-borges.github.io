import React from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span>
          © {new Date().getFullYear()} {t("site.name")}
        </span>
        <span>{t("footer.techStack")}</span>
      </div>
    </footer>
  );
}
