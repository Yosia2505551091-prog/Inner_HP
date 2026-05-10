import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Heart, Shield, Sparkles, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/onboarding")({
  component: Onboarding,
  head: () => ({ meta: [{ title: "Welcome — InnerHP" }, { name: "description", content: "Learn how Mental HP works." }] }),
});

const slides = [
  {
    icon: Heart,
    tint: "var(--hp)",
    title: "Meet your Mental HP",
    body: "Just like in your favorite RPG, you have Health Points — but for your mind. It rises and falls with how you feel.",
  },
  {
    icon: Shield,
    tint: "var(--lavender)",
    title: "Stress lowers your HP",
    body: "Hard days, missed sleep, and burnout chip away at your bar. That's okay — it's part of being human.",
  },
  {
    icon: Sparkles,
    tint: "var(--mint)",
    title: "Self-care restores it",
    body: "Complete cozy daily quests — sip water, breathe, journal — and watch your HP glow back to full.",
  },
];

function Onboarding() {
  const [step, setStep] = useState(0);
  const nav = useNavigate();
  const slide = slides[step];
  const Icon = slide.icon;
  const last = step === slides.length - 1;
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[440px] flex-col px-6 py-10">
      <div className="flex justify-between">
        <div className="flex gap-1.5">
          {slides.map((_, i) => (
            <div key={i} className={`h-1.5 rounded-full transition-all ${i === step ? "w-8 bg-foreground" : "w-4 bg-muted-foreground/30"}`} />
          ))}
        </div>
        <Link to="/home" className="text-xs text-muted-foreground">Skip</Link>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <div className="glass animate-float relative mb-8 grid h-44 w-44 place-items-center rounded-[2.5rem]">
          <div className="absolute inset-2 rounded-[2rem] opacity-50 blur-2xl" style={{ background: slide.tint }} />
          <Icon className="relative h-20 w-20" style={{ color: slide.tint, fill: slide.tint }} strokeWidth={1.5} />
        </div>
        <h2 className="font-display text-3xl font-bold leading-tight">{slide.title}</h2>
        <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">{slide.body}</p>
      </div>
      <button
        onClick={() => (last ? nav({ to: "/home" }) : setStep(step + 1))}
        className="gradient-primary mt-6 flex w-full items-center justify-center gap-2 rounded-full py-4 font-display text-base font-semibold shadow-lg active:scale-[0.98]"
      >
        {last ? "Enter the world" : "Next"}
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}