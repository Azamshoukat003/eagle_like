export type PackageFeature = {
  text: string;
  highlight?: string;
  linkText?: string;
};

export type PackageOption = {
  id: string;
  titleTop: string;
  titleBottom: string;
  imageSrc: string;
  accent: string;
  features: PackageFeature[];
};

export type QuantityOption = {
  amount: number;
  discount: number;
  price: number;
  originalPrice: number;
  saving: number;
};

export type PreviewItem = {
  name: string;
  initials: string;
  time: string;
  background: string;
  image?: string;
};

export const packageOptions: PackageOption[] = [
  {
    id: "premium",
    titleTop: "Premium",
    titleBottom: "Followers",
    imageSrc: "/svgs/parrot1.svg",
    accent: "#01aaff",
    features: [
      {
        highlight: "Premium followers ",
        linkText: "What's the difference?",
        text: "",
      },
      { highlight: "Super Fast", text: " Delivery" },
      { highlight: "No password", text: " needed" },
      { highlight: "24-hour", text: " support" },
    ],
  },
  {
    id: "active",
    titleTop: "Active",
    titleBottom: "Followers",
    imageSrc: "/svgs/parrot2.svg",
    accent: "#d71e77",
    features: [
      {
        highlight: "Real Active",
        text: " followers",
        linkText: "What's the difference?",
      },
      { highlight: "Trusted", text: " Delivery" },
      { highlight: "30 day", text: " refills" },
      { highlight: "No password", text: " needed" },
      { highlight: "24-hour", text: " support" },
    ],
  },
  {
    id: "vip",
    titleTop: "VIP",
    titleBottom: "Followers",
    imageSrc: "/svgs/parrot3.svg",
    accent: "#02a83d",
    features: [
      { linkText: "All features of Active, plus:", text: "" },
      { highlight: "Real followers", text: " from Targeted users" },
      { highlight: "Hit the explore page", text: " and grow your engagement" },
      { highlight: "Instant Delivery", text: " Guaranteed" },
      { highlight: "VIP support", text: " with lifetime access" },
    ],
  },
];

export const quantityOptions: QuantityOption[] = [
  { amount: 100, discount: 18, price: 2.97, originalPrice: 3.62, saving: 0.65 },
  { amount: 250, discount: 40, price: 6.9, originalPrice: 11.5, saving: 4.6 },
  {
    amount: 500,
    discount: 52,
    price: 11.99,
    originalPrice: 24.98,
    saving: 12.99,
  },
  {
    amount: 1000,
    discount: 63,
    price: 21.99,
    originalPrice: 59.43,
    saving: 37.44,
  },
  {
    amount: 2500,
    discount: 68,
    price: 49.99,
    originalPrice: 156.21,
    saving: 106.22,
  },
  {
    amount: 5000,
    discount: 70,
    price: 89.99,
    originalPrice: 299.97,
    saving: 209.98,
  },
  {
    amount: 10000,
    discount: 83,
    price: 149.99,
    originalPrice: 882.29,
    saving: 732.3,
  },
  {
    amount: 20000,
    discount: 85,
    price: 249.99,
    originalPrice: 1666.6,
    saving: 1416.61,
  },
];

export const badgeItems = [
  { label: "Fast Checkout" },
  { label: "100% Guarantee" },
  { label: "24/7 Support" },
];

export const previewItems: PreviewItem[] = [
  {
    name: "sarah.lu",
    initials: "SL",
    time: "10m",
    background: "linear-gradient(135deg, #6ee7f9, #2563eb)",
    image: "/review/img1.png",
  },
  {
    name: "marcel.fit",
    initials: "MF",
    time: "30m",
    background: "linear-gradient(135deg, #fda4af, #fb7185)",
    image: "/review/img2.png",
  },
  {
    name: "karim.dev",
    initials: "KD",
    time: "15m",
    background: "linear-gradient(135deg, #fde68a, #f59e0b)",
    image: "/review/img3.png",
  },
  {
    name: "nina.social",
    initials: "NS",
    time: "50m",
    background: "linear-gradient(135deg, #c4b5fd, #7c3aed)",
    image: "/review/img4.png",
  },
  {
    name: "jude.media",
    initials: "JM",
    time: "20m",
    background: "linear-gradient(135deg, #86efac, #22c55e)",
    image: "/review/img5.png",
  },
  {
    name: "olivia.co",
    initials: "OC",
    time: "55m",
    background: "linear-gradient(135deg, #fbcfe8, #db2777)",
    image: "/review/img6.png",
  },
  {
    name: "alex.growth",
    initials: "AG",
    time: "1h",
    background: "linear-gradient(135deg, #93c5fd, #2563eb)",
    image: "/review/Ellipse 460.png",
  },
  {
    name: "maya.studio",
    initials: "MS",
    time: "1h",
    background: "linear-gradient(135deg, #f9a8d4, #ec4899)",
    image: "/review/Ellipse 461.png",
  },
  {
    name: "ryan.daily",
    initials: "RD",
    time: "2h",
    background: "linear-gradient(135deg, #fdba74, #ea580c)",
    image: "/review/Ellipse 458.png",
  },
  {
    name: "sarah.lu",
    initials: "SL",
    time: "10m",
    background: "linear-gradient(135deg, #6ee7f9, #2563eb)",
    image: "/review/Ellipse 458.png",
  },
  {
    name: "marcel.fit",
    initials: "MF",
    time: "30m",
    background: "linear-gradient(135deg, #fda4af, #fb7185)",
    image: "/review/Ellipse 459.png",
  },
  {
    name: "karim.dev",
    initials: "KD",
    time: "15m",
    background: "linear-gradient(135deg, #fde68a, #f59e0b)",
    image: "/review/Ellipse 460.png",
  },
  {
    name: "nina.social",
    initials: "NS",
    time: "50m",
    background: "linear-gradient(135deg, #c4b5fd, #7c3aed)",
    image: "/review/Ellipse 461.png",
  },
  {
    name: "jude.media",
    initials: "JM",
    time: "20m",
    background: "linear-gradient(135deg, #86efac, #22c55e)",
    image: "/review/Ellipse 458.png",
  },
  {
    name: "olivia.co",
    initials: "OC",
    time: "55m",
    background: "linear-gradient(135deg, #fbcfe8, #db2777)",
    image: "/review/Ellipse 459.png",
  },
  {
    name: "alex.growth",
    initials: "AG",
    time: "1h",
    background: "linear-gradient(135deg, #93c5fd, #2563eb)",
    image: "/review/Ellipse 460.png",
  },
  {
    name: "maya.studio",
    initials: "MS",
    time: "1h",
    background: "linear-gradient(135deg, #f9a8d4, #ec4899)",
    image: "/review/Ellipse 461.png",
  },
  {
    name: "ryan.daily",
    initials: "RD",
    time: "2h",
    background: "linear-gradient(135deg, #fdba74, #ea580c)",
    image: "/review/Ellipse 458.png",
  },
  {
    name: "sarah.lu",
    initials: "SL",
    time: "10m",
    background: "linear-gradient(135deg, #6ee7f9, #2563eb)",
    image: "/review/Ellipse 458.png",
  },
  {
    name: "marcel.fit",
    initials: "MF",
    time: "30m",
    background: "linear-gradient(135deg, #fda4af, #fb7185)",
    image: "/review/Ellipse 459.png",
  },
  {
    name: "karim.dev",
    initials: "KD",
    time: "15m",
    background: "linear-gradient(135deg, #fde68a, #f59e0b)",
    image: "/review/Ellipse 460.png",
  },
  {
    name: "nina.social",
    initials: "NS",
    time: "50m",
    background: "linear-gradient(135deg, #c4b5fd, #7c3aed)",
    image: "/review/Ellipse 461.png",
  },
  {
    name: "jude.media",
    initials: "JM",
    time: "20m",
    background: "linear-gradient(135deg, #86efac, #22c55e)",
    image: "/review/Ellipse 458.png",
  },
  {
    name: "olivia.co",
    initials: "OC",
    time: "55m",
    background: "linear-gradient(135deg, #fbcfe8, #db2777)",
    image: "/review/Ellipse 459.png",
  },
  {
    name: "alex.growth",
    initials: "AG",
    time: "1h",
    background: "linear-gradient(135deg, #93c5fd, #2563eb)",
    image: "/review/Ellipse 460.png",
  },
  {
    name: "maya.studio",
    initials: "MS",
    time: "1h",
    background: "linear-gradient(135deg, #f9a8d4, #ec4899)",
    image: "/review/Ellipse 461.png",
  },
  {
    name: "ryan.daily",
    initials: "RD",
    time: "2h",
    background: "linear-gradient(135deg, #fdba74, #ea580c)",
    image: "/review/Ellipse 458.png",
  },
];

export const reviewSummary = {
  rating: 5,
  purchaseCount: "38,571",
  repeatMessage: "purchased 2+ times",
  verifiedReviews: "8000+",
  memberCount: "5 million",
  buyers: [
    {
      name: "Mia",
      initials: "M",
      background: "linear-gradient(135deg, #f9a8d4, #fb7185)",
      image: "/review/Ellipse 458.png",
    },
    {
      name: "Ava",
      initials: "A",
      background: "linear-gradient(135deg, #bfdbfe, #60a5fa)",
      image: "/review/Ellipse 459.png",
    },
    {
      name: "Leo",
      initials: "L",
      background: "linear-gradient(135deg, #fdba74, #f97316)",
      image: "/review/Ellipse 460.png",
    },
    {
      name: "Noah",
      initials: "N",
      background: "linear-gradient(135deg, #d9f99d, #65a30d)",
      image: "/review/Ellipse 461.png",
    },
  ],
};

export const trustLogos = [
  { name: "Yahoo!", src: "/companies/yahoo.png" },
  { name: "FOX", src: "/companies/fox.png" },
  { name: "MarketWatch", src: "/companies/marketwatch.png" },
  { name: "Tripadvisor", src: "/companies/tripadvisor.png" },
  { name: "Digital Journal", src: "/companies/digitaljornal.png" },
  { name: "NBC", src: "/companies/nbc.png" },
  { name: "USA Today", src: "/companies/usatoday.png" },
];

export const featureReasons = [
  {
    title: "Affordable Growth",
    description:
      "At Eagle Likes, we believe social media growth should be for everyone. That's why we offer affordable packages for individuals, influencers, and businesses alike.",
    icon: "01",
    imageSrc: "/svgs/icon1.svg",
    accent: "#ffd400",
    glow: "rgba(255, 212, 0, 0.34)",
  },
  {
    title: "Quality That Speaks",
    description:
      "While affordability matters, quality is our top priority. At Eagle Likes, we never compromise on service standards and every like, follower, and view is delivered with care to ensure authentic, natural growth.",
    icon: "02",
    imageSrc: "/svgs/icon2.svg",
    accent: "#ff5fc4",
    glow: "rgba(255, 95, 196, 0.32)",
  },
  {
    title: "Speed You Can Trust",
    description:
      "In today's fast-paced digital world, timing is key. Eagle Likes ensures fast, reliable delivery and whether you need instant likes or steady, natural growth for your profile.",
    icon: "03",
    imageSrc: "/svgs/icon3.svg",
    accent: "#55a2ff",
    glow: "rgba(85, 162, 255, 0.28)",
  },
  {
    title: "Safe And Secure Services",
    description:
      "Trust is at the heart of everything we do. We use safe, proven methods to protect your account and ensure natural, risk-free growth so you can grow with confidence.",
    icon: "04",
    imageSrc: "/svgs/icon4.svg",
    accent: "#00df72",
    glow: "rgba(0, 223, 114, 0.28)",
  },
  {
    title: "Customer-Centric Support",
    description:
      "We understand that every customer is unique. That's why our dedicated support team is always ready to assist, guide, and resolve your queries from choosing the right package to ensuring smooth, hassle-free delivery.",
    icon: "05",
    imageSrc: "/svgs/icon5.svg",
    accent: "#ff2020",
    glow: "rgba(255, 32, 32, 0.28)",
  },
  {
    title: "A Brand You Can Rely On",
    description:
      "Eagle Likes is more than just a service it's your trusted partner in social media growth. Join the thousands of satisfied customers who've chosen us to elevate their online presence with confidence.",
    icon: "06",
    imageSrc: "/svgs/icon6.svg",
    accent: "#b76dff",
    glow: "rgba(183, 109, 255, 0.3)",
  },
];
export const Benefits = [
  {
    title: "Higher Visibility",
    description:
      "Instagram’s algorithm favors the most popular accounts, giving them greater visibility across the platform. By gaining real followers with authentic profiles, you instantly boost your popularity, increase exposure, and attract new audiences who may have never discovered your content before.",
    icon: "01",
    imageSrc: "/bene1.png",
    accent: "#ffd400",
    glow: "rgba(255, 212, 0, 0.34)",
  },
  {
    title: "Strengthen Trust",
    description:
      "Having more followers instantly boosts your Instagram credibility. When new users discover your profile, they see your popularity as proof of quality and trust. A strong follower base shows that others value your content, encouraging even more people to follow and engage with your posts.",
    icon: "04",
    imageSrc: "/bene2.png",
    accent: "#00df72",
    glow: "rgba(0, 223, 114, 0.28)",
  },
  {
    title: "Get Real Followers",
    description:
      "As your followers increase, your posts reach more people who naturally want to follow you. With engaging, high-quality content, your audience will keep growing. Buying active followers is a quick and effective way to jumpstart your Instagram growth and boost organic engagement.",
    icon: "05",
    imageSrc: "/bene3.png",
    accent: "#ff2020",
    glow: "rgba(255, 32, 32, 0.28)",
  }
];




export const platformHighlights = [
  {
    title: "Higher Visibility",
    description:
      "Instagram's algorithm favors the most popular accounts, giving them greater visibility across the platform. By gaining real followers with authentic profiles, you instantly boost your popularity, increase exposure, and attract new audiences who may have never discovered your content before.",
    icon: "👤",
    color: "linear-gradient(135deg, #22c55e, #15803d)",
  },
  {
    title: "Strengthen Trust",
    description:
      "Having more followers instantly boosts your Instagram credibility. When new users discover your profile, they see your popularity as proof of quality and trust. A strong follower base shows that others value your content, encouraging even more people to follow and engage with your posts.",
    icon: "🛡️",
    color: "linear-gradient(135deg, #eab308, #ca8a04)",
  },
  {
    title: "Get Real Followers",
    description:
      "As your followers increase, your posts reach more people who naturally want to follow you. With engaging, high-quality content, your audience will keep growing. Buying active followers is a quick and effective way to jumpstart your Instagram growth and boost organic engagement.",
    icon: "🎯",
    color: "linear-gradient(135deg, #ef4444, #b91c1c)",
  },
];

export const promoHighlights = [
  {
    title: "+245%",
    description: "Engagement Rate",
    icon: "01",
    color: "linear-gradient(135deg, #ff7a18, #ff4d6d)",
  },
  {
    title: "+180%",
    description: "Followers Growth",
    icon: "02",
    color: "linear-gradient(135deg, #a855f7, #ec4899)",
  },
  {
    title: "+320%",
    description: "Reach Increase",
    icon: "03",
    color: "linear-gradient(135deg, #0ea5e9, #2563eb)",
  },
  {
    title: "10x",
    description: "Content Impact",
    icon: "04",
    color: "linear-gradient(135deg, #22c55e, #10b981)",
  },
];

export const showcaseCards = [
  {
    title: "Pick a Service",
    description: "Pick the service that fits your goals and start growing now",
    icon: "cart",
    accent: "#8b5cf6",
    iconBackground: "rgba(173, 70, 255, 0.12)",
    iconBorder: "rgba(173, 70, 255, 0.30)",
  },
  {
    title: "Enter Information",
    description: "Enter your information to get started quickly and securely!",
    icon: "user",
    accent: "#06b6d4",
    iconBackground: "rgba(59, 130, 246, 0.12)",
    iconBorder: "rgba(59, 130, 246, 0.30)",
  },
  {
    title: "Pay Securely",
    description: "Pay securely and complete your order in seconds!",
    icon: "lock",
    accent: "#22c55e",
    iconBackground: "rgba(34, 197, 94, 0.12)",
    iconBorder: "rgba(34, 197, 94, 0.30)",
  },
];

export const storyPanels = [
  {
    eyebrow: "Why Are Instagram Followers Important?",
    title: "Why Buy\nInstagram Followers?",
    description:
      "Buying Instagram followers can help you grow faster and establish instant credibility in a competitive space. A larger follower count makes your profile look trustworthy, attracts real engagement, and increases your chances of being discovered by new audiences.\n\nWhether you're a brand, influencer, or creator, more followers can boost visibility, strengthen your reputation, and open doors to new opportunities and collaborations.",
    bullets: platformHighlights,
    accent: "blue" as const,
    visual: "portrait" as const,
    reverse: false,
  },
  {
    eyebrow: "Based Organic Growth",
    title: "Boost Organic\nGrowth",
    description:
     "Boost your organic growth on Instagram by buying followers from Eagle Likes. Our high-quality, real followers help increase your visibility and attract a genuine, more engaged audience. A stronger follower base, your content reaches more people naturally, extending credibility and trust.\n\nEagle Likes makes it easy to kickstart your growth and build lasting success on Instagram—safely, quickly, and effectively",
    bullets: [
      {
        title: "Data protection",
        description:
          "We keep checkout friction low while reducing unnecessary account risk.",
        icon: "#",
        color: "linear-gradient(135deg, #22c55e, #059669)",
      },
      {
        title: "Frictionless support",
        description:
          "Need help after buying? The experience is designed to stay human and responsive.",
        icon: "@",
        color: "linear-gradient(135deg, #f97316, #ef4444)",
      },
      {
        title: "Transparent expectations",
        description:
          "Package details, refills, and delivery promises are surfaced before you pay.",
        icon: "=",
        color: "linear-gradient(135deg, #38bdf8, #6366f1)",
      },
    ],
    accent: "green" as const,
    visual: "dashboard" as const,
    reverse: true,
  },
];

export const privacyPanels = [
  {
    title: "Secure Payments",
    description:
      "Your online payment details can be vulnerable without proper protection. That's why we use the latest security protocols and advanced fraud prevention systems to keep your information completely safe.\n\nEvery transaction on our platform is securely encrypted, and we operate on advanced, protected servers to ensure your financial information stays completely safe from hackers and cybercriminals.",
    badge: "Payments",
  },
  {
    title: "Data Protection",
    description:
      "Your privacy is our top priority. No one will ever know you've purchased Instagram followers from Eagle Likes. We strictly protect all client data, including your identity and account details, with advanced encryption and security. We never share customer information, ever.\n\nYou can order privately no full name required and we offer privacy-friendly payment options like Bitcoin and cards. We also never ask for your Instagram password, so your account remains fully secure.",
    badge: "Privacy",
  },
];

export const compareColumns = ["Metric", "Eagle Likes", "Others"];

export const compareRows = [
  { label: "Real Followers", ours: "Always Real", others: "Often Bots" },
  { label: "Pricing", ours: "Transparent", others: "Hidden Fees" },
  { label: "Support", ours: "24/7 Support Team", others: "Limited Help" },
  { label: "Payment Options", ours: "All Major Cards", others: "Few Options" },
  { label: "Delivery Speed", ours: "Lightning Fast", others: "Slow & Delayed" },
  { label: "Login Info Needed", ours: "Not Required", others: "Often Asked" },
  { label: "Experience", ours: "10+ Years", others: "New/Unproven" },
  { label: "Account Safety", ours: "100% Secure", others: "Risky / Unsafe" },
];

export const faqItems = [
  {
    question: "Why Should I Buy Instagram Followers?",
    answer:
      "Buying Instagram followers helps boost your social proof, increase credibility, and attract more organic engagement. It's a quick way to establish authority and grow your presence on the platform.",
  },
  {
    question: "Can Buying Instagram Followers Boost My Organic Engagement?",
    answer:
      "Yes, having more followers can improve your engagement rate as it signals popularity to Instagram's algorithm. This can lead to better visibility and more organic interactions with your content.",
  },
  {
    question: "How Quickly Will I Receive Instagram Followers After Purchase?",
    answer:
      "Delivery typically starts within minutes of your purchase and continues gradually to ensure natural growth. The exact timing depends on your selected package and quantity.",
  },
  {
    question: "Will My Account Get Banned For Buying Instagram Followers?",
    answer:
      "No, when you use high-quality services like Eagle Likes that deliver real-looking followers gradually, your account remains safe. We follow Instagram's guidelines to ensure secure delivery.",
  },
  {
    question: "Can Buying Instagram Followers Help Me Get Featured On The Explore Page?",
    answer:
      "While buying followers alone won't guarantee Explore page placement, the increased engagement and social proof can improve your chances by making your content more attractive to Instagram's algorithm.",
  },
  {
    question: "How Do Instagram Followers From Eagle Likes Help With Brand Growth?",
    answer:
      "Our followers boost your credibility, increase your reach, and help attract partnerships and collaborations. A strong follower count makes your brand appear more established and trustworthy to potential customers.",
  },
];

export const footerColumns = [
  {
    title: "Instagram Services",
    links: [
      "Buy Instagram Likes",
      "Buy Instagram Followers",
      "Buy Instagram Views",
    ],
  },
  {
    title: "TikTok Services",
    links: ["Buy TikTok Likes", "Buy TikTok Followers", "Buy TikTok Views"],
  },
  {
    title: "YouTube Services",
    links: [
      "Buy YouTube Views",
      "Buy YouTube Subscribers",
      "Buy YouTube Likes",
    ],
  },
  {
    title: "Tools & Resources",
    links: [
      "Instagram Video Downloader",
      "Instagram Story Viewer",
      "Twitter Video Downloader",
    ],
  },
  {
    title: "My Account",
    links: ["Log In", "Sign In"],
  },
];
