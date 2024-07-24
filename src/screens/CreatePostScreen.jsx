import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { createPost } from "../actions/postActions";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Message from "../components/Message";
import Loader from "../components/Loader";

const CreatePostScreen = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const postCreate = useSelector((state) => state.postCreate);
  const {loading, error, success} = postCreate;

  useEffect(() => {
    if (success) {
      navigate('/dashboard');
    }
  }, [success, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createPost(title, content, image)); 
  };

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center m-3 p-4"
    >
      <Row className="justify-content-center w-100 p-3">
        <Col xs={12} md={8} lg={6} className="bg-dark p-4 rounded" style={{transition: "box-shadow 0.3s ease-in-out",
          boxShadow: "0 4px 8px rgba(83, 91, 242, 0.6)",}}>
          <h1 style={{color:"#ffff"}}>Create a new Space</h1>
          <h5 style={{color:"#5D5DFF"}}>After the Space is created, it will generate a dedicated page for collecting testimonials.</h5>
          {error && <Message variant="danger">{error}</Message>}
          {loading && <Loader />}
          <Form onSubmit={submitHandler} className="w-500">
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                required
                type="name"
                placeholder=" Enter Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="content">
              <Form.Label>Your custom message</Form.Label>
              <Form.Control
                required
                as="textarea"
                placeholder="Your custom message *"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="formFile">
              <Form.Label>Upload Image</Form.Label>
              <Form.Control
                required
                type="file"
                onChange={(e) => setImage(e.target.files[0])} 
              ></Form.Control>
            </Form.Group>

            <Row className="py-3">
              <Col>
                <button type="submit" variant="primary">
                  Create Post
                </button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CreatePostScreen;
