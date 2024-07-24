import { useState } from "react";
import { Carousel, Container, Row, Col, Image } from "react-bootstrap";
import Testimonials from "../assets/clint_testimonies";

const CarouselComponent = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Container className="p-5 bg-dark" style={{borderRadius:'10px'}}>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {Testimonials.map((item, ind) => (
          <Carousel.Item key={ind}>
            <Row className="justify-content-center text-center">
              <Col xs={12} md={3} className="d-flex justify-content-center mb-3">
                <Image
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "230px",
                    height: "270px",
                    objectFit: "cover",
                  }}
                  rounded
                />
              </Col>
              <Col xs={12} md={6} className="d-flex justify-content-center">
                <div
                  style={{
                    maxWidth: "500px",
                    marginTop: "25px", 
                    color: "#fff",
                    padding: "15px",
                    borderRadius: "5px",
                    textAlign: "center", 
                  }}
                >
                  <h4 style={{color: "#5D5DFF"}}>– {item.name}</h4>
                  <p>{item.text}</p>
                </div>
              </Col>
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default CarouselComponent;
