import React from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const { i18n, t } = useTranslation();

  useEffect(() => {
    document.title = t("site.title");

    const metaDescription = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );

    if (metaDescription) {
      metaDescription.content = t("site.description");
    }

    document.documentElement.lang = i18n.resolvedLanguage?.startsWith("pt")
      ? "pt-BR"
      : "en";
  }, [i18n.resolvedLanguage, t]);

  return (
    <div>
      <Header />
      <main className="page-shell">
        <Hero />
        <Experience />
        <section className="grid two-up">
          <About />
          <Skills />
        </section>
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
