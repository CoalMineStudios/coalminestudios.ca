import { TextInputProps } from '@/types/forms';
import classNames from 'classnames';
import { TextareaHTMLAttributes } from 'react';
import styles from 'styles/components/TextArea.module.css';
import FormLabel from './FormLabel';

interface Props extends TextInputProps<HTMLTextAreaElement> {
  rows?: number;
  inputProps?: TextareaHTMLAttributes<HTMLTextAreaElement>;
}

const TextArea = (props: Props) => {
  const computedId = props.id || props.label.toLowerCase().replace(' ', '-');
  const computedName = props.id || props.label;

  return (
    <FormLabel className={props.className} style={props.style}>
      {props.label}
      <textarea
        className={classNames(props.inputProps?.className, styles.textArea)}
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

export default TextArea;
