import React from "react";
import Button,{Button1} from "./components/Button";
import Default from "./components/Default";
import Named from "./components/Named";

//react component
const App = () => {
  return (
    <div>
      hello app
      <Button />
      <Button1 />
      <Named />
      <Default />
      
    </div>
  );
};

export default App;
