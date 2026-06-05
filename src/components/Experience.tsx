import React from "react";
import { useTranslation } from "react-i18next";

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
};

export default function Experience() {
  const { t } = useTranslation();
  const experiences = t("experience.items", {
    returnObjects: true,
  }) as ExperienceItem[];

  return (
    <section className="card" id="experiencia">
      <span className="section-label">{t("experience.label")}</span>
      <h3 className="section-heading">{t("experience.title")}</h3>
      {experiences.map((exp) => (
        <div key={exp.company} className="timeline-item">
          <h4 className="timeline-title">{exp.role}</h4>
          <div className="timeline-meta">
            {exp.company} • {exp.period}
          </div>
          <ul className="timeline-details">
            {exp.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
