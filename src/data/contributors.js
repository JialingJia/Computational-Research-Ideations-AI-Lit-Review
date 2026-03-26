/**
 * contributors.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Static source of truth for the Contributors panel in LiteratureReview.
 * Mirrors acknowledgements.md with structured fields.
 *
 * To add a new contributor after a monthly pipeline run:
 *   1. Add a new entry to the `contributors` array (or push to an existing
 *      contributor's `contributions` array).
 *   2. Redeploy — no component changes needed.
 */

export const contributors = [
  // ── AI Pipeline ────────────────────────────────────────────────────────────
  {
    id: "claude",
    name: "Claude",
    handle: null,
    role: "AI Pipeline · Anthropic",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/5/58/Claude-ai-icon.svg",
    profileUrl: "https://claude.ai",
    isAI: true,
    contributions: [
      {
        month: "March 2026",
        items: [
          "Added *Deep Ideation* (Zhao et al. 2024) → §Computational Ideation at Scale",
          "Added *EvoScientist* (Lyu et al. 2026) → §Computational Ideation at Scale",
          "Added *Scientific Creativity* (Getzels & Csikszentmihalyi 1967) → §Theoretical Grounding",
          "Added *Agentic AI for Scientific Discovery: A Survey* (Gridach et al. 2025) → §Open Tensions",
          "Added *Large Language Models for Scientific Idea Generation: A Creativity-Centered Survey* (Shahhosseini et al. 2025) → §Theoretical Grounding",
          "Revised IdeaSynth prose in §Scaffolding Human Cognition: corrected facet description, acknowledged Type 1/2 boundary, corrected authorship claim",
          "Reclassified IdeaSynth as Type 1 + Type 2 (Hybrid); moved to §Hybrid Systems",
        ],
      },
    ],
  },

  // ── Community Contributors ──────────────────────────────────────────────────
  {
    id: "jialingjia",
    name: "Houji",
    handle: "@JialingJia",
    role: "Researcher",
    avatar: "https://avatars.githubusercontent.com/u/38600780?v=4",
    profileUrl: "https://github.com/JialingJia",
    isAI: false,
    contributions: [
      {
        month: "March 2026",
        items: [
          "Recommended *Scientific Creativity* (Getzels & Csikszentmihalyi 1967) → §Theoretical Grounding",
          "Requested prose edit in §Scaffolding Human Cognition: \"IdeaSynth Type 1/2 boundary — main intellectual outcomes may come from AI\"",
          "Requested prose edit in §Scaffolding Human Cognition: \"idea facets represent parts of the research plan, not evaluation criteria\"",
          "Requested prose edit in §Scaffolding Human Cognition: \"study does not evaluate authorship of co-created ideas\"",
        ],
      },
    ],
  },
];
