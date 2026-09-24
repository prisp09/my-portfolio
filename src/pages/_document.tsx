import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en-CA">
      <Head>
        <meta name="theme-color" content="#07080C" />
        <link rel="icon" href="/favicon.ico" />
        {/* Lets scroll-reveal styles apply only when JS runs */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
