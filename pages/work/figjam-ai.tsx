import { FadeInWrapper } from "@/components/FadeInWrapper";
import { Footer } from "@/components/Footer";
import { Link } from "@/components/Link";
import { Section } from "@/components/Section";
import {
  Description,
  HorizontalRule,
  Subtitle,
  Title,
} from "@/components/Typography";
import { ContentWrapper, PageWrapper } from "@/components/Wrappers";
import { styled } from "@/stitches.config";
import Head from "next/head";
import Image from "next/image";

export default function FigJamAIPage() {
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

        <title>Peter - FigJam AI</title>
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
            <FadeInWrapper css={{ "--delay-num": 0 }}>
              <Card>
                <VideoContainer>
                  <CoverVideo loop autoPlay muted playsInline>
                    <source src="/video/figjamai.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </CoverVideo>
                </VideoContainer>
              </Card>
            </FadeInWrapper>
            <FadeInWrapper css={{ "--delay-num": 1 }}>
              <Title>FigJam AI</Title>
              <Description>
                Helped bring AI capabilities to FigJam. AI powered generation of
                templates and visuals, and summarization/clustering of stickies.
              </Description>
              <Link href="https://www.figma.com/blog/introducing-ai-to-figjam/">
                Blog
                <Image
                  src="/img/nav-arrow.svg"
                  alt="navigation-arrow"
                  width={12}
                  height={12}
                />
              </Link>
            </FadeInWrapper>
          </Section>
          <Section>
            <FadeInWrapper css={{ "--delay-num": 2 }}>
              <Subtitle>UI details</Subtitle>
              <HorizontalRule />
              <Description>
                <Link href="https://www.tash.work/">Natasha</Link> designed
                these subtle, but satisfying UI details that I fun opportunity
                to implement.
              </Description>
            </FadeInWrapper>

            <Grid>
              <GridOne>
                <FadeInWrapper css={{ "--delay-num": 3 }}>
                  <VideoEmbed>
                    <Video loop autoPlay muted playsInline>
                      <source src="/video/modal.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </Video>
                  </VideoEmbed>
                </FadeInWrapper>
                <FadeInWrapper css={{ "--delay-num": 5 }}>
                  <VideoEmbed>
                    <Video loop autoPlay muted playsInline>
                      <source src="/video/templates.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </Video>
                  </VideoEmbed>
                </FadeInWrapper>
              </GridOne>
              <GridTwo>
                <FadeInWrapper css={{ "--delay-num": 4 }}>
                  <VideoEmbed>
                    <Video loop autoPlay muted playsInline>
                      <source src="/video/shimmer.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </Video>
                  </VideoEmbed>
                </FadeInWrapper>
                <FadeInWrapper css={{ "--delay-num": 6 }}>
                  <VideoEmbed>
                    <Video loop autoPlay muted playsInline>
                      <source
                        src="/video/prompt-builder.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </Video>
                  </VideoEmbed>
                </FadeInWrapper>
              </GridTwo>
            </Grid>
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

const Video = styled("video", {
  height: "100%",
  width: "100%",
  borderRadius: "8px",
});

const VideoEmbed = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignContent: "center",
  flexWrap: "wrap",
  textAlign: "center",
  marginBottom: "8px",
  height: "auto",
  width: "inherit",
});

const Row = styled("div", {
  display: "flex",
  flexWrap: "wrap",
});

const Grid = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridTemplateRows: "repeat(2, 1fr)",
  gridColumnGap: "8px",
  gridRowGap: "0px",
});

const GridOne = styled("div", {
  gridArea: "1 / 1 / 3 / 2",
});

const GridTwo = styled("div", {
  gridArea: "1 / 2 / 3 / 3",
});
