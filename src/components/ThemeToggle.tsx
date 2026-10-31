import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { IconButton } from './ui/IconButton';

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';

  return (
    <IconButton label={isDark ? 'Switch to light theme' : 'Switch to dark theme'} onClick={toggle}>
      {isDark ? (
        <Sun className="h-5 w-5" aria-hidden="true" />
      ) : (
        <Moon className="h-5 w-5" aria-hidden="true" />
      )}
    </IconButton>
  );
}
