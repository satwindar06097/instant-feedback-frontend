import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../components/Loader";
import Message from "../components/Message";

import { login } from "../actions/userActions";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, redirect, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <Container
      fluid className="d-flex justify-content-center pt-5 pb-4"
     style={{marginTop:"50px"}}
      
    >
      <Row className="justify-content-center w-100">
        <Col xs={12} md={8} lg={6} className=" bg-dark p-4 rounded" style={{transition: "box-shadow 0.3s ease-in-out",
        boxShadow: "0 4px 8px rgba(83, 91, 242, 0.6)"}}>
          <h1 className="text-center">Sign In</h1>
          {error && <Message variant="danger">{error}</Message>}
          {loading && <Loader />}
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <button type="submit" variant="primary" className="w-100 my-3">
              Sign In
            </button>
          </Form>

          <Row className="py-3">
            <Col className="text-center">
              New Customer?{" "}
              <Link to={redirect ? `/register?redirect=${redirect}` : "/register"}>
                Register
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginScreen;
