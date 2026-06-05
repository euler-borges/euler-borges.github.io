import React from "react";
import profile from "../data/profile";
import { useTranslation } from "react-i18next";

type ProjectItem = {
  title: string;
  description: string;
  tags: string[];
};

export default function Projects() {
  const { t } = useTranslation();
  const projects = t("projects.items", {
    returnObjects: true,
  }) as ProjectItem[];

  return (
    <section className="card" id="projetos">
      <span className="section-label">{t("projects.label")}</span>
      <div className="project-list">
        {projects.map((p, index) => (
          <article key={p.title} className="project-item">
            <div className="project-tag-list">
              {p.tags.map((tag) => (
                <span key={tag} className="project-tag">
                  {tag}
                </span>
              ))}
            </div>
            <h4>{p.title}</h4>
            <p>{p.description}</p>
            <a
              href={profile.projects[index]?.github ?? "#"}
              className="project-link"
              target="_blank"
              rel="noreferrer"
            >
              {t("projects.githubLabel")} ↗
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
