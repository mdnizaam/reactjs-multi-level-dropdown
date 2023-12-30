import React from "react";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="h-[100vh] flex">
      <Sidebar />
      <div>Main Content</div>
    </div>
  );
};

export default App;
