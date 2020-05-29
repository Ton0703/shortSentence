import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import Phone from "./bg";
import "./App.css";
import Button from "./components/Button";
import Box from "./components/Box";

function App() {
  const [advice, set] = useState([]);
  const ref = useRef(null);
  useEffect(() => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }, [advice]);
  const handleClick = (e) => {
    e.preventDefault();
    axios
      .get("https://v1.hitokoto.cn?c=d")
      .then((res) => {
        set([...advice, res.data.hitokoto]);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="App">
      <div className="container">
        <Phone />
        <Button onClick={handleClick} />
        <div className="lists">
          {advice.map((item, index) => (
            <Box text={item} key={index} />
          ))}
          <div ref={ref}></div>
        </div>
      </div>
    </div>
  );
}

export default App;
