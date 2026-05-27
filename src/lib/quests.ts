import {
  Droplets, Pill, Apple, ShowerHead, Sparkles, PersonStanding,
  BookHeart, Heart, Wind, Brain, Smile, ListChecks,
  Footprints, Dumbbell, Sun, TreePine, Flower2,
  MessageCircle, Phone, Users, Gift,
  CheckCircle2, GraduationCap, ClipboardList, FileCheck,
  Music, Tv, BookOpen, Palette, Gamepad2,
} from "lucide-react";

export type QuestCategory =
  | "self-care"
  | "mental"
  | "physical"
  | "social"
  | "productivity"
  | "fun";

export type Difficulty = "easy" | "medium" | "hard";

export type Quest = {
  id: string;
  name: string;
  description: string;
  category: QuestCategory;
  difficulty: Difficulty;
  hp: number;
  xp: number;
  minutes: number;
  icon: any;
  tint: string;
};

export const CATEGORY_META: Record<QuestCategory, { label: string; tint: string; emoji: string }> = {
  "self-care":   { label: "Self Care",   tint: "var(--sky)",      emoji: "🌿" },
  "mental":      { label: "Mind & Soul", tint: "var(--lavender)", emoji: "✨" },
  "physical":    { label: "Body Quest",  tint: "var(--hp)",       emoji: "🏃" },
  "social":      { label: "Bonds",       tint: "var(--peach)",    emoji: "💬" },
  "productivity":{ label: "Focus",       tint: "var(--mint)",     emoji: "📜" },
  "fun":         { label: "Joy",         tint: "var(--lavender)", emoji: "🎵" },
};

export const QUEST_POOL: Quest[] = [
  // SELF CARE
  { id: "sc-water",  name: "Hydration ritual",     description: "Drink 6 glasses of water today.",     category: "self-care", difficulty: "easy",   hp: 6,  xp: 10, minutes: 1,  icon: Droplets,   tint: "var(--sky)" },
  { id: "sc-meds",   name: "Take your potion",     description: "Take your medication on time.",       category: "self-care", difficulty: "easy",   hp: 8,  xp: 12, minutes: 1,  icon: Pill,       tint: "var(--lavender)" },
  { id: "sc-meal",   name: "Nourish the body",     description: "Eat one healthy meal mindfully.",     category: "self-care", difficulty: "medium", hp: 10, xp: 18, minutes: 20, icon: Apple,      tint: "var(--mint)" },
  { id: "sc-shower", name: "Cleansing waters",     description: "Take a warm shower.",                 category: "self-care", difficulty: "easy",   hp: 7,  xp: 10, minutes: 10, icon: ShowerHead, tint: "var(--sky)" },
  { id: "sc-clean",  name: "Tidy your sanctuary",  description: "Clear and organize your workspace.",  category: "self-care", difficulty: "medium", hp: 9,  xp: 16, minutes: 10, icon: Sparkles,   tint: "var(--peach)" },
  { id: "sc-stretch",name: "Loosen the limbs",     description: "Stretch your body for 5 minutes.",    category: "self-care", difficulty: "easy",   hp: 6,  xp: 10, minutes: 5,  icon: PersonStanding, tint: "var(--mint)" },

  // MENTAL WELLNESS
  { id: "mn-journal", name: "Heart pages",        description: "Journal one feeling today.",          category: "mental", difficulty: "easy",   hp: 10, xp: 15, minutes: 5,  icon: BookHeart, tint: "var(--lavender)" },
  { id: "mn-grat",    name: "Three blessings",    description: "Write 3 things you're grateful for.", category: "mental", difficulty: "easy",   hp: 8,  xp: 12, minutes: 3,  icon: Heart,     tint: "var(--peach)" },
  { id: "mn-breath",  name: "Breath of calm",     description: "3 minutes of box breathing.",         category: "mental", difficulty: "easy",   hp: 7,  xp: 10, minutes: 3,  icon: Wind,      tint: "var(--mint)" },
  { id: "mn-medit",   name: "Inner stillness",    description: "Meditate for 10 minutes.",            category: "mental", difficulty: "medium", hp: 12, xp: 20, minutes: 10, icon: Brain,     tint: "var(--lavender)" },
  { id: "mn-affirm",  name: "Speak the spell",    description: "Say one positive affirmation aloud.", category: "mental", difficulty: "easy",   hp: 6,  xp: 10, minutes: 1,  icon: Smile,     tint: "var(--peach)" },
  { id: "mn-reflect", name: "Day's reflection",   description: "List 3 small wins from today.",       category: "mental", difficulty: "medium", hp: 10, xp: 18, minutes: 5,  icon: ListChecks,tint: "var(--sky)" },

  // PHYSICAL
  { id: "ph-walk",   name: "Wandering steps",   description: "Walk for 15 minutes outside.",      category: "physical", difficulty: "medium", hp: 12, xp: 20, minutes: 15, icon: Footprints, tint: "var(--hp)" },
  { id: "ph-exer",   name: "Move your spirit",  description: "10 minutes of light exercise.",     category: "physical", difficulty: "medium", hp: 14, xp: 22, minutes: 10, icon: Dumbbell,   tint: "var(--peach)" },
  { id: "ph-out",    name: "Sunlight quest",    description: "Step outside for 10 min of light.", category: "physical", difficulty: "easy",   hp: 9,  xp: 14, minutes: 10, icon: Sun,        tint: "var(--peach)" },
  { id: "ph-nature", name: "Touch the green",   description: "Spend time near plants or trees.",  category: "physical", difficulty: "easy",   hp: 8,  xp: 12, minutes: 10, icon: TreePine,   tint: "var(--mint)" },
  { id: "ph-yoga",   name: "Flow of forms",     description: "15 minute yoga session.",           category: "physical", difficulty: "hard",   hp: 18, xp: 28, minutes: 15, icon: Flower2,    tint: "var(--lavender)" },

  // SOCIAL
  { id: "so-friend", name: "Call upon an ally",   description: "Talk to a friend today.",            category: "social", difficulty: "medium", hp: 12, xp: 18, minutes: 15, icon: MessageCircle, tint: "var(--peach)" },
  { id: "so-fam",    name: "Message of home",     description: "Reach out to a family member.",      category: "social", difficulty: "easy",   hp: 10, xp: 14, minutes: 5,  icon: Phone,         tint: "var(--lavender)" },
  { id: "so-comm",   name: "Gather the guild",    description: "Join a community activity.",         category: "social", difficulty: "hard",   hp: 18, xp: 28, minutes: 30, icon: Users,         tint: "var(--mint)" },
  { id: "so-thank",  name: "Words of gratitude",  description: "Tell someone you appreciate them.",  category: "social", difficulty: "easy",   hp: 8,  xp: 12, minutes: 2,  icon: Gift,          tint: "var(--peach)" },

  // PRODUCTIVITY
  { id: "pr-task",   name: "Slay one boss task",  description: "Finish one important task.",         category: "productivity", difficulty: "medium", hp: 12, xp: 22, minutes: 30, icon: CheckCircle2, tint: "var(--mint)" },
  { id: "pr-study",  name: "Scholar's session",   description: "Study or learn for 20 minutes.",    category: "productivity", difficulty: "medium", hp: 11, xp: 20, minutes: 20, icon: GraduationCap,tint: "var(--sky)" },
  { id: "pr-plan",   name: "Map the day",         description: "Organize your task list.",           category: "productivity", difficulty: "easy",   hp: 7,  xp: 12, minutes: 5,  icon: ClipboardList,tint: "var(--lavender)" },
  { id: "pr-assn",   name: "Pending quest log",   description: "Finish a pending assignment.",       category: "productivity", difficulty: "hard",   hp: 18, xp: 30, minutes: 45, icon: FileCheck,    tint: "var(--peach)" },

  // FUN
  { id: "fn-music",  name: "Song of the heart",   description: "Listen to your favorite music.",     category: "fun", difficulty: "easy",   hp: 6,  xp: 10, minutes: 10, icon: Music,    tint: "var(--lavender)" },
  { id: "fn-watch",  name: "Tales by firelight",  description: "Watch something you enjoy.",         category: "fun", difficulty: "easy",   hp: 6,  xp: 10, minutes: 25, icon: Tv,       tint: "var(--sky)" },
  { id: "fn-read",   name: "Open the tome",       description: "Read a chapter of a book.",          category: "fun", difficulty: "easy",   hp: 8,  xp: 14, minutes: 20, icon: BookOpen, tint: "var(--peach)" },
  { id: "fn-create", name: "Spark of creation",   description: "Draw, paint, or make something.",    category: "fun", difficulty: "medium", hp: 12, xp: 20, minutes: 20, icon: Palette,  tint: "var(--mint)" },
  { id: "fn-game",   name: "Play a relaxing game",description: "Play something calming.",            category: "fun", difficulty: "easy",   hp: 6,  xp: 10, minutes: 15, icon: Gamepad2, tint: "var(--lavender)" },
];

export function pickDailyQuests(seed = new Date().toDateString(), count = 5): Quest[] {
  // Deterministic seeded shuffle so daily quests stay stable per day
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  const pool = [...QUEST_POOL];
  const out: Quest[] = [];
  while (out.length < count && pool.length) {
    h = (h * 1664525 + 1013904223) >>> 0;
    const idx = h % pool.length;
    out.push(pool.splice(idx, 1)[0]);
  }
  return out;
}

export function rerollQuest(current: Quest, exclude: string[]): Quest {
  const candidates = QUEST_POOL.filter(
    (q) => q.difficulty === current.difficulty && q.id !== current.id && !exclude.includes(q.id),
  );
  if (!candidates.length) return current;
  return candidates[Math.floor(Math.random() * candidates.length)];
}