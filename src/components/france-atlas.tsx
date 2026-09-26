import { useNavigate } from "@tanstack/react-router";
import { territories } from "@/data/catalog";
import { cn } from "@/lib/utils";

const W = 280;
const H = 300;

const LABEL_OFF: Record<string, { dx: number; dy: number }> = {
  paris: { dx: -42, dy: -10 },
  "seine-saint-denis": { dx: 12, dy: 6 },
  lyon: { dx: -34, dy: 0 },
  grenoble: { dx: 10, dy: 14 },
  marseille: { dx: 10, dy: 4 },
  "le-havre": { dx: 10, dy: 4 },
};

function project(lat: number, lng: number) {
  const x = ((lng - -5.2) / (9.6 - -5.2)) * W;
  const y = ((51.2 - lat) / (51.2 - 42.2)) * H;
  return { x, y };
}

export function FranceAtlas() {
  const navigate = useNavigate();
  const mainland = territories.filter((t) => t.slug !== "guyane");

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_220px]">
      <div className="rounded-xl bg-surface p-3 shadow-[var(--shadow-border)] sm:p-5">
        <svg
          viewBox={`-8 -8 ${W + 40} ${H + 16}`}
          className="h-auto w-full"
          role="img"
          aria-label="Carte de France avec les territoires documentés"
        >
          <path
            d="M108 8 L128 14 L140 28 L168 48 L186 70 L190 96 L182 128 L176 158 L180 188 L168 214 L142 228 L108 234 L78 226 L48 214 L28 196 L16 168 L10 132 L8 98 L18 68 L36 42 L62 22 L86 10 Z"
            fill="#1e1e20"
            stroke="#9aa8b8"
            strokeOpacity="0.35"
            strokeWidth="1.2"
          />
          <ellipse
            cx="228"
            cy="210"
            rx="14"
            ry="22"
            fill="#1e1e20"
            stroke="#9aa8b8"
            strokeOpacity="0.35"
            strokeWidth="1.2"
          />
          {mainland.map((t) => {
            const { x, y } = project(t.lat, t.lng);
            const off = LABEL_OFF[t.slug] ?? { dx: 10, dy: 4 };
            return (
              <g
                key={t.slug}
                className="cursor-pointer"
                role="link"
                tabIndex={0}
                onClick={() => navigate({ to: "/territoires/$slug", params: { slug: t.slug } })}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    navigate({ to: "/territoires/$slug", params: { slug: t.slug } });
                  }
                }}
              >
                <circle
                  cx={x}
                  cy={y}
                  r={t.intensity === "critique" ? 7 : 5.5}
                  fill="#c5cdd8"
                />
                <text
                  x={x + off.dx}
                  y={y + off.dy}
                  fill="#f1efe8"
                  fontSize="11"
                  fontFamily="Source Sans 3, sans-serif"
                >
                  {t.name.split("—")[0]?.trim()}
                </text>
              </g>
            );
          })}
        </svg>
        <p className="mt-3 px-1 text-xs text-muted">
          Carte schématique. Les points marquent des territoires documentés, pas une liste
          exhaustive des points de vente.
        </p>
      </div>
      <ul className="flex flex-col gap-2">
        {territories.map((t) => (
          <li key={t.slug}>
            <button
              type="button"
              onClick={() => navigate({ to: "/territoires/$slug", params: { slug: t.slug } })}
              className="flex min-h-14 w-full items-center justify-between rounded-lg bg-surface px-3 py-2 text-left shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]"
            >
              <span>
                <span className="block text-sm text-fg">{t.name}</span>
                <span className="block text-xs text-muted">{t.dept}</span>
              </span>
              <span
                className={cn(
                  "text-xs uppercase tracking-wider",
                  t.intensity === "critique"
                    ? "text-danger"
                    : t.intensity === "élevé"
                      ? "text-accent"
                      : "text-muted",
                )}
              >
                {t.intensity}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
