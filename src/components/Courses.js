import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CourseCard from './CourseCard';
import LeftSideNav from './LeftSideNav';

const Courses = () => {
    return (
        <div>
          <Container>
            <Row>
                <Col lg='4'>
                <LeftSideNav></LeftSideNav>
                </Col>
                <Col lg='8'>
              <CourseCard></CourseCard>
                </Col>
            </Row>
          </Container>
          
        </div>
    );
};

export default Courses;