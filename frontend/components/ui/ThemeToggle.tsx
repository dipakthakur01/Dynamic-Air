'use client';

import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  theme: 'dark' | 'light';
  onToggle: () => void;
  variant?: 'icon' | 'badge' | 'full';
  className?: string;
}

export default function ThemeToggle({
  theme,
  onToggle,
  variant = 'icon',
  className = '',
}: ThemeToggleProps) {
  const isDark = theme === 'dark';

  if (variant === 'full') {
    return (
      <div className={`theme-toggle-full ${className}`}>
        <div className="theme-toggle-segmented" role="radiogroup" aria-label="Color Mode">
          <button
            type="button"
            className={`theme-segment ${!isDark ? 'is-active' : ''}`}
            onClick={() => {
              if (isDark) onToggle();
            }}
            aria-checked={!isDark}
            role="radio"
          >
            <Sun size={15} />
            <span>Light</span>
          </button>
          <button
            type="button"
            className={`theme-segment ${isDark ? 'is-active' : ''}`}
            onClick={() => {
              if (!isDark) onToggle();
            }}
            aria-checked={isDark}
            role="radio"
          >
            <Moon size={15} />
            <span>Dark</span>
          </button>
        </div>
      </div>
    );
  }

  if (variant === 'badge') {
    return (
      <button
        type="button"
        onClick={onToggle}
        className={`theme-badge-btn ${className}`}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      >
        <span className="theme-badge-icon">
          {isDark ? <Sun size={15} /> : <Moon size={15} />}
        </span>
        <span className="theme-badge-text">
          {isDark ? 'Switch to Light' : 'Switch to Dark'}
        </span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={onToggle}
      className={`theme-icon-btn ${className}`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
