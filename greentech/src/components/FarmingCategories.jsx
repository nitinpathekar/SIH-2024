import React from 'react';
import './FarmingCategories.css';

const productCategories = [
  { 
    label: 'Grains', 
    link: '/grains', 
    image: 'https://images.pexels.com/photos/4110253/pexels-photo-4110253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',  // Replace with appropriate image
    description: 'Wide variety of grains for daily needs.'
  },
  { 
    label: 'Spices', 
    link: '/spices', 
    image: 'https://images.pexels.com/photos/2802527/pexels-photo-2802527.jpeg?auto=compress&cs=tinysrgb&w=600',  // Replace with appropriate image
    description: 'Fresh and aromatic spices for your kitchen.'
  },
  { 
    label: 'Vegetables', 
    link: '/vegetables', 
    image: 'https://bettervitamin.com/wp-content/uploads/2013/07/vegetables.jpg',  // Replace with appropriate image
    description: 'Fresh, organic vegetables delivered daily.'
  },
  { 
    label: 'Fruits', 
    link: '/fruits', 
    image: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',  // Replace with appropriate image
    description: 'Seasonal and tropical fruits available.'
  },
  { 
    label: 'Pulses', 
    link: '/pulses', 
    image: 'https://images.pexels.com/photos/7334141/pexels-photo-7334141.jpeg',  // Replace with appropriate image
    description: 'High-quality pulses for a healthy diet.'
  },
  { 
    label: 'Dairy Products', 
    link: '/dairy-products', 
    image: 'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',  // Replace with appropriate image
    description: 'Fresh milk, cheese, butter, and more.'
  }
];

const FarmingCategories = () => {
  return (
    <div className="farming-categories-container">
      {productCategories.map((category, index) => (
        <div className="category-item" key={index}>
          <a href={category.link} className="category-link">
            <img 
              src={category.image} 
              className="category-image" 
              alt={category.label} 
            />
            <div className="category-label">{category.label}</div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default FarmingCategories;
