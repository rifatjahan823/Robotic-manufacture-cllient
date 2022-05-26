import React from 'react';
import { Accordion } from 'react-bootstrap';

const blog = () => {
    return (
        <div className='container my-5'>
            <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>How will you improve the performance of a React Application?</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>What are the different ways to manage a state in a React application?</Accordion.Header>
    <Accordion.Body>
    
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>How does prototypical inheritance work?</Accordion.Header>
    <Accordion.Body>
    
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header> Why you do not set products = [...] instead, you use the setProd</Accordion.Header>
    <Accordion.Body>
    
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header> You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</Accordion.Header>
    <Accordion.Body>
    
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>What is a unit test? Why should write unit tests?</Accordion.Header>
    <Accordion.Body>
    
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
        </div>
    );
};

export default blog;