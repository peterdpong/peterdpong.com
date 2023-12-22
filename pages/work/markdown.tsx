import { FadeInWrapper } from "@/components/FadeInWrapper";
import { Footer } from "@/components/Footer";
import { Link } from "@/components/Link";
import { Section } from "@/components/Section";
import { Description, Title } from "@/components/Typography";
import { ContentWrapper, PageWrapper } from "@/components/Wrappers";
import { styled } from "@/stitches.config";
import Head from "next/head";
import Image from "next/image";

export default function MarkdownPage() {
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

        <title>Peter — FigJam Markdown</title>
      </Head>
      <PageWrapper>
        <ContentWrapper>
          <Section>
            <FadeInWrapper css={{ "--delay-num": 1 }}>
              <Row>
                <Link href="/work">
                  Back
                  <Image
                    src="/img/nav-arrow.svg"
                    alt="navigation-arrow"
                    width={12}
                    height={12}
                  />
                </Link>
              </Row>
            </FadeInWrapper>
          </Section>
          <Section>
            <FadeInWrapper css={{ "--delay-num": 2 }}>
              <Card>
                <VideoContainer>
                  <CoverVideo loop autoPlay muted playsInline>
                    <source src="/video/markdown.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </CoverVideo>
                </VideoContainer>
              </Card>
            </FadeInWrapper>
            <FadeInWrapper css={{ "--delay-num": 0 }}>
              <Title>Markdown in FigJam</Title>
              <Description>
                Adding Markdown support for text, improving text formatting in
                FigJam.
              </Description>
            </FadeInWrapper>
          </Section>
        </ContentWrapper>
        <Footer />
      </PageWrapper>
    </>
  );
}

const Card = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});

const VideoContainer = styled("div", {
  height: "350px",
  marginBottom: "0.5rem",
});

const CoverVideo = styled("video", {
  height: "100%",
  width: "100%",
  objectFit: "cover",
  borderRadius: "8px",
});

const Row = styled("div", {
  display: "flex",
  flexWrap: "wrap",
});
