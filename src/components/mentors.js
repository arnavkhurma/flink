import React from "react";
import "./mentors.css";
import GridExample from "./gridcard.js";
import GridExample4 from "./gridcard-4.js";
import { Form, Button } from 'react-bootstrap';

const Mentors = () => {
  return (
    <div className="page-1">
      <br/>
        <h3 className="text-mentors">Your mentors</h3>
        <br/>
        <GridExample className="indi" />
        <br/>
        <h3 className="text-mentors">Available mentors</h3>
        <br/>
        <br/>
        <br/>
        <div className="searchbox">
        <Form className="d-flex-event">
            <Form.Control type="search" className="me-2" placeholder="Search Available Mentors..." />
            <Button variant="dark">Search</Button>
        </Form>
        </div>
        <br/>
        <GridExample4 className="indi" />
      </div>
  );
};

export default Mentors;