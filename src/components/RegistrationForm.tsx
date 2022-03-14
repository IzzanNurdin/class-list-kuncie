/* eslint-disable no-console */
/* eslint-disable no-alert */
import React from 'react';
import styled from 'styled-components';
import { postRegisterClass } from '../utils/api';

interface Props {
  classId: string;
  setClose: Function;
}

const FormWrapper = styled('form')`
  border: 1px solid #808080;
  padding: 12px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

const Header = styled('h3')`
  border-bottom: 1px solid #808080;
  margin-top: 0px;
  margin-bottom: 0px;
  padding-bottom: 12px;
`;

const Label = styled('label')`
  font-weight: bold;
  color: #808080;
  margin-top: 12px;
  margin-bottom: 12px;
`;

const Input = styled('input')`
  border: 1px solid;
  border-radius: 8px;
  line-height: 12px;
  padding: 12px;
  font-size: 14px;
`;

const Button = styled('button')`
  background-color: #0096FF;
  cursor: pointer;
  margin-top: 24px;
  border-radius: 8px;
  font-size: 18px;
  border: none;
  color: white;
  padding: 8px;
  &:hover {
    background-color: #0047AB;
  }
`;

export default function RegistrationForm({ classId, setClose }: Props) {
  const [fullName, setFullName] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [loading, setLoading] = React.useState<boolean>(false);

  function onSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    setLoading(true);
    postRegisterClass({ classId, attendeeFullName: fullName, attendeeEmail: email })
      .then((resp: any) => {
        setLoading(false);
        alert(resp.message);
        setClose();
      })
      .catch((err: any) => {
        console.error(err);
        setLoading(false);
        alert(err.response.data.message);
      });
  }

  return (
    <FormWrapper data-testid="FormWrapper" onSubmit={(e) => onSubmit(e)}>
      <Header>Registrasi</Header>
      <Label>Nama Lengkap</Label>
      <Input type="text" name="attendeeFullName" value={fullName} onChange={(e) => setFullName(e.target.value)} />
      <Label>Email</Label>
      <Input type="email" name="attendeeEmail" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Button disabled={loading}>Daftar</Button>
    </FormWrapper>
  );
}
