"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "en" | "id" | "zh" | "fr";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.date": "Friends",
    "nav.stats": "Stats",
    "nav.pricing": "Pricing",
    "nav.support": "Support",
    
    // Hero Section
    "hero.badge": "A new way to make friends",
    "hero.title1": "Your Snapshot,",
    "hero.title2": "Determined.",
    "hero.subtitle": "Find where you stand. Compare two profiles, get honest feedback, and discover how people actually see you.",
    "hero.download": "Download App",
    "hero.howItWorks": "How It Works",
    "hero.leagues": "Leagues",
    "hero.rating": "Score",
    "hero.scale": "Scale",
    "hero.tryIt": "Try it",
    "hero.tapToChoose": "Tap to choose your preference",
    "hero.chosen": "chosen!",
    "hero.scrollToExplore": "Scroll to explore",
    
    // Compare Showcase
    "compare.badge": "The Compare Experience",
    "compare.title1": "Forced choices,",
    "compare.title2": "better friendships",
    "compare.subtitle": "No more endless scrolling. We show you two profiles at a time — pick the one you want to be friends with. Your choices shape your friend circle using our match score system.",
    "compare.feature1.title": "Two Profiles, One Choice",
    "compare.feature1.desc": "Profiles appear side by side. Tap on the one you prefer.",
    "compare.feature2.title": "Match Score System",
    "compare.feature2.desc": "Every choice updates both profiles' match scores on a 0-10,000 scale.",
    "compare.feature3.title": "Instant Feedback",
    "compare.feature3.desc": "See match score updates after each choice. Tap to reveal exact scores.",
    "compare.round": "Round",
    "compare.tapToChoose": "Tap a profile to choose",
    "compare.greatChoice": "Great choice!",
    "compare.ratingsRevealed": "Scores revealed! Next round coming...",
    "compare.eloRating": "Match Score",
    
    // Stats Teaser
    "stats.badge": "Audience Insights",
    "stats.title1": "Know who's",
    "stats.title2": "into you",
    "stats.subtitle": "See exactly who is choosing you. Break down your performance by ethnicity, age, and background — so you know where you stand.",
    "stats.feature1.title": "Choice Rate by Ethnicity",
    "stats.feature1.desc": "See what % of each group chose you vs. passed.",
    "stats.feature2.title": "Age Breakdown",
    "stats.feature2.desc": "Discover which age groups are most into your profile.",
    "stats.feature3.title": "Background Insights",
    "stats.feature3.desc": "Understand your audience across different backgrounds.",
    "stats.cta": "Explore Stats",
    "stats.statistics": "Statistics",
    "stats.currentRating": "Current Score",
    "stats.comparisons": "Comparisons",
    "stats.wins": "Wins",
    "stats.rate": "Rate",
    "stats.winRate": "Win Rate",
    "stats.onFire": "On Fire!",
    "stats.dayStreak": "day streak",
    "stats.thisWeek": "This Week",
    "stats.winRateLabel": "Win Rate",
    
    // Final CTA
    "cta.title1": "Ready to make",
    "cta.title2": "great friends?",
    "cta.subtitle": "Join thousands of people who discovered a better way to make friends. Download Ratch and start comparing today.",
    "cta.downloadOn": "Download on the",
    "cta.appStore": "App Store",
    "cta.trustedBy": "Trusted by thousands of community members worldwide",
    "cta.downloads": "Downloads",
    "cta.matchesMade": "Friends Made",
    
    // Footer
    "footer.navigation": "Navigation",
    "footer.company": "Company",
    "footer.legal": "Legal",
    "footer.contactUs": "Contact us",
    "footer.subscriptions": "Subscriptions",
    "footer.userRights": "User Rights",
    "footer.termsOfService": "Terms of Service",
    "footer.privacyPolicy": "Privacy Policy",
    "footer.thirdPartyServices": "Third-Party Services",
    "footer.compliance": "Compliance",
    "footer.qrCode": "Scan the QR code to get the Ratch app",
  },
  id: {
    // Navigation
    "nav.home": "Beranda",
    "nav.date": "Teman",
    "nav.stats": "Statistik",
    "nav.pricing": "Harga",
    "nav.support": "Dukungan",
    
    // Hero Section
    "hero.badge": "Cara baru untuk membuat teman",
    "hero.title1": "Membuat teman,",
    "hero.title2": "Dipilih.",
    "hero.subtitle": "Tidak ada lagi scroll tanpa akhir. Bandingkan dua profil, pilih yang paling cocok, dan biarkan pilihan Anda membentuk lingkaran teman Anda.",
    "hero.download": "Unduh Aplikasi",
    "hero.howItWorks": "Cara Kerjanya",
    "hero.leagues": "Liga",
    "hero.rating": "Skor",
    "hero.scale": "Skala",
    "hero.tryIt": "Coba",
    "hero.tapToChoose": "Ketuk untuk memilih preferensi Anda",
    "hero.chosen": "dipilih!",
    "hero.scrollToExplore": "Gulir untuk menjelajahi",
    
    // Compare Showcase
    "compare.badge": "Pengalaman Membandingkan",
    "compare.title1": "Pilihan terpaksa,",
    "compare.title2": "persahabatan yang lebih baik",
    "compare.subtitle": "Tidak ada lagi scroll tanpa akhir. Kami menampilkan dua profil sekaligus — pilih yang ingin Anda jadikan teman. Pilihan Anda membentuk lingkaran teman Anda menggunakan sistem skor kecocokan kami yang canggih.",
    "compare.feature1.title": "Dua Profil, Satu Pilihan",
    "compare.feature1.desc": "Profil muncul berdampingan. Ketuk yang Anda sukai.",
    "compare.feature2.title": "Sistem Skor Kecocokan",
    "compare.feature2.desc": "Setiap pilihan memperbarui skor kecocokan kedua profil pada skala 0-10.000.",
    "compare.feature3.title": "Umpan Balik Instan",
    "compare.feature3.desc": "Lihat pembaruan skor kecocokan setelah setiap pilihan. Ketuk untuk mengungkapkan skor yang tepat.",
    "compare.round": "Putaran",
    "compare.tapToChoose": "Ketuk profil untuk memilih",
    "compare.greatChoice": "Pilihan bagus!",
    "compare.ratingsRevealed": "Skor kecocokan terungkap! Putaran berikutnya datang...",
    "compare.eloRating": "Skor Kecocokan",
    
    // Stats Teaser
    "stats.badge": "Analitik Terperinci",
    "stats.title1": "Ketahui",
    "stats.title2": "nilai Anda",
    "stats.subtitle": "Wawasan berbasis data tentang performa membangun pertemanan Anda. Lacak tren skor kecocokan Anda, analisis kemenangan Anda, dan pahami apa yang membuat Anda menonjol.",
    "stats.feature1.title": "Riwayat Peringkat",
    "stats.feature1.desc": "Lacak skor kecocokan Anda dari waktu ke waktu",
    "stats.feature2.title": "Analisis Tingkat Kemenangan",
    "stats.feature2.desc": "Lihat rincian kinerja Anda",
    "stats.feature3.title": "Kinerja Foto",
    "stats.feature3.desc": "Pelajari foto mana yang paling berhasil",
    "stats.cta": "Jelajahi Statistik",
    "stats.statistics": "Statistik",
    "stats.currentRating": "Skor Saat Ini",
    "stats.comparisons": "Perbandingan",
    "stats.wins": "Kemenangan",
    "stats.rate": "Tingkat",
    "stats.winRate": "Tingkat Kemenangan",
    "stats.onFire": "Luar Biasa!",
    "stats.dayStreak": "hari berturut-turut",
    "stats.thisWeek": "Minggu Ini",
    "stats.winRateLabel": "Tingkat Kemenangan",
    
    // Final CTA
    "cta.title1": "Siap membuat",
    "cta.title2": "teman terbaik Anda?",
    "cta.subtitle": "Bergabunglah dengan ribuan orang yang menemukan cara lebih baik untuk membuat teman. Unduh Ratch dan mulai membandingkan hari ini.",
    "cta.downloadOn": "Unduh di",
    "cta.appStore": "App Store",
    "cta.trustedBy": "Dipercaya oleh ribuan anggota komunitas di seluruh dunia",
    "cta.downloads": "Unduhan",
    "cta.matchesMade": "Teman Dibuat",
    
    // Footer
    "footer.navigation": "Navigasi",
    "footer.company": "Perusahaan",
    "footer.legal": "Hukum",
    "footer.contactUs": "Hubungi kami",
    "footer.subscriptions": "Langganan",
    "footer.userRights": "Hak Pengguna",
    "footer.termsOfService": "Ketentuan Layanan",
    "footer.privacyPolicy": "Kebijakan Privasi",
    "footer.thirdPartyServices": "Layanan Pihak Ketiga",
    "footer.compliance": "Kepatuhan",
    "footer.qrCode": "Pindai kode QR untuk mendapatkan aplikasi Ratch",
  },
  zh: {
    // Navigation
    "nav.home": "首页",
    "nav.date": "朋友",
    "nav.stats": "统计",
    "nav.pricing": "定价",
    "nav.support": "支持",
    
    // Hero Section
    "hero.badge": "一种全新的交友方式",
    "hero.title1": "交朋友，",
    "hero.title2": "已选定。",
    "hero.subtitle": "不再无尽滚动。比较两个个人资料，选择与您共鸣的，并开始建立您的朋友圈。",
    "hero.download": "下载应用",
    "hero.howItWorks": "工作原理",
    "hero.leagues": "联盟",
    "hero.rating": "得分",
    "hero.scale": "规模",
    "hero.tryIt": "试试",
    "hero.tapToChoose": "点击选择您的偏好",
    "hero.chosen": "已选择！",
    "hero.scrollToExplore": "滚动探索",
    
    // Compare Showcase
    "compare.badge": "比较体验",
    "compare.title1": "强制选择，",
    "compare.title2": "更好的友谊",
    "compare.subtitle": "不再无尽滚动。我们一次向您展示两个个人资料——选择您想成为朋友的人。您的选择会通过我们的匹配得分系统塑造您的朋友圈。",
    "compare.feature1.title": "两个个人资料，一个选择",
    "compare.feature1.desc": "个人资料并排出现。点击您喜欢的那个。",
    "compare.feature2.title": "匹配得分系统",
    "compare.feature2.desc": "每次选择都会在0-10,000的范围内更新两个个人资料的评分。",
    "compare.feature3.title": "即时反馈",
    "compare.feature3.desc": "每次选择后查看评分变化。点击以显示确切的评分。",
    "compare.round": "轮",
    "compare.tapToChoose": "点击个人资料进行选择",
    "compare.greatChoice": "好选择！",
    "compare.ratingsRevealed": "评分已显示！下一轮即将开始...",
    "compare.eloRating": "匹配得分",
    
    // Stats Teaser
    "stats.badge": "详细分析",
    "stats.title1": "了解您的",
    "stats.title2": "价值",
    "stats.subtitle": "基于数据的交友表现洞察。跟踪您的评分趋势，分析您的结果，并了解是什么让您脱颖而出。",
    "stats.feature1.title": "评分历史",
    "stats.feature1.desc": "跟踪您的匹配得分随时间的变化",
    "stats.feature2.title": "胜率分析",
    "stats.feature2.desc": "查看您的表现细分",
    "stats.feature3.title": "照片表现",
    "stats.feature3.desc": "了解哪些照片效果最好",
    "stats.cta": "探索统计",
    "stats.statistics": "统计",
    "stats.currentRating": "当前得分",
    "stats.comparisons": "比较",
    "stats.wins": "胜利",
    "stats.rate": "比率",
    "stats.winRate": "胜率",
    "stats.onFire": "火热！",
    "stats.dayStreak": "天连胜",
    "stats.thisWeek": "本周",
    "stats.winRateLabel": "胜率",
    
    // Final CTA
    "cta.title1": "准备好结交",
    "cta.title2": "完美的朋友？",
    "cta.subtitle": "加入数千名用户，他们发现了更好的交友方式。立即下载Ratch并开始比较。",
    "cta.downloadOn": "在",
    "cta.appStore": "App Store下载",
    "cta.trustedBy": "受到全球数千名用户的信任",
    "cta.downloads": "下载量",
    "cta.matchesMade": "朋友已建立",
    
    // Footer
    "footer.navigation": "导航",
    "footer.company": "公司",
    "footer.legal": "法律",
    "footer.contactUs": "联系我们",
    "footer.subscriptions": "订阅",
    "footer.userRights": "用户权利",
    "footer.termsOfService": "服务条款",
    "footer.privacyPolicy": "隐私政策",
    "footer.thirdPartyServices": "第三方服务",
    "footer.compliance": "合规",
    "footer.qrCode": "扫描二维码获取Ratch应用",
  },
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.date": "Amis",
    "nav.stats": "Statistiques",
    "nav.pricing": "Tarifs",
    "nav.support": "Support",
    
    // Hero Section
    "hero.badge": "Une nouvelle façon de se faire des amis",
    "hero.title1": "Se faire des amis,",
    "hero.title2": "Choisi.",
    "hero.subtitle": "Fini le défilement sans fin. Comparez deux profils, choisissez ce qui vous ressemble, et commencez à construire votre cercle d'amis.",
    "hero.download": "Télécharger l'application",
    "hero.howItWorks": "Comment ça marche",
    "hero.leagues": "Ligues",
    "hero.rating": "Score",
    "hero.scale": "Échelle",
    "hero.tryIt": "Essayez",
    "hero.tapToChoose": "Appuyez pour choisir votre préférence",
    "hero.chosen": "choisi !",
    "hero.scrollToExplore": "Faites défiler pour explorer",
    
    // Compare Showcase
    "compare.badge": "L'expérience de comparaison",
    "compare.title1": "Choix forcés,",
    "compare.title2": "meilleures amitiés",
    "compare.subtitle": "Fini le défilement sans fin. Nous vous montrons deux profils à la fois — choisissez celui avec qui vous voulez vous faire des amis. Vos choix façonnent votre cercle d'amis grâce à notre système de score de compatibilité.",
    "compare.feature1.title": "Deux profils, un choix",
    "compare.feature1.desc": "Les profils apparaissent côte à côte. Appuyez sur celui que vous préférez.",
    "compare.feature2.title": "Système de score de compatibilité",
    "compare.feature2.desc": "Chaque choix met à jour les scores des deux profils sur une échelle de 0 à 10 000.",
    "compare.feature3.title": "Retour instantané",
    "compare.feature3.desc": "Voyez les mises à jour de score après chaque choix. Appuyez pour révéler les scores exacts.",
    "compare.round": "Tour",
    "compare.tapToChoose": "Appuyez sur un profil pour choisir",
    "compare.greatChoice": "Excellent choix !",
    "compare.ratingsRevealed": "Scores révélés ! Prochain tour à venir...",
    "compare.eloRating": "Score de compatibilité",
    
    // Stats Teaser
    "stats.badge": "Analyses détaillées",
    "stats.title1": "Connaissez votre",
    "stats.title2": "valeur",
    "stats.subtitle": "Des informations basées sur les données concernant votre performance pour créer des amitiés. Suivez vos tendances de score, analysez vos résultats et comprenez ce qui vous distingue.",
    "stats.feature1.title": "Historique des scores",
    "stats.feature1.desc": "Suivez votre score de compatibilité dans le temps",
    "stats.feature2.title": "Analyse du taux de victoire",
    "stats.feature2.desc": "Voyez la répartition de vos performances",
    "stats.feature3.title": "Performance des photos",
    "stats.feature3.desc": "Découvrez quelles photos fonctionnent le mieux",
    "stats.cta": "Explorer les statistiques",
    "stats.statistics": "Statistiques",
    "stats.currentRating": "Score actuel",
    "stats.comparisons": "Comparaisons",
    "stats.wins": "Victoires",
    "stats.rate": "Taux",
    "stats.winRate": "Taux de victoire",
    "stats.onFire": "En feu !",
    "stats.dayStreak": "jours consécutifs",
    "stats.thisWeek": "Cette semaine",
    "stats.winRateLabel": "Taux de victoire",
    
    // Final CTA
    "cta.title1": "Prêt à vous faire",
    "cta.title2": "de vrais amis ?",
    "cta.subtitle": "Rejoignez des milliers de personnes qui ont découvert une meilleure façon de se faire des amis. Téléchargez Ratch et commencez à comparer dès aujourd'hui.",
    "cta.downloadOn": "Télécharger sur",
    "cta.appStore": "App Store",
    "cta.trustedBy": "Approuvé par des milliers de membres de la communauté dans le monde",
    "cta.downloads": "Téléchargements",
    "cta.matchesMade": "Amis créés",
    
    // Footer
    "footer.navigation": "Navigation",
    "footer.company": "Entreprise",
    "footer.legal": "Légal",
    "footer.contactUs": "Nous contacter",
    "footer.subscriptions": "Abonnements",
    "footer.userRights": "Droits des utilisateurs",
    "footer.termsOfService": "Conditions d'utilisation",
    "footer.privacyPolicy": "Politique de confidentialité",
    "footer.thirdPartyServices": "Services tiers",
    "footer.compliance": "Conformité",
    "footer.qrCode": "Scannez le code QR pour obtenir l'application Ratch",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    // Load language from localStorage on mount
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && ["en", "id", "zh", "fr"].includes(savedLanguage)) {
      setLanguageState(savedLanguage);
      // Update HTML lang attribute
      if (typeof document !== "undefined") {
        document.documentElement.lang = savedLanguage;
      }
    } else {
      // Set default language
      if (typeof document !== "undefined") {
        document.documentElement.lang = "en";
      }
    }
  }, []);

  useEffect(() => {
    // Update HTML lang attribute whenever language changes
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
    }
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return translations[language]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
