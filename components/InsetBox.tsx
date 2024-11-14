import { styled } from "@/stitches.config";
import { ReactNode } from "react";

const StyledInsetBox = styled("div", {
  backgroundColor: "#A72241",
  padding: "2rem",
  boxShadow: `
    inset 0 0 6px rgba(0, 0, 0, 0.15),
    inset 0 0 12px rgba(0, 0, 0, 0.1),
    inset 0 0 18px rgba(0, 0, 0, 0.05),
    -1px -1px 1px rgba(255, 255, 255, 0.05)
  `,
  borderRadius: "12px",
  width: "90%",
  margin: "0 auto",
  position: "relative",
  overflow: "hidden",
  height: "750px",
});

const BoxTitle = styled("h2", {
  fontFamily: "var(--newsreader)",
  fontSize: "1.75rem",
  color: "$white",
  marginBottom: "1.5rem",
  textAlign: "center",
});

const ContentWrapper = styled("div", {
  position: "relative",
  height: "calc(100% - 4rem)",
  width: "100%",
});

interface InsetBoxProps {
  title: string;
  children: ReactNode;
}

export default function InsetBox({ title, children }: InsetBoxProps) {
  return (
    <>
      <BoxTitle>
        <i>{title}</i>
      </BoxTitle>
      <StyledInsetBox>
        <ContentWrapper>{children}</ContentWrapper>
      </StyledInsetBox>
    </>
  );
}
