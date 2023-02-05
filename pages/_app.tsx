import type { AppProps } from "next/app";
import { styled } from "@stitches/react";
import { globalStyles } from "@/stitches.config";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <ThemeProvider disableTransitionOnChange defaultTheme="dark">
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </ThemeProvider>
  );
}

const Wrapper = styled("div", {
  background: "#161616",
  minHeight: "100vh",
});
