import { Html, Head, Main, NextScript } from "next/document";
import Image from "next/image";
import Script from "next/script";
import {
  GovBanner,
  Header,
  Identifier,
  IdentifierMasthead,
  IdentifierLogos,
  IdentifierLogo,
  IdentifierIdentity,
  IdentifierLinks,
  IdentifierGov,
  Link,
  SiteAlert
} from "@trussworks/react-uswds";

export default function Document() {
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
    <Html lang="en">
      <Head>
        <Script src="/uswds/js/uswds-init.min.js" strategy="beforeInteractive" />
      </Head>
      <body>
        <a className="usa-skipnav" href="#main-content">
          Skip to main content
        </a>

        <SiteAlert variant="emergency">
          This is an example of an site-wide alert using the Trussworks USWDS
          SiteAlert component.
        </SiteAlert>

        <GovBanner />

        <Header extended={true} showMobileOverlay={false}>
          <div className="usa-navbar">
            <div class="usa-logo">
              <em class="usa-logo__text">
                <Link href="/" title="<Project title>">
                  &lt;Project title&gt;
                </Link>
              </em>
            </div>
            <button type="button" class="usa-menu-btn">
              Menu
            </button>
          </div>
          <nav aria-label="Primary navigation" class="usa-nav">
            <div class="usa-nav__inner">
              <button type="button" className="usa-nav__close">
                <Image
                  src="/uswds/img/usa-icons/close.svg"
                  role="img"
                  alt="Close"
                  width={24}
                  height={24}
                />
              </button>
              <ul class="usa-nav__primary usa-accordion">
                <li class="usa-nav__primary-item">
                  <a href="/about" class="usa-nav-link">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </Header>

        <Main />

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
                An official website of the{" "}
                <Link href="#">Test Agency Name</Link>
              </span>
            </IdentifierIdentity>
          </IdentifierMasthead>
          <IdentifierLinks
            navProps={{
              "aria-label": "Important links",
            }}
          >
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
        <Script src="/uswds/js/uswds.min.js" />
        <NextScript />
      </body>
    </Html>
  );
}
