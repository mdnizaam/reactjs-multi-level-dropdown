import React from "react";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="h-[100vh] flex ">
      <Sidebar />
      <div className="w-full flex justify-center items-center">
        Main Contents
      </div>
    </div>
  );
};

export default App;
