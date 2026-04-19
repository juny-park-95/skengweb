import { useEffect, useState } from 'react';

const STORAGE_KEY = 'skeng-theme';

function getInitialMode() {
  if (typeof window === 'undefined') return 'light';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default function useDarkMode() {
  const [mode, setMode] = useState(getInitialMode);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, mode);
    document.documentElement.dataset.theme = mode;
    document.documentElement.style.colorScheme = mode;
  }, [mode]);

  const toggle = () => setMode((m) => (m === 'light' ? 'dark' : 'light'));
  return { mode, setMode, toggle, isDark: mode === 'dark' };
}
