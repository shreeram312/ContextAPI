import { useState } from "react";
import "./App.css";
import UserContextProvider from "./context/UserContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UserContextProvider>
        <h1>Hi</h1>
      </UserContextProvider>
    </>
  );
}

export default App;
