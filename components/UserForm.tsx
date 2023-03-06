import * as React from 'react';
import styled from 'styled-components';

export interface UserForm {
  onUserAdded: ({ username, age }: { username: string, age: string }) => void
  onUserFormError: (message: string) => void
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 8px;

  & label {
    display: flex;
    flex-direction: column;
  }

  & > *:not(:last-child) {
    margin-bottom: 8px;
  }

  & button {
    width: 150px
  }
`;

const UserForm = ({ onUserAdded, onUserFormError }: UserForm) => {
  const [username, setUsername] = 
  React.useState('');
  const [age, setAge] = 
  React.useState('');

  const addUserHandler = (e) => {
    e.preventDefault();

    if ([username, age].some((field) => field.length === 0)) {
      onUserFormError(`Please enter a valid name and age (no empty values)`);
    } else if (Number(age) < 0) {
      onUserFormError(`Please enter a age greater than 0`);
    } else {
      onUserAdded({ username, age });
    }
  };

  const fieldChangeHandler = (e, setter) => {
    setter(e.target.value);
  }

  return (
    <Form onSubmit={addUserHandler}>
      <label>
        Username
        <input onChange={(e) => fieldChangeHandler(e, setUsername)} value={username} type="text" />
      </label>
      <label>
        Age (Years)
        <input onChange={(e) => fieldChangeHandler(e, setAge)} value={age} type="text" />
      </label>
      <button type="submit">Add User</button>
    </Form>
  );
};

export default UserForm;
