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
    "hero.title1": "Making friends,",
    "hero.title2": "Chosen.",
    "hero.subtitle": "No more endless scrolling. Compare two profiles, pick what resonates, and let your choices shape your friend circle.",
    "hero.download": "Download App",
    "hero.howItWorks": "How It Works",
    "hero.leagues": "Leagues",
    "hero.rating": "Rating",
    "hero.scale": "Scale",
    "hero.tryIt": "Try it",
    "hero.tapToChoose": "Tap to choose your preference",
    "hero.chosen": "chosen!",
    "hero.scrollToExplore": "Scroll to explore",
    
    // How It Works
    "howItWorks.badge": "How It Works",
    "howItWorks.title1": "Three steps to",
    "howItWorks.title2": "better friendships",
    "howItWorks.subtitle": "Our unique comparison system learns your preferences and helps you make friends with people who are truly compatible.",
    "howItWorks.step1.title": "Compare",
    "howItWorks.step1.desc": "Two profiles appear side by side. No endless scrolling – just pick the one that fits you best.",
    "howItWorks.step2.title": "Rate",
    "howItWorks.step2.desc": "Every choice updates ELO ratings. Your preferences shape your friend circle.",
    "howItWorks.step3.title": "Make Friends",
    "howItWorks.step3.desc": "Make friends with people at your level. Quality over quantity – find your best friend fit.",
    "howItWorks.cta": "See it in action",
    
    // Compare Showcase
    "compare.badge": "The Compare Experience",
    "compare.title1": "Forced choices,",
    "compare.title2": "better friendships",
    "compare.subtitle": "No more endless scrolling. We show you two profiles at a time — pick the one you want to be friends with. Your choices shape your friend circle using our sophisticated ELO rating system.",
    "compare.feature1.title": "Two Profiles, One Choice",
    "compare.feature1.desc": "Profiles appear side by side. Tap on the one you prefer.",
    "compare.feature2.title": "ELO Rating System",
    "compare.feature2.desc": "Every choice updates both profiles' ratings on a 0-10,000 scale.",
    "compare.feature3.title": "Instant Feedback",
    "compare.feature3.desc": "See rating changes after each choice. Tap to reveal exact ratings.",
    "compare.round": "Round",
    "compare.tapToChoose": "Tap a profile to choose",
    "compare.greatChoice": "Great choice!",
    "compare.ratingsRevealed": "Ratings revealed! Next round coming...",
    "compare.eloRating": "ELO Rating",
    
    // Stats Teaser
    "stats.badge": "Detailed Analytics",
    "stats.title1": "Know your",
    "stats.title2": "worth",
    "stats.subtitle": "Data-driven insights into your friend-building performance. Track your rating trends, analyze your wins, and understand what makes you stand out.",
    "stats.feature1.title": "Rating History",
    "stats.feature1.desc": "Track your ELO over time",
    "stats.feature2.title": "Win Rate Analysis",
    "stats.feature2.desc": "See your performance breakdown",
    "stats.feature3.title": "Photo Performance",
    "stats.feature3.desc": "Learn which photos work best",
    "stats.cta": "Explore Stats",
    "stats.statistics": "Statistics",
    "stats.currentRating": "Current Rating",
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
    "hero.rating": "Peringkat",
    "hero.scale": "Skala",
    "hero.tryIt": "Coba",
    "hero.tapToChoose": "Ketuk untuk memilih preferensi Anda",
    "hero.chosen": "dipilih!",
    "hero.scrollToExplore": "Gulir untuk menjelajahi",
    
    // How It Works
    "howItWorks.badge": "Cara Kerjanya",
    "howItWorks.title1": "Tiga langkah menuju",
    "howItWorks.title2": "persahabatan yang lebih baik",
    "howItWorks.subtitle": "Sistem perbandingan unik kami mempelajari preferensi Anda dan membantu Anda membuat teman dengan orang yang benar-benar cocok.",
    "howItWorks.step1.title": "Bandingkan",
    "howItWorks.step1.desc": "Dua profil muncul berdampingan. Tidak ada scroll tanpa akhir – cukup pilih yang paling sesuai untuk Anda.",
    "howItWorks.step2.title": "Nilai",
    "howItWorks.step2.desc": "Setiap pilihan memperbarui peringkat ELO. Preferensi Anda membentuk lingkaran teman Anda.",
    "howItWorks.step3.title": "Buat Teman",
    "howItWorks.step3.desc": "Buat teman dengan orang yang setara dengan Anda. Kualitas lebih penting daripada kuantitas – temukan teman terbaik Anda.",
    "howItWorks.cta": "Lihat dalam aksi",
    
    // Compare Showcase
    "compare.badge": "Pengalaman Membandingkan",
    "compare.title1": "Pilihan terpaksa,",
    "compare.title2": "persahabatan yang lebih baik",
    "compare.subtitle": "Tidak ada lagi scroll tanpa akhir. Kami menampilkan dua profil sekaligus — pilih yang ingin Anda jadikan teman. Pilihan Anda membentuk lingkaran teman Anda menggunakan sistem peringkat ELO canggih kami.",
    "compare.feature1.title": "Dua Profil, Satu Pilihan",
    "compare.feature1.desc": "Profil muncul berdampingan. Ketuk yang Anda sukai.",
    "compare.feature2.title": "Sistem Peringkat ELO",
    "compare.feature2.desc": "Setiap pilihan memperbarui peringkat kedua profil pada skala 0-10.000.",
    "compare.feature3.title": "Umpan Balik Instan",
    "compare.feature3.desc": "Lihat perubahan peringkat setelah setiap pilihan. Ketuk untuk mengungkapkan peringkat yang tepat.",
    "compare.round": "Putaran",
    "compare.tapToChoose": "Ketuk profil untuk memilih",
    "compare.greatChoice": "Pilihan bagus!",
    "compare.ratingsRevealed": "Peringkat terungkap! Putaran berikutnya datang...",
    "compare.eloRating": "Peringkat ELO",
    
    // Stats Teaser
    "stats.badge": "Analitik Terperinci",
    "stats.title1": "Ketahui",
    "stats.title2": "nilai Anda",
    "stats.subtitle": "Wawasan berbasis data tentang performa membangun pertemanan Anda. Lacak tren peringkat Anda, analisis kemenangan Anda, dan pahami apa yang membuat Anda menonjol.",
    "stats.feature1.title": "Riwayat Peringkat",
    "stats.feature1.desc": "Lacak ELO Anda dari waktu ke waktu",
    "stats.feature2.title": "Analisis Tingkat Kemenangan",
    "stats.feature2.desc": "Lihat rincian kinerja Anda",
    "stats.feature3.title": "Kinerja Foto",
    "stats.feature3.desc": "Pelajari foto mana yang paling berhasil",
    "stats.cta": "Jelajahi Statistik",
    "stats.statistics": "Statistik",
    "stats.currentRating": "Peringkat Saat Ini",
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
    "hero.rating": "评分",
    "hero.scale": "规模",
    "hero.tryIt": "试试",
    "hero.tapToChoose": "点击选择您的偏好",
    "hero.chosen": "已选择！",
    "hero.scrollToExplore": "滚动探索",
    
    // How It Works
    "howItWorks.badge": "工作原理",
    "howItWorks.title1": "三步走向",
    "howItWorks.title2": "更好的友谊",
    "howItWorks.subtitle": "我们独特的比较系统学习您的偏好，并帮助您与真正合适的人交朋友。",
    "howItWorks.step1.title": "比较",
    "howItWorks.step1.desc": "两个个人资料并排出现。无需无尽滚动——选择您认为最合适的人。",
    "howItWorks.step2.title": "评分",
    "howItWorks.step2.desc": "每次选择都会更新ELO评分。您的偏好塑造您的朋友圈。",
    "howItWorks.step3.title": "交朋友",
    "howItWorks.step3.desc": "在同一水平的人那里交友。质量胜过数量——找到更好的朋友。",
    "howItWorks.cta": "查看实际操作",
    
    // Compare Showcase
    "compare.badge": "比较体验",
    "compare.title1": "强制选择，",
    "compare.title2": "更好的友谊",
    "compare.subtitle": "不再无尽滚动。我们一次向您展示两个个人资料——选择您想成为朋友的人。您的选择会通过我们的ELO评分系统塑造您的朋友圈。",
    "compare.feature1.title": "两个个人资料，一个选择",
    "compare.feature1.desc": "个人资料并排出现。点击您喜欢的那个。",
    "compare.feature2.title": "ELO评分系统",
    "compare.feature2.desc": "每次选择都会在0-10,000的范围内更新两个个人资料的评分。",
    "compare.feature3.title": "即时反馈",
    "compare.feature3.desc": "每次选择后查看评分变化。点击以显示确切的评分。",
    "compare.round": "轮",
    "compare.tapToChoose": "点击个人资料进行选择",
    "compare.greatChoice": "好选择！",
    "compare.ratingsRevealed": "评分已显示！下一轮即将开始...",
    "compare.eloRating": "ELO评分",
    
    // Stats Teaser
    "stats.badge": "详细分析",
    "stats.title1": "了解您的",
    "stats.title2": "价值",
    "stats.subtitle": "基于数据的交友表现洞察。跟踪您的评分趋势，分析您的结果，并了解是什么让您脱颖而出。",
    "stats.feature1.title": "评分历史",
    "stats.feature1.desc": "跟踪您的ELO随时间的变化",
    "stats.feature2.title": "胜率分析",
    "stats.feature2.desc": "查看您的表现细分",
    "stats.feature3.title": "照片表现",
    "stats.feature3.desc": "了解哪些照片效果最好",
    "stats.cta": "探索统计",
    "stats.statistics": "统计",
    "stats.currentRating": "当前评分",
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
    "hero.rating": "Note",
    "hero.scale": "Échelle",
    "hero.tryIt": "Essayez",
    "hero.tapToChoose": "Appuyez pour choisir votre préférence",
    "hero.chosen": "choisi !",
    "hero.scrollToExplore": "Faites défiler pour explorer",
    
    // How It Works
    "howItWorks.badge": "Comment ça marche",
    "howItWorks.title1": "Trois étapes vers",
    "howItWorks.title2": "de meilleures amitiés",
    "howItWorks.subtitle": "Notre système de comparaison unique apprend vos préférences et vous aide à vous faire des amis avec des personnes vraiment compatibles.",
    "howItWorks.step1.title": "Comparer",
    "howItWorks.step1.desc": "Deux profils apparaissent côte à côte. Pas de défilement sans fin – choisissez simplement celui qui vous ressemble le plus.",
    "howItWorks.step2.title": "Noter",
    "howItWorks.step2.desc": "Chaque choix met à jour les notes ELO. Vos préférences façonnent votre cercle d'amis.",
    "howItWorks.step3.title": "Se faire des amis",
    "howItWorks.step3.desc": "Faites des amis avec des personnes de votre niveau. La qualité plutôt que la quantité — trouvez votre meilleure amitié.",
    "howItWorks.cta": "Voir en action",
    
    // Compare Showcase
    "compare.badge": "L'expérience de comparaison",
    "compare.title1": "Choix forcés,",
    "compare.title2": "meilleures amitiés",
    "compare.subtitle": "Fini le défilement sans fin. Nous vous montrons deux profils à la fois — choisissez celui avec qui vous voulez vous faire des amis. Vos choix façonnent votre cercle d'amis grâce à notre système de notation ELO sophistiqué.",
    "compare.feature1.title": "Deux profils, un choix",
    "compare.feature1.desc": "Les profils apparaissent côte à côte. Appuyez sur celui que vous préférez.",
    "compare.feature2.title": "Système de notation ELO",
    "compare.feature2.desc": "Chaque choix met à jour les notes des deux profils sur une échelle de 0 à 10 000.",
    "compare.feature3.title": "Retour instantané",
    "compare.feature3.desc": "Voyez les changements de note après chaque choix. Appuyez pour révéler les notes exactes.",
    "compare.round": "Tour",
    "compare.tapToChoose": "Appuyez sur un profil pour choisir",
    "compare.greatChoice": "Excellent choix !",
    "compare.ratingsRevealed": "Notes révélées ! Prochain tour à venir...",
    "compare.eloRating": "Note ELO",
    
    // Stats Teaser
    "stats.badge": "Analyses détaillées",
    "stats.title1": "Connaissez votre",
    "stats.title2": "valeur",
    "stats.subtitle": "Des informations basées sur les données concernant votre performance pour créer des amitiés. Suivez vos tendances de notation, analysez vos résultats et comprenez ce qui vous distingue.",
    "stats.feature1.title": "Historique des notes",
    "stats.feature1.desc": "Suivez votre ELO dans le temps",
    "stats.feature2.title": "Analyse du taux de victoire",
    "stats.feature2.desc": "Voyez la répartition de vos performances",
    "stats.feature3.title": "Performance des photos",
    "stats.feature3.desc": "Découvrez quelles photos fonctionnent le mieux",
    "stats.cta": "Explorer les statistiques",
    "stats.statistics": "Statistiques",
    "stats.currentRating": "Note actuelle",
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
