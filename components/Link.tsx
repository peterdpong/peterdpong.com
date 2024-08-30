import { styled } from "@/stitches.config";

export const Link = styled("a", {
  fontFamily: "var(--dm-sans)",
  fontWeight: 400,
  color: "#1E1E1E",
  textDecorationThickness: "2px",
  transition: "text-decoration-color 0.15s ease-in",
  "& img": {
    transition: "all 0.1s ease-in-out",
    marginLeft: "0.15em",
  },
  "&:hover": {
    textDecorationColor: "#8c867b",
    "& img": {
      transform: "rotate(47deg)",
    },
  },
});
