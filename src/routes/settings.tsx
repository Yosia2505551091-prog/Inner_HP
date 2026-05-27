import { createFileRoute, Link } from "@tanstack/react-router";
import { MobileShell } from "@/components/MobileShell";
import { useHP } from "@/lib/hp-context";
import { Bell, Moon, Shield, Heart, ChevronRight, LogOut, Sparkles, ArrowLeft, RotateCcw } from "lucide-react";

export const Route = createFileRoute("/settings")({
  component: Settings,
  head: () => ({ meta: [{ title: "Settings — InnerHP" }] }),
});

function Row({ icon: Ic, label, value }: { icon: any; label: string; value: string }) {
  return (
    <button className="glass-soft flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left">
      <Ic className="h-4 w-4 text-muted-foreground" />
      <span className="flex-1 text-sm font-medium">{label}</span>
      <span className="text-xs text-muted-foreground">{value}</span>
      <ChevronRight className="h-4 w-4 text-muted-foreground" />
    </button>
  );
}

function Settings() {
  const { setHP, hp } = useHP();
  return (
    <MobileShell>
      <header className="flex items-center gap-3">
        <Link to="/profile" className="glass grid h-10 w-10 place-items-center rounded-full">
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <div>
          <h1 className="font-display text-2xl font-bold">Settings</h1>
          <p className="text-xs text-muted-foreground">Tune your companion.</p>
        </div>
      </header>

      <section className="mt-5 space-y-2">
        <Row icon={Bell} label="Notifications" value="Gentle reminders" />
        <Row icon={Moon} label="Night mode" value="Auto" />
        <Row icon={Shield} label="Privacy" value="On-device" />
        <Row icon={Heart} label="Emergency contact" value="Add one" />
        <Link to="/emergency" className="glass-soft flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left">
          <Sparkles className="h-4 w-4 text-[var(--lavender)]" />
          <span className="flex-1 text-sm font-medium">Open the calm sanctuary</span>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </Link>
      </section>

      <section className="glass mt-5 rounded-3xl p-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Demo — preview HP modes</p>
        <p className="mt-1 text-xs text-muted-foreground">Current HP: <strong>{hp}</strong>. Tap to swap modes.</p>
        <div className="mt-3 grid grid-cols-3 gap-2">
          <button onClick={() => setHP(85)} className="rounded-full bg-[var(--hp)]/40 py-2 text-xs font-semibold">Thriving</button>
          <button onClick={() => setHP(55)} className="rounded-full bg-[var(--lavender)]/60 py-2 text-xs font-semibold">Recovery</button>
          <button onClick={() => setHP(25)} className="rounded-full bg-[var(--sky)]/60 py-2 text-xs font-semibold">Sanctuary</button>
        </div>
        <button onClick={() => { localStorage.removeItem("innerhp.state.v1"); location.reload(); }} className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-full border border-border py-2 text-xs text-muted-foreground">
          <RotateCcw className="h-3 w-3" /> Reset adventure
        </button>
      </section>

      <Link to="/" className="glass-soft mt-5 flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold text-muted-foreground">
        <LogOut className="h-4 w-4" /> Sign out
      </Link>
    </MobileShell>
  );
}