
import React from 'react';
import './CourseCart.css'

const CourseCart = (props) => {
    const course = props.courseCart;
    let totalPrice = 0;
    for (let i = 0; i < course.length; i++) {
        const price = course[i].price;
        totalPrice = totalPrice + price;
    }
    return (
        <div className="p-5 cart">
          <div className="oder-summary"> 
          <h4 className="text-center mb-3 pb-2">Oder Summary</h4>
           <p>Enroll Count:{course.length} </p>
           <p> Total Price:${(totalPrice).toFixed(2)} </p>
           <button className="btn btn-primary">Payment</button>
          </div>
        </div>
    );
};

export default CourseCart;