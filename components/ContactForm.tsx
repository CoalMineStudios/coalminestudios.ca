import type { ContactFormData } from '@/types/mail';
import { SyntheticEvent, useState } from 'react';
import Textarea from './Textarea';
import Textfield from './Textfield';

async function sendMail(body: ContactFormData) {
  const response = await fetch('/.netlify/functions/mail', {
    body: JSON.stringify(body),
    method: 'POST',
  });

  const data = await response.json();

  alert(JSON.stringify(data, null, 2));
}

interface ContactFormDataWithHoneypot extends ContactFormData {
  honeypot?: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormDataWithHoneypot>({
    name: '',
    email: '',
    message: '',
  });

  function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
    sendMail(formData);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Textfield
        label="Name"
        required
        className="formRow"
        value={formData.name}
        onChange={(event) =>
          setFormData({ ...formData, name: event.target.value })
        }
      />
      <Textfield
        label="Email"
        type="email"
        required
        className="formRow"
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
      />
      <Textfield
        label="A password"
        className="formRow"
        onChange={(event) =>
          setFormData({ ...formData, honeypot: event.target.value })
        }
      />
      <Textarea
        label="Message"
        required
        className="formRow"
        rows={4}
        onChange={(event) =>
          setFormData({ ...formData, message: event.target.value })
        }
      />

      <div className="formRow">
        <button className="button">Send</button>
      </div>
    </form>
  );
};

export default ContactForm;
