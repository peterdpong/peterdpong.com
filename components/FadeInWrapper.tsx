import { keyframes, styled } from "@/stitches.config";

const FadeInUp = keyframes({
  "0%": {
    opacity: 0,
    "-webkit-transform": "translateY(5px)",
    "-moz-transform": "translateY(5px)",
    "-ms-transform": "translateY(5px)",
    "-o-transform": "translateY(5px)",
    transform: "translateY(5px)",
  },
  "100%": {
    opacity: 1,
    "-webkit-transform": "translateY(0)",
    "-moz-transform": "translateY(0)",
    "-ms-transform": "translateY(0)",
    "-o-transform": "translateY(0)",
    transform: "translateY(0)",
  },
});

const FadeInWrapper = styled("div", {
  "--delay-num": 0,
  "--delay": "100ms",
  "--start": "0ms",

  "animation-duration": "0.65s",
  "animation-timing-function": "ease",
  "animation-delay": "calc(var(--delay-num) * var(--delay) + var(--start))",
  "animation-name": FadeInUp,
  "animation-fill-mode": "both",
});

export { FadeInWrapper };
