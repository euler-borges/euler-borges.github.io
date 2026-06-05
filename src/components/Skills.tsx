import React from "react";
import { useTranslation } from "react-i18next";

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="skill-group">
      <span className="skill-group-title">{title}</span>
      <div className="pill-group">
        {items.map((it) => (
          <span key={it} className="pill">
            {it}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section className="card">
      <span className="section-label">{t("skills.label")}</span>
      <div className="skills-grid">
        <SkillGroup
          title={t("skills.groups.languages.title")}
          items={
            t("skills.groups.languages.items", {
              returnObjects: true,
            }) as string[]
          }
        />
        <SkillGroup
          title={t("skills.groups.frameworks.title")}
          items={
            t("skills.groups.frameworks.items", {
              returnObjects: true,
            }) as string[]
          }
        />
        <SkillGroup
          title={t("skills.groups.cloud.title")}
          items={
            t("skills.groups.cloud.items", { returnObjects: true }) as string[]
          }
        />
        <SkillGroup
          title={t("skills.groups.databases.title")}
          items={
            t("skills.groups.databases.items", {
              returnObjects: true,
            }) as string[]
          }
        />
        <SkillGroup
          title={t("skills.groups.tools.title")}
          items={
            t("skills.groups.tools.items", { returnObjects: true }) as string[]
          }
        />
        <SkillGroup
          title={t("skills.groups.concepts.title")}
          items={
            t("skills.groups.concepts.items", {
              returnObjects: true,
            }) as string[]
          }
        />
      </div>
    </section>
  );
}
