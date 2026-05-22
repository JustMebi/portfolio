import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const RobotHead = () => (
  <svg
    viewBox="0 0 120 152"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
    aria-hidden="true"
  >
    {/* Antenna rod */}
    <line
      x1="60" y1="28" x2="60" y2="7"
      stroke="hsl(var(--muted-foreground))"
      strokeWidth="3"
      strokeLinecap="round"
    />
    {/* Antenna ball */}
    <circle cx="60" cy="4" r="5" fill="hsl(var(--primary))">
      <animate attributeName="opacity" values="1;0.25;1" dur="2s" repeatCount="indefinite" />
    </circle>

    {/* Left ear */}
    <rect x="2" y="54" width="10" height="24" rx="3"
      fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="1.5" />
    <rect x="5" y="62" width="4" height="8" rx="1"
      fill="hsl(var(--primary))" opacity="0.5" />

    {/* Right ear */}
    <rect x="108" y="54" width="10" height="24" rx="3"
      fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="1.5" />
    <rect x="111" y="62" width="4" height="8" rx="1"
      fill="hsl(var(--primary))" opacity="0.5" />

    {/* Head */}
    <rect x="10" y="28" width="100" height="94" rx="14"
      fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="2" />

    {/* Panel divider */}
    <line x1="12" y1="72" x2="108" y2="72"
      stroke="hsl(var(--border))" strokeWidth="1" opacity="0.45" />

    {/* Left eye socket */}
    <rect x="18" y="40" width="37" height="24" rx="5"
      fill="hsl(var(--background))" stroke="hsl(var(--border))" strokeWidth="1.5" />
    {/* Left eye glow */}
    <rect x="22" y="44" width="29" height="16" rx="3" fill="hsl(var(--primary))">
      <animate attributeName="opacity" values="0.9;0.28;0.9" dur="3s" repeatCount="indefinite" />
    </rect>
    {/* Left eye scan line */}
    <line x1="22" y1="52" x2="51" y2="52"
      stroke="hsl(var(--background))" strokeWidth="1.5" opacity="0.35" />

    {/* Right eye socket */}
    <rect x="65" y="40" width="37" height="24" rx="5"
      fill="hsl(var(--background))" stroke="hsl(var(--border))" strokeWidth="1.5" />
    {/* Right eye glow */}
    <rect x="69" y="44" width="29" height="16" rx="3" fill="hsl(var(--primary))">
      <animate attributeName="opacity" values="0.9;0.28;0.9" dur="3s" begin="0.35s" repeatCount="indefinite" />
    </rect>
    {/* Right eye scan line */}
    <line x1="69" y1="52" x2="98" y2="52"
      stroke="hsl(var(--background))" strokeWidth="1.5" opacity="0.35" />

    {/* Nose LED */}
    <circle cx="60" cy="80" r="4" fill="hsl(var(--primary))" opacity="0.55">
      <animate attributeName="opacity" values="0.55;0.15;0.55" dur="1.6s" repeatCount="indefinite" />
    </circle>

    {/* Mouth panel */}
    <rect x="20" y="89" width="80" height="20" rx="5"
      fill="hsl(var(--background))" stroke="hsl(var(--border))" strokeWidth="1.5" />
    {/* Mouth LEDs */}
    {Array.from({ length: 8 }).map((_, i) => (
      <rect key={i} x={23 + i * 9} y="93" width="6" height="12" rx="1.5" fill="hsl(var(--primary))">
        <animate
          attributeName="opacity"
          values={i % 2 === 0 ? "0.9;0.12;0.9" : "0.12;0.9;0.12"}
          dur="1.1s"
          begin={`${i * 0.1}s`}
          repeatCount="indefinite"
        />
      </rect>
    ))}

    {/* Neck */}
    <rect x="42" y="122" width="36" height="12" rx="4"
      fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="1.5" />
    <circle cx="52" cy="128" r="3"
      fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="1" />
    <circle cx="68" cy="128" r="3"
      fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="1" />
  </svg>
);

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <style>{`
        @keyframes not-found-glitch {
          0%, 85%, 100% { text-shadow: none; transform: translate(0, 0); }
          87%  { text-shadow: -3px 0 hsl(var(--primary)); transform: translate(3px, 0); }
          89%  { text-shadow:  3px 0 hsl(var(--primary)); transform: translate(-3px, 0); }
          91%  { text-shadow: -2px 0 hsl(var(--primary)); transform: translate(2px, 0); }
          93%  { text-shadow: none; transform: translate(0, 0); }
        }
        .nf-four {
          animation: not-found-glitch 6s ease-in-out infinite;
        }
        .nf-four-right {
          animation: not-found-glitch 6s ease-in-out 0.6s infinite;
        }
      `}</style>

      <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6">
        {/* 4 [robot] 4 */}
        <div className="flex items-center justify-center gap-3 md:gap-6 mb-10">
          <span className="nf-four text-[7rem] md:text-[10rem] font-bold leading-none tracking-tighter select-none text-foreground">
            4
          </span>
          <div className="w-[5.5rem] h-[8.5rem] md:w-[8rem] md:h-[12rem] flex-shrink-0">
            <RobotHead />
          </div>
          <span className="nf-four-right text-[7rem] md:text-[10rem] font-bold leading-none tracking-tighter select-none text-foreground">
            4
          </span>
        </div>

        {/* Copy */}
        <div className="text-center space-y-2 mb-8">
          <p className="font-mono text-primary text-xs tracking-[0.3em] uppercase mb-3">
            — System Error —
          </p>
          <h1 className="text-2xl font-bold text-foreground">Page Not Found</h1>
          <p className="text-muted-foreground text-sm">
            The droid you're looking for is not in this sector.
          </p>
          <p className="font-mono text-xs text-muted-foreground/50 pt-1">
            {location.pathname}
          </p>
        </div>

        <Button variant="terminal" asChild>
          <Link to="/">Return to Base</Link>
        </Button>
      </div>
    </>
  );
};

export default NotFound;
