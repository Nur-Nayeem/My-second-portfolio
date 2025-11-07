import React from "react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="h-screen gradient-bg">
      <header className="container mx-auto py-5">
        <Navbar />
      </header>
    </div>
  );
};

export default App;
