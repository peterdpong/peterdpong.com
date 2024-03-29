import { FadeInWrapper } from "@/components/FadeInWrapper";
import { Footer } from "@/components/Footer";
import { Link } from "@/components/Link";
import { Section } from "@/components/Section";
import {
  Description,
  ItemSubtitle,
  ItemTitle,
  SectionTitle,
  Title,
} from "@/components/Typography";
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
              <YearDiv>
                <YearTitle>2023</YearTitle>
              </YearDiv>
              <Card>
                <ItemTitle>FigJam AI</ItemTitle>
                <Description>
                  Helped bring AI capabilities to FigJam. AI powered generation
                  of templates and visuals, and summarization/clustering of
                  stickies.
                </Description>
                <Image
                  src="/gif/figjam_ai.gif"
                  alt="Gif of FigJam AI"
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "350px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />

                {/* <Link href="work/figjam-ai">
                  <ItemTitle>
                    FigJam AI
                    <Image
                      src="img/nav-arrow.svg"
                      alt="navigation-arrow"
                      width={12}
                      height={12}
                    />
                  </ItemTitle>
                </Link> */}
              </Card>
              <ItemSubtitle></ItemSubtitle>
            </FadeInWrapper>
          </Section>
          <Section>
            <FadeInWrapper css={{ "--delay-num": 2 }}>
              <YearDiv>
                <YearTitle>2022</YearTitle>
              </YearDiv>
              <Column>
                <Card>
                  <ItemTitle>Markdown in FigJam</ItemTitle>
                  <Description>
                    Adding Markdown support for text, improving text formatting
                    in FigJam.
                  </Description>
                  <Image
                    src="/gif/figjam_markdown.gif"
                    alt="Gif of FigJam AI"
                    width="0"
                    height="0"
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "350px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />

                  {/* <Link href="/work/markdown">
                    <ItemTitle>
                      Markdown in FigJam
                      <Image
                        src="img/nav-arrow.svg"
                        alt="navigation-arrow"
                        width={12}
                        height={12}
                      />
                    </ItemTitle>
                  </Link> */}
                </Card>

                <Card>
                  <ItemTitle>Quick Create Improvements</ItemTitle>
                  <Description>
                    Smart content aware quick create placement for a better
                    diagramming experience in FigJam.
                  </Description>
                  <Image
                    src="/gif/figjam_quickadd.gif"
                    alt="Gif of FigJam AI"
                    width="0"
                    height="0"
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "500px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />

                  {/* <Link href="/work/quick-create">
                    <ItemTitle>
                      Quick Create Improvements
                      <Image
                        src="img/nav-arrow.svg"
                        alt="navigation-arrow"
                        width={12}
                        height={12}
                      />
                    </ItemTitle>
                  </Link> */}
                </Card>
              </Column>
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

const Row = styled("div", {
  display: "flex",
  flexWrap: "wrap",
});

const Column = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

const YearTitle = styled("h1", {
  fontFamily: "var(--dm-sans)",
  fontWeight: 500,
  fontSize: "1.25rem",
  color: "$white",
});

const YearDiv = styled("div", {
  display: "flex",
  justifyContent: "center",
  margin: "5px",
});
