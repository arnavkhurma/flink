// Import necessary dependencies and styles
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "./gridcard.css";

// Import your images
import user1 from '../images/yes.jpg';
import user2 from '../images/5.jpg';
import user3 from '../images/6.png';
import user4 from '../images/Anike.png';
import user5 from '../images/more.png';
import user6 from '../images/morewomen.jpg';



// Component function
function GridExample3() {
  // State variables for date picker
  const [cardStates, setCardStates] = useState([
    {
      name: 'Anika Thumma',
      role: 'Computer Science Student @ Virginia Tech',
      picture: user1,
      startDate: new Date(),
      showDatePicker: false,
      buttonPosition: { x: 0, y: 0 },
    },
    {
        name: 'Sreevalli Bulusu',
      role: 'Computer Science Student @ Virginia Tech',
        picture: user2,
        startDate: new Date(),
        showDatePicker: false,
        buttonPosition: { x: 0, y: 0 },
      },
    {
      name: 'Alexis Rangaraj',
      role: 'Computer Engineering (Machine Learning) Sophomore @ Virginia Tech',
      picture: user3,
      startDate: new Date(),
      showDatePicker: false,
      buttonPosition: { x: 0, y: 0 },
    },
      {
        name: 'Whitney Cooper',
      role: 'Social Media Marketing Student @ Harvard University',
        picture: user4,
        startDate: new Date(),
        showDatePicker: false,
        buttonPosition: { x: 0, y: 0 },
      },
    {
        name: 'Brenda Cooper',
        role: 'Computer Engineering (Autonomous Vehicles) Junior @ Virginia Tech',
        picture: user5,
        startDate: new Date(),
        showDatePicker: false,
        buttonPosition: { x: 0, y: 0 },
      },
        {
          name: 'Rhonda Sparks',
        role: 'Gender Studies and Communication @ Columbia University',
          picture: user6,
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
    window.open('mailto:arnavkhurma@vt.edu');
  };

  // JSX structure with Bootstrap grid
  return (
    <div className="centered">
      <section className="cards-2">
        <div className="row">
          {cardStates.map((cardState, index) => (
            <div key={index} className="col-md-6 mb-3">
              <Card border="dark" className="custom-card">
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
                  {/* Button with hover effect */}
                  <div style={{ position: 'relative', display: 'inline-block' }}>
                    <Button className="mentor-button" variant="primary" onClick={(event) => handleOpenDatePicker(event, index)}>Schedule Meeting</Button>
                    {/* Date picker */}
                    {cardState.showDatePicker && (
                      <div style={{ position: 'absolute', top: cardState.buttonPosition.y, left: cardState.buttonPosition.x }}>
                        <DatePicker
                          selected={cardState.startDate}
                          onChange={(date) => handleChange(date, index)}
                          onClickOutside={() => handleCloseDatePicker(index)}
                          inline
                        />
                        <Button className="book-button" variant="success" onClick={() => handleBookMeeting(index)}>Book Meeting</Button>
                      </div>
                    )}
                  </div>
                  <Button className="mentor-button" variant="primary" onClick={handleSendMessage}>Request Connection</Button>
                </Card.Body>
              </div>
            </div>
          </Card>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// Export the component
export default GridExample3;