import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Course = () => {
   const course = useLoaderData()
 const{details, image_url, title, duration, Fee, instructor,_id}= course
    return (
        <div>
           <Card className='mt-5 mx-5 shadow '> 
       <Card.Img variant="top" className='w-50 p-2' src={image_url} />
      <Card.Body >
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        {details}
        <h6>Duration : {duration}</h6>
        <h6>Fee: {Fee}</h6>
        <div className='bg-danger border border-primary'></div>
        </Card.Text>
        <h6 className='mx-3'>Instructor Introduction </h6>
        <Card.Img variant="top" className='w-25 p-2' src={instructor.img} />
        <Card.Text>
            <p className='mx-3'>{instructor.name}</p>
            <p className='mx-3'>{instructor.educational_qualification}</p>
        </Card.Text>
       <Link to={`/course-enroll/${_id}`}>Go Premium</Link>
      </Card.Body>
    </Card>
        </div>
    );
};

export default Course;