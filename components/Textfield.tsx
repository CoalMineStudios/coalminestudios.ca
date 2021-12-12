import classNames from 'classnames';
import type { ChangeEventHandler, HTMLInputTypeAttribute } from 'react';
import styles from 'styles/components/Textfield.module.css';
import FormLabel from './FormLabel';

export interface TextfieldProps {
  label: string;
  id?: string;
  name?: string;
  required?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value?: string;
  type?: HTMLInputTypeAttribute;
  className?: string;
  inputProps?: {
    className?: string;
  };
}

const Textfield = (props: TextfieldProps) => {
  const computedId = props.id || props.label.toLowerCase().replace(' ', '-');
  const computedName = props.id || props.label;

  return (
    <FormLabel className={props.className}>
      {props.label}
      <input
        className={classNames(props.inputProps?.className, styles.textfield)}
        id={computedId}
        name={computedName}
        onChange={props.onChange}
        value={props.value}
        type={props.type}
        required={props.required}
      />
    </FormLabel>
  );
};

export default Textfield;
