import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rajan Parmar | Web Developer | Portfolio | MERN Stack Developer",
  description: "Rajan Parmar is a skilled web developer and Computer Engineering student specializing in MERN stack, JavaScript, React, Node.js, and modern web applications. View Rajan Parmar's portfolio, projects, skills, and experience.",
  keywords: "Rajan Parmar, web developer, MERN stack developer, full-stack developer, JavaScript developer, React developer, Node.js developer, portfolio, Rajan Parmar projects, Rajan Parmar resume",
  authors: [{ name: "Rajan Parmar" }],
  creator: "Rajan Parmar",
  publisher: "Rajan Parmar",
  openGraph: {
    title: "Rajan Parmar | Web Developer Portfolio",
    description: "Rajan Parmar - Full-Stack Developer specializing in MERN stack and modern web technologies. Computer Engineering student with expertise in JavaScript, React, and Node.js.",
    url: "https://rajanparmar.vercel.app",
    siteName: "Rajan Parmar Portfolio",
    type: "website",
    images: [
      {
        url: "/personalimage.jpg",
        width: 1200,
        height: 630,
        alt: "Rajan Parmar - Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajan Parmar | Web Developer Portfolio",
    description: "Rajan Parmar - Full-Stack Developer specializing in MERN stack and modern web technologies.",
    images: ["/personalimage.jpg"],
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
  verification: {
    google: "your-google-site-verification-code", // You'll need to add this from Google Search Console
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Rajan Parmar",
              "url": "https://rajanparmar.vercel.app",
              "sameAs": [
                "https://github.com/rajan-parmar-23102006/",
                "https://www.linkedin.com/in/rajan-parmar-458978301/",
                "https://twitter.com/yourusername", // Add your Twitter if you have one
                "https://instagram.com/yourusername" // Add your Instagram if you have one
              ],
              "jobTitle": "Web Developer",
              "description": "Rajan Parmar is a Computer Engineering student and full-stack web developer specializing in MERN stack technologies including JavaScript, React, Node.js, and modern web applications.",
              "image": "https://rajanparmar.vercel.app/personalimage.jpg",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "India"
              },
              "knowsAbout": [
                "Web Development",
                "MERN Stack",
                "JavaScript",
                "React",
                "Node.js",
                "Full-Stack Development",
                "Computer Engineering"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
