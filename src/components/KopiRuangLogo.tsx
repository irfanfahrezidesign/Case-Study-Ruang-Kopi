import React from 'react';

interface KopiRuangLogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export function KopiRuangLogo({ variant = 'light', className = '' }: KopiRuangLogoProps) {
  const strokeColor = variant === 'light' ? '#F7F3E9' : '#183F35';
  const accentColor = '#B99A5D';

  return (
    <div className={`inline-flex flex-col items-center select-none ${className}`}>
      <svg
        width="56"
        height="68"
        viewBox="0 0 64 78"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Outer Arch Frame */}
        <path
          d="M12 68V30C12 18.9543 20.9543 10 32 10C43.0457 10 52 18.9543 52 30V68"
          stroke={accentColor}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Cup & Saucer */}
        <path
          d="M22 54H42C42 59.5228 37.5228 64 32 64C26.4772 64 22 59.5228 22 54Z"
          stroke={strokeColor}
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="M42 55.5H44.5C45.8807 55.5 47 56.6193 47 58C47 59.3807 45.8807 60.5 44.5 60.5H40.5"
          stroke={strokeColor}
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <path
          d="M20 67H44"
          stroke={strokeColor}
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        {/* Botanical Coffee Stem & Leaves */}
        <path
          d="M32 54V22"
          stroke={accentColor}
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M32 45C27.5 45 24.5 41.5 24.5 38C28.5 38 32 41 32 45Z"
          stroke={strokeColor}
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
        <path
          d="M32 39C36.5 39 39.5 35.5 39.5 32C35.5 32 32 35 32 39Z"
          stroke={strokeColor}
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
        <path
          d="M32 31C28 31 25.5 28 25.5 25C29 25 32 27.5 32 31Z"
          stroke={strokeColor}
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
        <path
          d="M32 22C34.5 20.5 36.5 18 36 15.5C33.5 16 32 18.5 32 22Z"
          stroke={accentColor}
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
      </svg>
      <div className="mt-1 text-center leading-none">
        <span
          className="block font-serif text-[11px] tracking-[0.18em] uppercase font-medium"
          style={{ color: strokeColor }}
        >
          KOPI RUANG
        </span>
        <span
          className="block text-[7px] tracking-[0.26em] uppercase mt-0.5"
          style={{ color: accentColor }}
        >
          SPECIALTY SHOP
        </span>
      </div>
    </div>
  );
}
