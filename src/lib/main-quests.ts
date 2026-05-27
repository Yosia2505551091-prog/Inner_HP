export type MainQuestTier = "beginner" | "intermediate" | "advanced";

export type MainQuest = {
  id: string;
  tier: MainQuestTier;
  title: string;
  description: string;
  goal: number;
  metric: "quests" | "streak" | "level" | "badges";
  rewardXp: number;
  rewardBadge?: string;
};

export const TIER_LABEL: Record<MainQuestTier, string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
};

export const MAIN_QUESTS: MainQuest[] = [
  // Beginner
  { id: "mq-25-quests",  tier: "beginner",     title: "First Footsteps",      description: "Complete 25 total quests.",      metric: "quests", goal: 25,  rewardXp: 300 },
  { id: "mq-streak-7",   tier: "beginner",     title: "Steady Spark",         description: "Maintain a 7-day streak.",       metric: "streak", goal: 7,   rewardXp: 250 },
  { id: "mq-level-10",   tier: "beginner",     title: "Rising Hero",          description: "Reach Level 10.",                metric: "level",  goal: 10,  rewardXp: 400 },

  // Intermediate
  { id: "mq-100-quests", tier: "intermediate", title: "Journey Toward Balance", description: "Complete 100 quests.",         metric: "quests", goal: 100, rewardXp: 1000, rewardBadge: "quests-100" },
  { id: "mq-10-badges",  tier: "intermediate", title: "Collector of Honors",    description: "Unlock 10 legendary badges.",  metric: "badges", goal: 10,  rewardXp: 600,  rewardBadge: "badge-hunter" },
  { id: "mq-level-25",   tier: "intermediate", title: "Seasoned Wanderer",      description: "Reach Level 25.",              metric: "level",  goal: 25,  rewardXp: 800 },

  // Advanced
  { id: "mq-level-50",   tier: "advanced",     title: "Legendary Path",       description: "Reach Level 50.",                metric: "level",  goal: 50,  rewardXp: 2000 },
  { id: "mq-500-quests", tier: "advanced",     title: "Master of the Board",  description: "Complete 500 quests.",           metric: "quests", goal: 500, rewardXp: 3000, rewardBadge: "quests-500" },
  { id: "mq-streak-30",  tier: "advanced",     title: "Eternal Ember",        description: "Maintain a 30-day streak.",      metric: "streak", goal: 30,  rewardXp: 1500, rewardBadge: "streak-30" },
];

export function progressFor(q: MainQuest, s: { questsCompleted: number; streak: number; level: number; badgesUnlocked: number }) {
  const cur =
    q.metric === "quests" ? s.questsCompleted :
    q.metric === "streak" ? s.streak :
    q.metric === "level"  ? s.level :
    s.badgesUnlocked;
  const pct = Math.min(100, Math.round((cur / q.goal) * 100));
  return { current: Math.min(cur, q.goal), pct, complete: cur >= q.goal };
}

export function activeMainQuest(s: { questsCompleted: number; streak: number; level: number; badgesUnlocked: number }): MainQuest {
  // First incomplete in order
  for (const q of MAIN_QUESTS) {
    if (!progressFor(q, s).complete) return q;
  }
  return MAIN_QUESTS[MAIN_QUESTS.length - 1];
}