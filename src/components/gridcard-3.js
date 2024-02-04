// Import necessary dependencies and styles
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "./gridcard.css";

// Import your images
import user1 from '../images/WECode.webp';
import user2 from '../images/JohnsonWIT.webp';
// Import your images
import user3 from '../images/InternationalConfWomenInSci.webp';
import user4 from '../images/GraceHopper.webp';
// Import your images
import user5 from '../images/WomenImpactTechAtlanta.webp';
import user6 from '../images/BridgeingTechWDiver.webp';


// Component function
function GridExample3() {
  // State variables for date picker
  const [cardStates, setCardStates] = useState([
    {
      name: 'Harvard WECode 2024',
      role: 'Feb. 18 to 19—WECode, the largest student-run Women in Computer Science conference in the world, will look like an opportunity to hear from and meet the next generation of technical leaders, foster a network and community among collegiate engineers, and promote more female representation in the technical industry. Consisting of opportunities to meet & discuss with sponsors like Bloomberg, Google, and SIG at the Career Fair, fireside chats from leading STEM icons, mentorship and mock interviews, and more!',
      picture: user1,
      startDate: new Date(),
      showDatePicker: false,
      buttonPosition: { x: 0, y: 0 },
    },
    {
      name: 'Bridging Tech with Diversity',
    role: 'Bridging Tech with Diversity" is a unique conference hosted by ChickTech. This exceptional event aims to unite talented women, girls, non-binary individuals, and allies, offering them an opportunity to enhance their abilities, foster a supportive community, and advance their professional journeys.',
      picture: user6,
      startDate: new Date(),
      showDatePicker: false,
      buttonPosition: { x: 0, y: 0 },
    },
    
    {
      name: 'International Conference on Women in Science',
      role: 'International Conference on Women in Science, Engineering and Technology aims to bring together leading academic scientists, researchers and research scholars to exchange and share their experiences and research results on all aspects of Women in Science, Engineering and Technology.',
      picture: user3,
      startDate: new Date(),
      showDatePicker: false,
      buttonPosition: { x: 0, y: 0 },
    },
      {
        name: 'Grace Hopper Celebration',
      role: 'The Grace Hopper Celebration was co-founded by Dr. Anita Borg and Dr. Telle Whitney in 1994 and is now the world’s “largest gathering of women technologists,” according to the event website. The conference is named after Admirable Grace Murray Hopper, who is considered the one of the first computer programmers — her work is directly responsible for the development of COBOL.',
        picture: user4,
        startDate: new Date(),
        showDatePicker: false,
        buttonPosition: { x: 0, y: 0 },
      },
      {
        name: 'Women Impact Tech Atlanta 2024',
      role: 'The Women Impact Tech Atlanta 2023 is a remarkable event that celebrates the contributions and achievements of women in the tech industry. With a diverse range of keynote speeches, workshops, and panel discussions, attendees have the opportunity to expand their knowledge, explore emerging trends, and gain insights from industry experts. Beyond the educational aspects, the conference fosters a sense of community, enabling women in tech to connect with one another, share experiences, and find support and encouragement. Moreover, the event brings together progressive companies that prioritize diversity and inclusion, offering attendees a chance to explore new career opportunities, acquire valuable skills, and establish meaningful connections that can propel their professional growth. Women truly make an impact in the tech field, and this conference provides a platform to recognize their achievements and further empower them in their careers.',
        picture: user5,
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
      }
      
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
    window.open('https://www.harvardwecode.com/');
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
                  <Button className="mentor-button" variant="primary" onClick={handleSendMessage}>Learn More</Button>
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
