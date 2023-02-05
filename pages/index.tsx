import { keyframes, styled } from "@/stitches.config";
import Head from "next/head";
import Image from "next/image";

export default function Index() {
  return (
    <>
      <Head>
        <meta http-equiv="Content-Language" content="en" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="author" content="Peter Damrongpiriyapong" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:site" content="@peterdpong" />
        <meta property="twitter:title" content="Peter Damrongpiriyapong" />
        <meta
          property="twitter:image"
          content="https://peterdpong.me/static/img/preview-img.png"
        />
        <meta
          property="twitter:description"
          content="Computer Engineering at the University of Toronto and an incoming Software Engineer at Figma."
        />
        <meta property="twitter:url" content="https://peterdpong.me" />

        <meta name="title" content="Peter Damrongpiriyapong" />
        <meta
          property="og:image"
          content="https://peterdpong.me/static/img/preview-img.png"
        />
        <meta
          property="description"
          content="Computer Engineering at the University of Toronto and an incoming Software Engineer at Figma."
        />
        <meta
          property="og:description"
          content="Computer Engineering at the University of Toronto and an incoming Software Engineer at Figma."
        />
        <meta property="og:url" content="https://peterdpong.me" />

        <link rel="icon" href="./favicon.png" type="image/x-icon" />

        <title>Peter Damrongpiriyapong</title>
      </Head>
      <PageWrapper>
        <Section>
          <FadeInWrapper css={{ "--delay-num": 0 }}>
            <Title>Peter Damrongpiriyapong</Title>
          </FadeInWrapper>
          <FadeInWrapper css={{ "--delay-num": 1 }}>
            <Row>
              <Link href="/playground">Playground</Link>
              <Link href="/notes">Notes</Link>
            </Row>
          </FadeInWrapper>
        </Section>
        <Section>
          <FadeInWrapper css={{ "--delay-num": 2 }}>
            <Description>
              I&apos;m an engineer interested in building
              helpful, delightful, and useful software. Areas I&apos;m
              interested in are computer graphics, mobile/web development, and
              software for personal finance.
            </Description>
          </FadeInWrapper>
          <FadeInWrapper css={{ "--delay-num": 3 }}>
            <Description>
              Currently, I&apos;m Computer Engineering at the University of
              Toronto and an incoming Software Engineer at{" "}
              <Link href="https://www.figma.com/">Figma</Link>.
            </Description>
          </FadeInWrapper>
          <FadeInWrapper css={{ "--delay-num": 4 }}>
            <Description>
              Previously, I was an intern at Figma building{" "}
              <Link href="https://www.figma.com/figjam/">FigJam</Link> and at{" "}
              <Link href="https://www.prodigygame.com/">Prodigy</Link> working
              on an in-house game/prefab editor.
            </Description>
          </FadeInWrapper>
        </Section>
        <Section>
          <FadeInWrapper css={{ "--delay-num": 5 }}>
            <Row>
              <Link href="https://twitter.com/peterdpong">
                Twitter
                <Image
                  src="img/nav-arrow.svg"
                  alt="navigation-arrow"
                  width={12}
                  height={12}
                />
              </Link>
              <Link href="https://www.github.com/peterdpong">
                GitHub
                <Image
                  src="img/nav-arrow.svg"
                  alt="navigation-arrow"
                  width={12}
                  height={12}
                />
              </Link>
              <Link href="https://www.figma.com/@petah">
                Figma
                <Image
                  src="img/nav-arrow.svg"
                  alt="navigation-arrow"
                  width={12}
                  height={12}
                />
              </Link>
              <Link href="https://www.linkedin.com/in/peterdpong/">
                Linkedin
                <Image
                  src="img/nav-arrow.svg"
                  alt="navigation-arrow"
                  width={12}
                  height={12}
                />
              </Link>
            </Row>
          </FadeInWrapper>
        </Section>
      </PageWrapper>
    </>
  );
}

const PageWrapper = styled("div", {
  width: "100%",
  margin: "0 auto",
  paddingTop: "4rem",
  display: "flex",
  flexDirection: "column",
  maxWidth: "40rem",
});

const Section = styled("div", {
  margin: "0rem 1rem 1rem 1rem",
});

const Title = styled("h1", {
  fontFamily: "$sans",
  fontWeight: 500,
  fontSize: "1.625rem",
  color: "$gray12",
});

const Description = styled("p", {
  fontFamily: "$sans",
  fontWeight: 400,
  fontSize: "1rem",
  color: "$gray12",
  marginBottom: "0.5rem",
});

const Link = styled("a", {
  fontFamily: "$sans",
  fontWeight: 400,
  fontSize: "1rem",
  color: "$gray12",
  textDecorationThickness: "1.5px",
  textDecorationColor: "$gray11",
  transition: "text-decoration-color 0.1s ease-in-out",
  "&:hover": {
    textDecorationColor: "$gray12",
  },
});

const Row = styled("div", {
  display: "flex",
  gap: "0.75rem",
  flexWrap: "wrap",
});

const fadeInUp = keyframes({
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
  "animation-name": fadeInUp,
  "animation-fill-mode": "both",
});
