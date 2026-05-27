import { createFileRoute, Link } from "@tanstack/react-router";
import { MobileShell } from "@/components/MobileShell";
import { HPBar } from "@/components/HPBar";
import heroAvatar from "@/assets/hero-avatar.png";
import { Flame, Trophy, Coffee, Moon, ChevronRight, Settings } from "lucide-react";
import { useHP, MODE_META } from "@/lib/hp-context";
import { pickDailyQuests } from "@/lib/quests";
import { dailyQuote, recoveryQuote, emergencyQuote } from "@/lib/quotes";
import { useState } from "react";

export const Route = createFileRoute("/home")({
  component: Home,
  head: () => ({ meta: [{ title: "Adventurer's Camp — InnerHP" }, { name: "description", content: "Your daily Mental HP camp." }] }),
});

const moods = [
  { e: "🌧️", label: "Low", delta: -4 },
  { e: "😐", label: "Meh", delta: -1 },
  { e: "🙂", label: "Okay", delta: 2 },
  { e: "😊", label: "Good", delta: 5 },
  { e: "✨", label: "Bright", delta: 7 },
];

function Home() {
  const { hp, level, streak, badges, mode, addHP } = useHP();
  const meta = MODE_META[mode];
  const todayQuests = pickDailyQuests().slice(0, 3);
  const [pickedMood, setPickedMood] = useState<number | null>(null);
  const quote =
    mode === "emergency" ? emergencyQuote()
    : mode === "recovery" ? recoveryQuote()
    : dailyQuote();

  return (
    <MobileShell>
      <header className="flex items-center justify-between">
        <div>
          <p className="text-xs text-muted-foreground">Welcome back, hero</p>
          <h1 className="font-display text-2xl font-bold">Aria 🌙</h1>
        </div>
        <Link to="/settings" className="glass grid h-11 w-11 place-items-center rounded-full">
          <Settings className="h-5 w-5" />
        </Link>
      </header>

      {/* Mode banner */}
      <div className="mt-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider"
           style={{ background: `color-mix(in oklab, ${meta.tint} 35%, white)` }}>
        <span className="h-1.5 w-1.5 rounded-full" style={{ background: meta.tint }} />
        {meta.label} mode · {meta.sub}
      </div>

      {/* HP Card */}
      <section className="glass relative mt-3 overflow-hidden rounded-3xl p-5">
        <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full opacity-40 blur-2xl" style={{ background: meta.tint }} />
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-full bg-[var(--mint)] blur-xl opacity-60" />
            <img src={heroAvatar} alt="Your companion" width={768} height={768} className="animate-float h-24 w-24 object-contain" />
          </div>
          <div className="flex-1">
            <div className="inline-flex items-center gap-1 rounded-full bg-[var(--mint)]/40 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider">
              <Flame className="h-3 w-3" /> Lvl {level} · Calm Wanderer
            </div>
            <p className="mt-1 text-xs text-muted-foreground">{meta.tagline}</p>
          </div>
        </div>
        <div className="mt-4">
          <HPBar value={hp} />
        </div>
      </section>

      {/* Mood quick row */}
      <section className="mt-5">
        <h3 className="mb-2 font-display text-sm font-semibold text-muted-foreground">How's your heart right now?</h3>
        <div className="glass-soft flex justify-between rounded-2xl p-2">
          {moods.map((m, i) => (
            <button
              key={i}
              onClick={() => { setPickedMood(i); addHP(m.delta); }}
              className={`flex flex-col items-center rounded-xl px-2 py-1.5 transition-all hover:bg-white/60 ${pickedMood === i ? "bg-white/80 shadow-sm scale-105" : ""}`}
            >
              <span className="text-2xl">{m.e}</span>
              <span className="mt-0.5 text-[10px] text-muted-foreground">{m.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="mt-5 overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--peach)]/60 to-[var(--lavender)]/60 p-5">
        <Coffee className="h-5 w-5 text-foreground/70" />
        <p className="mt-2 font-display text-base leading-snug">“{quote}”</p>
      </section>

      {/* Active quests */}
      <section className="mt-5">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="font-display text-base font-semibold">Today's quests</h3>
          <Link to="/quests" className="flex items-center text-xs text-muted-foreground">
            Quest board <ChevronRight className="h-3 w-3" />
          </Link>
        </div>
        <div className="space-y-2.5">
          {todayQuests.map((q) => {
            const I = q.icon;
            return (
              <div key={q.id} className="glass flex items-center gap-3 rounded-2xl p-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl" style={{ background: `color-mix(in oklab, ${q.tint} 60%, white)` }}>
                  <I className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold">{q.name}</p>
                  <p className="text-[11px] text-muted-foreground">+{q.hp} HP · {q.difficulty} · {q.minutes}m</p>
                </div>
                <div className="grid h-7 w-7 place-items-center rounded-full border-2 border-dashed border-muted-foreground/40 text-[10px] font-bold" />
              </div>
            );
          })}
        </div>
      </section>

      {/* Stats */}
      <section className="mt-5 grid grid-cols-3 gap-2">
        {[
          { i: Flame, label: "Streak", v: `${streak}d`, t: "var(--peach)" },
          { i: Trophy, label: "Badges", v: String(badges.length), t: "var(--lavender)" },
          { i: Moon, label: "Sleep", v: "7h", t: "var(--sky)" },
        ].map(({ i: Ic, label, v, t }, k) => (
          <div key={k} className="glass-soft rounded-2xl p-3 text-center">
            <Ic className="mx-auto h-4 w-4" style={{ color: t }} />
            <p className="mt-1 font-display text-lg font-bold">{v}</p>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</p>
          </div>
        ))}
      </section>

      <Link to="/emergency" className="mt-5 block text-center text-[11px] text-muted-foreground underline-offset-4 hover:underline">
        Feeling overwhelmed? Tap for a calm sanctuary →
      </Link>
    </MobileShell>
  );
}