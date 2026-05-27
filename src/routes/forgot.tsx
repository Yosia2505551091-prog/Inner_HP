import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, ArrowLeft, MailCheck } from "lucide-react";
import logo from "@/assets/innerhp-logo.png";
import { MagicParticles } from "@/components/MagicParticles";

export const Route = createFileRoute("/forgot")({
  component: Forgot,
  head: () => ({ meta: [{ title: "Forgot password — InnerHP" }] }),
});

function Forgot() {
  const [sent, setSent] = useState(false);
  return (
    <div className="relative mx-auto flex min-h-screen w-full max-w-[440px] flex-col px-6 py-10">
      <MagicParticles />
      <Link to="/login" className="glass-soft inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1.5 text-xs">
        <ArrowLeft className="h-3.5 w-3.5" /> Back
      </Link>
      <div className="mt-6 text-center">
        <img src={logo} alt="InnerHP" width={768} height={768} className="mx-auto h-20 w-20 object-contain" />
        <h1 className="mt-3 font-display text-2xl font-bold">Lost your spellbook?</h1>
        <p className="mt-1 text-sm text-muted-foreground">We'll send a magic link to recover it.</p>
      </div>
      {!sent ? (
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="mt-8 space-y-3">
          <label className="glass-soft flex items-center gap-3 rounded-2xl px-4 py-3">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <input type="email" required placeholder="you@realm.com" className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground/70" />
          </label>
          <button type="submit" className="gradient-primary mt-2 w-full rounded-full py-3.5 font-display text-base font-semibold shadow-lg active:scale-[0.98]">
            Send recovery scroll
          </button>
        </form>
      ) : (
        <div className="glass animate-magic-pop mt-8 rounded-3xl p-6 text-center">
          <MailCheck className="mx-auto h-10 w-10 text-[var(--hp)]" />
          <p className="mt-2 font-display text-lg font-bold">Scroll sent</p>
          <p className="mt-1 text-sm text-muted-foreground">Check your inbox to reset your passphrase.</p>
        </div>
      )}
    </div>
  );
}