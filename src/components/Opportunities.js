import React from "react";
import "./events.css";
import GridExample from "./gridcard.js";
import GridExample2 from "./gridcard-2.js";
import GridExample3 from "./gridcard-3.js";
import { Form, Button } from 'react-bootstrap';
 
const opportunities = () => {
    return (
        <div className="page-1">
          <div className="searchbox">
        <Form className="d-flex">
            <Form.Control type="search" className="me-2" placeholder="Search Opportunities Around You..." />
            <Button variant="dark">Search</Button>
        </Form>
        </div>
            <h3 className="text-mentors">Upcoming Opportunities</h3>
            <br/>
            <GridExample3 className="indi" />
          </div>
      );
    };
    
    export default opportunities;