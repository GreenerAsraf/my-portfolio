"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext();

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      portfolio: "Portfolio",
      pricing: "Pricing",
      blog: "Blog",
      contact: "Contact",
      resume: "Resume",
      view: "View",
      download: "Download",
      ticker1: "🟢 Open for Opportunities",
      ticker2: "⚡ Next.js & React",
      ticker3: "💻 MERN Stack",
      ticker4: "🚀 Clean Architecture",
    },
    hero: {
      greeting: "Hi, I am",
      name: "Mohammed Asraf Uddin",
      role: "MERN Stack Developer",
      tagline: "Building scalable, high-performance web applications with React, Next.js, Node.js and MongoDB.",
      viewWork: "View Work",
      contactMe: "Get in Touch",
      expBadge: "2+ Years Exp.",
    },
    about: {
      label: "About the Developer",
      heading: "Passionate about building",
      headingGradient: "modern web applications",
      p1: "I am a self-motivated and enthusiastic MERN Stack Developer with 2+ years of hands-on experience building full-stack web applications — from architecting RESTful APIs with Node.js & Express to crafting pixel-perfect, responsive UIs with React.js & Next.js, backed by MongoDB on the data layer.",
      p2: "I write clean, modular code and obsess over performance, accessibility, and developer experience. My career goal is to join a product-driven team where I can ship meaningful features, grow as an engineer, and contribute to software that genuinely improves people's lives.",
      bilingualNote: "আমি একজন উৎসাহী ফুল-স্ট্যাক ওয়েব ডেভেলপার যিনি MERN স্ট্যাক ও Next.js ব্যবহার করে আধুনিক ও কার্যকর ওয়েব অ্যাপ্লিকেশন তৈরি করেন।",
      readFull: "Read Full Biography",
      exp: "Years of Experience",
      badgeTitle: "Full Stack Dev",
    },
    skills: {
      label: "Technical Expertise",
      heading: "Full-Stack",
      headingGradient: "Developer",
      headingEnd: "by Craft",
      subtitle: "Specializing in modern JavaScript ecosystems — from pixel-perfect UIs to scalable, production-ready back-end architectures.",
      frontend: "Frontend Development",
      frontendDesc: "Building responsive and interactive user interfaces using modern web technologies.",
      backend: "Backend Development",
      backendDesc: "Creating robust and scalable server-side applications and APIs.",
      database: "Database & Tools",
      databaseDesc: "Managing data and utilizing tools for efficient development workflows.",
    },
    work: {
      label: "Selected Work",
      heading: "Featured",
      headingGradient: "Projects",
      viewAll: "View All Projects",
      liveSite: "Live Site",
      videoDesc: "Video Description",
      github: "GitHub",
      backend: "Back-end",
      demo: "Demo",
      frontend: "Front-end",
    },
    pricing: {
      title: "Flexible Pricing Plans",
      subtitle: "Transparent packages tailored for startups, businesses, and custom web applications.",
      getStarted: "Get Started",
      contactCustom: "Contact for Custom Quote",
    },
    contact: {
      label: "Get In Touch",
      heading: "Let us build something",
      headingGradient: "great together",
      subtitle: "Whether you have a project in mind, a job opportunity, or just want to connect, feel free to reach out!",
      nameLabel: "Your Name",
      emailLabel: "Your Email",
      subjectLabel: "Subject",
      messageLabel: "Message",
      sendBtn: "Send Message",
      successMsg: "Thank you! Your message has been sent successfully.",
    },
    footer: {
      rights: "All Rights Reserved.",
      crafted: "Crafted with passion using Next.js & React.",
    }
  },
  bn: {
    nav: {
      home: "হোম",
      about: "সম্পর্কে",
      portfolio: "পোর্টফোলিও",
      pricing: "মূল্যতালিকা",
      blog: "ব্লগ",
      contact: "যোগাযোগ",
      resume: "রেজুমে",
      view: "দেখুন",
      download: "ডাউনলোড",
      ticker1: "🟢 কাজের জন্য উন্মুক্ত",
      ticker2: "⚡ Next.js এবং React",
      ticker3: "💻 MERN স্ট্যাক",
      ticker4: "🚀 ক্লিন আর্কিটেকচার",
    },
    hero: {
      greeting: "হ্যালো, আমি",
      name: "মোহাম্মদ আশরাফ উদ্দিন",
      role: "MERN স্ট্যাক ডেভেলপার",
      tagline: "React, Next.js, Node.js এবং MongoDB ব্যবহার করে দ্রুত এবং পরিবর্তনযোগ্য ওয়েব অ্যাপ্লিকেশন তৈরি করি।",
      viewWork: "প্রজেক্টসমূহ দেখুন",
      contactMe: "যোগাযোগ করুন",
      expBadge: "২+ বছরের অভিজ্ঞতা",
    },
    about: {
      label: "ডেভেলপার সম্পর্কে",
      heading: "তৈরিতে অনুরাগী",
      headingGradient: "আধুনিক ওয়েব অ্যাপ্লিকেশন",
      p1: "আমি ২+ বছরের অভিজ্ঞতাসম্পন্ন একজন MERN স্ট্যাক ডেভেলপার। Node.js ও Express দিয়ে RESTful API তৈরি থেকে শুরু করে React.js ও Next.js দিয়ে রেসপনসিভ UI ডিজাইন এবং MongoDB ডাটাবেস ব্যবস্থাপনায় আমি পারদর্শী।",
      p2: "আমি ক্লিন এবং মডুলার কোড লিখতে পছন্দ করি। পারফরম্যান্স, অ্যাক্সেসিবিলিটি এবং ইউজার এক্সপেরিয়েন্স নিশ্চিত করা আমার লক্ষ্য। মানসম্মত প্রোডাক্ট তৈরি করতে এবং প্রযুক্তির সাথে নিজেকে সমৃদ্ধ করতে আমি সদা প্রস্তুত।",
      bilingualNote: "আমি একজন উৎসাহী ফুল-স্ট্যাক ওয়েব ডেভেলপার যিনি MERN স্ট্যাক ও Next.js ব্যবহার করে আধুনিক ও কার্যকর ওয়েব অ্যাপ্লিকেশন তৈরি করেন।",
      readFull: "সম্পূর্ণ জীবনী পড়ুন",
      exp: "বছরের অভিজ্ঞতা",
      badgeTitle: "ফুল স্ট্যাক দেব",
    },
    skills: {
      label: "কারিগরি দক্ষতা",
      heading: "ফুল-স্ট্যাক",
      headingGradient: "ডেভেলপার",
      headingEnd: "দক্ষতা ও অভিজ্ঞতায়",
      subtitle: "আধুনিক জাভাস্ক্রিপ্ট ইকোসিস্টেমে বিশেষজ্ঞ — আকর্ষণীয় ইউজার ইন্টারফেস থেকে শুরু করে স্কেলেবল ব্যাকএন্ড আর্কিটেকচার।",
      frontend: "ফ্রন্টএন্ড ডেভেলপমেন্ট",
      frontendDesc: "আধুনিক প্রযুক্তি ব্যবহার করে রেসপনসিভ ও ইন্টারেক্টিভ ইউজার ইন্টারফেস তৈরি।",
      backend: "ব্যাকএন্ড ডেভেলপমেন্ট",
      backendDesc: "নিরাপদ ও স্কেলেবল সার্ভার-সাইড অ্যাপ্লিকেশন এবং API তৈরি।",
      database: "ডাটাবেস ও টুলস",
      databaseDesc: "দক্ষ ডাটাবেস ব্যবস্থাপনা এবং আধুনিক ডেভেলপমেন্ট টুলস ব্যবহার।",
    },
    work: {
      label: "নির্বাচিত কাজ",
      heading: "সেরা",
      headingGradient: "প্রজেক্টসমূহ",
      viewAll: "সব প্রজেক্ট দেখুন",
      liveSite: "লাইভ সাইট",
      videoDesc: "ভিডিও বিবরণ",
      github: "গিটহাব",
      backend: "ব্যাক-এন্ড",
      demo: "ডেমো",
      frontend: "ফ্রন্ট-এন্ড",
    },
    pricing: {
      title: "সহজ মূল্যতালিকা",
      subtitle: "স্টার্টআপ, ব্যবসা এবং কাস্টম ওয়েব অ্যাপ্লিকেশনের জন্য স্বচ্ছ প্যাকেজ।",
      getStarted: "শুরু করুন",
      contactCustom: "কাস্টম কোটের জন্য যোগাযোগ করুন",
    },
    contact: {
      label: "যোগাযোগ করুন",
      heading: "আসুন একসাথে তৈরি করি",
      headingGradient: "দুর্দান্ত কিছু",
      subtitle: "আপনার কোনো প্রজেক্ট প্ল্যান, কাজের সুযোগ বা অন্য কোনো প্রশ্ন থাকলে সানন্দে মেসেজ দিন!",
      nameLabel: "আপনার নাম",
      emailLabel: "আপনার ইমেইল",
      subjectLabel: "বিষয়",
      messageLabel: "মেসেজ",
      sendBtn: "মেসেজ পাঠান",
      successMsg: "ধন্যবাদ! আপনার মেসেজটি সফলভাবে পাঠানো হয়েছে।",
    },
    footer: {
      rights: "সর্বস্বত্ব সংরক্ষিত।",
      crafted: "Next.js এবং React দিয়ে নির্মিত।",
    }
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const storedLang = localStorage.getItem("language");
    if (storedLang && (storedLang === "en" || storedLang === "bn")) {
      setLanguage(storedLang);
    }
  }, []);

  const changeLanguage = (lang) => {
    if (lang === "en" || lang === "bn") {
      setLanguage(lang);
      localStorage.setItem("language", lang);
    }
  };

  const toggleLanguage = () => {
    const nextLang = language === "en" ? "bn" : "en";
    changeLanguage(nextLang);
  };

  const t = translations[language] || translations.en;

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    return {
      language: "en",
      changeLanguage: () => {},
      toggleLanguage: () => {},
      t: translations.en
    };
  }
  return context;
};
