import './App.css';
import { useState } from "react";

function App() {
  const [name, setName] = useState('');
  const [datetime, setDateTime] = useState('');
  const [description, setDescription] = useState('');
  const addNewTransaction = (ev) => {
    ev.preventDefault();
    const url = process.env.REACT_APP_API_URL + '/transaction';
    fetch(url, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({name, description, datetime})
    }).then(response => {
      response.json()
    }).then(json => {
        console.log("result", json);  
      })
  }
  return (
    <main>
      <h1>$400<span>.00</span></h1>
      <form onSubmit={addNewTransaction}>
        <div className = "basic">
          <input type="text"
            value={name}
            onChange={ev => setName(ev.target.value)}
            placeholder={"+200 new samsung TV"} />
          <input type="datetime-local"
            value={datetime}
            onChange={ev => setDateTime(ev.target.value)}/>
        </div>
        <div className = "description">
          <input type="text"
            value={description}
            onChange={ev => setDescription(ev.target.value)}
            placeholder={"description"} />
        </div>
        <button type = "submit">Add New Transaction</button>
      </form>
      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">New Samsung TV</div>
            <div className="description">It was time for new TV</div>
          </div>
          <div className="right">
            <div className="price red">- $500</div>
            <div className="datetime">2023-12-1 15:45</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">Gig Job new website</div>
            <div className="description">Got a new gig income</div>
          </div>
          <div className="right">
            <div className="price green">+ $400</div>
            <div className="datetime">2023-12-1 15:45</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">Iphone</div>
            <div className="description">It was time for new iPhone</div>
          </div>
          <div className="right">
            <div className="price red">- $900</div>
            <div className="datetime">2023-12-1 15:45</div>
          </div>
        </div>
      </div>
   </main>
  );
}

export default App;
