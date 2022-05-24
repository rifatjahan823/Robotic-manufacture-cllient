import React, { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';


const Dashboard = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
  <>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            {/* <!-- Sidebar content here --> */}
            <li><Link to="/dashboard">My Order</Link></li>
            <li><Link to="/dashboard/review">My Reviews</Link></li>
            <li><Link to="/dashboard/profile">My Profile</Link></li>
     
        </Offcanvas.Body>
      </Offcanvas>
    </>
    <Outlet></Outlet>
     </div>

  
    );
};

export default Dashboard;