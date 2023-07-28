// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const Users = () => {
//   const [users, setUsers] = useState<any>([]);
//   const [errors, setErrors] = useState<any>(null);
//   const [message, setMessage] = useState<any>("");

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((json) => setUsers(json.map((user: any) => user.name)))
//       .catch(() => setErrors("Error fetching users"));
//   }, []);

//   const handleSubmit = async () => {
//     try {
//       const response: any = await axios.post(
//         "https://jsonplaceholder.typicode.com/users",
//         { name: "Added name" }
//       );
//       setMessage(response.data.message);
//       setUsers([...users, response?.data?.name]);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <>
//       <h1>Users</h1>
//       {errors && <p>{errors}</p>}
//       <ul>
//         {users.map((user: any) => (
//           <li key={user}>{user}</li>
//         ))}
//       </ul>

//       <button onClick={handleSubmit}>Submit</button>
//       {message}
//     </>
//   );
// };

// export default Users;

import axios from "axios";
import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState<any>([]);
  const [errors, setErrors] = useState<any>(null);
  const [message, setMessage] = useState<any>("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) =>
        setUsers(json.map((user: any) => ({ title: user.title, id: user.id })))
      )
      .catch(() => setErrors("Error fetching users"));
  }, []);

  const handleSubmit = async () => {
    try {
      const response: any = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        { title: "Added name" }
      );
      setMessage(response.data.message);
      setUsers([
        ...users,
        { id: response?.data?.id, title: response?.data?.title },
      ]);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleUpdateUser = async (userId: any) => {
    const updatedUser = { id: userId, title: "Updated User" };
    const resp = await axios.put(
      `https://jsonplaceholder.typicode.com/posts/${userId}`,
      updatedUser
    );
    setUsers((prevUsers: any) =>
      prevUsers.map((user: any) =>
        user.id === userId ? { ...user, ...updatedUser } : user
      )
    );
  };

  const handleDeleteUser = async (userId: any) => {
    const resp = await axios.delete(
      `https://jsonplaceholder.typicode.com/posts/${userId}`
    );
    setUsers((prevUsers: any) =>
      prevUsers.filter((user: any) => user.id !== userId)
    );
  };

  return (
    <>
      <h1>Users</h1>
      {errors && <p>{errors}</p>}
      <ul>
        {users.map((user: any, index: number) => (
          <li key={index}>
            {user.title}
            <button onClick={() => handleUpdateUser(user.id)}>Update</button>
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <button onClick={handleSubmit}>Submit</button>
      {message}
    </>
  );
};

export default Users;



