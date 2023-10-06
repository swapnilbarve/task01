import React from 'react';
import './Banner.css';


const Category = (props) => {
  return (
    <div className='categories'>
        <div className='categoryimg'> <img src={props.imgsrc}/></div>
        <div className='categoryTitle'>{props.title}</div>
    </div>
  )
}

export default Category;