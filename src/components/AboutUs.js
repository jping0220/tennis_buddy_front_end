import Ping_Laura from "../assets/Ping_Laura.jpg";
import Card from "react-bootstrap/Card";


export const AboutUs = () => {
  return (
    <div className="about-us-container">
      <Card style={{ width: "30rem" }}>
        <Card.Img variant="top" src={Ping_Laura} />
        <Card.Body>
          <Card.Title>Ping and Laura</Card.Title>
          <Card.Text>
            Welcome to Tennis Buddy, your ultimate destination for connecting tennis enthusiasts and finding the perfect tennis partner for singles, doubles, or simply a casual match to enjoy the sport we all love.
            Founded with a passion for tennis and a desire to foster a vibrant community of players, Tennis Buddy is dedicated to making your tennis experience more enjoyable and accessible.
            Whether you're a seasoned player looking for challenging matches or a beginner seeking friendly companionship on the court, our platform offers a seamless way to connect with like-minded individuals.
            Join us in our mission to bring tennis lovers together, create lasting friendships, and strengthen the tennis community one match at a time. Let's ace the game together with Tennis Buddy!
          </Card.Text>   
        </Card.Body>
      </Card>
    </div>
  );
};

