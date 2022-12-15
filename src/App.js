import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import {data} from './data';

function App() {
  const [count, setCount] = useState(0);
  const [option, setOption] = useState(0);
  const [sen, setSen] = useState([]);
  const [para, setPara] = useState([]);
  const [text, setText] = useState([]);


  const handleSubmit =(e) => {
    e.preventDefault();
    let text = '';
    let amount = parseInt(count);
    if (amount < 0 ) amount =1;
    let i = 1;
    let sentence = '';
    let newSentence = '';
    
    sentence = (data.sort(() => 0.5 - Math.random()).slice (0,(Math.random() * (15 - 7) + 7)).join(' ')) +`.`;
    sentence= sentence.charAt(0).toUpperCase() + sentence.slice(1);
 
    while (i < amount) {

      newSentence = (data.sort(() => 0.5 - Math.random()).slice (0,(Math.random() * (15 - 7) + 7)).join(' '));
      newSentence = newSentence.charAt(0).toUpperCase() + newSentence.slice(1);
      sentence = sentence +` `+ newSentence +`.`;
      i = i + 1;
    };
    setText(sentence);
    
  };
  
  

  return (
    <div className="App">
      <h1>Lorem Dimsum</h1>
      <form onSubmit={handleSubmit}>

        <input 
        type="number" 
        name="amount" 
        id="amount"
        value={count}
        onChange={(e) => setCount(e.target.value)} 
        />

        <select name = "options"
        onChange={(e) => setOption(e.target.value)} >
          <option value = "paragraphs">paragraphs</option>
          <option value = "sentences">sentences</option>
        </select>
        <button className="btn">Generate</button>
      </form>
      <article>
        <div>
        {text}
        
        </div>
      </article>
    </div>
  );
}

export default App;
