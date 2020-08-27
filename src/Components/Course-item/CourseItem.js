import React from 'react';
import './CourserItem.css'
const CourseItem = (props) => {
    const {name,img,price}= props.course;
    const addClickBtn = props.addClickBtn;
    return (
        <div className='course-item d-flex align-items-center '>
           <div  className="course-img">
               <img  src={img} alt=""/>
           </div>
           <div className="course-info"> 
                <h5>Name:{name} </h5>
                <h4>Price: ${price} </h4>
                <button onClick={() => addClickBtn(props.course)} className="btn btn-primary mt-3"> Enroll Now</button>
           </div>
        </div>
    );
};

export default CourseItem;