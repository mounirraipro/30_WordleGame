import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AdSenseLoader from './components/AdSenseLoader';
import CookieConsentBanner from './components/CookieConsentBanner';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Wordle Game – Free Online Browser Game",
    template: "%s | Wordle Game",
  },
  description:
    "Play Wordle Game online free — Play Wordle Game free online — no download, no account needed. No download, no account needed.",
  keywords: [
    "Wordle Game",
    "Wordle Game online",
    "Wordle Game free",
    "free online game",
    "browser game",
    "casual game",
  ],
  authors: [{ name: "Wordle Game Team" }],
  creator: "Wordle Game",
  publisher: "Wordle Game",
  metadataBase: new URL("https://wordle-game.site"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Wordle Game",
    title: "Wordle Game – Free Online Browser Game",
    description:
      "Play Wordle Game free in your browser — Play Wordle Game free online — no download, no account needed.",
    url: "https://wordle-game.site",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wordle Game – Free Online Browser Game",
    description:
      "Play Wordle Game free online — no download, no account needed. Play free online!",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

function getPublisherId() {
  const raw = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID;
  if (!raw) return '';
  return raw.startsWith('ca-pub-') ? raw : `ca-pub-${raw}`;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const publisherId = getPublisherId();

  return (
    <html lang="en">
        <head>
        <AdSenseLoader publisherId={publisherId} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Wordle Game",
              url: "https://wordle-game.site",
              description:
                "Play Wordle Game free online — no download, no account needed.",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://wordle-game.site/blog?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Wordle Game",
              url: "https://wordle-game.site",
              logo: {
                "@type": "ImageObject",
                url: "https://wordle-game.site/og-image.png",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer support",
                url: "https://wordle-game.site/contact",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${outfit.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsentBanner />
      </body>
    </html>
  );
}
