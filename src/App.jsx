import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProgressBar from "./elements/progress-bar";

function UpdateProgress() {}

function App() {
  const [progress, setCount] = useState(0);

  const handleUpdateProgress = () => {
    if (progress !== 100) {
      setCount(progress + 10);
    }
  };

  return (
    <div>
      <ProgressBar progress={progress} />
      <button onClick={handleUpdateProgress}>Click Me</button>
    </div>
  );
}

export default App;
