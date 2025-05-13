'use client';
import { useEffect, useState } from 'react';

export default function ThemeSwitcher() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <button
      className="px-4 py-2 bg-neutral-200 dark:bg-neutral-800 rounded"
      onClick={() => setDark(!dark)}
    >
      {dark ? '☀️ Mode clair' : '🌙 Mode sombre'}
    </button>
  );
}