import { FadeInWrapper } from "@/components/FadeInWrapper";
import { Footer } from "@/components/Footer";
import { Link } from "@/components/Link";
import { Row } from "@/components/Row";
import { Section } from "@/components/Section";
import { Title, Description, SectionTitle } from "@/components/Typography";
import { ContentWrapper, PageWrapper } from "@/components/Wrappers";
import Head from "next/head";
import Image from "next/image";

export default function Notes() {
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
          content="https://peterdpong.me/img/preview-img.png"
        />
        <meta
          property="twitter:description"
          content="Computer Engineering at the University of Toronto and an incoming Software Engineer at Figma."
        />
        <meta property="twitter:url" content="https://peterdpong.me" />

        <meta name="title" content="Peter Damrongpiriyapong" />
        <meta
          property="og:image"
          content="https://peterdpong.me/img/preview-img.png"
        />
        <meta
          property="description"
          content="A place for me to document any of my learnings and thoughts"
        />
        <meta
          property="og:description"
          content="A place for me to document any of my learnings and thoughts"
        />
        <meta property="og:url" content="https://peterdpong.me" />

        <link rel="icon" href="./favicon.png" type="image/x-icon" />

        <title>Peter Damrongpiriyapong</title>
      </Head>
      <PageWrapper>
        <ContentWrapper>
          <Section>
            <FadeInWrapper css={{ "--delay-num": 4 }}>
              <Row>
                <Link href="/">
                  Back to Index
                  <Image
                    src="img/nav-arrow.svg"
                    alt="navigation-arrow"
                    width={12}
                    height={12}
                  />
                </Link>
                <Link href="/playground">
                  Playground
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
              <Title>Notes and thoughts</Title>
            </FadeInWrapper>
            <FadeInWrapper css={{ "--delay-num": 1 }}>
              <Description>
                A place for me to document any of my learnings and thoughts.
              </Description>
            </FadeInWrapper>
          </Section>
          <Section>
            <FadeInWrapper css={{ "--delay-num": 2 }}>
              <SectionTitle>2023</SectionTitle>
              <Description>Nothing yet...</Description>
            </FadeInWrapper>
          </Section>
        </ContentWrapper>
        <Footer />
      </PageWrapper>
    </>
  );
}
