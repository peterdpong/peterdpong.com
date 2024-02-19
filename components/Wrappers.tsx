import { styled } from "@/stitches.config";

export const PageWrapper = styled("div", {
  position: "relative",
  minHeight: "100vh",
});

export const ContentWrapper = styled("main", {
  margin: "0 15%",
  paddingTop: "1.5rem",
  paddingBottom: "2.5rem",
  display: "flex",
  flexDirection: "column",
});
