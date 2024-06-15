import React from 'react';
import Card from './Card';

function CardList({ properties, onCardClick }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 bg-gray-50">
      {properties.map((property, index) => (
        <Card
          key={index}
          property={property}
          onClick={onCardClick}
        />
      ))}
    </div>
  );
}

export default CardList;
