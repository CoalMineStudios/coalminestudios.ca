import type { Theme } from '@/components/ThemeToggle';
import { createContext } from 'react';

interface UserContext {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export default createContext<UserContext>({
  theme: 'system',
  setTheme: () => void 0,
});
