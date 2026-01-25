import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import Home from './pages/Home';
import { Toaster } from './components/ui/sonner';

function App() {
  useEffect(() => {
    // SEO Meta Tags
    document.title = 'Auto Check Saúde | Oficina Automotiva em São Paulo | 50+ Anos de Experiência';
    
    // Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = 'Auto Check Saúde: Há mais de 50 anos cuidando do seu veículo em São Paulo. Serviços especializados em sistema elétrico, motor, injeção eletrônica e mais. Agende seu check-up!';
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Auto Check Saúde: Há mais de 50 anos cuidando do seu veículo em São Paulo. Serviços especializados em sistema elétrico, motor, injeção eletrônica e mais. Agende seu check-up!';
      document.head.appendChild(meta);
    }

    // Open Graph Tags
    const ogTags = [
      { property: 'og:title', content: 'Auto Check Saúde | Oficina Automotiva São Paulo' },
      { property: 'og:description', content: '50+ anos de tradição em reparação automotiva. Especialistas em sistema elétrico, motor, injeção eletrônica. Agende seu check-up!' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://customer-assets.emergentagent.com/job_health-checkup-4/artifacts/bhmlr1za_images.jfif' },
      { property: 'og:site_name', content: 'Auto Check Saúde' }
    ];

    ogTags.forEach(tag => {
      const existing = document.querySelector(`meta[property="${tag.property}"]`);
      if (existing) {
        existing.content = tag.content;
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute('property', tag.property);
        meta.content = tag.content;
        document.head.appendChild(meta);
      }
    });

    // Schema.org JSON-LD
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "AutomotiveBusiness",
      "name": "Auto Check Saúde",
      "description": "Oficina automotiva especializada em sistema elétrico, motor, injeção eletrônica e serviços gerais",
      "url": "https://www.autochecksaude.com.br",
      "logo": "https://customer-assets.emergentagent.com/job_health-checkup-4/artifacts/bhmlr1za_images.jfif",
      "image": "https://customer-assets.emergentagent.com/job_health-checkup-4/artifacts/bhmlr1za_images.jfif",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Av. do Cursino, 2012",
        "addressLocality": "São Paulo",
        "addressRegion": "SP",
        "postalCode": "04132-001",
        "addressCountry": "BR"
      },
      "telephone": "+55-11-4063-0515",
      "openingHours": [
        "Mo-Fr 08:00-19:00",
        "Sa 08:00-14:00"
      ],
      "priceRange": "$$",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.7",
        "reviewCount": "142"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Serviços Automotivos",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Sistema Elétrico Automotivo"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Injeção Eletrônica"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Reparação de Motor"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Sistema de Ar-condicionado"
            }
          }
        ]
      }
    };

    // Add or update JSON-LD script
    let schemaScript = document.getElementById('schema-org');
    if (schemaScript) {
      schemaScript.textContent = JSON.stringify(schemaData);
    } else {
      schemaScript = document.createElement('script');
      schemaScript.id = 'schema-org';
      schemaScript.type = 'application/ld+json';
      schemaScript.textContent = JSON.stringify(schemaData);
      document.head.appendChild(schemaScript);
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
      <WhatsAppFloat />
      <Toaster />
    </div>
  );
}

export default App;