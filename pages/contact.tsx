import type { NextPage } from 'next';
import ContactForm from '@/components/ContactForm';
import Head from 'next/head';

const Contact: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Contact | Coal Mine Studios</title>
      </Head>

      <main className="content">
        <h1 className="heading1">Contact</h1>
        <ContactForm />
      </main>
    </div>
  );
};

export default Contact;
