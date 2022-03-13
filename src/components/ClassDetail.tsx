import React from 'react';
import { ClassDetail as IClassDetail, Mentor } from '../interface/IClass';

interface Props {
  selectedClass: IClassDetail;
}

export default function ClassDetail({ selectedClass }: Props) {
  return (
    <div>
      <h3>
        {selectedClass.name}
      </h3>
      <p>
        {selectedClass.description}
      </p>
      {selectedClass.mentors.map((mentor: Mentor) => (
        <div style={{ marginBottom: '10px' }}>
          <h5 style={{ margin: '0px' }}>
            {mentor.name}
          </h5>
          <p style={{ margin: '0px' }}>
            {mentor.description}
          </p>
        </div>
      ))}
    </div>
  );
}
