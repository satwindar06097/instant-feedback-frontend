import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import ReviewCard from "../components/ReviewCard";
import { delete_Post } from "../actions/postActions";
import { RiDeleteBin3Fill } from "react-icons/ri";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { getAll_Reviews } from "../actions/postActions";

const PostReviewScreen = () => {
  const [showModal, setShowModal] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { post } = location.state || { post: {} };
  const { image, title, slug, content } = post;

  const deletePost = useSelector((state) => state.deletePost);
  const { success: deleteSuccess, loading, error } = deletePost;

  const getAllReviews = useSelector((state) => state.getAllReviews);
  const { reviews } = getAllReviews;

  console.log(reviews);

  const deleteReview = useSelector((state) => state.deleteReview);
  const { success } = deleteReview;

  useEffect(() => {
    if (deleteSuccess) {
      navigate("/dashboard", { replace: true });
    }
    dispatch(getAll_Reviews(slug));
  }, [deleteSuccess, navigate, dispatch, slug, success]);

  const handleDelete = () => {
    dispatch(delete_Post(slug));
    setShowModal(false);
  };

  const publicURL = `https://instant-feedback-web.netlify.app/create/review/${slug}`;

  return (
    <Container>
      {loading && <Loader />}
      {error && <Message />}
      <Row className="pt-5">
        <Col
          md={6}
          xs={12}
          className="d-flex flex-column align-items-center mb-4"
        >
          <img
            src={image}
            alt={title}
            className="img-fluid rounded"
            style={{
              height: "auto",
              width: "100%",
              maxWidth: "250px",
              objectFit: "cover",
            }}
          />
          <div className="text-center mt-3">
            <h4>{title}</h4>
            {/* Internal Link with state */}
            <Link to={`/create/review/${slug}`} state={{ post }}>
              <h6>
                Public URL:
                <a
                  href={publicURL}
                  style={{
                    textDecoration: "underline",
                    fontSize: "18px",
                    marginLeft: "5px",
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {publicURL}
                </a>
              </h6>
            </Link>
          </div>
        </Col>
        <Col
          md={3}
          xs={12}
          className="text-center rounded p-3 mb-4"
          style={{
            height: "auto",
            width: "100%",
            maxWidth: "250px",
            marginTop: "50px",
            overflow: "hidden", // Hide overflow content
            wordWrap: "break-word", // Wrap long words
          }}
        >
          <h5 className="bg-dark p-3 rounded">
            No. of Reviews: {reviews.length}
          </h5>
          <div style={{ marginTop: "20px" }}>{content}</div>
        </Col>
        <Col style={{ marginLeft: "95px", marginTop: "65px" }}>
          <Button
            style={{ width: "160px" }}
            variant="danger"
            onClick={() => setShowModal(true)}
          >
            <RiDeleteBin3Fill /> Delete Space
          </Button>
        </Col>
      </Row>
      <hr className="my-4 p-3" />
      <Row className="g-4">
        <h3>Reviews</h3>
        {reviews.map((review, ind) => (
          <Col key={ind} xs={12} sm={12} md={6} lg={4} className="mb-4">
            <ReviewCard review={review} />
          </Col>
        ))}
      </Row>
      {/* Confirmation Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this Post?</Modal.Body>
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

export default PostReviewScreen;
