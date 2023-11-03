import { useEffect, useState } from "react";
import { transformedUser } from "./utils";
import { fetchUsers } from "./api";
import { User } from "../../models/User";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const result = await fetchUsers();
      console.log("result", result);
      const transformed = result.users.map(transformedUser);
      setUsers(transformed);
      setLoading(false);
    })();
  }, []);

  const deleteUser = (id: number) => {
    const nextUsers = users.filter((user) => user.id !== id);
    setUsers(nextUsers);
  };

  return { users, loading, setUsers, deleteUser };
};
