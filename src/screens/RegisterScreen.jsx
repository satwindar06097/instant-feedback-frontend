import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../components/Loader";
import Message from "../components/Message";

import { register } from "../actions/userActions";

function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Password do not match");
    } else {
      dispatch(register(name, email, password));
    }
  };
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center m-3 p-4"
    >
      <Row className="justify-content-center w-100">
        <Col xs={12} md={8} lg={6} className=" bg-dark p-4 rounded" style={{transition: "box-shadow 0.3s ease-in-out",
          boxShadow: "0 4px 8px rgba(83, 91, 242, 0.6)",}}>
          <h1>Sign Up</h1>
          {message && <Message variant="danger">{message}</Message>}
          {error && <Message variant="danger">{error}</Message>}
          {loading && <Loader/>}

          <Form onSubmit={submitHandler} className="w-500">
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="name"
                placeholder=" Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder=" Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder=" Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="passwordConfirm">
              <Form.Label> Confirm Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder=" Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Row className="py-3">
              <Col>
                <button type="submit" variant="primary">
                  Register
                </button>

                <span className="m-5">
                Have an Account ?{" "}
                <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
                  Sign In
                </Link>
              </span>
              </Col>
              
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default RegisterScreen;
