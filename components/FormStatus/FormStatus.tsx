import classNames from 'classnames';
import type { FC, HTMLAttributes, ReactNode } from 'react';
import styles from './FormStatus.module.css';
import type { Status, StatusWithMessage } from './types';

interface Props extends HTMLAttributes<HTMLSpanElement> {
  status: Status;
}

interface Message {
  icon?: string;
  message?: string | ReactNode;
}

const statusMessage: Record<StatusWithMessage, Message> = {
  sending: {
    icon: '✉️',
    message: 'Sending your message',
  },
  success: {
    icon: '✔️',
    message: 'Your message has been sent. Talk soon!',
  },
  error: {
    icon: '❌',
    message: 'Your message could not be sent.',
  },
};

function statusHasMessage(status: Status): status is StatusWithMessage {
  return status in statusMessage;
}

const FormStatus: FC<Props> = ({ status }) => {
  if (!statusHasMessage(status)) {
    return <></>;
  }

  const { message, icon } = statusMessage[status];

  return (
    <span
      className={classNames(
        styles.formStatus,
        status === 'sending' && styles.formStatusSending,
      )}
    >
      {icon && <div className={styles.statusIcon}>{icon}</div>}
      {message}
    </span>
  );
};

export default FormStatus;
