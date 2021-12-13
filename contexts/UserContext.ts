import type { Theme } from '@/components/ThemeToggle';
import { isTheme } from '@/components/ThemeToggle/types';
import { createContext } from 'react';

interface UserContext {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const storedTheme =
  typeof window !== 'undefined' ? window.localStorage.getItem('theme') : null;

export default createContext<UserContext>({
  theme: isTheme(storedTheme) ? storedTheme : 'system',
  setTheme: () => void 0,
});
