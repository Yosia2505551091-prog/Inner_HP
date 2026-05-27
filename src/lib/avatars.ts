export type AvatarCategory = "adventurer" | "casual" | "creature";

export type Avatar = {
  id: string;
  name: string;
  emoji: string;
  category: AvatarCategory;
  tint: string;
  title: string;
  unlocked: boolean;
  unlockHint?: string;
};

export const CATEGORY_LABEL: Record<AvatarCategory, string> = {
  adventurer: "Fantasy Adventurers",
  casual: "Cute Casual",
  creature: "Fantasy Creatures",
};

export const AVATARS: Avatar[] = [
  // Adventurers
  { id: "knight",   name: "Knight",     emoji: "🛡️", category: "adventurer", tint: "var(--sky)",      title: "Shield of the Heart",  unlocked: true },
  { id: "mage",     name: "Mage",       emoji: "🧙", category: "adventurer", tint: "var(--lavender)", title: "Weaver of Calm",       unlocked: true },
  { id: "archer",   name: "Archer",     emoji: "🏹", category: "adventurer", tint: "var(--mint)",     title: "Focused Aim",          unlocked: true },
  { id: "healer",   name: "Healer",     emoji: "💖", category: "adventurer", tint: "var(--peach)",    title: "Bearer of Light",      unlocked: true, unlockHint: "Reach Level 5" },
  { id: "rogue",    name: "Rogue",      emoji: "🗡️", category: "adventurer", tint: "var(--lavender)", title: "Silent Survivor",      unlocked: false, unlockHint: "Reach Level 10" },

  // Casual
  { id: "student",  name: "Student",    emoji: "🎓", category: "casual", tint: "var(--sky)",      title: "Curious Mind",          unlocked: true },
  { id: "musician", name: "Musician",   emoji: "🎵", category: "casual", tint: "var(--lavender)", title: "Songweaver",            unlocked: true },
  { id: "artist",   name: "Artist",     emoji: "🎨", category: "casual", tint: "var(--peach)",    title: "Color Whisperer",       unlocked: true, unlockHint: "Reach Level 3" },
  { id: "athlete",  name: "Athlete",    emoji: "🏃", category: "casual", tint: "var(--mint)",     title: "Steady Runner",         unlocked: false, unlockHint: "Reach Level 8" },
  { id: "reader",   name: "Book Lover", emoji: "📚", category: "casual", tint: "var(--peach)",    title: "Quiet Reader",          unlocked: true },

  // Creatures
  { id: "fox",      name: "Spirit Fox",      emoji: "🦊", category: "creature", tint: "var(--peach)",    title: "Wandering Spirit",  unlocked: true },
  { id: "fairy",    name: "Fairy",           emoji: "🧚", category: "creature", tint: "var(--lavender)", title: "Tiny Lightbringer", unlocked: false, unlockHint: "Reach Level 7" },
  { id: "slime",    name: "Slime Companion", emoji: "🟢", category: "creature", tint: "var(--mint)",     title: "Soft & Bouncy",     unlocked: true },
  { id: "dragon",   name: "Baby Dragon",     emoji: "🐉", category: "creature", tint: "var(--mint)",     title: "Hatchling Heart",   unlocked: false, unlockHint: "Reach Level 15" },
  { id: "guardian", name: "Forest Guardian", emoji: "🌳", category: "creature", tint: "var(--mint)",     title: "Ancient Keeper",    unlocked: false, unlockHint: "Reach Level 20" },
];

export function avatarById(id: string): Avatar {
  return AVATARS.find((a) => a.id === id) ?? AVATARS[0];
}

export function avatarUnlocked(a: Avatar, level: number): boolean {
  if (a.unlocked) return true;
  const m = a.unlockHint?.match(/Level\s+(\d+)/i);
  if (m) return level >= parseInt(m[1], 10);
  return false;
}