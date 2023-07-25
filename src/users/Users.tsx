import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState<any>([]);
  const [errors, setErrors] = useState<any>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json.map((user: any) => user.name)))
      .catch(() => setErrors("Error fetching users"));
  }, []);
  return (
    <>
      <h1>Users</h1>
      {errors && <p>{errors}</p>}
      <ul>
        {users.map((user:any) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </>
  );
};

export default Users;