import classNames from 'classnames';
import type { CSSProperties, ReactNode } from 'react';
import styles from './FormLabel.module.scss';

interface Props {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const FormLabel = (props: Props) => {
  return (
    <label
      className={classNames(props.className, styles.formLabel)}
      style={props.style}
    >
      {props.children}
    </label>
  );
};

export default FormLabel;
