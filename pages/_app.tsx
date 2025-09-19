import React from "react";
import type { AppProps } from "next/app";
import '@trussworks/react-uswds/lib/uswds.css'
import '@trussworks/react-uswds/lib/index.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
        <Component {...pageProps} />
    </React.StrictMode>
  );
}
