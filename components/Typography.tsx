import { styled } from "@/stitches.config";

const Title = styled("h1", {
  fontFamily: "var(--dm-sans)",
  fontWeight: 500,
  fontSize: "1.625rem",
  color: "$gray12",
});

const Subtitle = styled("h1", {
  fontFamily: "var(--dm-sans)",
  fontWeight: 500,
  fontSize: "1.45rem",
  color: "$gray12",
});

const SectionTitle = styled("h1", {
  fontFamily: "var(--dm-sans)",
  fontWeight: 500,
  fontSize: "1.25rem",
  color: "$gray11",
});

const Description = styled("p", {
  fontFamily: "var(--dm-sans)",
  fontWeight: 400,
  fontSize: "1rem",
  color: "$gray12",
  marginBottom: "0.5rem",
});

const ItemTitle = styled("div", {
  fontFamily: "var(--dm-sans)",
  fontWeight: 400,
  fontSize: "1.15rem",
  color: "$gray12",
  margin: "2px 0px",
});

const ItemSubtitle = styled("div", {
  fontFamily: "var(--dm-sans)",
  fontWeight: 400,
  fontSize: "1rem",
  color: "$gray11",
});

const HorizontalRule = styled("hr", {
  border: "none",
  borderTop: "1px dashed",
  color: "$gray10",
  marginBottom: "8px",
});

export {
  Title,
  Subtitle,
  SectionTitle,
  Description,
  ItemTitle,
  ItemSubtitle,
  HorizontalRule,
};
