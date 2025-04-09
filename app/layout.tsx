"use client";
// import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./lib/Theme-Provider";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

// export const metadata: Metadata = {
//   title: "Sharjun Hussain | Full Stack Developer",
//   description:
//     "I’m Sharjun Hussain — a passionate full stack developer crafting web experiences using React, Node.js, and more. Explore my portfolio and projects.",
//   keywords: [
//     "Sharjun Hussain",
//     "Full Stack Developer",
//     "MERN Stack",
//     "Portfolio",
//     "Web Developer",
//     "Next.js",
//     "React Developer",
//     "Sri Lanka Developer",
//   ],
//   authors: [{ name: "Sharjun Hussain", url: "https://yourdomain.com" }],
//   creator: "Sharjun Hussain",
//   metadataBase: new URL("https://yourdomain.com"), // change to your domain
//   openGraph: {
//     title: "Sharjun Hussain | Full Stack Developer",
//     description:
//       "Explore Sharjun Hussain’s full stack web development portfolio — showcasing clean UI, scalable backend, and creative digital experiences.",
//     url: "https://yourdomain.com",
//     siteName: "Sharjun Hussain Portfolio",
//     images: [
//       {
//         url: "https://yourdomain.com/og-image.jpg", // your OG image
//         width: 1200,
//         height: 630,
//         alt: "Sharjun Hussain Portfolio Preview",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Sharjun Hussain | Full Stack Developer",
//     description:
//       "Explore my portfolio crafted with React, Node, and love for great UI/UX.",
//     creator: "@yourTwitterHandle", // optional
//     images: ["https://yourdomain.com/og-image.jpg"],
//   },
//   icons: {
//     icon: "/favicon.ico",
//     shortcut: "/favicon.ico",
//     apple: "/apple-touch-icon.png",
//   },
//   // themeColor: "#0f172a", // change to your brand color
//   manifest: "/site.webmanifest",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.variable}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
