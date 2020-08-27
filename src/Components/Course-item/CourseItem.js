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
                <h3>Price:{name} </h3>
                <h4>Price: ${price} </h4>
                <button onClick={() => addClickBtn(props.course)} className="btn btn-primary"> Enroll Now</button>
           </div>
        </div>
    );
};

export default CourseItem;