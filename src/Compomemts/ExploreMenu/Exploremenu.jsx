import React from 'react';
import './Explore.css'; // Ensure the correct path to the CSS file
import { menu_list } from '../../assets/assets';

function Exploremenu({ category, setCategory }) { // Corrected props destructuring
  return (
    <div className='Explore-Menu' id='Explore-Menu'>
      <h1>Explore Our Menu</h1>
      <p className='Explore-menu-text'>
      Explore our menu to discover a curated selection of delicious dishes, crafted to tantalize your taste buds. From savory starters to indulgent
       desserts, each item is made with the finest ingredients. Dive in and find your new favorite meal today!
      </p>

      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() => setCategory(prev => prev === item.menu_name ? 'All' : item.menu_name)}
              key={index}
              className="explore-menu-list-item"
            >
              <img src={item.menu_image} alt={item.menu_name} className={category === item.menu_name ? 'active' : ''} />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
}

export default Exploremenu;

