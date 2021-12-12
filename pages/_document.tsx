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
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
