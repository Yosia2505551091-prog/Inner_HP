export function MagicParticles({ count = 12 }: { count?: number }) {
  const items = Array.from({ length: count });
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {items.map((_, i) => {
        const left = (i * 83) % 100;
        const top = (i * 47) % 100;
        const size = 4 + ((i * 13) % 8);
        const delay = (i % 6) * 0.7;
        const dur = 6 + ((i * 3) % 5);
        const tints = ["var(--lavender)", "var(--mint)", "var(--sky)", "var(--peach)"];
        return (
          <span
            key={i}
            className="absolute rounded-full blur-[1px] opacity-60"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
              background: tints[i % tints.length],
              animation: `float-soft ${dur}s ease-in-out ${delay}s infinite`,
              boxShadow: `0 0 12px ${tints[i % tints.length]}`,
            }}
          />
        );
      })}
    </div>
  );
}