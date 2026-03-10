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
      },
      {
        label: "Docker",
      }
    ]
  }
]