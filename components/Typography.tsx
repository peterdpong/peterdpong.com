import { styled } from "@/stitches.config";

const Title = styled("h1", {
  fontFamily: "var(--dm-sans)",
  fontWeight: 500,
  fontSize: "1.625rem",
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

export { Title, SectionTitle, Description, ItemTitle, ItemSubtitle };
