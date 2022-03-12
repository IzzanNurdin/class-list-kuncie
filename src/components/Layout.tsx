import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode
}

const Wrapper = styled('div')`
  @media (max-width: 768px) {
    width: 100%;
  }
  width: 50%;
  height: 100%;
  overflow: auto;
  padding: 24px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background-color: #EEEDDE;
`;

export default function Layout({ children }: Props) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}
