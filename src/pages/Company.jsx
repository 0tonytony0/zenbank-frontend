import styled, { keyframes } from 'styled-components';


const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-40px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Container = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
  color: #2d3748;
`;

const Header = styled.div` 
  background: linear-gradient(
      135deg,
      rgba(79, 172, 254, 0.2) 0%,
      rgba(142, 68, 173, 0.2) 100%
    ); /* Gradient overlay */
  backdrop-filter: blur(14px); /* Glassmorphism blur */
  -webkit-backdrop-filter: blur(14px);
  border-radius: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.15); /* Subtle border for glass effect */
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);

  padding: 3rem 1rem;
  text-align: left;
  margin-bottom: 4rem;
  animation: ${fadeInUp} 0.8s ease forwards;

  /* Typography */
  h1, h2, h3 {
    color: #ffffff; /* White headings */
  }

  p, span, small {
    color: #b0b8c4; /* Light gray body text */
  }
`;



const Section = styled.section`
  background: ${(props) => props.bg || 'white'};
  border-left: ${(props) => props.border || 'none'};
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: ${(props) => (props.shadow ? '0 2px 8px rgba(0,0,0,0.05)' : 'none')};
  margin-bottom: 2rem;
  opacity: 0; /* Start hidden */
  animation: ${fadeInUp} 0.8s ease forwards;
  animation-delay: ${(props) => props.delay || '0s'};
`;

const SubHeading = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${(props) => props.color || '#0ea5e9'};
`;

const List = styled.ul`
  list-style: disc;
  padding-left: 1.25rem;
  line-height: 1.7;
`;

const ContactLink = styled.a`
  color: #4f46e5;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const ContentWrapper = styled.div`
  animation: ${slideInLeft} 0.8s ease-out forwards;
`;


const Company = () => {
  return (
    <Container>
      <Header className="px-4 py-6 md:px-10 md:py-15 ">
        <ContentWrapper>
          <h1 style={{ color: '#0ea5e9' }}>About Syzyky</h1>
          <p style={{ color: "white" }} className="text-sm md:text-base text-gray-700 leading-relaxed">
            <strong>Syzyky</strong> is a modern AI-driven platform helping
            users and developers integrate intelligent features into their websites and apps seamlessly.
            We specialize in chatbots, image generation, and automation tools using OpenAI’s APIs.
          </p>
        </ContentWrapper>
      </Header>


      <Section border="4px solid #7dd3fc"
        style={{
          background: `linear-gradient(
      135deg,
      rgba(79, 172, 254, 0.2) 0%,
      rgba(142, 68, 173, 0.2) 100%
    )`,
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          borderRadius: "1rem",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
          color: "white"
        }}
        shadow
        delay="0.4s"
      >
        <SubHeading color="#0ea5e9">🚀 Mission</SubHeading>
        <p>
          To simplify AI adoption by providing powerful, accessible tools that enhance productivity
          and creativity across industries.
        </p>
      </Section>


      <Section border="4px solid #7dd3fc"
        style={{
          background: `linear-gradient(
      135deg,
      rgba(79, 172, 254, 0.2) 0%,
      rgba(142, 68, 173, 0.2) 100%
    )`,
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          borderRadius: "1rem",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
          color: "white"
        }}
        shadow
        delay="0.4s"
      >
        <SubHeading color="#0ea5e9">🌟 Vision</SubHeading>
        <p>
          To become a leading platform for AI-powered digital transformation in both consumer and
          enterprise domains.
        </p>
      </Section>

      <Section
        style={{
          background: `linear-gradient(
      135deg,
      rgba(79, 172, 254, 0.2) 0%,
      rgba(142, 68, 173, 0.2) 100%
    )`,
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          borderRadius: "1rem",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
          color: "white"
        }}
        shadow
        delay="0.4s"
      >
        <SubHeading>💻 Technologies We Use</SubHeading>
        <ContentWrapper>
          <List>
            <li>React.js, Node.js, MongoDB</li>
            <li>OpenAI API</li>
            <li>Stripe / Payments</li>
            <li>Tailwind CSS</li>
            <li>Deployed on Vercel / Netlify</li>
          </List>
        </ContentWrapper>
      </Section>

      <Section
        style={{
          background: `linear-gradient(
      135deg,
      rgba(79, 172, 254, 0.2) 0%,
      rgba(142, 68, 173, 0.2) 100%
    )`,
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          borderRadius: "1rem",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
          color: "white"
        }}
        shadow
        delay="0.4s"
      >
        <SubHeading>🌍 Industries We Serve</SubHeading>
        <ContentWrapper>
          <List>
            <li>Customer Support Chatbots</li>
            <li>AI Assistants for Portfolios & Blogs</li>
            <li>E-commerce Product Suggestions</li>
            <li>Content/Image Generation for Creators</li>
          </List>
        </ContentWrapper>
      </Section>

      <Section border="4px solid #7dd3fc"
        style={{
          background: `linear-gradient(
      135deg,
      rgba(79, 172, 254, 0.2) 0%,
      rgba(142, 68, 173, 0.2) 100%
    )`,
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          borderRadius: "1rem",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
          color: "white"
        }}
        shadow
        delay="0.4s"
      >
        <SubHeading color="#0ea5e9">👨‍💻 Founder</SubHeading>
        <p>
          <strong>Nikhil Verma</strong> — Full Stack Developer & AI Enthusiast. Experienced with MERN,
          AI integration, and scalable product development. Passionate about building tools that
          combine tech and creativity.
        </p>
      </Section>

      <Section
        style={{
          background: `linear-gradient(
      135deg,
      rgba(79, 172, 254, 0.2) 0%,
      rgba(142, 68, 173, 0.2) 100%
    )`,
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          borderRadius: "1rem",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
          color: "white"
        }}
        shadow
        delay="0.4s"
      >
        <ContentWrapper>
          <SubHeading>🕒 Timeline</SubHeading>
          <List>
            <li>🛠️ Idea conceptualized – Jan 2024</li>
            <li>🚀 MVP launched – March 2024</li>
            <li>🌐 Public Beta – July 2024</li>
          </List>
        </ContentWrapper>
      </Section>

      <Section
        style={{
          background: `linear-gradient(
      135deg,
      rgba(79, 172, 254, 0.2) 0%,
      rgba(142, 68, 173, 0.2) 100%
    )`,
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          borderRadius: "1rem",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
          color: "white"
        }}
        shadow
        delay="0.4s"
      >
        <ContentWrapper>
          <SubHeading>📬 Contact</SubHeading>
          <p>
            Email:{" "}
            <ContactLink href="mailto:contact@ai-key.io">contact@syzyky.io</ContactLink>
          </p>
          <p>
            LinkedIn:{" "}
            <ContactLink href="https://www.linkedin.com/in/nikhilverma6/">
              /syzyky
            </ContactLink>
          </p>
        </ContentWrapper>
      </Section>
    </Container>
  );
};

export default Company;
