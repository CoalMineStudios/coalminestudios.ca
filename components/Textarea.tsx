import classNames from 'classnames';
import { ChangeEventHandler } from 'react';
import styles from 'styles/components/Textarea.module.css';
import FormLabel from './FormLabel';
import type { TextfieldProps } from './Textfield';

interface Props extends Omit<TextfieldProps, 'type' | 'onChange'> {
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  rows?: number;
}

const Textfield = (props: Props) => {
  const computedId = props.id || props.label.toLowerCase().replace(' ', '-');
  const computedName = props.id || props.label;

  return (
    <FormLabel className={props.className}>
      {props.label}
      <textarea
        className={classNames(props.inputProps?.className, styles.textarea)}
        id={computedId}
        name={computedName}
        onChange={props.onChange}
        value={props.value}
        rows={props.rows}
        required={props.required}
      />
    </FormLabel>
  );
};

export default Textfield;
