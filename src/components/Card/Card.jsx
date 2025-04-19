import React from 'react';
import { Link } from 'react-router';

const Card = ({data}) => {
    // console.log(data)
    const {id,price,img,brand,model}=data
    return (
        
<Link to={`/productDetails/${id}`}>
<div className="card bg-base-100 w-72 shadow-sm">
  <figure className='py-3'>
    <img className='w-[150px] h-[200px] overflow-hidden object-cover'
      src={img}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{model}</h2>
    <p>{brand}</p>
    <p className='text-orange-500'>{price}</p>
    <div className="card-actions ">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
</Link>
        
    );
};

export default Card;