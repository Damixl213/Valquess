export function PathfinderSpinner() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-16 h-16">
        <svg
          className="animate-spin-slow"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50 10 L70 40 L50 35 L30 40 Z"
            fill="#CDAA5F"
            className="opacity-80"
          />
          <path
            d="M50 35 L50 90"
            stroke="#CDAA5F"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle
            cx="50"
            cy="90"
            r="3"
            fill="#CDAA5F"
          />
        </svg>
        <div className="absolute inset-0 animate-pulse-glow rounded-full" />
      </div>
    </div>
  );
}
