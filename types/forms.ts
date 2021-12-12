import type { ChangeEventHandler, CSSProperties } from 'react';

export type TextInputs = HTMLInputElement | HTMLTextAreaElement;

export interface TextInputProps<T extends TextInputs> {
  label: string;
  id?: string;
  name?: string;
  required?: boolean;
  value?: string;
  className?: string;
  onChange?: ChangeEventHandler<T>;
  style?: CSSProperties;
}
