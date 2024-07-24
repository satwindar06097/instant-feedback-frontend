import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { SiSupabase } from "react-icons/si";
import { GrEdit } from "react-icons/gr";
import { MdLogout } from "react-icons/md";
import { logout } from "../actions/userActions";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <Navbar variant="dark" expand="lg" className="bg-dark text-light p-3" sticky="top">
      <Container>
      <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
      <span className="p-2" style={{ color: "#5D5DFF" }}>
        <SiSupabase />
      </span>
      Instant Feedback
    </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/dashboard">
              <Nav.Link>Dashboard</Nav.Link>
            </LinkContainer>
            {userInfo ? (
              <NavDropdown title={`Welcome , ${userInfo.name}`} id="username">
                <LinkContainer to="/profile">
                  <NavDropdown.Item>
                    <GrEdit /> Profile
                  </NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}>
                  <MdLogout /> Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
