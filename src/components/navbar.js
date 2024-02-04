import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import user from '../images/default_user.png';
import logoflink from '../images/logo.png';
import './navbar.css'; // Import your custom CSS file

function Navigation() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const currentPage = window.location.pathname;

  const handleProfileClick = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  return (
    <>
      <Navbar className="bar" sticky="top">
        <Container>
          <Navbar.Brand href="/home" style={{ marginLeft: '-30px' }}>
            <img className="logo" src={logoflink} alt="" width="100" height="35" />
          </Navbar.Brand>
          <Nav className="me-right" style={{ fontSize: '15px', marginRight: '-40px', marginTop: '4px' }}>
            <Nav.Link href="/events">Events</Nav.Link>
            <Nav.Link href="/mentors">Mentors</Nav.Link>
            <Nav.Link href="/opportunities">Opportunities</Nav.Link>
            
            {currentPage !== "/home" && (
              <Nav.Link href="">
                <img className="user" src={user} alt="" width="23" height="23" onClick={handleProfileClick} />
              </Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>

      <Offcanvas show={showOffcanvas} onHide={() => setShowOffcanvas(false) } placement="end">
        <Offcanvas.Header closeButton>
          {currentPage !== "/home" && (
            <img className="user" src={user} alt="" width="35" height="35" />
          )}
          <Offcanvas.Title>Hello, <i>Ms. Silvia Garcia</i></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h5>CS Junior at <i>Virginia Tech</i></h5>
          <h5>GPA: <i>3.89</i></h5>
          <br/>
          <Nav.Link className="prof-nav" href="/home">Home</Nav.Link>
          <Nav.Link className="prof-nav" href="/mentors">Mentors</Nav.Link>
          <Nav.Link className="prof-nav" href="/opportunities">Opportunities</Nav.Link>
          <Nav.Link className="prof-nav" href="/home"><p style={{color: 'red'}}>Log Out</p></Nav.Link>
          {currentPage !== "/opportunities" && (
            <Nav.Link href="/opportunities">Login</Nav.Link>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Navigation;
