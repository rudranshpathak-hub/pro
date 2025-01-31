import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import projImg10 from "../assets/img/project-img10.png";
import projImg11 from "../assets/img/project-img11.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const aiProjects = [
      {
        title: "Legal Doc NLP",
        description: "AI-based document summarization",
        imgUrl: projImg1,
        details: "This project leverages NLP techniques to extract key insights from legal documents, providing structured summaries and improving accessibility."
      },
      {
        title: "Hand Gesture Cursor",
        description: "AI-powered cursor movement",
        imgUrl: projImg2,
        details: "A deep learning model that allows users to control the cursor using hand gestures, designed to assist individuals with motor impairments."
      },
      {
        title: "Calm-Dev",
        description: "AI therapy chatbot",
        imgUrl: projImg3,
        details: "An intelligent chatbot that provides personalized mental health support, tracks user moods, and adapts to individual needs using AI."
      },
      {
        title: "Text Editing Using Hand Gestures",
        description: "AI-powered text editing",
        imgUrl: projImg4,
        details: "This project enables users to edit text using hand gestures, improving accessibility for individuals with motor disabilities."
      }
  ];

  const webApps = [
      {
        title: "Indian Constitution App",
        description: "Gamified learning platform",
        imgUrl: projImg5,
        details: "An app that simplifies the Indian Constitution with gamified quizzes and multilingual support, making legal knowledge more accessible."
      },
      {
        title: "Student Skill Tracker",
        description: "AI-powered progress tracking",
        imgUrl: projImg6,
        details: "A web app that helps students track their learning progress, set goals, and receive AI-based recommendations for improvement."
      },
      {
        title: "Freelancer Connect",
        description: "Freelancer marketplace",
        imgUrl: projImg7,
        details: "A platform connecting freelancers with potential clients, offering AI-driven job recommendations and secure transactions."
      }
  ];

  const blockchainProjects = [
    {
      title: "Manga NFT",
      description: "Blockchain-based NFT marketplace",
      imgUrl: projImg8,
      details: "A Web3-based NFT platform for minting, selling, and trading digital manga artwork.",
    },
      {
        title: "Blockchain-Based Voting System",
        description: "Secure online voting",
        imgUrl: projImg9,
        details: "A decentralized and secure online voting system using blockchain technology to ensure transparency and fraud prevention."
      },
      {
        title: "Supply Chain Transparency",
        description: "Blockchain-powered tracking",
        imgUrl: projImg10,
        details: "A system that ensures authenticity in supply chains by leveraging blockchain to track products from origin to consumer."
      },
      {
        title: "Decentralized Identity Management",
        description: "Self-sovereign identity",
        imgUrl: projImg11,
        details: "A blockchain-based identity system that gives users full control over their digital identities, reducing fraud and improving security."
      }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Explore my projects in AI, NLP, Web Development, and Blockchain. Each one is built with precision, innovation, and a relentless drive to solve real-world problems.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="ai-nlp">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="ai-nlp">AI & NLP</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="web-apps">Web & Apps</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="blockchain">Blockchain</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    
                    {/* AI & NLP Projects */}
                    <Tab.Pane eventKey="ai-nlp">
                      <Row>
                        {aiProjects.map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                      </Row>
                    </Tab.Pane>

                    {/* Web & Apps Projects */}
                    <Tab.Pane eventKey="web-apps">
                      <Row>
                        {webApps.map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                      </Row>
                    </Tab.Pane>

                    {/* Blockchain Projects */}
                    <Tab.Pane eventKey="blockchain">
                      <Row>
                        {blockchainProjects.map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                      </Row>
                    </Tab.Pane>

                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
}
