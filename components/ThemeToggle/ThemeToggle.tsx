import UserContext from '@/contexts/UserContext';
import { useContext, useEffect, useState } from 'react';
import type { Theme } from '.';
import { isTheme } from '.';
import Button from '../Button';

export const themes = ['system', 'light', 'dark'] as const;

const themeLabels: Record<Theme, `${string}${Capitalize<Theme>}`> = {
  system: '💻 System',
  light: '🌞 Light',
  dark: '🌛 Dark',
};

const ThemeToggle = () => {
  const context = useContext(UserContext);
  const [activeTheme, setActiveTheme] = useState(context.theme);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (isInitialized) {
      document.documentElement.dataset['theme'] = activeTheme;
      window.localStorage.setItem('theme', activeTheme);
    }
  }, [isInitialized, activeTheme]);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('theme');
    setActiveTheme(isTheme(storedTheme) ? storedTheme : 'system');
    setIsInitialized(true);
  }, []);

  return (
    <UserContext.Provider
      value={{ theme: activeTheme, setTheme: setActiveTheme }}
    >
      {themes.map((theme) => (
        <Button
          onClick={() => setActiveTheme(theme)}
          key={theme}
          {...(theme === activeTheme && { color: 'primary' })}
        >
          {themeLabels[theme]}
        </Button>
      ))}
    </UserContext.Provider>
  );
};

export default ThemeToggle;
