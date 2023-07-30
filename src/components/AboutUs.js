import Ping_Laura from "../assets/Ping_Laura.jpg";
import Card from "react-bootstrap/Card";


export const AboutUs = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={Ping_Laura} />
      <Card.Body>
        <Card.Title>Ping and Laura</Card.Title>
        <Card.Text>
          We have problem , we wanted play tennis! and we decided to solve
          together.
        </Card.Text>
        
        
      </Card.Body>
    </Card>
    // </div>
  );
};

