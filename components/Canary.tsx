import styles from '@/styles/components/Canary.module.css';
import classNames from 'classnames';

interface Props {
  className?: string;
}

const Canary = (props: Props) => {
  return (
    <div
      className={classNames(
        styles.canary,
        styles.canaryAnimated,
        props.className,
      )}
    />
  );
};

export default Canary;
