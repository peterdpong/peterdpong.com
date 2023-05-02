import { styled } from "@/stitches.config";

export const Link = styled("a", {
  fontFamily: "$sans",
  fontWeight: 400,
  fontSize: "1rem",
  color: "$gray12",
  textDecorationThickness: "1.5px",
  textDecorationColor: "$gray11",
  transition: "text-decoration-color 0.1s ease-in-out",
  "& img": {
    transition: "all 0.1s ease-in-out",
    marginLeft: "0.15em",
  },
  "&:hover": {
    textDecorationColor: "$gray12",
    "& img": {
      transform: "rotate(47deg)",
    },
  },
});
