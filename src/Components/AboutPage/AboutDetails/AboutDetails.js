import React from "react";
import { useLanguage } from "../../LanguageProvider/LanguageProvider";

const AboutDetails = () => {
  const { t } = useLanguage();

  return (
    <section className="light__white__color mb-4">
      <h2>
        I&apos;m{" "}
        <span className="light__green__color">{t.hero.name}</span>
      </h2>

      <p className="mt-3" style={{ fontSize: "1.1rem", lineHeight: "1.85" }}>
        {t.about.p1}
      </p>

      <p style={{ fontSize: "1.1rem", lineHeight: "1.85" }}>
        {t.about.p2}
      </p>

      {/* ── Bilingual Note (Bangla) ── */}
      <p
        style={{
          fontSize: "1rem",
          lineHeight: "1.9",
          opacity: 0.75,
          fontStyle: "italic",
          borderLeft: "3px solid var(--primary-color, #00c896)",
          paddingLeft: "0.85rem",
          marginTop: "1.25rem",
        }}
      >
        {t.about.bilingualNote}
      </p>
    </section>
  );
};

export default AboutDetails;

