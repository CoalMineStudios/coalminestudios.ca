import classNames from 'classnames';
import type { ReactNode } from 'react';
import styles from 'styles/components/FormLabel.module.css';

interface Props {
  children?: ReactNode;
  className?: string;
}

const FormLabel = (props: Props) => {
  return (
    <label className={classNames(props.className, styles.formLabel)}>
      {props.children}
    </label>
  );
};

export default FormLabel;
