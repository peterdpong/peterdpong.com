import type { AppProps } from "next/app";
import { styled } from "@stitches/react";
import { globalStyles } from "@/stitches.config";

export default function App({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  );
}

const Wrapper = styled("div", {
  backgroundColor: "#161616",
  minHeight: "100vh",
});
