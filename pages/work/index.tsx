import { FadeInWrapper } from "@/components/FadeInWrapper";
import { Footer } from "@/components/Footer";
import { Link } from "@/components/Link";
import { Section } from "@/components/Section";
import { Title } from "@/components/Typography";
import { ContentWrapper, PageWrapper } from "@/components/Wrappers";
import { styled } from "@/stitches.config";
import Head from "next/head";
import Image from "next/image";

export default function Index() {
  return (
    <>
      <Head>
        <meta httpEquiv="Content-Language" content="en" />
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
          content="https://peterdpong.me/img/preview-img.png"
        />
        <meta
          property="twitter:description"
          content="Peter Damrongpiriyapong - Software Engineer at Figma."
        />
        <meta property="twitter:url" content="https://peterdpong.me" />

        <meta name="title" content="Peter Damrongpiriyapong" />
        <meta
          property="og:image"
          content="https://peterdpong.me/img/preview-img.png"
        />
        <meta
          name="description"
          content="Peter Damrongpiriyapong - Software Engineer at Figma."
        ></meta>
        <meta
          property="description"
          content="Peter Damrongpiriyapong - Software Engineer at Figma."
        />
        <meta
          property="og:description"
          content="Peter Damrongpiriyapong - Software Engineer at Figma."
        />
        <meta property="og:url" content="https://peterdpong.me" />

        <link rel="icon" href="./favicon.png" type="image/x-icon" />

        <title>Peter - Work</title>
      </Head>
      <PageWrapper>
        <ContentWrapper>
          <Section>
            <FadeInWrapper css={{ "--delay-num": 1 }}>
              <Row>
                <Link href="/">
                  Index
                  <Image
                    src="img/nav-arrow.svg"
                    alt="navigation-arrow"
                    width={12}
                    height={12}
                  />
                </Link>
              </Row>
            </FadeInWrapper>

            <FadeInWrapper css={{ "--delay-num": 0 }}>
              <Title>Work</Title>
            </FadeInWrapper>
          </Section>
          <Section>
            <FadeInWrapper css={{ "--delay-num": 2 }}>
              <Card>
                <FloatingCardRight
                  css={{
                    "--rotate-deg": "-5deg",
                    "--rotate-deg-hover": "2deg",
                  }}
                >
                  <CardTitle>FigJam AI</CardTitle>
                  <CardDescription>
                    Helped bring AI capabilities to FigJam. AI powered
                    generation of templates and visuals, and
                    summarization/clustering of stickies.
                  </CardDescription>
                </FloatingCardRight>
                <Image
                  src="/gif/figjam_ai.gif"
                  alt="Gif of FigJam AI"
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "400px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              </Card>
            </FadeInWrapper>
          </Section>
          <Section>
            <FadeInWrapper css={{ "--delay-num": 4 }}>
              <Card>
                <FloatingCardLeft
                  css={{
                    "--rotate-deg": "4deg",
                    "--rotate-deg-hover": "-2deg",
                  }}
                >
                  <CardTitle>Markdown in FigJam</CardTitle>
                  <CardDescription>
                    Adding Markdown support for text, improving text formatting
                    in FigJam.
                  </CardDescription>
                </FloatingCardLeft>
                <Image
                  src="/gif/figjam_markdown.gif"
                  alt="Gif of FigJam AI"
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "400px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              </Card>
            </FadeInWrapper>
          </Section>
          <Section>
            <FadeInWrapper css={{ "--delay-num": 6 }}>
              <Card>
                <FloatingCardRight
                  css={{
                    "--rotate-deg": "-4deg",
                    "--rotate-deg-hover": "1deg",
                  }}
                >
                  <CardTitle>Quick Create Improvements</CardTitle>
                  <CardDescription>
                    Smart content aware quick create placement for a better
                    diagramming experience in FigJam.
                  </CardDescription>
                </FloatingCardRight>
                <Image
                  src="/gif/figjam_quickadd.gif"
                  alt="Gif of FigJam AI"
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "400px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              </Card>
            </FadeInWrapper>
          </Section>
        </ContentWrapper>
        <Footer />
      </PageWrapper>
    </>
  );
}

const Card = styled("div", {
  height: "400px",
  border: "1px solid rgb(0 0 0 / 0.8)",
  borderRadius: "8px",
  marginBottom: "2rem",
});

const FloatingCardRight = styled("div", {
  "--rotate-deg": "0deg",
  "--rotate-deg-hover": "0deg",
  position: "absolute",
  backgroundColor: "#ffffff",
  color: "#262626",
  right: "-25px",
  bottom: "-20px",
  maxWidth: "325px",
  borderRadius: "6px",
  padding: "6px 10px",
  border: "1px solid rgb(0 0 0 / 0.2)",
  boxShadow:
    "0px 0px 4px rgba(15, 15, 15, 0.02), 0px 0px 3px rgba(15, 15, 15, 0.08), 0px 0px 3px rgba(15, 15, 15, 0.13), 0px 0px 1px rgba(15, 15, 15, 0.15)",
  transform: "rotate(var(--rotate-deg))",
  transition: "0.25s ease",
  cursor: "default",
  "&:hover": {
    transform: "rotate(var(--rotate-deg-hover)) translate(15px, 5px)",
  },
});

const FloatingCardLeft = styled("div", {
  "--rotate-deg": "0deg",
  "--rotate-deg-hover": "0deg",
  position: "absolute",
  backgroundColor: "#ffffff",
  color: "#262626",
  left: "-20px",
  bottom: "-20px",
  maxWidth: "325px",
  borderRadius: "6px",
  padding: "6px 10px",
  border: "1px solid rgb(0 0 0 / 0.2)",
  boxShadow:
    "0px 0px 4px rgba(15, 15, 15, 0.02), 0px 0px 3px rgba(15, 15, 15, 0.08), 0px 0px 3px rgba(15, 15, 15, 0.13), 0px 0px 1px rgba(15, 15, 15, 0.15)",
  transform: "rotate(var(--rotate-deg))",
  transition: "0.25s ease",
  cursor: "default",
  "&:hover": {
    transform: "rotate(var(--rotate-deg-hover)) translate(-15px, -5px)",
  },
});

const CardTitle = styled("div", {
  fontFamily: "var(--dm-sans)",
  fontWeight: 500,
  fontSize: "1.15rem",
  color: "$gray1",
});

const CardDescription = styled("div", {
  fontFamily: "var(--dm-sans)",
  fontWeight: 500,
  fontSize: "0.8rem",
  color: "$gray8",
});

const Row = styled("div", {
  display: "flex",
  flexWrap: "wrap",
});
