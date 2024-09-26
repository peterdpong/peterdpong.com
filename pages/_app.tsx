import type { AppProps } from "next/app";
import { styled } from "@stitches/react";
import { globalStyles } from "@/stitches.config";
import { ThemeProvider } from "next-themes";
import { DM_Sans, EB_Garamond } from "@next/font/google";
import { Analytics } from "@vercel/analytics/react";

const DMSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--dm-sans",
});

const EBGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--eb-garamond",
});

export default function App({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <>
      <ThemeProvider disableTransitionOnChange defaultTheme="dark">
        <Wrapper className={`${DMSans.variable} ${EBGaramond.variable}`}>
          <Component {...pageProps} />
        </Wrapper>
      </ThemeProvider>
      <Analytics />
    </>
  );
}

const Wrapper = styled("div", {
  background: "#FCFCFC",
  minHeight: "100vh",
});
