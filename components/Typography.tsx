import { styled } from "@/stitches.config";

const Title = styled("h1", {
  fontFamily: "var(--dm-sans)",
  fontWeight: 500,
  fontSize: "1.25rem",
  lineHeight: "1.25rem",
  color: "#1E1E1E",
});

const Subtitle = styled("h1", {
  fontFamily: "var(--dm-sans)",
  fontWeight: 500,
  fontSize: "1.45rem",
  color: "#1E1E1E",
});

const SectionTitle = styled("h1", {
  fontFamily: "var(--dm-sans)",
  fontWeight: 400,
  fontSize: "1.5rem",
  lineHeight: "2.25rem",
  color: "#1E1E1E",
});

const HeroText = styled("p", {
  fontFamily: "var(--dm-sans)",
  fontWeight: 400,
  fontSize: "2.5rem",
  color: "#1E1E1E",
  marginBottom: "0.5rem",
});

const Description = styled("p", {
  fontFamily: "var(--dm-sans)",
  fontWeight: 400,
  fontSize: "2.5rem",
  color: "#1E1E1E",
  marginBottom: "0.5rem",
});

const ItemTitle = styled("div", {
  fontFamily: "var(--dm-sans)",
  fontWeight: 400,
  fontSize: "1.15rem",
  color: "#1E1E1E",
  margin: "2px 0px",
});

const WorkItemTitle = styled("div", {
  fontFamily: "var(--dm-sans)",
  fontWeight: 400,
  fontSize: "1.75em",
  color: "#1E1E1E",
});

const WorkItemDate = styled("div", {
  fontFamily: "var(--dm-sans)",
  fontWeight: 400,
  fontSize: "0.85rem",
  color: "#1E1E1E",
});

const WorkItemJobTitle = styled("div", {
  fontFamily: "var(--dm-sans)",
  fontWeight: 400,
  fontSize: "1rem",
  color: "#1E1E1E",
});

const ItemSubtitle = styled("div", {
  fontFamily: "var(--dm-sans)",
  fontWeight: 400,
  fontSize: "1rem",
  color: "#1E1E1E",
});

const HorizontalRule = styled("hr", {
  border: "none",
  borderTop: "1px solid",
  color: "#1E1E1E",
  marginBottom: "8px",
});

export {
  Title,
  Subtitle,
  SectionTitle,
  HeroText,
  Description,
  ItemTitle,
  WorkItemTitle,
  WorkItemDate,
  WorkItemJobTitle,
  ItemSubtitle,
  HorizontalRule,
};
