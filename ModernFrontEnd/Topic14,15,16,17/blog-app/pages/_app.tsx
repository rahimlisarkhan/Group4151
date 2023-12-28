import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "@next/font/google";
import NextTopLoader from "nextjs-toploader";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

// If loading a variable font, you don't need to specify the font weight
const popins = Poppins({
  weight: ["300", "400", "500", "600"],
  preload: false,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
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
        <NextTopLoader
          color="#2299DD"
          // initialPosition={0.08}
          // crawlSpeed={200}
          height={10}
          // crawl={true}
          // showSpinner={true}
          // easing="ease"
          // speed={200}
          // shadow="0 0 10px #2299DD,0 0 5px #2299DD"
          //   template='<div class="bar" role="bar"><div class="peg"></div></div>
          // <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
          // zIndex={1600}
          // showAtBottom={false}
        />
        <Component {...pageProps} />
      </main>
    </QueryClientProvider>
  );
}
