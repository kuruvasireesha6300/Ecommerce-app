import Card from "./COMPONENTS/Card";
import CustomerData from "./COMPONENTS/CustomerData";
import Navbar from "./COMPONENTS/Navbar";
import React from "react";


function App() {

  const [isLoggedIn, setIsLoggedIn] = React.useState(false)

  // isLoggedIn = false
  return (
    <div>
      <Navbar data={setIsLoggedIn} initial={isLoggedIn}/>
      <CustomerData/>
      
    </div>
  );
}

export default App;
