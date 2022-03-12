import React from 'react';
import styled from 'styled-components';
import Card from './Card';

interface Props {
  data: any;
}

const CardsContainer = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

function ClassesCards({ data }: Props) {
  return (
    <CardsContainer>
      {data && data.items && data.items.map((obj: any) => (
        <Card key={obj.id} title={obj.name} />
      ))}
    </CardsContainer>
  );
}

export default ClassesCards;
