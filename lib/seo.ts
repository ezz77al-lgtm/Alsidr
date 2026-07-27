import { Metadata } from 'next';
import { company } from './data/company';
import { Service, City, Project, BlogPost } from './types';
import { ServiceCityContent } from './content-engine';

const SITE_URL = company.url;

interface Crumb {
  name: string;
  url?: string;
}

export function buildMetadata(params: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  noindex?: boolean;
}): Metadata {
  const {
    title,
    description,
    path = '/',
    image = '/about/about1.jpg',
    keywords,
    type = 'website',
    publishedTime,
    modifiedTime,
    noindex,
  } = params;

  const url = `${SITE_URL}${path}`;
  const fullTitle =
    title === company.name ? title : `${title} | ${company.name}`;

  return {
    title: fullTitle,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type,
      locale: 'ar_SA',
      url,
      siteName: company.name,
      title: fullTitle,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

// ---------- JSON-LD Builders ----------

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: company.name,
    legalName: company.legalName,
    url: SITE_URL,
    logo: `${SITE_URL}/about/about1.jpg`,
    description: company.description,
    foundingDate: company.foundedYear,
    email: company.email,
    telephone: company.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address.street,
      addressLocality: company.address.city,
      addressRegion: company.address.region,
      addressCountry: 'SA',
      postalCode: company.address.postalCode,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: company.phone,
      contactType: 'customer service',
      availableLanguage: ['ar'],
      areaServed: 'SA',
    },
    sameAs: company.social.map((s) => s.url),
  };
}

export function localBusinessSchema(city?: City) {
  const areaServed = city ? city.name : company.cities.join('، ');
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': city
      ? `${SITE_URL}/cities/${city.slug}#localbusiness`
      : `${SITE_URL}/#localbusiness`,
    name: company.name,
    image: `${SITE_URL}/about/about1.jpg`,
    url: SITE_URL,
    telephone: company.phone,
    email: company.email,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address.street,
      addressLocality: company.address.city,
      addressRegion: company.address.region,
      addressCountry: 'SA',
      postalCode: company.address.postalCode,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: city ? city.geo.lat : company.geo.lat,
      longitude: city ? city.geo.lng : company.geo.lng,
    },
    openingHoursSpecification: company.hours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      description: h.days,
      opens: '08:00',
      closes: '22:00',
    })),
    areaServed: areaServed,
    sameAs: company.social.map((s) => s.url),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '3800',
    },
  };
}

export function serviceSchema(service: Service, city?: City) {
  const name = city
    ? `${service.name} ب${city.name}`
    : service.name;
  const url = city
    ? `${SITE_URL}/services/${service.slug}/${city.slug}`
    : `${SITE_URL}/services/${service.slug}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name,
    serviceType: service.name,
    description: city ? undefined : service.description,
    provider: {
      '@type': 'Organization',
      name: company.name,
      url: SITE_URL,
      telephone: company.phone,
    },
    areaServed: city
      ? { '@type': 'City', name: city.name }
      : company.cities.map((c) => ({ '@type': 'City', name: c })),
    url,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'SAR',
      description: service.priceFromLabel,
      availability: 'https://schema.org/InStock',
    },
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };
}

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      ...(c.url ? { item: `${SITE_URL}${c.url}` } : {}),
    })),
  };
}

export function articleSchema(post: BlogPost) {
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: company.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/about/about1.jpg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    keywords: post.keywords.join('، '),
  };
}

export function reviewSchema(review: {
  name: string;
  rating: number;
  text: string;
  serviceSlug?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating,
      bestRating: '5',
    },
    author: {
      '@type': 'Person',
      name: review.name,
    },
    reviewBody: review.text,
  };
}

export function aggregateRatingSchema(rating: number, count: number) {
  return {
    '@type': 'AggregateRating',
    ratingValue: rating.toString(),
    reviewCount: count.toString(),
    bestRating: '5',
    worstRating: '1',
  };
}

export function projectSchema(project: Project) {
  const url = `${SITE_URL}/projects/${project.slug}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${url}#project`,
    name: project.title,
    description: project.description,
    image: project.gallery,
    datePublished: project.date,
    creator: {
      '@type': 'Organization',
      name: company.name,
    },
    spatialCoverage: {
      '@type': 'City',
      name: project.citySlug,
    },
  };
}

export function buildCrumbs(items: Crumb[]): Crumb[] {
  return [{ name: 'الرئيسية', url: '/' }, ...items];
}

export function jsonLd(data: object) {
  return JSON.stringify(data);
}
