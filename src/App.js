import { useState } from 'react';
import './App.css';

function App() {
  const [topRight, setTopRight] = useState(0);
  const [topLeft, setTopLeft] = useState(0);
  const [bottomRight, setBottomRight] = useState(0);
  const [bottomLeft, setBottomLeft] = useState(0);
  const radius = `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`;

  return (
    <>
      <h2>Border Radius Generator</h2>
      <div className="app">
        <div className="left">
          <div style={{ borderRadius: radius }} className="square"></div>
          <div className="label">border-radius: {radius}</div>
        </div>
        <div className="right">
          <div>
            <label htmlFor="topleft">Top Left:</label>
            <div>
              <input type="number" id='topleft' className="number" value={topLeft} onChange={e => setTopLeft(e.target.value)} />
              <input type="range" className="range" min='0' max='200' value={topLeft} onChange={e => setTopLeft(e.target.value)} />
            </div>
          </div>
          <div>
            <label htmlFor="topright">Top Right:</label>
            <div>
              <input type="number" id='topright' className="number" value={topRight} onChange={e => setTopRight(e.target.value)} />
              <input type="range" className="range" min='0' max='200' value={topRight} onChange={e => setTopRight(e.target.value)} />
            </div>
          </div>
          <div>
            <label htmlFor="bottomright">Bottom Right:</label>
            <div>
              <input type="number" id='bottomright' className="number" value={bottomRight} onChange={e => setBottomRight(e.target.value)} />
              <input type="range" className="range" min='0' max='200' value={bottomRight} onChange={e => setBottomRight(e.target.value)} />
            </div>
          </div>
          <div>
            <label htmlFor="bottomleft">Bottom Left:</label>
            <div>
              <input type="number" id='bottomleft' className="number" value={bottomLeft} onChange={e => setBottomLeft(e.target.value)} />
              <input type="range" className="range" min='0' max='200' value={bottomLeft} onChange={e => setBottomLeft(e.target.value)} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
