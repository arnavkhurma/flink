import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "./gridcard.css";

// Import your images
import user1 from '../images/GraceHopper.webp';
import user2 from '../images/JohnsonWIT.webp';

function GridExample() {
  // State variables for date picker
  const [cardStates, setCardStates] = useState([
    {
      name: 'Grace Hopper Celebration',
      role: 'The Grace Hopper Celebration was co-founded by Dr. Anita Borg and Dr. Telle Whitney in 1994 and is now the world’s “largest gathering of women technologists,” according to the event website. The conference is named after Admirable Grace Murray Hopper, who is considered the one of the first computer programmers — her work is directly responsible for the development of COBOL.',
      picture: user1,
      startDate: new Date(),
      showDatePicker: false,
      buttonPosition: { x: 0, y: 0 },
    },
    {
      name: 'Johnson Women in Technology (JWiT) Conference',
      role: 'The Johnson Women in Technology (JWiT) Conference is “committed to taking action and driving the national dialogue around advancing opportunities in technology for women,” according to the event website. The conference helps bring together women MBAs, industry leaders and advocates to engage, connect and inspire and to foster a community of “leaders and allies” who will help drive women forward in the tech industry. The 2021 conference is still TBD — date and location have not yet been announced, but it is slated to take place in the spring.',
      picture: user2,
      startDate: new Date(),
      showDatePicker: false,
      buttonPosition: { x: 0, y: 0 },
    },
  ]);

  // Function to handle date change
  const handleChange = (date, index) => {
    const newCardStates = [...cardStates];
    newCardStates[index].startDate = date;
    setCardStates(newCardStates);
  };

  // Function to open date picker
  const handleOpenDatePicker = (event, index) => {
    const newCardStates = [...cardStates];
    newCardStates[index].buttonPosition = {
      x: event.target.offsetLeft,
      y: event.target.offsetTop + event.target.offsetHeight + 7
    };
    newCardStates[index].showDatePicker = true;
    setCardStates(newCardStates);
  };

  // Function to close date picker
  const handleCloseDatePicker = (index) => {
    const newCardStates = [...cardStates];
    newCardStates[index].showDatePicker = false;
    setCardStates(newCardStates);
    handleSendMessage();
    console.log("meeting booked");
  };

  // Function to handle booking a meeting
  const handleBookMeeting = (index) => {
    handleCloseDatePicker(index); // Close the date picker after booking
    handleSendMessage();
  };

  // Function to handle sending a message
  const handleSendMessage = () => {
    window.open('https://ghc.anitab.org/');
  };

  return (
    <div className="centered">
      <section className="cards-2">
        {cardStates.map((cardState, index) => (
          <Card key={index} border="dark" className="custom-card-2" style={{ marginLeft: index > 0 ? '40px' : '0', maxWidth: '48%' }}>
            <div className="row">
              <div className="col-md-3">
                {/* Image goes here */}
                <img src={cardState.picture} alt="Profile" style={{ padding: '0px', maxHeight: '140px', maxWidth: '170px', borderRadius: '20%' }} />
              </div>
              <div className="col-md-9">
                <Card.Body style={{ marginLeft: '30px' }}>
                  <Card.Title>{cardState.name}</Card.Title>
                  <Card.Text>
                    {cardState.role}
                  </Card.Text>
                  <Button className="mentor-button" variant="primary" onClick={handleSendMessage}>Learn More</Button>
                </Card.Body>
              </div>
            </div>
          </Card>
        ))}
      </section>
    </div>
  );
}

export default GridExample;
