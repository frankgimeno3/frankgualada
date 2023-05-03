import { DefaultSeoProps } from 'next-seo';
const config: DefaultSeoProps = {
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
  title: "Phershian - Global Consulting",
  description: "Phershian is a strategic and financial consultancy for small and medium-sized companies that defines, designs and implements strategies and solutions that generate impact and measurable results. Our services are Business Valuation, Due Diligence, Operational and Financial Restructuring, Refinancing and Insolvencies, Strategic Consulting, Sustainable and Corporate Finance, Business Transformation, Board of Directors and Shareholders Services.",
  canonical: process.env.NEXT_PUBLIC_WEBSITE_URL,
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: process.env.NEXT_PUBLIC_WEBSITE_URL,
    siteName: 'Phershian',

    title: 'Phershian - Global Consulting',
    description: 'Phershian is a strategic and financial consultancy for small and medium-sized companies that defines, designs and implements strategies and solutions that generate impact and measurable results. Our services are Business Valuation, Due Diligence, Operational and Financial Restructuring, Refinancing and Insolvencies, Strategic Consulting, Sustainable and Corporate Finance, Business Transformation, Board of Directors and Shareholders Services.',
    images: [
      {
        url: process.env.NEXT_PUBLIC_WEBSITE_URL + '/img/seoImages/backgroundLogo2.jpeg',
        alt: 'Phershian Logo',
        type: 'image/jpeg',
      }
    ],
  }
};

export default config;