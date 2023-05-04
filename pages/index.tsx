import { FadeInWrapper } from "@/components/FadeInWrapper";
import { Footer } from "@/components/Footer";
import { Link } from "@/components/Link";
import { Row } from "@/components/Row";
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
          content="Peter Damrongpiriyapong - Computer Engineering at the University of Toronto and an incoming Software Engineer at Figma."
        />
        <meta property="twitter:url" content="https://peterdpong.me" />

        <meta name="title" content="Peter Damrongpiriyapong" />
        <meta
          property="og:image"
          content="https://peterdpong.me/img/preview-img.png"
        />
        <meta
          name="description"
          content="Peter Damrongpiriyapong - Computer Engineering at the University of Toronto and an incoming Software Engineer at Figma."
        ></meta>
        <meta
          property="description"
          content="Peter Damrongpiriyapong - Computer Engineering at the University of Toronto and an incoming Software Engineer at Figma."
        />
        <meta
          property="og:description"
          content="Peter Damrongpiriyapong - Computer Engineering at the University of Toronto and an incoming Software Engineer at Figma."
        />
        <meta property="og:url" content="https://peterdpong.me" />

        <link rel="icon" href="./favicon.png" type="image/x-icon" />

        <title>Peter Damrongpiriyapong</title>
      </Head>
      <PageWrapper>
        <ContentWrapper>
          <Section>
            <FadeInWrapper css={{ "--delay-num": 0 }}>
              <Title>Peter Damrongpiriyapong</Title>
            </FadeInWrapper>
            <FadeInWrapper css={{ "--delay-num": 1 }}>
              <Row>
                <Link href="/playground">
                  Playground
                  <Image
                    src="img/nav-arrow.svg"
                    alt="navigation-arrow"
                    width={12}
                    height={12}
                  />
                </Link>
                <Link href="/notes">
                  Notes
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
          <Section>
            <FadeInWrapper css={{ "--delay-num": 2 }}>
              <Description>
                Hello! I am an engineer who enjoys building helpful, delightful
                software that people find useful! Areas I am interested in are
                computer graphics, mobile/web development, video game
                development, software for personal finance, and multiplayer
                experiences.
              </Description>
            </FadeInWrapper>
            <FadeInWrapper css={{ "--delay-num": 3 }}>
              <Description>
                Currently, I am an incoming Software Engineer at{" "}
                <Link href="https://www.figma.com/">Figma</Link>. I recently
                graduated from the University of Toronto studying Computer
                Engineering.
              </Description>
            </FadeInWrapper>
            <FadeInWrapper css={{ "--delay-num": 4 }}>
              <Description>
                Previously, I was an intern at Figma helping build{" "}
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
                <Link href="resume/Resume.pdf">
                  Resume
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
          <Section>
            <FadeInWrapper css={{ "--delay-num": 6 }}>
              <SectionTitle>Work</SectionTitle>
            </FadeInWrapper>
            <FadeInWrapper css={{ "--delay-num": 7 }}>
              <Item>
                <div>
                  <a href="https://www.figma.com/">
                    <Icon
                      style={{ backgroundColor: "#1e1e1e" }}
                      src="./img/figma.svg"
                      alt="Figma Logo"
                    />
                    <IconHoverEffect
                      src="./img/figma.svg"
                      alt="Faded and Blurred Figma Logo"
                    />
                  </a>
                </div>
                <ItemContent>
                  <Row>
                    <ItemTitle>Figma</ItemTitle>
                    <Pill>2022</Pill>
                  </Row>
                  <ItemSubtitle>
                    FigJam, Software Engineering Intern
                  </ItemSubtitle>
                  <ItemSubtitle>
                    <Link href="https://twitter.com/peterdpong/status/1584947821509476352?s=20">
                      Markdown
                      <Image
                        src="img/nav-arrow.svg"
                        alt="navigation-arrow"
                        width={12}
                        height={12}
                      />
                    </Link>{" "}
                    and{" "}
                    <Link href="https://www.figma.com/blog/little-big-updates-august-2022/">
                      Quick Create Placement
                      <Image
                        src="img/nav-arrow.svg"
                        alt="navigation-arrow"
                        width={12}
                        height={12}
                      />
                    </Link>
                  </ItemSubtitle>
                  <Row>
                    <Pill>C++</Pill>
                    <Pill>TypeScript</Pill>
                    <Pill>React</Pill>
                  </Row>
                </ItemContent>
              </Item>
            </FadeInWrapper>
            <FadeInWrapper css={{ "--delay-num": 8 }}>
              <Item>
                <div>
                  <a href="https://www.utoronto.ca/">
                    <Icon
                      style={{ backgroundColor: "#00234b" }}
                      src="./img/uoft.svg"
                      alt="University of Toronto Logo"
                    />
                    <IconHoverEffect
                      src="./img/uoft.svg"
                      alt="Faded and Blurred University of Toronto Logo"
                    />
                  </a>
                </div>
                <ItemContent>
                  <Row>
                    <ItemTitle>University of Toronto</ItemTitle>
                    <Pill>2022</Pill>
                  </Row>
                  <ItemSubtitle>Teaching Assistant</ItemSubtitle>
                  <ItemSubtitle>
                    ECE297: Software Design and Communication
                  </ItemSubtitle>
                </ItemContent>
              </Item>
            </FadeInWrapper>
            <FadeInWrapper css={{ "--delay-num": 9 }}>
              <Item>
                <div>
                  <a href="https://www.prodigygame.com/">
                    <Icon
                      style={{ backgroundColor: "#ebebeb" }}
                      src="./img/prodigy.svg"
                      alt="Prodigy Logo"
                    />
                    <IconHoverEffect
                      src="./img/prodigy.svg"
                      alt="Faded and Blurred Prodigy Logo"
                    />
                  </a>
                </div>
                <ItemContent>
                  <Row>
                    <ItemTitle>Prodigy</ItemTitle>
                    <Pill>2021</Pill>
                  </Row>
                  <ItemSubtitle>
                    Game Platform, Game Developer Intern
                  </ItemSubtitle>
                  <Row>
                    <Pill>TypeScript</Pill>
                    <Pill>Electron</Pill>
                    <Pill>React</Pill>
                    <Pill>Redux</Pill>
                  </Row>
                </ItemContent>
              </Item>
            </FadeInWrapper>
          </Section>
          <Section>
            <FadeInWrapper css={{ "--delay-num": 10 }}>
              <SectionTitle>Education</SectionTitle>
            </FadeInWrapper>
            <FadeInWrapper css={{ "--delay-num": 11 }}>
              <Item>
                <div>
                  <a href="https://www.utoronto.ca/">
                    <Icon
                      style={{ backgroundColor: "#00234b" }}
                      src="./img/uoft.svg"
                      alt="University of Toronto Logo"
                    />
                    <IconHoverEffect
                      src="./img/uoft.svg"
                      alt="Faded and Blurred University of Toronto Logo"
                    />
                  </a>
                </div>
                <ItemContent>
                  <Row>
                    <ItemTitle>University of Toronto</ItemTitle>
                    <Pill>2019 - 2023</Pill>
                  </Row>
                  <ItemSubtitle>
                    Computer Engineering, Bachelors of Applied Science
                  </ItemSubtitle>
                  <ItemSubtitle>Dean&apos;s Honour List</ItemSubtitle>
                </ItemContent>
              </Item>
            </FadeInWrapper>
          </Section>
          <Section>
            <FadeInWrapper css={{ "--delay-num": 12 }}>
              <SectionTitle>Projects</SectionTitle>
            </FadeInWrapper>
            <FadeInWrapper css={{ "--delay-num": 13 }}>
              <Item>
                <ItemContent>
                  <ItemTitle>Studydesk</ItemTitle>
                  <ItemSubtitle>A home for your studying.</ItemSubtitle>
                </ItemContent>
              </Item>
            </FadeInWrapper>
            <FadeInWrapper css={{ "--delay-num": 14 }}>
              <Item>
                <ItemContent>
                  <Link href="https://www.figma.com/community/widget/1109318554624490060/Color-Swatch">
                    <ItemTitle>
                      Color Swatch
                      <Image
                        src="img/nav-arrow.svg"
                        alt="navigation-arrow"
                        width={12}
                        height={12}
                      />
                    </ItemTitle>
                  </Link>
                  <ItemSubtitle>
                    A Color Swatch Widget for FigJam and Figma
                  </ItemSubtitle>
                </ItemContent>
              </Item>
            </FadeInWrapper>
            <FadeInWrapper css={{ "--delay-num": 15 }}>
              <Item>
                <ItemContent>
                  <Link href="https://github.com/peterdpong/checked-android">
                    <ItemTitle>
                      Checked
                      <Image
                        src="img/nav-arrow.svg"
                        alt="navigation-arrow"
                        width={12}
                        height={12}
                      />
                    </ItemTitle>
                  </Link>
                  <ItemSubtitle>
                    A Minimalistic Android To-do app written in Kotlin
                  </ItemSubtitle>
                </ItemContent>
              </Item>
            </FadeInWrapper>
          </Section>
        </ContentWrapper>
        <Footer />
      </PageWrapper>
    </>
  );
}

const Item = styled("div", {
  marginBottom: "16px",
  display: "flex",
  alignItems: "center",
  gap: "18px",
});

const ItemContent = styled("div", {
  height: "100%",
  display: "flex",
  gap: "2px",
  flexDirection: "column",
});

const Icon = styled("img", {
  height: "32px",
  width: "32px",
  borderRadius: "5px",
  padding: "6px",
});

const IconHoverEffect = styled("img", {
  position: "absolute",
  left: 0,
  opacity: 0,
  zIndex: 1,
  height: "32px",
  width: "32px",
  padding: "6px",
  transform: "scale(1.25)",
  transition: "all 0.5s ease-in-out",
  "&:hover": {
    opacity: 0.75,
    filter: "blur(5px)",
  },
});

const Pill = styled("div", {
  fontFamily: "var(--dm-sans)",
  fontWeight: 400,
  fontSize: "0.9rem",
  color: "$gray11",
  backgroundColor: "$gray4",
  padding: "2px 6px",
  margin: "2px 0px",
  borderRadius: "5px",
});
