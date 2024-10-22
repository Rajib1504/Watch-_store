import { useEffect, useState } from "react";
import "./App.css";
import watch from "../public/watch.json";
import Watch from "./assets/watch";
function App() {
  const [watch, setWatch] = useState([]);

  useEffect(() => {
    fetch("watch.json")
      .then((res) => res.json())
      .then((data) => setWatch(data));
  }, []);

  return (
    <>
      <h1 className="title">Watch Shop</h1>
      <div className="parent">
        {watch.map((single) => (
          <Watch key={single.id} {...single}></Watch>
        ))}
      </div>
    </>
  );
}

export default App;
