import { styled } from "@/stitches.config";

export const PageWrapper = styled("div", {
  position: "relative",
  minHeight: "100vh",
});

export const ContentWrapper = styled("div", {
  width: "100%",
  margin: "0 auto",
  paddingTop: "4rem",
  paddingBottom: "2.5rem",
  display: "flex",
  flexDirection: "column",
  maxWidth: "40rem",
});
