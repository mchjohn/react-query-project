import { useState } from 'react';
import { useQuery } from 'react-query';

import { api } from '../../api/api';
import { User } from '../../models/UserModel';

import { UserCard } from '../UserCard/UserCard';
import { EditModal } from '../EditModal/EditModal';

import { Container } from './styles';

export function UserList() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const { data, isLoading, isError } = useQuery('user-list', api.getUsers);

  const onEditUser = async (user: User) => {
    setSelectedUser(user);
  }

  const onResetUserSelected = async () => {
    setSelectedUser(null);
  }

  return (
    <Container>
      <h1>Lista de Usuários</h1>

      {isLoading && <h3>Carregando...</h3>}

      {isError && <h3>Ocorreu algum erro...</h3>}

      {
        data?.map(user =>
          <UserCard
            key={user.id}
            user={user}
            onClickEdit={() => onEditUser(user)} />
        )
      }

      {
        selectedUser &&
          <EditModal
            user={selectedUser}
            show={!!selectedUser}
            handleClose={onResetUserSelected} />
      }
    </Container>
  );
}
