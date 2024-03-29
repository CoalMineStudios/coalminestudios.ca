import Document, { Html, Head, Main, NextScript } from 'next/document';

const links = [
  {
    rel: 'preconnect',
    href: 'https://fonts.googleapis.com',
  },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    // this becomes `<link rel="preconnect" crossorigin>. See https://github.com/nuxt/vue-meta/issues/447
    crossOrigin: '',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&family=Work+Sans&display=swap',
  },
];

class MyDocument extends Document {
  render() {
    const setInitialTheme = `
      function getUserPreference() {
        if(window.localStorage.getItem('theme')) {
          return window.localStorage.getItem('theme')
        }
        return 'system'
      }
      document.body.dataset.theme = getUserPreference();
    `;

    return (
      <Html>
        <Head>
          <meta name="description" content="Digital design and development" />
          <link rel="icon" href="/favicon.ico" />

          {links.map((link) => (
            <link {...link} key={link.href} />
          ))}
        </Head>
        <body>
          <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
