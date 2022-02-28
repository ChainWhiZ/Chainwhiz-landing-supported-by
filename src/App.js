import { Near, Polygon } from "./components/SupportCard";
import { HoverCardNear, HoverCardPolygon } from "./components/SupportHoverCard";
import { useState } from "react";
import "./App.css";

function App() {
  const [hoverLeft, setHoverLeft] = useState(false);
  const [hoverRight, setHoverRight] = useState(false);

  return (
    <div className="App">
      <section className="App-header">
        <span className="row">
          <h3>Our Biggest</h3>
          <h3 className="text-yellow">&nbsp;Cheerleader</h3>
        </span>

        <div id="cheerleaders">
          <div
            onMouseEnter={()=>setHoverRight(true)}
            onMouseLeave={()=>setHoverRight(false)}
          >
            <Near />
            <HoverCardPolygon visible={hoverLeft}/>
          </div>
          <div
            onMouseEnter={()=>setHoverLeft(true)}
            onMouseLeave={()=>setHoverLeft(false)}
          >
            <Polygon />
            <HoverCardNear visible={hoverRight} />
          </div>
        </div>
        <div>
          <div id="read" className="text-yellow row">
            <a>Read Articles &nbsp;</a>
            <svg viewBox="0 0 1000 1000" xmlSpace="preserve">
              <path d="M990 85.4L462.3 914.6L10 85.4H990z" />
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
