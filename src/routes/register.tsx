import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Mail, Lock, User as UserIcon } from "lucide-react";
import logo from "@/assets/innerhp-logo.png";
import { MagicParticles } from "@/components/MagicParticles";

export const Route = createFileRoute("/register")({
  component: Register,
  head: () => ({ meta: [{ title: "Create account — InnerHP" }] }),
});

function Register() {
  const nav = useNavigate();
  return (
    <div className="relative mx-auto flex min-h-screen w-full max-w-[440px] flex-col px-6 py-10">
      <MagicParticles />
      <div className="text-center">
        <img src={logo} alt="InnerHP" width={768} height={768} className="mx-auto h-20 w-20 object-contain drop-shadow-xl" />
        <h1 className="mt-3 font-display text-3xl font-bold">Begin a new tale</h1>
        <p className="mt-1 text-sm text-muted-foreground">Forge your hero — your story starts here.</p>
      </div>
      <form onSubmit={(e) => { e.preventDefault(); nav({ to: "/onboarding" }); }} className="mt-8 space-y-3">
        <label className="glass-soft flex items-center gap-3 rounded-2xl px-4 py-3">
          <UserIcon className="h-4 w-4 text-muted-foreground" />
          <input required placeholder="Hero name" className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground/70" />
        </label>
        <label className="glass-soft flex items-center gap-3 rounded-2xl px-4 py-3">
          <Mail className="h-4 w-4 text-muted-foreground" />
          <input type="email" required placeholder="you@realm.com" className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground/70" />
        </label>
        <label className="glass-soft flex items-center gap-3 rounded-2xl px-4 py-3">
          <Lock className="h-4 w-4 text-muted-foreground" />
          <input type="password" required placeholder="Create a passphrase" className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground/70" />
        </label>
        <button type="submit" className="gradient-primary mt-2 w-full rounded-full py-3.5 font-display text-base font-semibold shadow-lg active:scale-[0.98]">
          Forge my hero
        </button>
      </form>
      <p className="mt-6 text-center text-xs text-muted-foreground">
        Already on the path? <Link to="/login" className="font-semibold text-primary hover:underline">Sign in</Link>
      </p>
    </div>
  );
}