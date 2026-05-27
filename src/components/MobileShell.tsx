import { Link, useRouterState } from "@tanstack/react-router";
import { Tent, ClipboardCheck, Sword, ScrollText, User } from "lucide-react";
import { ReactNode } from "react";
import { MagicParticles } from "./MagicParticles";
import { useHP } from "@/lib/hp-context";

const tabs = [
  { to: "/home", label: "Camp", icon: Tent },
  { to: "/checkin", label: "Check-in", icon: ClipboardCheck },
  { to: "/quests", label: "Quests", icon: Sword },
  { to: "/stats", label: "Journey", icon: ScrollText },
  { to: "/profile", label: "Me", icon: User },
] as const;

export function MobileShell({ children, hideNav = false }: { children: ReactNode; hideNav?: boolean }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const { mode } = useHP();
  const modeClass =
    mode === "emergency"
      ? "bg-gradient-to-b from-[oklch(0.92_0.03_240)] to-[oklch(0.95_0.02_280)]"
      : mode === "recovery"
      ? "bg-gradient-to-b from-[color-mix(in_oklab,var(--lavender)_25%,white)] to-background"
      : "";
  return (
    <div className={`relative mx-auto flex min-h-screen w-full max-w-[440px] flex-col px-4 pb-28 pt-6 transition-colors ${modeClass}`}>
      <MagicParticles count={mode === "emergency" ? 6 : 14} />
      <main className="flex-1">{children}</main>
      {!hideNav && (
        <nav className="fixed inset-x-0 bottom-4 z-50 mx-auto w-[92%] max-w-[420px]">
          <div className="glass flex items-center justify-between rounded-full px-3 py-2">
            {tabs.map(({ to, label, icon: Icon }) => {
              const active = path === to;
              return (
                <Link
                  key={to}
                  to={to}
                  className={`flex flex-1 flex-col items-center justify-center gap-0.5 rounded-full py-2 text-[10px] font-medium transition-all ${
                    active ? "gradient-primary text-foreground shadow-md scale-105" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className="h-5 w-5" strokeWidth={active ? 2.4 : 2} />
                  <span>{label}</span>
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </div>
  );
}