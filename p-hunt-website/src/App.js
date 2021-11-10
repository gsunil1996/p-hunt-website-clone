import './App.css';

// temporary code for navbar
import { useEffect, useState } from "react"

import { Community } from './communityPage/communityPage';

function App() {
  // temporary code for navbar
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
  }, []);
  console.log(offset);
  // -----------------------------------

  return (
    <div>
      {/* temporary div for navbar */}
      <div className="one" style={{ position: offset > 10 ? "fixed" : "", marginTop: offset > 10 ? "0px" : "10px" }}>Navbar code</div>
      {/* -------------------- */}
      <Community />
    </div>
  );
}

export default App;
