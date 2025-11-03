export function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer hexagon frame */}
      <path
        d="M50 5 L85 27.5 L85 72.5 L50 95 L15 72.5 L15 27.5 Z"
        stroke="url(#gradient1)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Inner geometric pattern */}
      <path
        d="M50 20 L70 32.5 L70 67.5 L50 80 L30 67.5 L30 32.5 Z"
        stroke="url(#gradient2)"
        strokeWidth="1.5"
        fill="rgba(56, 189, 248, 0.1)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Code brackets */}
      <path
        d="M35 40 L28 50 L35 60"
        stroke="#38bdf8"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M65 40 L72 50 L65 60"
        stroke="#38bdf8"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Forward slash */}
      <path
        d="M55 38 L45 62"
        stroke="#3b82f6"
        strokeWidth="3"
        strokeLinecap="round"
      />
      
      {/* Accent dots */}
      <circle cx="50" cy="25" r="2" fill="#38bdf8" opacity="0.8" />
      <circle cx="50" cy="75" r="2" fill="#38bdf8" opacity="0.8" />
      <circle cx="25" cy="50" r="2" fill="#3b82f6" opacity="0.6" />
      <circle cx="75" cy="50" r="2" fill="#3b82f6" opacity="0.6" />
      
      {/* Gradients */}
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.8" />
        </linearGradient>
      </defs>
    </svg>
  );
}
