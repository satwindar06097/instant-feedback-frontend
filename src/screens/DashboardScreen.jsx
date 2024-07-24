import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import Post from "../components/Post";
import { getAll_Post } from "../actions/postActions";
import LoginScreen from "../screens/LoginScreen";

const DashboardScreen = () => {
  const dispatch = useDispatch();

  const getAllPost = useSelector((state) => state.getAllPost);
  const { posts } = getAllPost;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      dispatch(getAll_Post());
    }
  }, [dispatch, userInfo]);

  return userInfo ? (
    <Container fluid className="d-flex justify-content-center pt-5 pb-4">
      <Row>
        <Col>
          <Row>
            <h3
              className="text-center m-3 p-2"
              style={{
                color: "#5D5DFF",
                wordWrap: "break-word",
                overflowWrap: "break-word",
                textAlign: "center",
              }}
            >
              "All Your Reviews in One Place: Keep track of the feedback you've
              received and monitor your posts' performance."
            </h3>
            <hr />
            <h2 className="mx-5 p-3">Overview</h2>
            <Row className="d-flex justify-content-center pb-5">
              <Col
                md={3}
                xs={12}
                className="bg-dark text-center p-2 m-1 rounded g-3"
              >
                <h5>No. of posts: {posts.length}</h5>
              </Col>
              <Col
                md={3}
                xs={12}
                style={{ background: "#5D5DFF" }}
                className="text-center p-1 m-1 rounded"
              >
                <Link
                  to="/creatPost"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  <h5>
                    <span className="mx-1 fs-4">
                      <IoMdAdd />
                    </span>
                    Create New Space
                  </h5>
                </Link>
              </Col>
            </Row>

            <Row>
              <h2 className="mx-5 p-3">Space</h2>
              <Container>
                <Row className="g-5">
                  {posts.map((post) => (
                    <Col
                      key={post.slug}
                      xs={12}
                      sm={6}
                      md={4}
                      lg={3}
                      className="mb-4"
                    >
                      <Post post={post} />
                    </Col>
                  ))}
                </Row>
              </Container>
            </Row>
          </Row>
        </Col>
      </Row>
    </Container>
  ) : (
    <LoginScreen />
  );
};

export default DashboardScreen;
