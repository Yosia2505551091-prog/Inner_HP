import { createFileRoute } from "@tanstack/react-router";
import { MobileShell } from "@/components/MobileShell";
import { useState } from "react";
import { Droplets, Moon, BookHeart, Wind, Footprints, Sun, Sparkles, Check } from "lucide-react";

export const Route = createFileRoute("/quests")({
  component: Quests,
  head: () => ({ meta: [{ title: "Quests — InnerHP" }, { name: "description", content: "Daily self-care quests to restore your HP." }] }),
});

type Difficulty = "easy" | "medium" | "hard";

const QUESTS: { id: string; icon: any; name: string; desc: string; hp: number; difficulty: Difficulty; tint: string }[] = [
  { id: "water", icon: Droplets, name: "Hydration ritual", desc: "Drink 6 glasses of water", hp: 5, difficulty: "easy", tint: "var(--sky)" },
  { id: "sleep", icon: Moon, name: "Early rest", desc: "In bed before 11pm", hp: 15, difficulty: "medium", tint: "var(--lavender)" },
  { id: "journal", icon: BookHeart, name: "Heart pages", desc: "Journal one feeling", hp: 10, difficulty: "easy", tint: "var(--peach)" },
  { id: "breath", icon: Wind, name: "Breath of calm", desc: "3 minutes box breathing", hp: 8, difficulty: "easy", tint: "var(--mint)" },
  { id: "walk", icon: Footprints, name: "Wandering steps", desc: "Walk 15 minutes outside", hp: 12, difficulty: "medium", tint: "var(--hp)" },
  { id: "sun", icon: Sun, name: "Sunlight quest", desc: "10 min of morning light", hp: 20, difficulty: "hard", tint: "var(--peach)" },
];

const diffColor: Record<Difficulty, string> = {
  easy: "bg-[var(--mint)]/60",
  medium: "bg-[var(--sky)]/70",
  hard: "bg-[var(--peach)]/70",
};

function Quests() {
  const [done, setDone] = useState<Record<string, boolean>>({ water: true });
  const [reward, setReward] = useState<{ hp: number } | null>(null);
  const total = QUESTS.reduce((a, q) => a + (done[q.id] ? q.hp : 0), 0);

  const complete = (id: string, hp: number) => {
    if (done[id]) return;
    setDone({ ...done, [id]: true });
    setReward({ hp });
    setTimeout(() => setReward(null), 1800);
  };

  return (
    <MobileShell>
      <header>
        <h1 className="font-display text-3xl font-bold">Quest board</h1>
        <p className="text-xs text-muted-foreground">Choose your adventure for today.</p>
      </header>

      <div className="glass mt-4 flex items-center justify-between rounded-3xl p-4">
        <div>
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Earned today</p>
          <p className="font-display text-2xl font-bold">+{total} HP</p>
        </div>
        <div className="text-right">
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Completed</p>
          <p className="font-display text-2xl font-bold">{Object.values(done).filter(Boolean).length}/{QUESTS.length}</p>
        </div>
      </div>

      <section className="mt-5 space-y-3">
        {QUESTS.map((q) => {
          const I = q.icon;
          const isDone = !!done[q.id];
          return (
            <div key={q.id} className={`glass relative overflow-hidden rounded-3xl p-4 transition-all ${isDone ? "opacity-70" : ""}`}>
              <div className="absolute right-0 top-0 h-24 w-24 rounded-full opacity-30 blur-2xl" style={{ background: q.tint }} />
              <div className="relative flex items-center gap-3">
                <div className="grid h-14 w-14 place-items-center rounded-2xl shadow-inner" style={{ background: `color-mix(in oklab, ${q.tint} 70%, white)` }}>
                  <I className="h-6 w-6 text-foreground/80" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1.5">
                    <p className="font-display text-base font-semibold">{q.name}</p>
                    <span className={`rounded-full px-1.5 py-0.5 text-[9px] font-bold uppercase ${diffColor[q.difficulty]}`}>{q.difficulty}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{q.desc}</p>
                  <p className="mt-1 text-[11px] font-semibold text-[color:var(--hp)]">+{q.hp} HP reward</p>
                </div>
                <button
                  onClick={() => complete(q.id, q.hp)}
                  disabled={isDone}
                  className={`grid h-11 w-11 place-items-center rounded-full transition-all ${
                    isDone ? "bg-[var(--hp)] text-white" : "gradient-primary text-foreground shadow-md active:scale-95"
                  }`}
                >
                  <Check className="h-5 w-5" />
                </button>
              </div>
            </div>
          );
        })}
      </section>

      {reward && (
        <div className="fixed inset-0 z-[60] grid place-items-center bg-black/30 backdrop-blur-sm">
          <div className="glass animate-pulse-glow rounded-3xl px-8 py-6 text-center">
            <Sparkles className="mx-auto h-8 w-8 text-[var(--hp)]" />
            <p className="mt-2 font-display text-3xl font-bold text-gradient">+{reward.hp} HP</p>
            <p className="mt-1 text-sm text-muted-foreground">You did something kind for yourself.</p>
          </div>
        </div>
      )}
    </MobileShell>
  );
}