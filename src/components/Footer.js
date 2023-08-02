import Button from "react-bootstrap/Button";
import { Card, Container } from "react-bootstrap";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

  
function Footer() {
  return (
    <Card className="footer-text-center">
      {/* <Card.Header>Featured</Card.Header> */}
      {/* <Card.Body> */}
      <Card.Title>Tennis Buddy</Card.Title>
      <Card.Text>
        &copy; All rights reserved. {new Date().getFullYear()}{" "}
      </Card.Text>
      {/* </Card.Body> */}
      {/* <Card.Footer> */}
      {/* {new Date().getFullYear()} */}
      {/* </Card.Footer>  */}
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} size="lg" />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>
      </div>
    </Card>
  );
}

  

export default Footer;

