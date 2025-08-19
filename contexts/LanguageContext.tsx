"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type Locale = "en" | "zh";

interface Messages {
  navigation: {
    home: string;
    livingGuide: string;
    tools: string;
    tourism: string;
    community: string;
  };
  home: {
    title: string;
    subtitle: string;
    description: string;
    getStarted: string;
    learnMore: string;
    features: {
      livingGuide: {
        title: string;
        description: string;
      };
      practicalTools: {
        title: string;
        description: string;
      };
      tourismInfo: {
        title: string;
        description: string;
      };
    };
  };
  features: {
    title: string;
    subtitle: string;
    banking: {
      title: string;
      openAccount: string;
      popularBanks: string;
      items: string[];
    };
    housing: {
      title: string;
      popularAreas: string;
      rentalProcess: string;
      areas: string[];
      process: string[];
    };
    transport: {
      title: string;
      publicTransport: string;
      taxiServices: string;
      publicItems: string[];
      taxiItems: string[];
    };
    healthcare: {
      title: string;
      insurance: string;
      hospitals: string;
      insuranceItems: string[];
      hospitalItems: string[];
    };
    legal: {
      title: string;
      laws: string;
      cultural: string;
      lawItems: string[];
      culturalItems: string[];
    };
    tools: {
      title: string;
      items: string[];
    };
  };
  footer: {
    brand: string;
    description: string;
    quickLinks: {
      title: string;
      livingGuide: string;
      tools: string;
      tourism: string;
      community: string;
    };
    support: {
      title: string;
      faq: string;
      contact: string;
      feedback: string;
      helpCenter: string;
    };
    copyright: string;
    privacy: string;
    terms: string;
  };
}

interface LanguageContextType {
  locale: Locale;
  messages: Messages;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// 导入语言文件
const messagesEn: Messages = {
  navigation: {
    home: "Home",
    livingGuide: "Living Guide",
    tools: "Tools",
    tourism: "Tourism",
    community: "Community",
  },
  home: {
    title: "Abu Dhabi Newcomer Guide",
    subtitle:
      "Your complete guide to living, working, and studying in Abu Dhabi",
    description:
      "Comprehensive information and practical tools for newcomers to Abu Dhabi - from opening bank accounts to finding the best restaurants.",
    getStarted: "Get Started",
    learnMore: "Learn More",
    features: {
      livingGuide: {
        title: "Living Guide",
        description: "Essential information for daily life in Abu Dhabi",
      },
      practicalTools: {
        title: "Practical Tools",
        description: "Calculators, converters, and interactive utilities",
      },
      tourismInfo: {
        title: "Tourism Information",
        description: "Must-visit places and cultural insights",
      },
    },
  },
  features: {
    title: "Everything You Need to Know",
    subtitle:
      "Comprehensive guides, practical tools, and community support for your life in Abu Dhabi",
    banking: {
      title: "Banking & Finance",
      openAccount: "Opening a Bank Account",
      popularBanks: "Popular Banks",
      items: [
        "Emirates ID required",
        "Salary certificate from employer",
        "Passport copy and visa",
        "Minimum salary requirement varies by bank",
      ],
    },
    housing: {
      title: "Housing & Accommodation",
      popularAreas: "Popular Areas",
      rentalProcess: "Rental Process",
      areas: [
        "Downtown Abu Dhabi",
        "Saadiyat Island",
        "Al Reem Island",
        "Khalifa City",
        "Al Raha Beach",
      ],
      process: [
        "Security deposit (usually 10% of annual rent)",
        "Real estate commission (2-5%)",
        "ADDC (electricity) connection",
        "Internet and cable setup",
      ],
    },
    transport: {
      title: "Transportation",
      publicTransport: "Public Transport",
      taxiServices: "Taxi Services",
      publicItems: [
        "Hafilat Card for buses",
        "Bus routes connect major areas",
        "Water taxi services available",
        "Future metro system planned",
      ],
      taxiItems: [
        "ADTC official taxis",
        "Uber and Careem available",
        "Airport transfers",
        "24/7 availability",
      ],
    },
    healthcare: {
      title: "Healthcare",
      insurance: "Health Insurance",
      hospitals: "Major Hospitals",
      insuranceItems: [
        "Mandatory health insurance required",
        "Basic coverage through Thiqa",
        "Enhanced coverage available",
        "Coverage for family members",
      ],
      hospitalItems: [
        "Sheikh Khalifa Medical City",
        "Cleveland Clinic Abu Dhabi",
        "Mediclinic City Hospital",
        "NMC Royal Hospital",
      ],
    },
    legal: {
      title: "Legal & Cultural Guidelines",
      laws: "Important Laws",
      cultural: "Cultural Considerations",
      lawItems: [
        "Respect local customs and traditions",
        "Modest dress code in public areas",
        "Zero tolerance for alcohol and driving",
        "No public displays of affection",
      ],
      culturalItems: [
        "Ramadan observance guidelines",
        "Friday as holy day",
        "Arabic is the official language",
        "Respect for Islamic traditions",
      ],
    },
    tools: {
      title: "Practical Tools",
      items: [
        "Cost calculator",
        "Currency converter",
        "Weather updates",
        "Visa reminders",
      ],
    },
  },
  footer: {
    brand: "Abu Dhabi Guide",
    description:
      "Your comprehensive guide to living, working, and studying in Abu Dhabi. Making your transition smooth and successful.",
    quickLinks: {
      title: "Quick Links",
      livingGuide: "Living Guide",
      tools: "Tools",
      tourism: "Tourism",
      community: "Community",
    },
    support: {
      title: "Support",
      faq: "FAQ",
      contact: "Contact",
      feedback: "Feedback",
      helpCenter: "Help Center",
    },
    copyright: "© 2024 Abu Dhabi Guide. Made with ❤️ for newcomers.",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
  },
};

const messagesZh: Messages = {
  navigation: {
    home: "首页",
    livingGuide: "生活指南",
    tools: "实用工具",
    tourism: "旅游信息",
    community: "社区",
  },
  home: {
    title: "阿布扎比新手指南",
    subtitle: "您在阿布扎比生活、工作和学习的完整指南",
    description:
      "为阿布扎比新来者提供全面信息和实用工具 - 从银行开户到寻找最佳餐厅。",
    getStarted: "开始使用",
    learnMore: "了解更多",
    features: {
      livingGuide: {
        title: "生活指南",
        description: "阿布扎比日常生活必备信息",
      },
      practicalTools: {
        title: "实用工具",
        description: "计算器、转换器和交互式实用程序",
      },
      tourismInfo: {
        title: "旅游信息",
        description: "必游景点和文化洞察",
      },
    },
  },
  features: {
    title: "您需要了解的一切",
    subtitle: "为您在阿布扎比的生活提供全面指南、实用工具和社区支持",
    banking: {
      title: "银行与金融",
      openAccount: "开设银行账户",
      popularBanks: "热门银行",
      items: [
        "需要阿联酋身份证",
        "雇主工资证明",
        "护照复印件和签证",
        "最低工资要求因银行而异",
      ],
    },
    housing: {
      title: "住房与住宿",
      popularAreas: "热门地区",
      rentalProcess: "租房流程",
      areas: [
        "阿布扎比市中心",
        "萨迪亚特岛",
        "Al Reem岛",
        "哈利法城",
        "Al Raha海滩",
      ],
      process: [
        "保证金（通常为年租金的10%）",
        "房地产佣金（2-5%）",
        "ADDC（电力）连接",
        "网络和有线电视设置",
      ],
    },
    transport: {
      title: "交通运输",
      publicTransport: "公共交通",
      taxiServices: "出租车服务",
      publicItems: [
        "公交车使用Hafilat卡",
        "公交线路连接主要区域",
        "提供水上出租车服务",
        "计划建设地铁系统",
      ],
      taxiItems: [
        "ADTC官方出租车",
        "提供Uber和Careem服务",
        "机场接送",
        "24/7全天候服务",
      ],
    },
    healthcare: {
      title: "医疗保健",
      insurance: "医疗保险",
      hospitals: "主要医院",
      insuranceItems: [
        "强制性医疗保险必需",
        "通过Thiqa的基本覆盖",
        "可选增强覆盖",
        "家庭成员覆盖",
      ],
      hospitalItems: [
        "谢赫哈利法医疗城",
        "阿布扎比克利夫兰诊所",
        "Mediclinic城市医院",
        "NMC皇家医院",
      ],
    },
    legal: {
      title: "法律与文化指南",
      laws: "重要法律",
      cultural: "文化考虑",
      lawItems: [
        "尊重当地习俗和传统",
        "公共场所着装要求适度",
        "酒驾零容忍",
        "禁止公共场所亲密行为",
      ],
      culturalItems: [
        "斋月遵守指南",
        "周五为圣日",
        "阿拉伯语为官方语言",
        "尊重伊斯兰传统",
      ],
    },
    tools: {
      title: "实用工具",
      items: ["费用计算器", "货币转换器", "天气更新", "签证提醒"],
    },
  },
  footer: {
    brand: "阿布扎比指南",
    description: "您在阿布扎比生活、工作和学习的全面指南。让您的过渡顺利成功。",
    quickLinks: {
      title: "快速链接",
      livingGuide: "生活指南",
      tools: "工具",
      tourism: "旅游",
      community: "社区",
    },
    support: {
      title: "支持",
      faq: "常见问题",
      contact: "联系我们",
      feedback: "反馈",
      helpCenter: "帮助中心",
    },
    copyright: "© 2024 阿布扎比指南。为新来者用❤️制作。",
    privacy: "隐私政策",
    terms: "服务条款",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLocale = localStorage.getItem("locale") as Locale;
    if (savedLocale && (savedLocale === "en" || savedLocale === "zh")) {
      setLocaleState(savedLocale);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    if (mounted) {
      localStorage.setItem("locale", newLocale);
    }
  };

  const messages = locale === "zh" ? messagesZh : messagesEn;

  return (
    <LanguageContext.Provider value={{ locale, messages, setLocale }}>
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
