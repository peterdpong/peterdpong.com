import { styled } from "@/stitches.config";

export const Footer = () => {
  return (
    <FooterDiv>
      <Wrapper>
        <FooterContainer>
          <FooterText>NYC / Toronto</FooterText>
          <FooterText>{new Date().getUTCFullYear()}</FooterText>
          <FooterSocials>
            <a href="https://twitter.com/peterdpong" aria-label="Twitter Logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                viewBox="0 0 248 204"
              >
                <path
                  fill="#8d8d8d"
                  d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07 7.57 1.46 15.37 1.16 22.8-.87-23.56-4.76-40.51-25.46-40.51-49.5v-.64c7.02 3.91 14.88 6.08 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71c25.64 31.55 63.47 50.73 104.08 52.76-4.07-17.54 1.49-35.92 14.61-48.25 20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26-3.77 11.69-11.66 21.62-22.2 27.93 10.01-1.18 19.79-3.86 29-7.95-6.78 10.16-15.32 19.01-25.2 26.16z"
                />
              </svg>
            </a>
            <a
              href="https://www.github.com/peterdpong"
              aria-label="GitHub Logo"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                viewBox="0 0 1024 1024"
                fill="none"
              >
                <path
                  fill="#8d8d8d"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                  transform="scale(64)"
                />
              </svg>
            </a>
          </FooterSocials>
        </FooterContainer>
      </Wrapper>
    </FooterDiv>
  );
};

const FooterDiv = styled("div", {
  width: "100%",
  height: "2.5rem",
  borderTop: "2px solid #2b2b2b",
  paddingTop: "4px",
  position: "absolute",
  bottom: 0,
});

const FooterContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "0px 0.5rem",
});

const FooterText = styled("div", {
  fontFamily: "var(--dm-sans)",
  fontWeight: 400,
  fontSize: "1rem",
  color: "$gray11",
  margin: "8px 0px",
});

const FooterSocials = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "16px",
});

const Wrapper = styled("div", {
  width: "100%",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  maxWidth: "40rem",
});
