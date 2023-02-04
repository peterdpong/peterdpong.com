import { styled } from "@/stitches.config";
import Head from "next/head";

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
          <Title>Peter Damrongpiriyapong</Title>
          <Row>
            <Link href="/playground">Playground</Link>
            <Link href="/notes">Notes</Link>
          </Row>
        </Section>
        <Section>
          <Description>
            I'm an engineer interested in building helpful, delightful, and
            useful software. I'm an engineer interested in building helpful,
            delightful, and useful software. Areas I'm interested in are
            computer graphics, mobile/web development, and software for personal
            finance.
          </Description>
          <Description>
            Currently, I'm Computer Engineering at the University of Toronto and
            an incoming Software Engineer at{" "}
            <Link href="https://www.figma.com/">Figma</Link>.
          </Description>
          <Description>
            Previously, I was an intern at Figma building{" "}
            <Link href="https://www.figma.com/figjam/">FigJam</Link> and at{" "}
            <Link href="https://www.prodigygame.com/">Prodigy</Link> working on
            an in-house game/prefab editor.
          </Description>
        </Section>
        <Section>
          <Row>
            <Link href="https://twitter.com/peterdpong">
              Twitter
              <img src="img/nav-arrow.svg" alt="navigation-arrow" />
            </Link>
            <Link href="https://www.github.com/peterdpong">
              GitHub
              <img src="img/nav-arrow.svg" alt="navigation-arrow" />
            </Link>
            <Link href="https://www.figma.com/@petah">
              Figma
              <img src="img/nav-arrow.svg" alt="navigation-arrow" />
            </Link>
            <Link href="https://www.linkedin.com/in/peterdpong/">
              Linkedin
              <img src="img/nav-arrow.svg" alt="navigation-arrow" />
            </Link>
          </Row>
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

  "& img": {
    height: "0.85rem",
    width: "0.85rem",
  },
});

const Row = styled("div", {
  display: "flex",
  gap: "0.75rem",
  flexWrap: "wrap",
});
