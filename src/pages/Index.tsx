import { Eye } from "lucide-react";

const Index = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--gradient-bg)" }}
      />
      <div className="animate-pulse-glow pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">
        {/* Logo icon */}
        <div className="animate-float flex h-20 w-20 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 shadow-[var(--shadow-glow)]">
          <Eye className="h-10 w-10 text-primary" />
        </div>

        {/* Brand */}
        <h1 className="font-display text-6xl font-bold tracking-tight text-foreground sm:text-8xl">
          Sys<span className="bg-gradient-to-r from-primary to-[hsl(280,90%,70%)] bg-clip-text text-transparent">Lens</span>
        </h1>

        {/* Soon badge */}
        <div className="rounded-full border border-primary/30 bg-primary/5 px-6 py-2">
          <span className="font-display text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Coming Soon
          </span>
        </div>

        <p className="max-w-md text-muted-foreground">
          Something powerful is being crafted. Stay tuned.
        </p>
      </div>

      {/* Bottom fade line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    </div>
  );
};

export default Index;
