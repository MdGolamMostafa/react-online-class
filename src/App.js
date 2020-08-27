import React from "react";
import Class from "./components/Class/Class";
import Header from "./components/Header/Header";
function App() {
  return (
    <div className="App">

      {/* using bootstrap */}
      <h1 className="text-center py-4 logo">Online Class</h1>
      <Header></Header>
      <Class></Class>
    </div>
  );
}

export default App;
