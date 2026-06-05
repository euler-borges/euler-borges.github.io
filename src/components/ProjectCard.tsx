import React from "react";

export default function ProjectCard({
  title,
  tag,
  description,
}: {
  title: string;
  tag: string;
  description: string;
}) {
  return (
    <article className="project-item card-small">
      <span className="project-tag">{tag}</span>
      <h4>{title}</h4>
      <p>{description}</p>
    </article>
  );
}
