import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Accordion, Modal, Button } from "react-bootstrap";
import { format } from "date-fns";
import { delete_Review } from "../actions/postActions";
import { RiDeleteBin3Fill } from "react-icons/ri";
import Message from "./Message";
import Loader from "./Loader";

const ReviewCard = ({ review ,slug}) => {
  const [showModal, setShowModal] = useState(false);

  const {
    customer_name,
    customer_email,
    customer_photo,
    review_image,
    text_review,
    video_review,
    created_at,
    my_id,
  } = review;

  const dispatch = useDispatch();
  const deleteReview = useSelector((state) => state.deleteReview);
  const {  success ,loading, error } = deleteReview;

  const formattedDate = format(new Date(created_at), "yyyy-MM-dd HH:mm");
  const navigate = useNavigate()

  const handleDelete = () => {
    dispatch(delete_Review(my_id));
    setShowModal(false);
  };

  return (
    <Container className="bg-dark rounded p-3">
     {error && <Message />}
      {video_review && (
        <Row className="mb-3 no-gutters">
          <Col className="p-0">
            <video
              style={{
                marginTop: "-12px",
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderTopLeftRadius: "5px",
                borderTopRightRadius: "5px",
              }}
              controls
            >
              <source src={video_review} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Col>
        </Row>
      )}
      {video_review && <hr />}
      {review_image && (
        <Accordion className="custom-accordion">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Review Image</Accordion.Header>
            <Accordion.Body>
              <img
                src={review_image}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  borderTopLeftRadius: "5px",
                  borderTopRightRadius: "5px",
                }}
                alt="Review"
              />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      )}
      {review_image && <hr />}

      <Row className="mb-2">
        <Col>
          <div className="text-light">{text_review}</div>
        </Col>
      </Row>

      <hr />

      <Row className="align-items-center mb-2">
        <Col xs="auto">
          <img
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "15%",
            }}
            alt={"img"}
            src={customer_photo}
          />
        </Col>
        <Col>
          <div className="text-light">Name: {customer_name}</div>
          <Row>
            <div className="text-light">
              Email: <span style={{ color: "#5D5DFF" }}>{customer_email}</span>
            </div>
          </Row>
          <Row>
            <div className="text-light">
              Submitted At:{" "}
              <span style={{ color: "#5D5DFF" }}>{formattedDate}</span>
            </div>
          </Row>
        </Col>
       
        <Row style={{ marginLeft: "95px", marginTop: "15px" }}>
          <Button style={{width:"160px"}} variant="danger" onClick={() => setShowModal(true)}>
            <RiDeleteBin3Fill /> Delete
          </Button>
        </Row>
      </Row>

      {/* Confirmation Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this review?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ReviewCard;
