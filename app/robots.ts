import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const disallow = ["/admin/", "/api/", "/stack/", "/solutions/", "/privacy-policy/"];

  // Explicitly welcome the major AI / answer-engine crawlers so the site can be
  // read, grounded, and cited by Gemini (Google AI Overviews), ChatGPT / SearchGPT,
  // Perplexity, Claude, and others. (The "*" rule already allows them, but being
  // explicit is intentional and future-proof.)
  const aiBots = [
    "Googlebot",
    "Google-Extended", // Gemini / Vertex AI grounding
    "GPTBot", // OpenAI
    "OAI-SearchBot", // ChatGPT search
    "ChatGPT-User", // ChatGPT browsing
    "PerplexityBot",
    "Perplexity-User",
    "ClaudeBot", // Anthropic
    "Claude-Web",
    "anthropic-ai",
    "Applebot-Extended",
    "CCBot", // Common Crawl (feeds many LLMs)
    "Bingbot", // Copilot
  ];

  return {
    rules: [
      { userAgent: "*", allow: "/", disallow },
      ...aiBots.map((userAgent) => ({ userAgent, allow: "/", disallow })),
    ],
    sitemap: "https://digitalwebweaver.com/sitemap.xml",
  };
}
