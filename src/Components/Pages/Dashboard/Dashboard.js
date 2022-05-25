import React, { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';


const Dashboard = () => {
    const [show, setShow] = useState(false);
    const [user]=useAuthState(auth)
    const [admin]=useAdmin(user)
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
            {admin && <><li><Link to="/dashboard/user">MakeAdmin</Link></li>  <li><Link to="/dashboard/addproduct ">AddProduct</Link></li> <li><Link to="/dashboard/mannageproduct">ManageProduct</Link></li> <li><Link to="/dashboard/allorder">Manage Order</Link></li></>}
        </Offcanvas.Body>
      </Offcanvas>
    </>
    <Outlet></Outlet>
     </div>

  
    );
};

export default Dashboard;