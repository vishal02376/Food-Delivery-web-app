import React, { useContext } from 'react';
import './Food.css';
import { StoreContext } from '../../Context/StoreContext';
import Fooditem from '../Fooditem/Fooditem';
 
function Fooddisplay({ category }) {
  const { food_list } = useContext(StoreContext);

  return (
    <div className='Food-Display' id='Food-Display'>
      <h2>Top dishes near you</h2>
      <div className="Food-display-list">
        {food_list
          .filter(item => category === 'All' || category === item.category)
          .map(item => (
            <Fooditem
              key={item.id}
              id={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
      </div>
    </div>
  );
}

export default Fooddisplay;
