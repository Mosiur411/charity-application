import Head from 'next/head'
import { ISEO } from '@/interfaces/common'

const Seo = ({
  pageTitle,
  pageDescription = 'Deshbhakt is a charity organisation aims to build a country which achieves headway in all aspects of social, economical and spiritual sense',
  pageKeyword = 'Deshbhakt, Organisation, Charity, Social, Economical, Spiritual, Health, Welfare',
}: ISEO) => (
  <>
    <Head>
      <title>{pageTitle && `${pageTitle} | Deshbhakt`}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={pageDescription} />
      <meta name="keyword" content={pageKeyword} />
      <meta name="coverage" content="Worldwide" />
      <meta name="copyright" content="Deshbhakt" />
      <meta name="twitter:card" content={pageDescription} />
      <meta name="twitter:site" content="@deshbhakt" />
      <meta name="twitter:creator" content="@deshbhakt" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="robots" content="FOLLOW, INDEX, NOODP, NOYDIR" />
      <meta property="og:site_name" content="deshbhakt" />
      <meta property="og:url" content="https://www.deshbhakt.org" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:type" content="website" />
      <meta name="author" content="deshbhakt" />
      {/* <meta name="twitter:image" content={image} /> */}
      {/* <meta property="og:image" content={image} /> */}
      {/* <meta property="og:image:secure_url" content={image} /> */}
    </Head>
  </>
)

export default Seo
