function SupportHoverCardNear({ visible }) {
  console.log("hover", visible);
  return (
    <div className={visible ? "hide animate_right" : null}>
      <h5>What is NEAR?</h5>
      <p>
        Through simple, secure, and scalable technology, NEAR empowers millions
        to invent and explore new experiences. Business, creativity, and
        community are being reimagined for a more sustainable and inclusive
        future.
      </p>
    </div>
  );
}

function SupportHoverCardPolygon({ visible }) {
  console.log("polygon", visible);
  return (
    <div className={visible ? "hide animate_left" : null}>
      <h5>What is Polygon?</h5>
      <p>
        Polygon believes in Web3 for all. Polygon is a decentralised Ethereum
        scaling platform that enables developers to build scalable user-friendly
        dApps with low transaction fees without ever sacrificing on security.
      </p>
    </div>
  );
}

export const HoverCardNear = SupportHoverCardNear;
export const HoverCardPolygon = SupportHoverCardPolygon;
