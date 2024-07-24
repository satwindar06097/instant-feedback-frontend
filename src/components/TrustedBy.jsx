import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure Bootstrap CSS is imported

const TrustedBy = () => {
  const imageLinks = [
    'https://th.bing.com/th/id/OIP.2b-O1L3Wx-RTv122bZaQqgHaHa?rs=1&pid=ImgDetMain',
    'https://cdn.dribbble.com/users/5851462/screenshots/14116661/media/23d4d1fa2dd3cf5c41b0505908f583ec.png?resize=400x300&vertical=center',
    'https://assets.nvidia.partners/images/png/NVLogo-1280x1280-wo.png',
    'https://static.vecteezy.com/system/resources/previews/020/927/576/non_2x/apple-brand-logo-phone-symbol-with-name-black-design-mobile-illustration-free-vector.jpg',
    'https://i.pinimg.com/736x/8c/0a/46/8c0a46029254fcd4177df0fd80711b4d.jpg',
    'https://www.adgully.com/img/800/201704/myntra-logo.jpg',
    'https://th.bing.com/th/id/R.d97b22f0fc4934a8d621156164cdb7df?rik=BWrHMT5bmiy%2feA&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f06%2fZomato_logo.png&ehk=J%2bB3WT0JX5mDyxwShfOBomGWLyxm2GrIZtl91lnTDAg%3d&risl=&pid=ImgRaw&r=0',
    'https://th.bing.com/th/id/OIP.jWX9XTWilcYF_plc_DTWaQAAAA?w=200&h=200&rs=1&pid=ImgDetMain',
  ];

  return (
    <Container className="my-2">
    <h3  variant ='primary'  className='text-center p-3'>TrustedBy</h3>
      <Row className="g-3 d-flex justify-content-center">
        {imageLinks.map((url, index) => (
          <Col xs={4} sm={3} md={2} lg={1} key={index} >
            <img
              src={url}
              alt={`Image ${index + 1}`}
              style={{ height: '4.2rem', width:'4.8rem'}}
              className="img-fluid rounded shadow-sm custom-img"
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TrustedBy;
