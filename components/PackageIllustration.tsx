// Editorial placeholder illustration of the physical package (outer envelope,
// printed itinerary card and three sealed stage envelopes). Intended to be
// replaced with real product photography later — swap the <svg> below for a
// next/image inside the same wrapper to keep the surrounding layout intact.
export function PackageIllustration({ className = "" }: { className?: string }) {
  return (
    <div
      role="img"
      aria-label="Illustration of The Better Date Co package: a kraft outer envelope, a printed itinerary card, and three sealed date-stage envelopes"
      className={className}
    >
      <svg viewBox="0 0 520 420" className="h-auto w-full" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="250" cy="360" rx="190" ry="24" fill="#241F1A" opacity="0.08" />

        <g transform="rotate(-6 210 230)">
          <rect x="80" y="150" width="280" height="180" rx="12" fill="#DCC7A1" stroke="#241F1A" strokeOpacity="0.15" />
          <path d="M80 150 L220 250 L360 150 Z" fill="#CBB48D" stroke="#241F1A" strokeOpacity="0.15" />
          <circle cx="220" cy="196" r="15" fill="#B15A2C" />
        </g>

        <g transform="rotate(3 300 150)">
          <rect x="200" y="70" width="170" height="120" rx="8" fill="#F8F3EA" stroke="#241F1A" strokeOpacity="0.12" />
          <circle cx="222" cy="94" r="6" fill="#B15A2C" />
          <rect x="238" y="90" width="70" height="6" rx="3" fill="#5B5145" opacity="0.55" />
          <rect x="220" y="112" width="130" height="5" rx="2.5" fill="#5B5145" opacity="0.3" />
          <rect x="220" y="128" width="110" height="5" rx="2.5" fill="#5B5145" opacity="0.3" />
          <rect x="220" y="144" width="120" height="5" rx="2.5" fill="#5B5145" opacity="0.3" />
        </g>

        <g transform="rotate(-12 140 330)">
          <rect x="105" y="300" width="76" height="54" rx="6" fill="#F8F3EA" stroke="#241F1A" strokeOpacity="0.15" />
          <circle cx="143" cy="327" r="8" fill="#B8862E" />
        </g>
        <g transform="rotate(4 210 340)">
          <rect x="175" y="308" width="76" height="54" rx="6" fill="#F8F3EA" stroke="#241F1A" strokeOpacity="0.15" />
          <circle cx="213" cy="335" r="8" fill="#A24632" />
        </g>
        <g transform="rotate(16 285 330)">
          <rect x="248" y="300" width="76" height="54" rx="6" fill="#F8F3EA" stroke="#241F1A" strokeOpacity="0.15" />
          <circle cx="286" cy="327" r="8" fill="#4C5B45" />
        </g>
      </svg>
    </div>
  );
}
