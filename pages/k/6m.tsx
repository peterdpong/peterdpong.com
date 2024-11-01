import { keyframes, styled } from "@/stitches.config";
import Head from "next/head";
import DraggableImage from "@/components/DraggableImage";
import InsetBox from "@/components/InsetBox";
import Image from "next/image";

const SectionTitleWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "40vh",
});

const Subtitle = styled("h1", {
  fontFamily: "var(--newsreader)",
  fontWeight: 400,
  fontSize: "2rem",
  lineHeight: "1.1",
  color: "$white",
  textAlign: "center",
});

const Title = styled("h1", {
  fontFamily: "var(--newsreader)",
  fontWeight: 400,
  fontSize: "4rem",
  color: "$white",
});

const TitleWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
});

const MainWrapper = styled("div", {
  backgroundColor: "#BA274A",
  minHeight: "100vh",
  width: "100%",
});

const TextWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  maxWidth: "100%",
  textAlign: "center",
});

const Text = styled("p", {
  fontFamily: "var(--newsreader)",
  fontWeight: 300,
  fontSize: "1.15rem",
  color: "$white",
  maxWidth: "750px",
  padding: "1rem 0",
  lineHeight: "1.25",
});

const scaleIn = keyframes({
  "0%": { opacity: 0, transform: "scale(0) rotate(0deg)" },
  "100%": { opacity: 1, transform: "scale(1) rotate(var(--final-rotation))" },
});

const ImageWrapper = styled("div", {
  position: "absolute",
  border: "8px solid #FAFAFA",
  borderRadius: "8px",
  display: "flex",
  opacity: 0,
  transform: "scale(0)",
  animation: `${scaleIn} 0.6s ease forwards`,

  variants: {
    delay: {
      first: {
        animationDelay: "0.2s",
        "--final-rotation": "-8deg",
      },
      second: {
        animationDelay: "0.5s",
        "--final-rotation": "12deg",
      },
    },
  },
});

export default function SixMonths() {
  return (
    <>
      <Head>
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="title" content="Happy 6 months!" />

        <link rel="icon" href="./favicon.png" type="image/x-icon" />

        <title>Happy 6 months!</title>
      </Head>
      <MainWrapper>
        <TitleWrapper>
          <Subtitle
            css={{
              position: "relative",
              top: "-10vh",
            }}
          >
            {"To my baby"}
            <br />
            {"To my cute, pretty, smart, funny, and loving girlfriend"}
            <br />
            {"To the most perfect person in the world"}
            <br />
            {"To the love of my life"}
          </Subtitle>

          <Title css={{ transform: "rotate(-4deg)" }}>
            <i>Happy</i>
          </Title>
          <Title
            css={{
              transform: "rotate(-4deg)",
              position: "relative",
              top: "-12px",
            }}
          >
            <i>6 month</i>
          </Title>
          <Title
            css={{
              transform: "rotate(-4deg)",
              position: "relative",
              top: "-25px",
              left: "15px",
            }}
          >
            <i>anniversary!</i>
          </Title>
          <ImageWrapper
            css={{ left: "calc(25% - 150px)", top: "50%" }}
            delay="first"
          >
            <Image src={"/k/us1.png"} width={300} height={404} alt="us" />
          </ImageWrapper>
          <ImageWrapper
            css={{ right: "calc(25% - 150px)", top: "50%" }}
            delay="second"
          >
            <Image src={"/k/us2.png"} width={300} height={404} alt="us" />
          </ImageWrapper>
        </TitleWrapper>
        <SectionTitleWrapper>
          <Subtitle>
            {"I wanted to create this to recap our last"}
            <br />
            {"6 months together and all the happiness you bring into my life."}
          </Subtitle>
        </SectionTitleWrapper>

        <InsetBox title="Together for the first time in person">
          <DraggableImage
            src="/k/calgary/leia.png"
            width={300}
            height={404}
            alt="Leia"
            initialX={200}
            initialY={50}
            rotation={-4}
          />
          <DraggableImage
            src="/k/calgary/leia2.png"
            width={300}
            height={404}
            alt="Leia"
            initialX={335}
            initialY={330}
            rotation={4}
          />
          <DraggableImage
            src="/k/calgary/p+k+leia.png"
            width={300}
            height={404}
            alt="Leia"
            initialX={500}
            initialY={30}
            rotation={8}
          />
          <DraggableImage
            src="/k/calgary/llama.png"
            width={336}
            height={251.16666667}
            alt="Leia"
            initialX={650}
            initialY={420}
            rotation={-6}
          />
          <DraggableImage
            src="/k/calgary/p+k.png"
            width={300}
            height={404}
            alt="Leia"
            initialX={770}
            initialY={25}
            rotation={-10}
          />
        </InsetBox>
        <TextWrapper>
          <Text>
            {
              "Honestly, I was a little nervous to be in-person with you for the first time. I really didn't know what to expect. This disappeared so quickly, everything just felt so natural with you. I enjoyed every moment with you this trip and it was so hard to say goodbye."
            }
            <br />
            <br />
            {"p.s. I am so glad Leia liked me!"}
          </Text>
        </TextWrapper>
        <SectionTitleWrapper>
          <Title
            css={{
              transform: "rotate(-4deg)",
              position: "relative",
              top: "25px",
            }}
          >
            <i>You are the best thing.</i>
          </Title>
          <Title
            css={{
              transform: "rotate(-4deg)",
              position: "relative",
              top: "25px",
            }}
          >
            <i>that has ever happened to me</i>
          </Title>
        </SectionTitleWrapper>

        <InsetBox title="st. 🐈 + med school + living together">
          <DraggableImage
            src="/k/stcats/flowers.png"
            width={216}
            height={288}
            alt="Leia"
            initialX={100}
            initialY={115}
            rotation={-12}
          />
          <DraggableImage
            src="/k/stcats/polaroids.png"
            width={216}
            height={288}
            alt="Leia"
            initialX={280}
            initialY={125}
            rotation={8}
          />
          <DraggableImage
            src="/k/stcats/thumbsup.png"
            width={216}
            height={288}
            alt="Leia"
            initialX={175}
            initialY={340}
            rotation={-6}
          />
          <DraggableImage
            src="/k/stcats/coke.png"
            width={216}
            height={288}
            alt="Leia"
            initialX={345}
            initialY={410}
            rotation={14}
          />
          <DraggableImage
            src="/k/stcats/door.png"
            width={216}
            height={288}
            alt="Leia"
            initialX={460}
            initialY={180}
            rotation={-9}
          />
          <DraggableImage
            src="/k/stcats/food.png"
            width={216}
            height={288}
            alt="Leia"
            initialX={630}
            initialY={170}
            rotation={11}
          />
          <DraggableImage
            src="/k/stcats/icecream.png"
            width={216}
            height={288}
            alt="Leia"
            initialX={575}
            initialY={360}
            rotation={-10}
          />
          <DraggableImage
            src="/k/stcats/shoes.png"
            width={216}
            height={288}
            alt="Leia"
            initialX={775}
            initialY={275}
            rotation={16}
          />
        </InsetBox>
        <TextWrapper>
          <Text>
            {
              "I'm really so glad I booked this trip to be with you after your move to st. 🐈 and the starting of your med school. I really was so sad when my initial flight got cancelled, but it worked out at the end! I had such a great time living with you and exploring the city together. Living and being together with you feels so natural and I wish everyday that we would be in the same place."
            }
            <br />
            <br />
            {"this was the start of my coke zero addiction"}
          </Text>
        </TextWrapper>
        <SectionTitleWrapper>
          <Title css={{ transform: "rotate(2deg)" }}>
            <i>I am so happy you are in my life.</i>
          </Title>
        </SectionTitleWrapper>

        <SectionTitleWrapper>
          <Title
            css={{
              transform: "rotate(-4deg)",
              position: "relative",
              top: "25px",
            }}
          >
            <i>The last 6 months.</i>
          </Title>
          <Title
            css={{
              transform: "rotate(-4deg)",
              position: "relative",
              top: "25px",
            }}
          >
            <i>have been the best of my life.</i>
          </Title>
        </SectionTitleWrapper>
      </MainWrapper>
    </>
  );
}
