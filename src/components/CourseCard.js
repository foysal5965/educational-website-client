import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CourseCard = ({course}) => {
    const {title , details, image_url,_id}= course
    return (
        <div>
 <Card className='mb-4 '> 
       <Card.Img variant="top" className='w-25 p-2' src={image_url} />
      <Card.Body >
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        {details.slice(0,100)}
        </Card.Text>
        <Button variant="primary" >Show detail of the course</Button>
      </Card.Body>
    </Card>
        </div>
    );
};

export default CourseCard;