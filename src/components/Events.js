import React from "react";
import "./events.css";
import GridExample from "./gridcard.js";
import GridExample2 from "./gridcard-2.js";
import { Form, Button } from 'react-bootstrap';
 
const Events = () => {
    return (
        <div className="page-1">
          <div className="searchbox">
        <Form className="d-flex">
            <Form.Control type="search" className="me-2" placeholder="Search Events Around You..." />
            <Button variant="dark">Search</Button>
        </Form>
        </div>
            <h3 className="text-mentors">Available Events</h3>
            <br/>
            <GridExample2 className="indi" />
          </div>
      );
    };
    
    export default Events;