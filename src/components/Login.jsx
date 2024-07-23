import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        value={username}
        placeholder="Enter name"
      />
      <input
        onChange={(e) => setpassword(e.target.value)}
        type="password"
        value={password}
        placeholder="Enter password"
      />
      <button onClick={handleSubmit}>Submit </button>
    </div>
  );
};

export default Login;
