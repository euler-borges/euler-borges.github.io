import React from "react";
import profile from "../data/profile";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section className="card" id="contato">
      <span className="section-label">{t("contact.label")}</span>
      <h3 className="section-heading section-heading-large">
        {t("contact.title")}
      </h3>
      <div className="contact-details">
        <div className="contact-method">
          <div>
            <div className="contact-method-label">
              {t("contact.methods.email")}
            </div>
            <div className="contact-method-value">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
          </div>
        </div>

        <div className="contact-method">
          <div>
            <div className="contact-method-label">
              {t("contact.methods.phone")}
            </div>
            <div className="contact-method-value">
              <a href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}>
                {profile.phone}
              </a>
            </div>
          </div>
        </div>

        <div className="contact-method">
          <div>
            <div className="contact-method-label">
              {t("contact.methods.linkedin")}
            </div>
            <div className="contact-method-value">
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                {t("contact.values.linkedin")}
              </a>
            </div>
          </div>
        </div>

        <div className="contact-method">
          <div>
            <div className="contact-method-label">
              {t("contact.methods.github")}
            </div>
            <div className="contact-method-value">
              <a href={profile.github} target="_blank" rel="noreferrer">
                {t("contact.values.github")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
