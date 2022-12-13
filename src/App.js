import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import {data} from './data';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit =(e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (amount < 0 ) amount =1;
    if (amount > 11 ) amount = 11;
    setText(data.slice (0,amount));
    return;
    
  };

  return (
    <div className="App">
      <h1>Lorem Dimsum</h1>
      <form onSubmit={handleSubmit}>
        <label>Paragraph:</label>
        <input 
        type="number" 
        name='amount' 
        id='amount'
        value={count}
        onChange={(e) => setCount(e.target.value)} 
        />
        <button className='btn'>Generate</button>
      </form>
      <article>
        {text.map((data, index) => (
          <p key={index}>{data}</p>
        ))}
      </article>
    </div>
  );
}

export default App;
