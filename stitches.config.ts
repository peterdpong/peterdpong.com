import { grayDark, blueDark, redDark, greenDark } from "@radix-ui/colors";
import { createStitches, globalCss } from "@stitches/react";

export const baseTheme = {
  colors: {
    ...grayDark,
    ...blueDark,
    ...redDark,
    ...greenDark,
  },
  fonts: {
    sans: "DM Sans, sans-serif",
  },
};

export const { styled } = createStitches({
  theme: baseTheme,
});

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
  },
});
