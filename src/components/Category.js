import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from './CourseCard';

const Category = () => {
    const courses = useLoaderData()
    // console.log(courses)
    return (
        <div>
            {
                courses.map(course=><CourseCard
                key={course._id}
                course={course}
                ></CourseCard>)
            }
        </div>
    );
};

export default Category;