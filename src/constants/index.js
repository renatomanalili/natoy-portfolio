export const TOOL_VARIANTS = {
  frontend: {
    color: "text-cyan",
  },
  backend: {
    color: "text-purple",
  },
  database: {
    color: "text-amber",
  },
  tools: {
    color: "text-green",
  },
};

export const TOOLS = [
  {
    label: 'frontend',
    variant: 'frontend',
    items: [
      {
        label: "Vue.js",
      },
      {
        label: "Nuxt.js",
      },
      {
        label: "React",
      },
      {
        label: "Next.js",
      },
      {
        label: "React Native",
      },
      {
        label: "Astro.js",
      },
      {
        label: "TailwindCSS",
      },
      {
        label: "TypeScript",
      }
    ]
  },
  {
    label: 'backend',
    variant: 'backend',
    items: [
      {
        label: "Node.js",
      },
      {
        label: "Express",
      },
      {
        label: "Laravel",
      },
      {
        label: "PHP",
      }
    ]
  },
  {
    label: 'database',
    variant: 'database',
    items: [
      {
        label: "PostgreSQL",
      },
      {
        label: "Supabase",
      },
      {
        label: "Neon",
      },
      {
        label: "Firebase",
      },
      {
        label: "MongoDB",
      },
      {
        label: "Drizzle ORM"
      }
    ]
  },
  {
    label: 'tools',
    variant: 'tools',
    items: [
      {
        label: "Git",
      },
      {
        label: "Netlify",
      },
      {
        label: "Vercel",
      }
    ]
  }
]

export const CONTACTS = [
  {
    icon: "/contacts/email-icon.webp",
    label: "email",
    value: "manalili123@gmail.com"
  },
  {
    icon: "/contacts/github-icon.webp",
    label: "github",
    value: "https://github.com/renatomanalili"
  },
  {
    icon: "/contacts/linkedin-icon.webp",
    label: "linkedin",
    value: "https://www.linkedin.com/in/renato-manalili-472147174/"
  },
]


export const PROJECTS = [
  {
    num: "01",
    title: "Web3 Promotional Website & Analytics",
    description:
      "Developed the official promotional frontend and interactive analytics dashboard for a Web3 token ecosystem. The platform serves as the primary touchpoint for holders to track token deflationary metrics, calculate passive yields, and generate shareable proof of their rewards.",
    stack: ["Vue.js", "React", "TailwindCSS", "SASS", "BEM", "Web3.js", "Ethers.js"],
    images: [
    ],
    link: null,
  },
  {
    num: "02",
    title: "Cross-Chain Bridge Web App",
    description:
      "Developed the frontend interface for a secure cross-chain bridge, enabling users to seamlessly transfer tokenized assets between multiple EVM and non-EVM blockchain networks. The application abstracted away the complexity of cross-chain messaging, focusing on a frictionless user experience and high-reliability transaction states.",
    stack: ["Vue.js", "React", "TailwindCSS", "Web3.js", "Ethers.js"],
    images: [],
    link: null,
  },
  {
    num: "03",
    title: "Hoodratz.io (by Meema Labs)",
    description:
      "Contributed to the frontend development of the official Hoodratz NFT promotional website and its custom Solana-based marketplace. Focused on delivering a seamless UI for the community and integrating Web3 functionalities for NFT trading.",
    stack: ["Vue.js", "TailwindCSS"],
    images: [
    ],
    link: "https://github.com/meemalabs/hoodratz.io",
  },
  {
    num: "04",
    title: "Decentralized Lottery & Gamified Staking",
    description:
      "Developed a gamified Web3 lottery platform featuring recurring weekly draws, token-based ticket purchasing, and automated burn mechanics.",
    stack: ["Vue.js", "TailwindCSS", "Wagmi / Viem"],
    images: [
      "/projects/realestate-1.png",
      "/projects/realestate-2.png",
    ],
    link: null,
  },
  {
    num: "05",
    title: "Decentralized Sports Prediction Market",
    description:
      "Built a decentralized sports betting platform for NBA and NFL markets, enabling users to create complex multi-leg parlay wagers executed securely via smart contracts.",
    stack: ["React", "TailwindCSS"],
    images: ["/projects/pos-1.png", "/projects/pos-2.png"],
    link: null,
  },
  {
    num: "06",
    title: "Steadii (Work in Progress)",
    description:
      "Developed Steadii, a cross-platform mobile application designed to help users consistently log, monitor, and understand their daily blood pressure readings. The app focuses on building healthy tracking habits through a fast, reliable, and accessible user experience.",
    stack: ["React Native", "Expo", "TypeScript"],
    images: [],
    link: "https://github.com/renatomanalili/steadii",
  },
  {
    num: "07",
    title: "Developer Portfolio",
    description:
      "This site — a dark-themed developer portfolio built with Astro, featuring syntax-highlighted code cards and smooth tab interactions.",
    stack: ["Astro.js", "TailwindCSS", "TypeScript"],
    images: [],
    link: "https://github.com/renatomanalili/natoy-portfolio",
  },
];