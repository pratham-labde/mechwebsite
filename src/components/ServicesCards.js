import React from 'react';
import './ServicesCards.css'
const services = [
  { id: 1, name: 'Finite Element Analysis', imageUrl: 'https://picsum.photos/id/237/200/300' },
  { id: 2, name: 'CAD Modeling', imageUrl: 'https://picsum.photos/id/237/200/300' },
  { id: 3, name: 'Special Purpose Machines', imageUrl: 'https://picsum.photos/id/237/200/300' },
  { id: 4, name: 'Reverse Engineering', imageUrl: 'https://picsum.photos/id/237/200/300' },
  { id: 5, name: 'Simulation', imageUrl: 'https://picsum.photos/id/237/200/300' },
];

const ServicesCard = ({ services }) => {
  return (
    <div className="services-list">
      {services.map(service => (
        <div key={service.id} className="service-card">
          <div className="service-image">
            <img src={service.imageUrl} alt={service.name} />
          </div>
          <div className="service-name">
            <h3>{service.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesCard;
export {services}
