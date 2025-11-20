"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Star, Crown, Award, Leaf, Sparkles, ChefHat, Trophy, MessageCircle, HelpCircle, Instagram, Facebook } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="medium"
      background="circleGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoText="La Stella d'Oro"
          button={{
            text: "Prenotazioni",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="La Stella d'Oro"
          description="Un'esperienza culinaria straordinaria nel cuore di Milano - 3 stelle Michelin"
          tag="Ristorante di Lusso"
          tagIcon={Star}
          buttons={[
            {
              text: "Prenota Ora",
              href: "contact"
            },
            {
              text: "Scopri il Menu",
              href: "https://example.com/menu"
            }
          ]}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763631058279-yxwvn8uk.jpg",
              imageAlt: "Interno elegante del ristorante La Stella d'Oro"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763631059659-no7h5b6d.jpg",
              imageAlt: "Piatto signature del ristorante"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763631060402-6dsrjvpm.jpg",
              imageAlt: "Cantina dei vini pregiati"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763631060966-qe24gxwy.jpg",
              imageAlt: "Sala privata per cene esclusive"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="La Nostra Storia"
          description="Da tre generazioni, la famiglia Marchetti porta l'eccellenza culinaria italiana nel cuore di Milano, conquistando le tre stelle Michelin con passione e dedizione assoluta."
          tag="Tradizione e Innovazione"
          tagIcon={Crown}
          textboxLayout="default"
          imagePosition="right"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763631058994-bnaav5e9.jpg"
          imageAlt="Chef Marchetti nel suo ristorante"
          bulletPoints={[
            {
              title: "Tre Stelle Michelin",
              description: "Riconoscimento dell'eccellenza culinaria ottenuto attraverso anni di perfezionamento",
              icon: Award
            },
            {
              title: "Ingredienti Selezionati",
              description: "Solo i migliori prodotti italiani DOP e IGP, selezionati personalmente dal nostro chef",
              icon: Leaf
            },
            {
              title: "Esperienza Unica",
              description: "Ogni piatto racconta una storia, ogni servizio è un'esperienza memorabile",
              icon: Sparkles
            }
          ]}
          buttons={[
            {
              text: "Conosci lo Chef",
              href: "https://example.com/chef"
            }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardThree
          title="Eccellenza Culinaria"
          description="Scopri ciò che rende unica l'esperienza gastronomica de La Stella d'Oro"
          tag="Le Nostre Specialità"
          tagIcon={ChefHat}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          features={[
            {
              id: "01",
              title: "Menu Degustazione",
              description: "Un viaggio sensoriale attraverso 12 portate che celebrano l'eccellenza italiana con tocchi innovativi",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763631059659-no7h5b6d.jpg",
              imageAlt: "Piatto del menu degustazione"
            },
            {
              id: "02",
              title: "Cantina Esclusiva",
              description: "Oltre 2000 etichette selezionate, dalle migliori cantine italiane ai grandi cru internazionali",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763631060402-6dsrjvpm.jpg",
              imageAlt: "La cantina del ristorante"
            },
            {
              id: "03",
              title: "Servizio Impeccabile",
              description: "Il nostro team esperto garantisce un servizio raffinato e attento ad ogni dettaglio",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763631060966-qe24gxwy.jpg",
              imageAlt: "Servizio di sala elegante"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Riconosciuto dalle Migliori Guide"
          description="La Stella d'Oro è celebrata dalle più prestigiose guide gastronomiche internazionali"
          tag="Premi e Riconoscimenti"
          tagIcon={Trophy}
          textboxLayout="default"
          speed={30}
          showCard={true}
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763631065777-uok9g0e8.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763631066621-9orhnwhp.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763631067287-fcnq0jrx.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763631067887-bkc6g0wq.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763631068569-kbdi0rse.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763631069658-gbgoaxca.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763631070509-hw3026hy.jpg"
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="L'Esperienza dei Nostri Ospiti"
          description="Scopri cosa dicono i nostri clienti della loro esperienza culinaria unica"
          tag="Recensioni"
          tagIcon={MessageCircle}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="blur-reveal"
          testimonials={[
            {
              id: "1",
              name: "Isabella Rossi",
              role: "Food Critic",
              company: "Corriere della Sera",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763631061701-99fslc4i.jpg",
              imageAlt: "Isabella Rossi"
            },
            {
              id: "2",
              name: "Marco Bianchi",
              role: "CEO",
              company: "Milano Luxury Group",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763631062439-rhokwuz7.jpg",
              imageAlt: "Marco Bianchi"
            },
            {
              id: "3",
              name: "Elena & Giovanni",
              role: "Celebrazione",
              company: "25° Anniversario",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763631063939-b6o2xqv9.jpg",
              imageAlt: "Elena e Giovanni"
            },
            {
              id: "4",
              name: "James Thompson",
              role: "Travel Writer",
              company: "Financial Times",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763631064437-4feze9g0.jpg",
              imageAlt: "James Thompson"
            },
            {
              id: "5",
              name: "Sofia Martinelli",
              role: "Sommelier",
              company: "Associazione Italiana Sommelier",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763631065116-bnvkdhn4.jpg",
              imageAlt: "Sofia Martinelli"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Domande Frequenti"
          description="Tutto quello che devi sapere per vivere un'esperienza indimenticabile da La Stella d'Oro"
          tag="Informazioni Utili"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "È necessaria la prenotazione?",
              content: "Sì, la prenotazione è obbligatoria. Consigliamo di prenotare con almeno 2 settimane di anticipo, specialmente per i weekend e le occasioni speciali."
            },
            {
              id: "2",
              title: "Qual è il dress code?",
              content: "Richiediamo un abbigliamento elegante. Giacca e cravatta per gli uomini, abbigliamento sofisticato per le signore. Non sono ammessi jeans, sneakers o abbigliamento casual."
            },
            {
              id: "3",
              title: "Avete opzioni per vegetariani e vegani?",
              content: "Certamente! Il nostro chef può preparare menu dedicati per vegetariani, vegani e per qualsiasi intolleranza alimentare, previa comunicazione al momento della prenotazione."
            },
            {
              id: "4",
              title: "È possibile organizzare eventi privati?",
              content: "Offriamo spazi privati per eventi esclusivi fino a 20 persone. Contattaci per discutere le tue esigenze e creare un'esperienza su misura."
            },
            {
              id: "5",
              title: "Qual è la politica di cancellazione?",
              content: "Le cancellazioni devono essere comunicate almeno 48 ore prima della data prenotata. Per eventi privati, richiediamo un preavviso di 7 giorni."
            },
            {
              id: "6",
              title: "Accettate bambini?",
              content: "Accogliamo bambini sopra i 12 anni per mantenere l'atmosfera raffinata che caratterizza la nostra esperienza culinaria."
            }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="La Stella d'Oro"
          copyrightText="© 2025 La Stella d'Oro. Tutti i diritti riservati."
          columns={[
            {
              title: "Ristorante",
              items: [
                {
                  label: "Chi Siamo",
                  href: "about"
                },
                {
                  label: "Lo Chef",
                  href: "https://example.com/chef"
                },
                {
                  label: "La Storia",
                  href: "https://example.com/storia"
                }
              ]
            },
            {
              title: "Menu",
              items: [
                {
                  label: "Degustazione",
                  href: "https://example.com/menu-degustazione"
                },
                {
                  label: "À la Carte",
                  href: "https://example.com/menu-carta"
                },
                {
                  label: "Carta dei Vini",
                  href: "https://example.com/vini"
                }
              ]
            },
            {
              title: "Servizi",
              items: [
                {
                  label: "Prenotazioni",
                  href: "contact"
                },
                {
                  label: "Eventi Privati",
                  href: "https://example.com/eventi"
                },
                {
                  label: "Gift Card",
                  href: "https://example.com/gift"
                }
              ]
            },
            {
              title: "Contatti",
              items: [
                {
                  label: "Via Montenapoleone 8",
                  href: "https://maps.google.com"
                },
                {
                  label: "+39 02 1234 5678",
                  href: "tel:+390212345678"
                },
                {
                  label: "info@lastelladoro.it",
                  href: "mailto:info@lastelladoro.it"
                }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Instagram,
              href: "https://instagram.com/lastelladoro",
              ariaLabel: "Seguici su Instagram"
            },
            {
              icon: Facebook,
              href: "https://facebook.com/lastelladoro",
              ariaLabel: "Seguici su Facebook"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}