import { useCallback, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

const STORAGE_KEY = 'theme';

/** The inline script in index.html has already applied the saved theme, so read it from the DOM. */
function readTheme(): Theme {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(readTheme);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Storage can be blocked (private mode). The theme still works for this visit.
    }
  }, [theme]);

  const toggle = useCallback(() => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  }, []);

  return { theme, toggle };
}
