import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "@next/font/google";

// If loading a variable font, you don't need to specify the font weight
const popins = Poppins({
  weight: ["300", "400", "500", "600"],
  preload: false,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={popins.className}>
      <style jsx global>{`
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        th,
        tr {
          font-family: ${popins.style.fontFamily}!important;
        }
      `}</style>
      <Component {...pageProps} />
    </main>
  );
}
