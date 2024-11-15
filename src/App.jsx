import { useState } from "react";
import "./App.css";
import { fruits } from "./Components/data";

function App() {
function refresh()
{window.location.reload();
}
  return (
    <>
    <div>
          <button className="buton" onClick={refresh}>Rastgele Post</button>
        </div>
      <div className="flex">
        {fruits.map((x) => (
          <div className="card" key={x.id}>
            
            <img src={x.img}/> 
            <h4>Cartpostal</h4>
            <h4>Fiyat: {x.price} TL</h4>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
