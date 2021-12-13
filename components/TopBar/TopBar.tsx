import ThemeToggle from '@/components/ThemeToggle';
import type { FC } from 'react';
import styles from './TopBar.module.scss';

const TopBar: FC = () => {
  return (
    <div className={styles.topBar}>
      <ThemeToggle />
    </div>
  );
};

export default TopBar;
