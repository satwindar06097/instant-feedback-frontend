import React, { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import { FaLink } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const { image, slug, title } = post;
  const [showModal, setShowModal] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(slug)
      .then(() => {
        setShowModal(true);
        setTimeout(() => setShowModal(false), 1000); // Hide modal after 1 second
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <Container
      className="bg-dark rounded"
      style={{
        maxWidth: "400px",
        height: "100px",
        transition: "box-shadow 0.3s ease-in-out",
        boxShadow: "0 4px 8px rgba(83, 91, 242, 0.6)",
      }}
    >
      <Row className="align-items-center no-gutters">
        <Col xs={4} sm={4} className="d-flex justify-content-center p-0">
          <Link
            to={`/post/review/${post.slug}`}
            state={{post }}
          >
            <img
              src={image}
              alt={title}
              className="img-fluid rounded-left "
              style={{ height: "100px", width: "150px", objectFit: "cover" }}
            />
          </Link>
        </Col>
        <Col xs={8} sm={8} className="text-center text-sm-left p-0">
          <h6 className="text-light">{title}</h6>
          <div
  onClick={copyToClipboard}
  className="p-1 d-flex justify-content-center align-items-center"
  style={{
    cursor: "pointer",
    color: "white",
     background: "#151719", 
    width: "150px",
    // border: "0.5px solid grey", // Remove this line
    borderRadius: "5px",
    marginLeft: "15px", // Optional: Add margin for spacing
    boxShadow: "0 0 5px 2px rgba(93, 93, 255, 0.5)", // Add shadow with color #5D5DFF
  }}
>
  Copy Link
  <span className="ms-2">
    <FaLink />
  </span>
</div>
        </Col>
      </Row>

      {/* Pop-up Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Body className="text-center">
          <h6>link copied to clipboard!</h6>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Post;
