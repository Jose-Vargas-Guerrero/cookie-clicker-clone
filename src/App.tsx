import "./App.css";
import { useState } from "react";

function App() {
  const [isReduced, setIsReduced] = useState(false);
  const [click, setClick] = useState(1);
  const [count, setCount] = useState(0);

  const handleClick = (click: number) => {
    setCount(count + click);
    setIsReduced(!isReduced);
  };

  const handleFiveClicks = () => {
    setClick(5);
  };

  const handleTenClicks = () => {
    setClick(10)
  }

  const handleFifteenClicks = () => {
    setClick(15)
  }

  return (
    <>
      <div className="container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          width="200"
          height="200"
          onClick={() => handleClick(click)}
          style={{
            width: isReduced ? "190px" : "200px",
            height: isReduced ? "190px" : "200px",
            transition:
              "transform 0.1s ease-in-out, width 0.1s ease-in, height 0.1s ease-in",
            transform: isReduced ? "scale(0.95)" : "scale(1)",
            transformOrigin: "center",
            cursor: "pointer",
          }}
        >
          <circle cx="100" cy="100" r="90" fill="#d2a073" />
          <circle cx="60" cy="60" r="10" fill="#a05020" />
          <circle cx="80" cy="40" r="12" fill="#a05020" />
          <circle cx="120" cy="30" r="14" fill="#a05020" />
          <circle cx="150" cy="70" r="16" fill="#a05020" />
          <circle cx="120" cy="100" r="18" fill="#a05020" />
          <circle cx="80" cy="110" r="20" fill="#a05020" />
          <circle cx="40" cy="90" r="22" fill="#a05020" />
        </svg>
      </div>
      <div className="counter">
        <strong>cockies {count}</strong>
      </div>
      <div className="store">
        <strong>Click Boosters:</strong>
        {count < 100 ? (
          <button className="inactive">
            5 clicks
          </button>
        ) : (
          <button className="active" onClick={handleFiveClicks}>
            5 clicks
          </button>
        )}
        {
          count < 300? (
            <button className="inactive">10 clicks</button>
          ) : (
            <button className="active" onClick={handleTenClicks}>10 clicks</button>
          )
        }
        {
          count < 500 ?  (
            <button className="inactive">15 clicks</button>
          ) : (
            <button className="active" onClick={handleFifteenClicks}>15 clicks</button>
          )
        }
        
      </div>
      <br/>
        <div>
          {
            count < 1000 ? <h1>la meta es 1000 puntos</h1> : <h1>Felicidades has ganado el juego toma una galleta 🍪</h1>
          }
        </div>
    </>
  );
}

export default App;
