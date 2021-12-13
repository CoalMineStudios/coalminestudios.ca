import DefaultLayout from '@/layouts/DefaultLayout';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import 'sanitize.css';
import 'sanitize.css/forms.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
}

export default MyApp;
