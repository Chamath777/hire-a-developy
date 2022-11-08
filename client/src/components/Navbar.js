import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Modal, Tab } from "react-bootstrap";
import SignUpForm from "./SignupForm";
import LoginForm from "./LoginForm";

import Auth from "../utils/auth";

const AppNavbar = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);

  return (
    <Nav>
      <Nav.Link eventKey="login">Login</Nav.Link>
      <Nav.link eventKey="signup">Signup</Nav.link>
      <Nav.link eventKey="profile">Profile</Nav.link>
      <Nav.link eventKey="products">Products</Nav.link>
    </Nav>
  );
};
