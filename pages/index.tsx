import Image from "next/image";
import { Alert } from '@trussworks/react-uswds'

export default function Home() {
  return (
    <div className="grid-container">
      <main>
        <h1>Next.js + Storybook + USWDS Trussworks library</h1>
        <h2>Welcome to this prototype</h2>
        <Alert type="info" headingLevel="h3" heading="This is an info alert">
          This is an example of an info alert using the USWDS Alert component.
        </Alert>
      </main>
    </div>
  );
}
