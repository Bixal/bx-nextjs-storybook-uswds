import type { AppProps } from "next/app";
import "../styles/styles.scss";
import dynamic from "next/dynamic";

// load client-side only header
const SiteHeader = dynamic(
  () => import("../components/SiteHeader/SiteHeader"),
  { ssr: false },
);

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SiteHeader />
      <Component {...pageProps} />
    </>
  );
}
