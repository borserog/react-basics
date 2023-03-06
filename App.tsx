import * as React from 'react';
import styled from 'styled-components';
import Card from './components/Card';
import UserList from './components/UserList';

import UserForm from './components/UserForm';
import Modal from './components/Modal';



import './style.css';

const Main = styled.main`
  font-size: 1.6rem;
  height: 100%;
  padding: 32px;

  & div {
    margin-bottom: 10px;
  }
`;

export default function App() {
  const [users, setUsers] = React.useState([]);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalMessage, setModalMessage] = React.useState('');



  const userAddedHandler = (e) => {
    setUsers((prevState) => [...prevState, e]);
  }

  const userAddedErrorHandler = (message: string) => {
    setModalMessage(message);
    setModalOpen(true);
  }

  const closeModalHandler = () => {
    setModalOpen(false);
  };

  return (
    <Main>
      {modalOpen && <Modal message={modalMessage} onClose={closeModalHandler}/>}
      <Card>
        <UserForm onUserAdded={userAddedHandler} onUserFormError={userAddedErrorHandler}/>
      </Card>
      <Card>
        <UserList users={users} />
      </Card>
    </Main>
  );
}
