import { createFileRoute, Link } from "@tanstack/react-router";
import { MobileShell } from "@/components/MobileShell";
import { HPBar } from "@/components/HPBar";
import heroAvatar from "@/assets/hero-avatar.png";
import { Settings, Moon, Bell, Shield, ChevronRight, Trophy, Lock } from "lucide-react";
import { useHP, MODE_META } from "@/lib/hp-context";

export const Route = createFileRoute("/profile")({
  component: Profile,
  head: () => ({ meta: [{ title: "Profile — InnerHP" }, { name: "description", content: "Your character, badges and settings." }] }),
});

const badges = [
  { name: "Sleep Master", emoji: "🌙", color: "var(--lavender)", earned: true },
  { name: "Mental Survivor", emoji: "🛡️", color: "var(--sky)", earned: true },
  { name: "7-Day Streak", emoji: "🔥", color: "var(--peach)", earned: true },
  { name: "Hydrated Hero", emoji: "💧", color: "var(--sky)", earned: true },
  { name: "Dawn Walker", emoji: "🌅", color: "var(--peach)", earned: false },
  { name: "Zen Sage", emoji: "🪷", color: "var(--mint)", earned: false },
];

function Profile() {
  const { hp, level, streak, mode } = useHP();
  const meta = MODE_META[mode];
  return (
    <MobileShell>
      <header className="flex items-center justify-between">
        <h1 className="font-display text-2xl font-bold">Hero profile</h1>
        <Link to="/settings" className="glass grid h-10 w-10 place-items-center rounded-full">
          <Settings className="h-4 w-4" />
        </Link>
      </header>

      <section className="glass mt-4 overflow-hidden rounded-3xl p-5 text-center">
        <div className="relative mx-auto w-fit">
          <div className="absolute inset-0 -z-10 rounded-full blur-2xl opacity-60" style={{ background: meta.tint }} />
          <img src={heroAvatar} alt="avatar" width={768} height={768} className="animate-float h-32 w-32 object-contain" />
        </div>
        <h2 className="mt-2 font-display text-2xl font-bold">Aria</h2>
        <p className="text-xs text-muted-foreground">Calm Wanderer · Lvl {level} · {meta.label}</p>
        <div className="mt-4">
          <HPBar value={hp} />
        </div>
        <div className="mt-3 flex justify-around text-center">
          <div><p className="font-display text-lg font-bold">42</p><p className="text-[10px] uppercase text-muted-foreground">days</p></div>
          <div><p className="font-display text-lg font-bold">312</p><p className="text-[10px] uppercase text-muted-foreground">quests</p></div>
          <div><p className="font-display text-lg font-bold">{streak}</p><p className="text-[10px] uppercase text-muted-foreground">streak</p></div>
        </div>
      </section>

      <section className="mt-5">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="font-display text-base font-semibold">Legendary badges</h3>
          <span className="text-xs text-muted-foreground"><Trophy className="mr-1 inline h-3 w-3" />4 / 6</span>
        </div>
        <div className="grid grid-cols-3 gap-2.5">
          {badges.map((b, i) => (
            <div key={i} className={`glass-soft relative grid place-items-center rounded-2xl p-3 text-center ${b.earned ? "" : "opacity-50"}`}>
              <div
                className="grid h-14 w-14 place-items-center rounded-full text-2xl shadow-inner"
                style={{ background: `radial-gradient(circle at 30% 30%, white, ${b.color})` }}
              >
                {b.earned ? b.emoji : <Lock className="h-5 w-5 text-foreground/50" />}
              </div>
              <p className="mt-2 text-[11px] font-semibold leading-tight">{b.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-5 space-y-2">
        {[
          { i: Bell, l: "Notifications", v: "Gentle" },
          { i: Moon, l: "Night mode", v: "Auto" },
          { i: Shield, l: "Privacy", v: "On-device" },
        ].map(({ i: Ic, l, v }, k) => (
          <button key={k} className="glass-soft flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left">
            <Ic className="h-4 w-4 text-muted-foreground" />
            <span className="flex-1 text-sm font-medium">{l}</span>
            <span className="text-xs text-muted-foreground">{v}</span>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </button>
        ))}
        <Link to="/emergency" className="glass-soft flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left">
          <span className="text-base">🌿</span>
          <span className="flex-1 text-sm font-medium">Calm space</span>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </Link>
      </section>
    </MobileShell>
  );
}