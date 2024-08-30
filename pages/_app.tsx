import type { AppProps } from "next/app";
import { styled } from "@stitches/react";
import { globalStyles } from "@/stitches.config";
import { ThemeProvider } from "next-themes";
import { DM_Sans } from "@next/font/google";
import { Analytics } from "@vercel/analytics/react";

const DMSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--dm-sans",
});

export default function App({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <>
      <ThemeProvider disableTransitionOnChange defaultTheme="dark">
        <Wrapper className={DMSans.className}>
          <Component {...pageProps} />
        </Wrapper>
      </ThemeProvider>
      <Analytics />
    </>
  );
}

const Wrapper = styled("div", {
  background: "#EFE7DA",
  minHeight: "100vh",
});
