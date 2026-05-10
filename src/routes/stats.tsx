import { createFileRoute } from "@tanstack/react-router";
import { MobileShell } from "@/components/MobileShell";
import { TrendingUp, Heart, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/stats")({
  component: Stats,
  head: () => ({ meta: [{ title: "Stats — InnerHP" }, { name: "description", content: "Your weekly mood and HP trends." }] }),
});

const week = [
  { d: "Mon", hp: 60, mood: "🙂" },
  { d: "Tue", hp: 45, mood: "😐" },
  { d: "Wed", hp: 30, mood: "😔" },
  { d: "Thu", hp: 55, mood: "🙂" },
  { d: "Fri", hp: 70, mood: "😊" },
  { d: "Sat", hp: 85, mood: "✨" },
  { d: "Sun", hp: 72, mood: "😊" },
];

const history = [
  { name: "Breath of calm", date: "Today", hp: 8 },
  { name: "Hydration ritual", date: "Today", hp: 5 },
  { name: "Heart pages", date: "Yesterday", hp: 10 },
  { name: "Wandering steps", date: "Yesterday", hp: 12 },
  { name: "Sunlight quest", date: "2d ago", hp: 20 },
];

function Stats() {
  const max = Math.max(...week.map((w) => w.hp));
  return (
    <MobileShell>
      <header>
        <h1 className="font-display text-3xl font-bold">Your week</h1>
        <p className="text-xs text-muted-foreground">Gentle reflection, not judgment.</p>
      </header>

      <section className="mt-4 grid grid-cols-3 gap-2">
        {[
          { i: Heart, l: "Avg HP", v: "59", t: "var(--hp)" },
          { i: TrendingUp, l: "Trend", v: "+12%", t: "var(--lavender)" },
          { i: CheckCircle2, l: "Quests", v: "23", t: "var(--mint)" },
        ].map(({ i: Ic, l, v, t }, k) => (
          <div key={k} className="glass rounded-2xl p-3 text-center">
            <Ic className="mx-auto h-5 w-5" style={{ color: t }} />
            <p className="mt-1 font-display text-xl font-bold">{v}</p>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{l}</p>
          </div>
        ))}
      </section>

      <section className="glass mt-4 rounded-3xl p-5">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-base font-semibold">HP this week</h3>
          <span className="text-[10px] text-muted-foreground">Last 7 days</span>
        </div>
        <div className="mt-5 flex h-44 items-end justify-between gap-2">
          {week.map((w, i) => {
            const h = (w.hp / max) * 100;
            return (
              <div key={i} className="flex flex-1 flex-col items-center gap-1.5">
                <span className="text-xs">{w.mood}</span>
                <div className="relative flex h-32 w-full items-end">
                  <div
                    className="gradient-hp w-full rounded-t-xl shadow-md"
                    style={{ height: `${h}%` }}
                  />
                </div>
                <span className="text-[10px] text-muted-foreground">{w.d}</span>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mt-4">
        <h3 className="mb-2 font-display text-base font-semibold">Mood ribbon</h3>
        <div className="glass-soft flex items-center justify-between rounded-2xl p-3">
          {week.map((w, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-xl">{w.mood}</span>
              <span className="text-[10px] text-muted-foreground">{w.d[0]}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-5">
        <h3 className="mb-2 font-display text-base font-semibold">Recent quests</h3>
        <div className="space-y-2">
          {history.map((h, i) => (
            <div key={i} className="glass-soft flex items-center justify-between rounded-2xl px-4 py-3">
              <div>
                <p className="text-sm font-semibold">{h.name}</p>
                <p className="text-[11px] text-muted-foreground">{h.date}</p>
              </div>
              <span className="font-display text-sm font-bold text-[color:var(--hp)]">+{h.hp}</span>
            </div>
          ))}
        </div>
      </section>
    </MobileShell>
  );
}