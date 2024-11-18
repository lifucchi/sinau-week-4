// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import TodoPage from "./pages/TodoPage";

import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-gray-500 min-h-screen w-full ">
        <TodoPage />
      </div>
    </>
  );
}

export default App;
