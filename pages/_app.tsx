import React from "react";
import type { AppProps } from "next/app";
import "../styles/styles.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
        <Component {...pageProps} />
    </React.StrictMode>
  );
}
