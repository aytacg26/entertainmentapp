import React, { Fragment } from 'react';
import CardLoaderItem from './CardLoaderItem/CardLoaderItem';

const CardLoader = () => {
  const cards = [
    { id: 'loading-001' },
    { id: 'loading-002' },
    { id: 'loading-003' },
    { id: 'loading-004' },
    { id: 'loading-005' },
    { id: 'loading-006' },
    { id: 'loading-007' },
    { id: 'loading-008' },
    { id: 'loading-009' },
    { id: 'loading-010' },
  ];

  return (
    <Fragment>
      {cards.map((card) => (
        <CardLoaderItem key={card.id} />
      ))}
    </Fragment>
  );
};

export default CardLoader;
