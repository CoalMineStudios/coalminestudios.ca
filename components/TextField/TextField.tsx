import FormLabel from '@/components/FormLabel';
import type { TextInputProps } from '@/types/forms';
import classNames from 'classnames';
import type { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react';
import styles from './TextField.module.scss';

interface Props extends TextInputProps<HTMLInputElement> {
  type?: HTMLInputTypeAttribute;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
}

const TextField = (props: Props) => {
  const computedId = props.id || props.label.toLowerCase().replace(' ', '-');
  const computedName = props.name || computedId;

  return (
    <FormLabel className={props.className} style={props.style}>
      {props.label}
      <input
        className={classNames(props.inputProps?.className, styles.textField)}
        id={computedId}
        name={computedName}
        onChange={props.onChange}
        value={props.value}
        type={props.type}
        required={props.required}
        {...props.inputProps}
      />
    </FormLabel>
  );
};

export default TextField;
