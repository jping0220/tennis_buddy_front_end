import Button from "react-bootstrap/Button";
import { Card, Container } from "react-bootstrap";
import "../App.css";
  
function Footer() {
  return (
    <Card className="text-center">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Tennis Buddy</Card.Title>
        <Card.Text>&copy; All rights reserved. </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
      <Card.Footer className="text-muted">
        {new Date().getFullYear()}
      </Card.Footer>
    </Card>
  );
}

  

export default Footer;

