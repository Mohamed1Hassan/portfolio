import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/globals/Navbar";
import Footer from "@/components/globals/Footer";
import LoadingScreen from "@/components/globals/LoadingScreen";
import MouseSpotlight from "@/components/globals/MouseSpotlight";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Mohamed Hassan | Frontend-Focused Full Stack Developer",
  description: "Web developer with 2+ years of experience building stable, maintainable frontend solutions and scalable REST APIs.",
  icons: {
    icon: "/profile.jpg",
    apple: "/profile.jpg",
  },
  keywords: ["Mohamed Hassan", "Full Stack Developer", "Frontend Developer", "React.js", "Next.js", "Node.js", "Web Developer Egypt"],
  openGraph: {
    title: "Mohamed Hassan | Full Stack Developer",
    description: "Building scalable web applications with clean architecture and modern UX.",
    url: "https://your-portfolio-url.com", // Replace with real URL later
    siteName: "Mohamed Hassan Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${syne.variable} font-sans min-h-screen flex flex-col relative`}
      >
        <LoadingScreen />
        <MouseSpotlight />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none z-[-1]"></div>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
