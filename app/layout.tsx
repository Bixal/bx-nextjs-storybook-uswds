import type { Metadata } from "next";
import "../styles/styles.scss";
import "@trussworks/react-uswds/lib/index.css";
import SiteHeader from "../components/SiteHeader/SiteHeader";
import SiteIdentifier from "../components/SiteIdentifier/SiteIdentifier";

export const metadata: Metadata = {
  title: "Next.js + Storybook + USWDS",
  description: "A template combining Next.js, Storybook, and USWDS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a className="usa-skipnav" href="#main-content">
          Skip to main content
        </a>
        <SiteHeader />
        {children}
        <SiteIdentifier />
      </body>
    </html>
  );
}
