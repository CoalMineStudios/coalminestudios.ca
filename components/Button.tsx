import classNames from 'classnames';
import type { ButtonHTMLAttributes, FC } from 'react';
import styles from '@/styles/components/Button.module.css';

type Colors = 'primary';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: Colors;
}

const Button: FC<Props> = ({ className, children, color, ...props }) => {
  const colorStyles: Record<Colors, string> = {
    primary: styles.buttonPrimary,
  };

  return (
    <button
      {...props}
      className={classNames(
        className,
        styles.button,
        color && colorStyles[color],
      )}
    >
      {children}
    </button>
  );
};

export default Button;
