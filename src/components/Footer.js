import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
     <Container>
            <div className="social-icon">
              <a href="www.linkedin.com/in/rudransh-pathak"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/rudranshpathak-hub"><img src={navIcon2} alt="Icon" /></a>
              <a href="mailto:rudranshpathak007@gmail.com"><img src={navIcon3} alt="Icon" /></a>
            </div>
      </Container>

    </footer>
  )
}
