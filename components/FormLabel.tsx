import classNames from 'classnames';
import type { CSSProperties, ReactNode } from 'react';
import styles from 'styles/components/FormLabel.module.css';

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
