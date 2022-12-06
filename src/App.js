import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [users, setUsers] = useState([]);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzg1ZTM5ZGQxNmExN2QyN2VlZmY5M2UiLCJpYXQiOjE2NzAzMjMxODJ9.q2yU8ZFCacyciYgVGqYDVa66eck0vWZMidK59oRz9Ro";
  const fetchAllUsers = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = res.data.users;
      console.log("data=>", data);
      setUsers(data);
    } catch (err) {}
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <>
      <h1>Welcome to the frontend of netflix dummy.</h1>
      {users.map((user) => {
        return <h1>{user.username}</h1>;
      })}
    </>
  );
}

export default App;
