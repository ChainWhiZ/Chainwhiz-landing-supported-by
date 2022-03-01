import { useState } from "react";
import { Near, Polygon } from "./SupportCard";
import { HoverCardNear, HoverCardPolygon } from "./SupportHoverCard";


function SupportSection(params) {
    const [hoverLeft, setHoverLeft] = useState(false);
    const [hoverRight, setHoverRight] = useState(false);
    return(<section className="App-header">
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
      <div id="read" className={hoverLeft|hoverRight?"text-yellow row hover": "text-yellow row"}>
        <a href>Read Articles &nbsp;</a>
        <svg viewBox="0 0 1000 1000" xmlSpace="preserve">
          <path d="M990 85.4L462.3 914.6L10 85.4H990z" />
        </svg>
      </div>
    </div>
  </section>);
}

export default SupportSection;