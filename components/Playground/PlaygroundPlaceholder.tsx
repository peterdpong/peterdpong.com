import { keyframes, styled } from "@/stitches.config";

export const PlaygroundPlaceholder = () => {
  return (
    <Container>
      <Box>
        <Text>Future place of something fun!</Text>
      </Box>
    </Container>
  );
};

const GradientPan = keyframes({
  "0%": {
    backgroundPosition: "0% center",
  },
  "100%": {
    backgroundPosition: "-200% center",
  },
});

const Container = styled("div", {
  display: "flex",
  width: "100%",
  justifyContent: "center",
});

const Box = styled("div", {
  display: "flex",
  height: "150px",
  width: "225px",
  backgroundColor: "#222222",
  borderRadius: "10px",
  alignItems: "center",
  textAlign: "center",
  border: "1px solid #3d3d3d",
});

const Text = styled("div", {
  fontFamily: "var(--dm-sans)",
  fontWeight: 500,
  fontSize: "1.1rem",
  margin: "10px",
  background: "linear-gradient(to right, #919BFF,#318CF2,#5460F9,#919BFF)",
  backgroundSize: "200%",
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",
  "animation-duration": "1.5s",
  "animation-timing-function": "linear",
  "animation-name": GradientPan,
  "animation-iteration-count": "infinite",
});
