import { styled } from "@/stitches.config";

const Title = styled("h1", {
  fontFamily: "var(--dm-sans)",
  fontWeight: 700,
  fontSize: "1.15rem",
  letterSpacing: "-0.5px",
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
  fontWeight: 500,
  fontSize: "1.75rem",
  letterSpacing: "-1px",
  lineHeight: "2rem",
  color: "#1E1E1E",
});

const HeroText = styled("p", {
  fontFamily: "var(--dm-sans)",
  fontWeight: 400,
  fontSize: "2rem",
  letterSpacing: "-1.5px",
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
  border: 0,
  height: "1.5px",
  backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0))"
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
