import type { Metadata } from "next";
import Image from "next/image";
import "../styles/styles.scss";
import "@trussworks/react-uswds/lib/index.css";
import {
  Identifier,
  IdentifierMasthead,
  IdentifierLogos,
  IdentifierLogo,
  IdentifierLinks,
  IdentifierGov,
  Link,
  IdentifierIdentity,
} from "@trussworks/react-uswds";
import SiteHeader from "../components/SiteHeader/SiteHeader";

export const metadata: Metadata = {
  title: "Next.js + Storybook + USWDS",
  description: "A template combining Next.js, Storybook, and USWDS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const identifierLinkContent = (
    <>
      <li className="usa-identifier__required-links-item">
        <Link href="#" className="usa-identifier__required-link">
          Test Link 1
        </Link>
      </li>
      <li className="usa-identifier__required-links-item">
        <Link href="#" className="usa-identifier__required-link">
          Test Link 2
        </Link>
      </li>
      <li className="usa-identifier__required-links-item">
        <Link href="#" className="usa-identifier__required-link">
          Test Link 3
        </Link>
      </li>
    </>
  );

  return (
    <html lang="en">
      <body>
        <a className="usa-skipnav" href="#main-content">
          Skip to main content
        </a>
        <SiteHeader />
        {children}
        
        <Identifier>
          <IdentifierMasthead aria-label="Agency identifier">
            <IdentifierLogos>
              <IdentifierLogo href="#">
                <Image
                  className="usa-identifier__logo-img"
                  src="/uswds/img/circle-gray-20.svg"
                  alt="Parent agency logo"
                  role="img"
                  width={40}
                  height={40}
                />
              </IdentifierLogo>
            </IdentifierLogos>
            <IdentifierIdentity domain="domain.edu.mil.gov">
              <span>
                An official website of the <Link href="#">Test Agency Name</Link>
              </span>
            </IdentifierIdentity>
          </IdentifierMasthead>
          <IdentifierLinks navProps={{ "aria-label": "Important links" }}>
            {identifierLinkContent}
          </IdentifierLinks>
          <IdentifierGov aria-label="U.S. government information and services">
            <span>
              Looking for U.S. government information and services?{" "}
              <a className="usa-link usa-link" href="https://www.usa.gov/">
                Visit USA.gov
              </a>
            </span>
          </IdentifierGov>
        </Identifier>
      </body>
    </html>
  );
}