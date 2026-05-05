export default function UnneLogo({
  width = 140,
  className,
}: {
  width?: number
  className?: string
}) {
  const dark   = '#3A3B52'
  const orange = '#E84C1E'
  const sw     = 6.5

  return (
    <svg
      viewBox="0 0 148 56"
      width={width}
      height={Math.round(width * 56 / 148)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Unne"
    >
      <defs>
        {/* Gradient spans both n's in user space for continuous color flow */}
        <linearGradient
          id="unne-nn"
          x1="47" y1="0"
          x2="103" y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%"   stopColor="#F7C600" />
          <stop offset="50%"  stopColor="#F59518" />
          <stop offset="100%" stopColor="#E84C1E" />
        </linearGradient>
      </defs>

      {/* ── U ── two legs + bottom curve */}
      <path
        d="M 12,13 L 12,36 Q 24,47 36,36 L 36,13"
        stroke={dark}
        strokeWidth={sw}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Orange dot above U (the ü accent) */}
      <circle cx="12" cy="7" r="4.5" fill={orange} />

      {/* ── N (first) ── left leg + arch + right leg */}
      <path
        d="M 47,47 L 47,21 Q 47,12 58.5,12 Q 70,12 70,21 L 70,47"
        stroke="url(#unne-nn)"
        strokeWidth={sw}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* ── N (second) ── */}
      <path
        d="M 79,47 L 79,21 Q 79,12 91,12 Q 103,12 103,21 L 103,47"
        stroke="url(#unne-nn)"
        strokeWidth={sw}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* ── E ── large C-arc (sweep=0 = CCW visual in SVG y-down coords) */}
      <path
        d="M 140,18 A 13,17 0 1,0 140,40"
        stroke={dark}
        strokeWidth={sw}
        strokeLinecap="round"
      />
      {/* E crossbar */}
      <path
        d="M 114,29 L 137,29"
        stroke={dark}
        strokeWidth={sw}
        strokeLinecap="round"
      />
      {/* Orange dot at the mouth of E */}
      <circle cx="140" cy="29" r="4.5" fill={orange} />
    </svg>
  )
}
