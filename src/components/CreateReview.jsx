import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Form, Row, Col, Container, Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { create_Review } from "../actions/postActions";

const CreateReview = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState(null);
  const [review_image, setReview_image] = useState(null);
  const [text_review, setText_review] = useState("");
  const [video_review, setVideo_review] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);

  const location = useLocation();
  const { post } = location.state || { post: {} };

  const createReview = useSelector((state) => state.createReview);
  const { success, error, loading } = createReview;
  const dispatch = useDispatch();

  const slug = useParams();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      create_Review(
        name,
        email,
        photo,
        review_image,
        text_review,
        video_review,
        slug
      )
    );
  };

  useEffect(() => {
    if (success) {
      setShowThankYou(true);
    }
  }, [success]);

  const handleClose = () => setShowThankYou(false);

  return (
    <Container>
      <Row className="d-flex justify-content-center align-items-center">
        <Col xs={12} md={4}>
          <div>
            <img
              className="rounded"
              style={{
                height: "350px",
                width: "350px",
                objectFit: "cover",
              }}
              src={post.image}
              alt="Post"
            />
          </div>
          <p
            style={{
              height: "auto",
              width: "100%",
              maxWidth: "450px",
              marginTop: "50px",
              overflow: "hidden",
              wordWrap: "break-word",
            }}
          >
            {post.content}
          </p>
        </Col>
        <Col
          xs={12}
          md={8}
          lg={6}
          className="justify-content-center p-4"
          style={{ marginTop: "-20px" }}
        >
          <h1 style={{ color: "#ffff" }}>We Value Your Feedback!</h1>
          <h5 style={{ color: "#5D5DFF" }}>
            Tell us about your experience and how we can make things even better.
          </h5>
          {error && <Message variant="danger">{error}</Message>}
          {loading && <Loader />}
          <Form onSubmit={submitHandler} className="w-500">
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="name"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formFile">
              <Form.Label>Upload Self Image</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setReview_image(e.target.files[0])}
              />
            </Form.Group>

            <Form.Group controlId="formFile">
              <Form.Label>Upload Review Image</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setPhoto(e.target.files[0])}
              />
            </Form.Group>

            <Form.Group controlId="text_review">
              <Form.Label>Share your thoughts and suggestions with us.</Form.Label>
              <Form.Control
                required
                as="textarea"
                placeholder="Your valuable Feedback *"
                value={text_review}
                onChange={(e) => setText_review(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formFile">
              <Form.Label>Upload Video</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setVideo_review(e.target.files[0])}
              />
            </Form.Group>

            <div className="py-3">
              <button type="submit" variant="primary">
                Create Post
              </button>
            </div>
          </Form>
        </Col>
      </Row>

      {/* Modal for Thank You message */}
      <Modal show={showThankYou} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thank You!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Thank you for your feedback! We appreciate your input and will use it to improve our services.
        </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default CreateReview;