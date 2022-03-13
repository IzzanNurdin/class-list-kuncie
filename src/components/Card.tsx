import React from 'react';
import styled from 'styled-components';

interface IClassCard {
  title: string;
  // eslint-disable-next-line react/require-default-props
  description?: string;
  onClick: Function;
}

const CardContainer = styled('div')`
  @media (max-width: 1024px) {
    width: auto;
    max-width: 120px;
  }
  cursor: pointer;
  width: 240px;
  height: 120px;
  padding: 12px 24px;
  background-color: #141E27;
  color: white;
  border-radius: 8px;
  box-shadow: 8px 8px 8px 0px #203239;
`;

function Card({ title, description, onClick }: IClassCard) {
  return (
    <CardContainer onClick={() => onClick()}>
      <h4>{title}</h4>
      {description
        && (
        <p>
          {description}
        </p>
        )}
    </CardContainer>
  );
}

export default Card;
