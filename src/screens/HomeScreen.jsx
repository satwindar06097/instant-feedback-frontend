import React from "react";
import TrustedBy from "../components/TrustedBy";
import CarouselComponent from "../components/CarouselComponent";
import { Row, Col } from "react-bootstrap";
import dashboardImg from "../assets/images/dashboard.png";
import spaceImg from "../assets/images/space.png";
import feedbackformImg from "../assets/images/feedbackform.png";

const HomeScreen = () => {
  return (
    <div>
      <div className="d-flex justify-content-center pt-5 pb-4">
        <h1 style={{ color: "#5D5DFF" }}>
          "Capture Your Customers' Voice, Build Your Brand"
        </h1>
      </div>
      <div className="d-flex justify-content-center p-3">
        <div className="text-center" style={{ maxWidth: "800px" }}>
          <h4>
            Collecting testimonials is hard, we get it! So we built Instant
            Feedback. In minutes, you can collect text and video testimonials
            from your customers with no need for a developer or website hosting.
          </h4>
        </div>
      </div>
      <hr />
      <div className="p-4">
        <TrustedBy />
      </div>
      <hr />
      <div className="p-4">
        <CarouselComponent />
      </div>
      <hr />
      <div
        className="d-flex justify-content-center mx-5 pt-3 pb-4"
        style={{ maxWidth: "800px" }}
      >
        <h5 style={{ color: "#5D5DFF" }}>
          Collect and display testimonials all in one solution
        </h5>
      </div>
      <Row className="p-4">
        <Col xs={12} md={6} className="mx-auto mb-4">
          <h4>A dedicated landing page</h4>
          <p style={{ maxWidth: "500px" }}>
            Create a dedicated landing page for your business that can be
            effortlessly shared via email, social media, or SMS. Setting it up
            takes just two minutes. By clicking on an image, you'll be directed
            to a single page featuring all reviews for that specific post.
          </p>
        </Col>
        <Col xs={12} md={6} className="d-flex justify-content-center">
          <img
            className="img-fluid"
            style={{
              height: "auto",
              maxHeight: "350px",
              width: "100%",
              transition: "box-shadow 0.3s ease-in-out",
              boxShadow: "0 4px 8px rgba(83, 91, 242, 0.6)",
            }}
            alt="img"
            src={dashboardImg}
          />
        </Col>
      </Row>
      <hr className="" />
      <div
        className="d-flex justify-content-center mx-5 pt-3 pb-4"
        style={{ maxWidth: "800px" }}
      >
        <h4 style={{ color: "#5D5DFF" }}>
          Experience Seamless Review Management
        </h4>
      </div>
      <Row className="p-4">
        <Col xs={12} md={6} className="d-flex justify-content-center">
          <img
            className="img-fluid"
            style={{
              height: "auto",
              maxHeight: "450px",
              width: "100%",
              transition: "box-shadow 0.3s ease-in-out",
              boxShadow: "0 4px 8px rgba(83, 91, 242, 0.6)",
              objectFit: "fill",
            }}
            alt="img"
            src={spaceImg}
          />
        </Col>
        <Col xs={12} md={6} className="mx-auto mb-4">
          <h4 className="mt-5">Discover Effortless Review Handling</h4>
          <p style={{ maxWidth: "500px" }}>
            Easily share review links across any platform with a single click.
            Keep track of your review count, manage all your reviews in one
            place, and delete any reviews you no longer need. Plus, you can
            delete your entire review space if necessary.
          </p>
        </Col>
      </Row>
      <hr />
      <div
        className="d-flex justify-content-center mx-5 pt-3 pb-4"
        style={{ maxWidth: "800px" }}
      >
        <h4 style={{ color: "#5D5DFF" }}>We Value Your Feedback!</h4>
      </div>
      <Row className="p-4 pb-5">
        <Col xs={12} md={6} className="mx-auto mb-4">
          <h4>
            Tell us about your experience and how we can make things even
            better.
          </h4>
          <p style={{ maxWidth: "500px" }}>
            Easily upload your self-image and review image. Share your thoughts
            and suggestions with us. Provide a video review to enhance your
            feedback.
          </p>
        </Col>
        <Col xs={12} md={6} className="d-flex justify-content-center">
          <img
            className="img-fluid"
            style={{
              height: "auto",
              maxHeight: "350px",
              width: "100%",
              transition: "box-shadow 0.3s ease-in-out",
              boxShadow: "0 4px 8px rgba(83, 91, 242, 0.6)",
            }}
            alt="img"
            src={feedbackformImg}
          />
        </Col>
      </Row>
    </div>
  );
};

export default HomeScreen;
