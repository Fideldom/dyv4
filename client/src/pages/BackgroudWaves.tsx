import React from 'react';

export const BackgroundWaves: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none"
      style={{
        background:
          'linear-gradient(155deg, #f7fafd 0%, #f1f7fb 46%, #eaf4fa 100%)',
      }}
    >
      {/* Top-right sweeping silky aqua wave complex */}
      <svg
        viewBox="0 0 920 520"
        preserveAspectRatio="none"
        className="absolute top-[72px] right-0 w-[min(920px,64vw)] h-[min(520px,46vh)] min-h-[300px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Soft wide icy mist wave */}
          <linearGradient id="trMist" x1="0%" y1="75%" x2="100%" y2="15%">
            <stop offset="0%" stopColor="#f5f9fc" stopOpacity="0" />
            <stop offset="40%" stopColor="#e3f2f9" stopOpacity="0.55" />
            <stop offset="78%" stopColor="#cdeaf5" stopOpacity="0.88" />
            <stop offset="100%" stopColor="#b2e0ef" stopOpacity="0.95" />
          </linearGradient>

          {/* Mid bright sky-cyan S-ribbon */}
          <linearGradient id="trSky" x1="15%" y1="90%" x2="100%" y2="5%">
            <stop offset="0%" stopColor="#e8f6fb" stopOpacity="0" />
            <stop offset="38%" stopColor="#bce7f3" stopOpacity="0.65" />
            <stop offset="76%" stopColor="#7cd3e5" stopOpacity="0.88" />
            <stop offset="100%" stopColor="#4ec2d6" stopOpacity="0.95" />
          </linearGradient>

          {/* Deep turquoise-teal corner fold */}
          <linearGradient id="trTeal" x1="10%" y1="85%" x2="100%" y2="15%">
            <stop offset="0%" stopColor="#7ed5e5" stopOpacity="0.15" />
            <stop offset="48%" stopColor="#45bdd2" stopOpacity="0.72" />
            <stop offset="85%" stopColor="#26a9c0" stopOpacity="0.92" />
            <stop offset="100%" stopColor="#1c9ab3" stopOpacity="0.96" />
          </linearGradient>

          {/* Soft translucent highlight fold */}
          <linearGradient id="trHighlight" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.52" />
            <stop offset="100%" stopColor="#e0f5fa" stopOpacity="0.25" />
          </linearGradient>

          <filter id="trSoftBlur" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="8" />
          </filter>
        </defs>

        {/* Layer 1: Wide airy icy-blue wave rising gently from mid-top to right */}
        <path
          d="M 40 285 C 210 265, 395 235, 555 155 C 680 92, 775 22, 855 0 L 920 0 L 920 490 C 785 450, 665 395, 495 365 C 315 332, 165 340, 40 285 Z"
          fill="url(#trMist)"
        />

        {/* Layer 2: Smooth sky-cyan wave sweeping down-left from top-right */}
        <path
          d="M 815 0 C 745 78, 675 162, 575 245 C 505 302, 520 365, 650 385 C 765 402, 855 415, 920 455 L 920 0 Z"
          fill="url(#trSky)"
        />

        {/* Layer 3: Soft luminous white-cyan ridge separating folds */}
        <path
          d="M 920 95 C 835 128, 760 198, 695 282 C 655 334, 710 375, 815 385 L 920 395 Z"
          fill="url(#trHighlight)"
          filter="url(#trSoftBlur)"
        />

        {/* Layer 4: Rich turquoise fold hugging upper-right edge */}
        <path
          d="M 920 112 C 845 148, 785 215, 745 292 C 718 345, 775 395, 865 425 L 920 448 Z"
          fill="url(#trTeal)"
        />
      </svg>

      {/* Bottom-left low gentle cyan-teal wave */}
      <svg
        viewBox="0 0 460 150"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 w-[clamp(240px,32vw,460px)] h-[clamp(90px,12vw,155px)]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="blMist" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#bce7f3" stopOpacity="0.72" />
            <stop offset="65%" stopColor="#d9f0f8" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#eef8fc" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="blCyan" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3abccf" stopOpacity="0.86" />
            <stop offset="60%" stopColor="#6ed1e1" stopOpacity="0.72" />
            <stop offset="100%" stopColor="#a9e3ee" stopOpacity="0.28" />
          </linearGradient>
          <linearGradient id="blDeep" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1ca0b7" stopOpacity="0.92" />
            <stop offset="100%" stopColor="#4ec2d4" stopOpacity="0.55" />
          </linearGradient>
        </defs>

        <path
          d="M 0 12 C 135 36, 285 92, 455 150 L 0 150 Z"
          fill="url(#blMist)"
        />
        <path
          d="M 0 54 C 105 74, 198 112, 285 150 L 0 150 Z"
          fill="url(#blCyan)"
        />
        <path
          d="M 0 96 C 62 108, 112 128, 152 150 L 0 150 Z"
          fill="url(#blDeep)"
        />
      </svg>

      {/* Bottom-right subtle airy icy wash */}
      <svg
        viewBox="0 0 420 180"
        preserveAspectRatio="none"
        className="absolute bottom-0 right-0 w-[clamp(220px,28vw,420px)] h-[clamp(100px,13vw,180px)]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="brSoft" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#eef7fb" stopOpacity="0" />
            <stop offset="60%" stopColor="#d2eef7" stopOpacity="0.48" />
            <stop offset="100%" stopColor="#9cdcea" stopOpacity="0.62" />
          </linearGradient>
        </defs>
        <path
          d="M 30 180 C 165 140, 295 100, 420 20 L 420 180 Z"
          fill="url(#brSoft)"
        />
      </svg>
    </div>
  );
};
