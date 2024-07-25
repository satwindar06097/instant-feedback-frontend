import React,{useEffect}from "react";
import { useLocation,useNavigate,useParams} from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { Container, Row, Col,Button } from "react-bootstrap";
import ReviewCard from "../components/ReviewCard";
import { Link } from "react-router-dom";
import { delete_Post } from "../actions/postActions";
import { RiDeleteBin3Fill } from "react-icons/ri";
import Loader from "../components/Loader";

const PostReviewScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { post } = location.state || { post: {} };
  const { image, title, slug, reviews, content } = post;

  const deletePost = useSelector((state) => state.deletePost )
  const {success: deleteSuccess,loading} = deletePost

  
  const sluger = useParams()

  useEffect(()=>{
    if (deleteSuccess){
      navigate('/dashboard')
    }
  },[deleteSuccess,navigate])

  const deleteHandler=(e) =>{
    e.preventDefault();
    dispatch(delete_Post(sluger))

  }



  return (
    <Container>
    {loading && <Loader/>}
      <Row className=" pt-5">
        <Col md={6} xs={12} className="d-flex flex-column align-items-center mb-4">
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
            <Link  to={`/create/review/${slug}`}
             state={{post}}><h6>Public URL : <span style={{textDecoration:"underline",fontSize:"18px"}}>{`https://instant-feedback-web.netlify.app/create/review/${slug}`}</span></h6></Link>
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
          <h5 className="bg-dark p-3 rounded">No. of Reviews: {reviews.length}</h5>
          <div style={{marginTop:"20px" }}>
            {content}
          </div>
        </Col>
        <Col style={{ marginLeft: "95px", marginTop: "65px" }}>
          <Button style={{width:"160px"}} variant="danger" onClick={deleteHandler}>
            <RiDeleteBin3Fill /> Delete Space
          </Button>
        </Col>
      </Row>
      <hr className="my-4 p-3" />
      <Row className="g-4">
      <h3>Reviews</h3>
        {reviews.map((review, ind) => (
          <Col key={ind} xs={12} sm={12} md={6} lg={4} className="mb-4">
            <ReviewCard review={review}  />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PostReviewScreen;
