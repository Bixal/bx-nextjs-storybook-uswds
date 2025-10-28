"use client";

import React, { useState } from "react";
import {
  GovBanner,
  Header,
  Menu,
  NavMenuButton,
  NavDropDownButton,
  ExtendedNav,
  Link,
  Search,
  SiteAlert,
} from "@trussworks/react-uswds";

export default function SiteHeader(): React.ReactElement {
  const [expanded, setExpanded] = useState(false);
  const [isOpen, setIsOpen] = useState([false]);

  const handleMenuToggle = (): void => setExpanded((prv) => !prv);

  function handleDropdownToggle(index: number) {
    setIsOpen((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  }

  const primaryNavItems = [
    <a href="#" key="certs">
      Certification
    </a>,
  ];

  const secondaryNavItems = [
    <a href="#login" key="login-link">Login</a>,
    <a href="#register" key="register-link">Register</a>
  ];

  const testItemsMenu = [
    <>
      <NavDropDownButton
        onToggle={(): void => {
          handleDropdownToggle(0);
        }}
        menuId="testDropDownOne"
        isOpen={isOpen[0]}
        label="Nav Label"
        isCurrent={true}
      />
      <Menu
        key="one"
        items={primaryNavItems}
        isOpen={isOpen[0]}
        id="testDropDownOne"
      />
    </>,
    <a href="#two" key="two" className="usa-nav__link">
      <span>Parent link</span>
    </a>,
    <a href="#three" key="three" className="usa-nav__link">
      <span>Parent link</span>
    </a>,
  ];

  return (
    <>
      <a className="usa-skipnav" href="#main-content">
        Skip to main content
      </a>

      <SiteAlert variant="emergency">
        This is an example of an site-wide alert using the Trussworks USWDS
        SiteAlert component.
      </SiteAlert>

      <GovBanner />

      <Header extended={true} showMobileOverlay={expanded}>
        <div className="usa-navbar">
          <div className="usa-logo">
            <em className="usa-logo__text">
              <Link href="/" title="&lt;Project title&gt;">
                &lt;Project title&gt;
              </Link>
            </em>
          </div>
          <NavMenuButton onClick={handleMenuToggle} label="Menu" />
        </div>
        <ExtendedNav
          primaryItems={testItemsMenu}
          secondaryItems={secondaryNavItems}
          mobileExpanded={expanded}
          onToggleMobileNav={handleMenuToggle}
        >
          <Search size="small" onSubmit={(e) => console.log(e)} />
        </ExtendedNav>
      </Header>
    </>
  );
}
