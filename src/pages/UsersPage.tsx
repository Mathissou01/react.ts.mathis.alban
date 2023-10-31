import { useEffect, useMemo, useState } from "react";
import InputComponent from "../components/Input";
import { createFakeUser } from "../services/createFakeUser";
import ListItem from "../components/ListItem";
import styled from "@emotion/styled";
import { User } from "../models/User";

function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [searchFilter, setSearchFilter] = useState("");

  useEffect(() => {
    setTimeout(() => {
      const nextUsers = createFakeUser(10);
      setUsers(nextUsers);
      setLoading(false);
    }, 750);
  }, []);

  const createUser = () => {
    const nextUsers = createFakeUser(1);
    setUsers([...users, ...nextUsers]);
  };

  const deleteUser = (id: number) => {
    const nextUsers = users.filter((user) => user.id !== id);
    setUsers(nextUsers);
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
                onClick={() => deleteUser(id)}
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
