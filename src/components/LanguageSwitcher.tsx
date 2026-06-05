import { useTranslation } from "react-i18next";

const languages = [
  { code: "pt", label: "PT" },
  { code: "en", label: "EN" },
] as const;

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage ?? i18n.language;
  const activeLanguage = currentLanguage.startsWith("pt") ? "pt" : "en";

  return (
    <div
      className="language-switcher"
      role="group"
      aria-label={t("language.aria")}
    >
      {languages.map((language) => (
        <button
          key={language.code}
          type="button"
          className={
            language.code === activeLanguage
              ? "language-switcher-button active"
              : "language-switcher-button"
          }
          onClick={() => {
            void i18n.changeLanguage(language.code);
          }}
          aria-pressed={language.code === activeLanguage}
        >
          {language.label}
        </button>
      ))}
    </div>
  );
}
