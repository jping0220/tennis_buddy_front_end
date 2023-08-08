import Ping_Laura from "../assets/Ping_Laura.jpg";
import Card from "react-bootstrap/Card";


export const AboutUs = () => {
  return (
    <div className="about-us-container">
      <Card style={{ width: "30rem" }}>
        <Card.Img variant="top" src={Ping_Laura} />
        <Card.Body>
          <Card.Title>About Us</Card.Title>
          <Card.Text>
            <p>
              Welcome to Tennis Buddy, your ultimate destination for connecting
              tennis enthusiasts and finding the perfect tennis partner for
              singles, doubles, or simply a casual match to enjoy the sport we
              all love. The website was created by <a href="https://www.linkedin.com/in/jiaping-chen/">Jiaping Chen</a> and <a href="https://www.linkedin.com/in/laura-emilia-perez/">Laura Pérez</a> for
              their capstone project at  <a href="https://adadevelopersacademy.org/">Ada Developers Academy</a>.
              Code for this project can be viewed on <a href ="https://github.com/jping0220/tennis_buddy_front_end">Github</a>.
            </p>
            <p>
              Founded with a passion for tennis and a desire to foster a vibrant
              community of players, Tennis Buddy is dedicated to making your
              tennis experience more enjoyable and accessible. The website was
              created by Ping Jiaping and Laura Perez for their capstone
              project at Ada Developers Academy. Code for this project can be
              viewed on Github.
            </p>
            <p>
              Whether you're a seasoned player looking for challenging matches
              or a beginner seeking friendly companionship on the court, our
              platform offers a seamless way to connect with like-minded
              individuals.
            </p>
            <p>
              Join us in our mission to bring tennis lovers together, create
              lasting friendships, and strengthen the tennis community one match
              at a time. Let's ace the game together with Tennis Buddy!
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

