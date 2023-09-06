import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const App =()=>{
  return(
    <div className="App">
      <div className="Header">

      <h1>Movie App</h1>
      </div>
      <div className="Search">
        <input type="text" placeholder="Keyword" />
        <button> Search</button>
      </div>

      <div className="Movie-list">
          <div className="Movie">Banana</div>
          <div className="Movie">Banana</div>
      </div>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);

