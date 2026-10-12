import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import RouteEffects from '@/components/RouteEffects';
import { SITE_URL } from '@/content/site';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'BolajiBuzz | Digital strategy and infrastructure partner', template: '%s | BolajiBuzz' },
  description: 'BolajiBuzz turns scattered websites, marketing, technology and workflows into one connected digital system.',
  openGraph: { siteName: 'BolajiBuzz', type: 'website' },
};
export const viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover' };

const orgLd = { '@context': 'https://schema.org', '@type': 'Organization', name: 'BolajiBuzz', url: SITE_URL, description: 'Boutique digital strategy and solutions agency.' };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@500;700;800&family=Public+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
        <noscript><style>{'.rv{opacity:1!important;transform:none!important}'}</style></noscript>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
      </head>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsApp />
        <RouteEffects />
      </body>
    </html>
  );
}
