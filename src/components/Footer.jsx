import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { TfiGithub } from "react-icons/tfi";

function Footer() {
  return (
    <footer>
      <Container fluid className="bg-dark text-light">
        <Row className='align-items-center justify-content-center py-3'>
          <Col className='text-center'>
            <p className='mb-0'>Copyright &copy; Instant Feedback</p>
            <a 
              href="https://github.com/satwindar06097" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-light"
              style={{ textDecoration: 'none' }}
            >
              <TfiGithub style={{ fontSize: "30px" }} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
