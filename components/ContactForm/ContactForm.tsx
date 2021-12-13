import Button from '@/components/Button';
import type { Status } from '@/components/FormStatus';
import FormStatus from '@/components/FormStatus';
import Textarea from '@/components/TextArea';
import TextField from '@/components/TextField';
import type { TextInputs } from '@/types/forms';
import type { ContactFormData } from '@/types/mail';
import type { ChangeEvent, FormEventHandler } from 'react';
import { useState } from 'react';

const initFormData = (): ContactFormData => ({
  name: '',
  email: '',
  message: '',
  honeypot: '',
});

const ContactForm = () => {
  const [formData, setFormData] = useState(initFormData());
  const [formStatus, setFormStatus] = useState<Status>('idle');

  const handleTextChange = (field: keyof ContactFormData) => {
    return function updateFormData(event: ChangeEvent<TextInputs>) {
      setFormData({ ...formData, [field]: event.target.value });
    };
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    setFormStatus('sending');

    try {
      const res = await fetch('/.netlify/functions/mail', {
        body: JSON.stringify(formData),
        method: 'POST',
      });

      if (!res.ok) {
        throw new Error('Sending failed');
      }

      setFormStatus('success');
      setFormData(initFormData());
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <TextField
        label="Name"
        required
        className="formRow"
        value={formData.name}
        onChange={handleTextChange('name')}
      />

      <TextField
        label="Email"
        type="email"
        required
        value={formData.email}
        className="formRow"
        onChange={handleTextChange('email')}
      />

      <TextField
        label="A password"
        className="formRow"
        value={formData.honeypot}
        onChange={handleTextChange('honeypot')}
        style={{
          display: 'none',
        }}
        inputProps={{
          tabIndex: -1,
          autoComplete: 'off',
        }}
      />

      <Textarea
        label="Message"
        required
        className="formRow"
        rows={4}
        value={formData.message}
        onChange={handleTextChange('message')}
      />

      <div className="formRow">
        <Button disabled={formStatus === 'sending'} color="primary">
          Send
        </Button>
        {formStatus !== 'idle' && <FormStatus status={formStatus} />}
      </div>
    </form>
  );
};

export default ContactForm;
