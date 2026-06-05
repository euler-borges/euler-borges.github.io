import React from "react";
import { useTranslation } from "react-i18next";

type EducationItem = {
  degree: string;
  school: string;
  date: string;
  details: string[];
};

export default function About() {
  const { t } = useTranslation();
  const educationItems = t("about.items", {
    returnObjects: true,
  }) as EducationItem[];

  return (
    <section className="card" id="sobre">
      <span className="section-label">{t("about.label")}</span>
      <h3 className="section-heading">{t("about.title")}</h3>
      {educationItems.map((edu) => (
        <div key={edu.degree} className="timeline-item">
          <h4 className="timeline-title">{edu.degree}</h4>
          <div className="timeline-meta">
            {edu.school} • {edu.date}
          </div>
          <ul className="timeline-details">
            {edu.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
