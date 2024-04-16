import Document, { Head, Html, Main, NextScript } from 'next/document'

// Need to create a custom _document because i18n support is not compatible with `next export`.
class GlobalDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="Charity Application" />
          <meta name="keywords" content="Charity Application" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/nord.min.css" />
         
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossOrigin="anonymous"
        ></script>
      </Html>
    )
  }
}

export default GlobalDocument
