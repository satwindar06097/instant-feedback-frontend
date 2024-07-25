import React, { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import { FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";
import defaultImage from "../assets/images/R.png"; // Import your default image

const Post = ({ post }) => {
  const { image, slug, title } = post;
  const [showModal, setShowModal] = useState(false);
  const [imgSrc, setImgSrc] = useState(image || defaultImage); // Set initial image source

  const handleError = () => {
    setImgSrc(defaultImage); // Set fallback image if the original image fails to load
  };

  const copyToClipboard = () => {
    const url = `https://instant-feedback-web.netlify.app/create/review/${slug}`;
    navigator.clipboard
      .writeText(url)
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
        position: "relative", // Make the container relative for overlay positioning
      }}
    >
      <Row className="align-items-center no-gutters">
        <Col xs={4} sm={4} className="d-flex justify-content-center p-0">
          <Link
            to={`/post/review/${slug}`}
            state={{ post }}
            style={{ position: "relative", display: "block" }} // Ensure the link takes up space for positioning
          >
            <img
              src={imgSrc} // Use the imgSrc variable
              alt={title}
              className="img-fluid rounded-left"
              style={{ height: "100px", width: "150px", objectFit: "cover" }}
              onError={handleError} // Handle image load errors
            />
            {/* Overlay to indicate default image */}
            {imgSrc === defaultImage && (
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "5px",
                  fontSize: "14px",
                  fontWeight: "bold",
                  zIndex: 1, // Ensure overlay is on top of the image
                }}
              >
                Default Img
              </div>
            )}
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
          <h6>Link copied to clipboard!</h6>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Post;
