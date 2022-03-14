import React from 'react';
import { ClassDetail as IClassDetail, Mentor } from '../interface/IClass';
import RegistrationForm from './RegistrationForm';

interface Props {
  selectedClass: IClassDetail;
  setClose: Function;
}

export default function ClassDetail({ selectedClass, setClose }: Props) {
  return (
    <div>
      <h3>
        {selectedClass.name}
      </h3>
      <p>
        {selectedClass.description}
      </p>
      {selectedClass.mentors.map((mentor: Mentor) => (
        <div key={mentor.id} style={{ marginBottom: '10px' }}>
          <h5 style={{ margin: '0px' }}>
            {mentor.name}
          </h5>
          <p style={{ margin: '0px', fontSize: '14px' }}>
            {mentor.description}
          </p>
        </div>
      ))}
      <RegistrationForm classId={selectedClass.id} setClose={setClose} />
    </div>
  );
}
