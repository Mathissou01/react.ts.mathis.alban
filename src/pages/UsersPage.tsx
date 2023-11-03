import { useState } from "react";
import InputComponent from "../components/Input";
import { createFakeUser } from "../services/createFakeUser";
import ListItem from "../components/ListItem";
import styled from "@emotion/styled";
import { useUsers } from "../services/users/useUsers";

function UsersPage() {
  useUsers();
  const { users, loading, setUsers, deleteUsers } = useUsers();
  const [searchFilter, setSearchFilter] = useState("");

  const createUser = () => {
    const nextUsers = createFakeUser(1);
    setUsers([...users, ...nextUsers]);
  };

  return (
    <div className="c-UsersPage">
      <Button isDisabled={false} onClick={createUser}>
        Create user
      </Button>
      <InputComponent
        onChange={(event) => setSearchFilter(event.target.value)}
        placeholder="Search..."
      />
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <ListContainer>
          {users
            .filter((user) => user.name.match(new RegExp(searchFilter, "ig")))
            .map(({ id, name, avatar }) => (
              <ListItem
                key={id}
                name={name}
                avatar={avatar}
                onClick={() => deleteUsers(id)}
              />
            ))}
        </ListContainer>
      )}
    </div>
  );
}

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Button = styled.button<{ isDisabled: boolean }>`
  background-color: red;
  outline: inherit;
  opacity: ${({ isDisabled }) => (isDisabled ? 0.5 : 1)};
  user-select: ${({ isDisabled }) => (isDisabled ? "none" : "initial")};
  cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "pointer")};
  border-radius: 0.5rem;

  &:hover {
    background-color: ${({ isDisabled }) => (isDisabled ? "" : "blue")};
  }
`;

export default UsersPage;
