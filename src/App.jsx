import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hello react!</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
        perspiciatis eos illum nam molestiae suscipit explicabo tempore dolorem
        exercitationem. Ab doloribus hic maiores nihil esse consequuntur est
        perferendis temporibus voluptatum.
      </p>
    </div>
  );
}

export default App;
