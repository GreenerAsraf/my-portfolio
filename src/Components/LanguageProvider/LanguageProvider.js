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
      expert: "Expert",
      proficient: "Proficient",
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
    experience: {
      label: "Journey",
      heading: "Experience & Education",
      t1Year: "Jan 2026 - Jun 2026",
      t1Title: "Next Level AI-Driven Software Engineering Bootcamp",
      t1Company: "Programming Hero",
      t1Desc: "Acquired advanced software engineering skills, focusing on clean architecture, AI integration, design patterns, and enterprise-grade software development methodologies.",
      t2Year: "2022 - Present",
      t2Title: "Complete Web Development Course",
      t2Company: "Programming Hero",
      t2Desc: "Built a solid foundation in modern full-stack web development. Learnt HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and Next.js through building real-world projects.",
      t3Year: "Sep 2022 - Oct 2022",
      t3Title: "JavaScript Course (Batch 2, Roll-37)",
      t3Company: "NACTAR",
      t3Desc: "Completed intensive training on core programming concepts, algorithms, data structures, and DOM manipulation in JavaScript.",
      t4Year: "2015 - 2016",
      t4Title: "MBA in Accounting",
      t4Company: "University of Chittagong",
      t4Desc: "Master of Business Administration, specializing in Accounting. Developed strong analytical thinking, problem-solving skills, and financial systems knowledge.",
      t5Year: "2010 - 2014",
      t5Title: "BBA in Accounting",
      t5Company: "University of Chittagong",
      t5Desc: "Bachelor of Business Administration, specializing in Accounting. Acquired fundamental business management, analytical, and data organization concepts.",
    },
    footer: {
      rights: "All Rights Reserved.",
      crafted: "Crafted with passion using Next.js & React.",
    },
    articles: {
      label: "Insights & Writing",
      heading: "Some of",
      headingGradient: "my articles",
      viewAll: "View all articles",
    },
    stats: {
      label: "By the Numbers",
      heading: "Turning ideas into",
      headingGradient: "real results",
      s1Label: "Years Experience",
      s1Desc: "Building production apps",
      s2Label: "Projects Delivered",
      s2Desc: "Across web & mobile",
      s3Label: "Happy Clients",
      s3Desc: "Freelance & agency",
      s4Label: "Passion for Code",
      s4Desc: "Always learning & growing",
    },
    testimonials: {
      label: "Feedback",
      heading: "What People Say",
      t1Quote: "Asraf is an exceptional full-stack developer. His attention to detail and ability to craft beautiful, performant user interfaces is truly unmatched. He elevated our entire web platform.",
      t1Author: "Sarah Jenkins",
      t1Role: "Product Manager at TechNova",
      t2Quote: "Working with Asraf was a breeze. He takes complex backend requirements and turns them into elegant, scalable solutions. A true professional who always delivers on time.",
      t2Author: "Michael Chang",
      t2Role: "CTO, Creative Agency",
      t3Quote: "One of the most dedicated engineers I've worked with. Not only is his code clean and maintainable, but his eye for modern design brings every project to life.",
      t3Author: "Elena Rodriguez",
      t3Role: "Lead Designer, Freelance Client"
    },
    skillCategories: {
      expertise: "Expertise",
      comfortable: "Comfortable",
      familiar: "Familiar"
    },
    pricingPlans: {
      heading: "Pricing Plans",
      mostPopular: "Most Popular",
      choosePlan: "Choose Plan",
      plans: [
        {
          name: "Basic",
          price: "$29",
          features: [
            "Single Page Application",
            "Responsive Design",
            "Basic SEO",
            "1 Month Support"
          ]
        },
        {
          name: "Professional",
          price: "$99",
          features: [
            "Up to 5 Pages",
            "Advanced SEO & Performance",
            "Content Management System",
            "6 Months Support"
          ]
        },
        {
          name: "Premium",
          price: "$199",
          features: [
            "Unlimited Pages",
            "Custom Animations",
            "E-commerce Integration",
            "1 Year Priority Support"
          ]
        }
      ]
    },
    portfolio: {
      heading: "My Works",
      filters: {
        all: "All",
        next: "Next.js",
        react: "React",
        mern: "MERN"
      }
    },
    blog: {
      label: "Writings & Thoughts",
      heading: "My",
      headingGradient: "Blogs",
      subtitle: "Exploring web development, software engineering best practices, and the journey of building scalable applications."
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
      expert: "বিশেষজ্ঞ",
      proficient: "দক্ষ",
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
    experience: {
      label: "যাত্রা",
      heading: "অভিজ্ঞতা এবং শিক্ষা",
      t1Year: "জানুয়ারি ২০২৬ - জুন ২০২৬",
      t1Title: "নেক্সট লেভেল এআই-চালিত সফটওয়্যার ইঞ্জিনিয়ারিং বুটক্যাম্প",
      t1Company: "প্রোগ্রামিং হিরো",
      t1Desc: "ক্লিন আর্কিটেকচার, এআই ইন্টিগ্রেশন, ডিজাইন প্যাটার্ন এবং এন্টারপ্রাইজ-গ্রেড সফটওয়্যার ডেভেলপমেন্ট পদ্ধতির উপর মনোযোগ দিয়ে উন্নত সফটওয়্যার ইঞ্জিনিয়ারিং দক্ষতা অর্জন করেছি।",
      t2Year: "২০২২ - বর্তমান",
      t2Title: "কমপ্লিট ওয়েব ডেভেলপমেন্ট কোর্স",
      t2Company: "প্রোগ্রামিং হিরো",
      t2Desc: "আধুনিক ফুল-স্ট্যাক ওয়েব ডেভেলপমেন্টে একটি শক্ত ভিত্তি তৈরি করেছি। রিয়েল-ওয়ার্ল্ড প্রজেক্ট তৈরির মাধ্যমে HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, এবং Next.js শিখেছি।",
      t3Year: "সেপ্টেম্বর ২০২২ - অক্টোবর ২০২২",
      t3Title: "জাভাস্ক্রিপ্ট কোর্স (ব্যাচ ২, রোল-৩৭)",
      t3Company: "ন্যাকটার",
      t3Desc: "জাভাস্ক্রিপ্টে কোর প্রোগ্রামিং ধারণা, অ্যালগরিদম, ডেটা স্ট্রাকচার এবং ডম ম্যানিপুলেশনের উপর নিবিড় প্রশিক্ষণ সম্পন্ন করেছি।",
      t4Year: "২০১৫ - ২০১৬",
      t4Title: "হিসাববিজ্ঞানে এমবিএ",
      t4Company: "চট্টগ্রাম বিশ্ববিদ্যালয়",
      t4Desc: "হিসাববিজ্ঞানে স্পেশালাইজেশন সহ মাস্টার অফ বিজনেস অ্যাডমিনিস্ট্রেশন। শক্তিশালী বিশ্লেষণাত্মক চিন্তাভাবনা, সমস্যা সমাধানের দক্ষতা এবং আর্থিক ব্যবস্থা সম্পর্কে জ্ঞান বিকাশ করেছি।",
      t5Year: "২০১০ - ২০১৪",
      t5Title: "হিসাববিজ্ঞানে বিবিএ",
      t5Company: "চট্টগ্রাম বিশ্ববিদ্যালয়",
      t5Desc: "হিসাববিজ্ঞানে স্পেশালাইজেশন সহ ব্যাচেলর অফ বিজনেস অ্যাডমিনিস্ট্রেশন। মৌলিক ব্যবসায় ব্যবস্থাপনা, বিশ্লেষণাত্মক এবং ডেটা অর্গানাইজেশনের ধারণা অর্জন করেছি।",
    },
    footer: {
      rights: "সর্বস্বত্ব সংরক্ষিত।",
      crafted: "Next.js এবং React দিয়ে নির্মিত।",
    },
    articles: {
      label: "অন্তর্দৃষ্টি এবং লেখা",
      heading: "আমার কিছু",
      headingGradient: "প্রবন্ধ",
      viewAll: "সব প্রবন্ধ দেখুন",
    },
    stats: {
      label: "সংখ্যায় সংখ্যায়",
      heading: "ধারণাকে রূপান্তর করি",
      headingGradient: "বাস্তব ফলাফলে",
      s1Label: "বছরের অভিজ্ঞতা",
      s1Desc: "প্রোডাকশন অ্যাপ তৈরি",
      s2Label: "প্রজেক্ট সম্পন্ন",
      s2Desc: "ওয়েব এবং মোবাইলে",
      s3Label: "সন্তুষ্ট গ্রাহক",
      s3Desc: "ফ্রিল্যান্স এবং এজেন্সি",
      s4Label: "কোডের প্রতি আবেগ",
      s4Desc: "সর্বদা শিখছি এবং বেড়ে উঠছি",
    },
    testimonials: {
      label: "মতামত",
      heading: "লোকেরা যা বলে",
      t1Quote: "আশরাফ একজন অসাধারণ ফুল-স্ট্যাক ডেভেলপার। তার কাজের প্রতি মনোযোগ এবং সুন্দর ও পারফরম্যান্ট ইউজার ইন্টারফেস তৈরি করার দক্ষতা সত্যিই অদ্বিতীয়। সে আমাদের পুরো ওয়েব প্ল্যাটফর্মকে উন্নত করেছে।",
      t1Author: "সারা জেনকিন্স",
      t1Role: "প্রোডাক্ট ম্যানেজার, টেখনোভা",
      t2Quote: "আশরাফের সাথে কাজ করা খুব সহজ ছিল। সে জটিল ব্যাকএন্ড প্রয়োজনীয়তাগুলো বুঝতে পারে এবং সেগুলোকে মার্জিত ও স্কেলেবল সমাধানে পরিণত করে। একজন সত্যিকারের পেশাদার যে সবসময় সময়মতো কাজ ডেলিভারি দেয়।",
      t2Author: "মাইকেল চ্যাং",
      t2Role: "সিটিও, ক্রিয়েটিভ এজেন্সি",
      t3Quote: "আমার সাথে কাজ করা সবচেয়ে নিবেদিত প্রকৌশলীদের মধ্যে একজন। তার কোড যেমন পরিষ্কার এবং মেনটেইনযোগ্য, তেমনি আধুনিক ডিজাইনের প্রতি তার দৃষ্টি প্রতিটি প্রজেক্টকে জীবন্ত করে তোলে।",
      t3Author: "এলেনা রড্রিগেজ",
      t3Role: "লিড ডিজাইনার, ফ্রিল্যান্স ক্লায়েন্ট"
    },
    skillCategories: {
      expertise: "বিশেষজ্ঞতা",
      comfortable: "স্বাচ্ছন্দ্যময়",
      familiar: "পরিচিত"
    },
    pricingPlans: {
      heading: "মূল্য তালিকা",
      mostPopular: "সবচেয়ে জনপ্রিয়",
      choosePlan: "প্ল্যান বেছে নিন",
      plans: [
        {
          name: "বেসিক",
          price: "$২৯",
          features: [
            "সিঙ্গেল পেজ অ্যাপ্লিকেশন",
            "রেসপন্সিভ ডিজাইন",
            "বেসিক এসইও (SEO)",
            "১ মাসের সাপোর্ট"
          ]
        },
        {
          name: "প্রফেশনাল",
          price: "$৯৯",
          features: [
            "৫টি পেজ পর্যন্ত",
            "অ্যাডভান্সড এসইও এবং পারফরম্যান্স",
            "কন্টেন্ট ম্যানেজমেন্ট সিস্টেম",
            "৬ মাসের সাপোর্ট"
          ]
        },
        {
          name: "প্রিমিয়াম",
          price: "$১৯৯",
          features: [
            "আনলিমিটেড পেজ",
            "কাস্টম অ্যানিমেশন",
            "ই-কমার্স ইন্টিগ্রেশন",
            "১ বছরের প্রায়োরিটি সাপোর্ট"
          ]
        }
      ]
    },
    portfolio: {
      heading: "আমার কাজসমূহ",
      filters: {
        all: "সব",
        next: "Next.js",
        react: "React",
        mern: "MERN"
      }
    },
    blog: {
      label: "লেখা এবং ভাবনা",
      heading: "আমার",
      headingGradient: "ব্লগসমূহ",
      subtitle: "ওয়েব ডেভেলপমেন্ট, সফটওয়্যার ইঞ্জিনিয়ারিংয়ের সেরা অভ্যাস এবং স্কেলেবল অ্যাপ্লিকেশন তৈরির যাত্রা অন্বেষণ।"
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
