import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'Purplemist Global';
const SITE_URL = 'https://www.purplemist.global';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

/**
 * Drop this at the top of any page to control that route's <title>,
 * meta description, canonical URL and social preview tags.
 *
 * <SEO
 *   title="About Us"
 *   description="..."
 *   path="/about"
 * />
 */
export const SEO = ({ title, description, path = '/', image = DEFAULT_IMAGE, noindex = false }) => {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | International Trading & Import Solutions`;
  const canonical = `${SITE_URL}${path === '/' ? '' : path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />

      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
