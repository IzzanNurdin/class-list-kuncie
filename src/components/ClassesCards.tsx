/* eslint-disable no-console */
import React from 'react';
import styled from 'styled-components';
import { ClassDetail as IClassDetail } from '../interface/IClass';
import { IResponse } from '../interface/IResponse';
import { fetchClassById } from '../utils/api';
import Card from './Card';
import ClassDetail from './ClassDetail';
import Modal from './Modal';

interface Props {
  data: any;
}

const CardsContainer = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

function fetchClassDetail(id: string) {
  return fetchClassById(id)
    .then((resp: IResponse<IClassDetail>) => resp.data)
    .catch((resp: any) => console.error(resp));
}

function ClassesCards({ data }: Props) {
  const [openModal, setOpenModal] = React.useState(false);
  const [selectedClass, setSelectedClass] = React.useState<IClassDetail>();

  return (
    <CardsContainer>
      {data && data.items && data.items.map((obj: any) => (
        <Card
          key={obj.id}
          title={obj.name}
          onClick={async () => {
            setOpenModal(true);
            setSelectedClass(await fetchClassDetail(obj.id) as IClassDetail);
          }}
        />
      ))}
      <Modal
        show={openModal}
        title="Detail Kelas"
        content={selectedClass
          && (
          <ClassDetail
            selectedClass={selectedClass}
            setClose={() => setOpenModal(false)}
          />
          )}
        setClose={() => setOpenModal(false)}
      />
    </CardsContainer>
  );
}

export default ClassesCards;
