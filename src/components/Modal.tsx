import React from 'react';
import styled from 'styled-components';

interface Props {
  show: boolean;
  setClose: Function;
  title: string;
  content: React.ReactNode;
}

const Overlay = styled('div')`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled('div')`
  width: 25%;
  background-color: #fff;
  border-radius: 8px;
`;

const ModalHeader = styled('div')`
  padding: 20px;
`;

const ModalTitle = styled('h3')`
  margin: 0;
`;

const ModalBody = styled('div')`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
`;

const ModalFooter = styled('div')`
  margin: 0;
  padding: 20px;
  display: flex;
  flex-direction: row-reverse;
`;

const Button = styled('button')`
  background-color:#FF0000;
  cursor: pointer;
  border-radius: 8px;
  font-size: 16px;
  border: none;
  color: white;
  padding: 12px;
  &:hover {
    background-color: #DC143C;
  }
`;

export default function Modal({
  show, title, content, setClose,
}: Props) {
  if (!show) {
    return null;
  }

  return (
    <Overlay>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>
            {title}
          </ModalTitle>
        </ModalHeader>
        <ModalBody>
          {content}
        </ModalBody>
        <ModalFooter>
          <Button type="button" onClick={() => setClose()}>Tutup</Button>
        </ModalFooter>
      </ModalContent>
    </Overlay>
  );
}
