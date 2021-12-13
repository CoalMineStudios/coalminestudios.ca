import UserContext from '@/contexts/UserContext';
import { useContext, useEffect, useState } from 'react';
import type { Theme } from './types';
// import { isTheme } from './types';
import Select from 'react-select';
import styles from './ThemeToggle.module.scss';

interface ThemeOption {
  value: Theme;
  label: `${string}${Capitalize<Theme>}`;
}

const themeOptions: readonly ThemeOption[] = [
  { value: 'system', label: '💻 System' },
  { value: 'light', label: '🌞 Light' },
  { value: 'dark', label: '🌛 Dark' },
];

const ThemeToggle = () => {
  const context = useContext(UserContext);
  const [activeTheme, setActiveTheme] = useState(context.theme);

  useEffect(() => {
    document.documentElement.dataset['theme'] = activeTheme;
    window.localStorage.setItem('theme', activeTheme);
  }, [activeTheme]);

  return (
    <div className={styles.themeToggle}>
      <Select
        options={themeOptions}
        className="theme-select"
        classNamePrefix="theme-select"
        value={themeOptions.find((option) => option.value === activeTheme)}
        onChange={(newValue) => newValue && setActiveTheme(newValue.value)}
      />
    </div>
  );
};

export default ThemeToggle;
