import Button from "react-bootstrap/Button";
import { Card, Container } from "react-bootstrap";
import "../App.css";
  
function Footer() {
  return (
    <Card className="footer-text-center">
      {/* <Card.Header>Featured</Card.Header> */}
      {/* <Card.Body> */}
        <Card.Title>Tennis Buddy</Card.Title>
        <Card.Text>&copy; All rights reserved. {new Date().getFullYear()} </Card.Text>
      {/* </Card.Body> */}
      {/* <Card.Footer>
        {new Date().getFullYear()}
      </Card.Footer> */}
    </Card>
  );
}

  

export default Footer;

