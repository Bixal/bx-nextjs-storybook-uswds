import { SiteAlert } from "@trussworks/react-uswds";
import { Article } from "../components/Article/Article";

export default function Home() {
  return (
    <>
      <SiteAlert variant="emergency">
        This is an example of an site-wide alert using the Trussworks USWDS
        SiteAlert component.
      </SiteAlert>
      <div className="usa-section">
        <div className="grid-container">
          <main className="usa-prose">
            <h1>Next.js + Storybook + USWDS Trussworks library</h1>
            <p>
              Welcome to this prototype. This template repository demonstrates
              how to integrate Next.js, Storybook, and the U.S. Web Design
              System (USWDS) using the Trussworks React component library. We
              hope this setup helps other developers build accessible, scalable,
              and well-documented applications more efficiently.
            </p>

            <ul>
              <li>
                <a href="https://github.com/Bixal/bx-nextjs-storybook-uswds">
                  Bixal Template Repository
                </a>
              </li>
              <li>
                <a href="https://storybook.js.org/docs/react/get-started/introduction">
                  Storybook Documentation
                </a>
              </li>
              <li>
                <a href="https://nextjs.org/docs">Next.js Documentation</a>
              </li>
              <li>
                <a href="https://trussworks.github.io/react-uswds">
                  Trussworks USWDS Documentation
                </a>
              </li>
              <li>
                <a href="https://designsystem.digital.gov/">
                  U.S. Web Design System (USWDS) Documentation
                </a>
              </li>
            </ul>

            <Article
              title="Welcome to Our Application"
              link="https://github.com/Bixal/bx-nextjs-storybook-uswds"
              author="Development Team"
              date="09/25/2025"
            >
              <p>
                This is an example of the Article component embedded in the
                Next.js home page. The Article component demonstrates how to
                integrate custom components from the storybook instance.
              </p>
            </Article>
          </main>
        </div>
      </div>
    </>
  );
}
