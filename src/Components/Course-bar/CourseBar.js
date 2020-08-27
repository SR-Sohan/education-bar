import React from 'react';
import './CourseBar.css'
import CourseItem from '../Course-item/CourseItem';
import CourseCart from '../Course-cart/CourseCart';
import fakeData  from '../../fakeData';
import { useState } from 'react';
import { useEffect } from 'react';


const CourseBar = () => {
const [course, setCourse] = useState([]);
useEffect(()=> {
    const data = fakeData;
    setCourse(data)
},[])


const [courseCart, setCourseCart] = useState([]);
const addClickBtn = (count) =>{
    const  newCourseCart = [...courseCart , count]
    setCourseCart(newCourseCart);

}
    return (
        <div className="course-container">
            <div className="course-list"> 
            { 
                course.map(course => <CourseItem addClickBtn= {addClickBtn} key={course.id} course={course}></CourseItem>)
            }
            </div>
            <div className="course-count"> 
                <CourseCart courseCart={courseCart}></CourseCart>
            </div>
        </div>
        
    );
};

export default CourseBar;