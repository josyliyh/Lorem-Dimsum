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

  const defaultProps = {
    p: 1,
    avgWordsPerSentence: 8,
    avgSentencesPerParagraph: 8,
    startWithLoremIpsum: true,
    random: true,
  };
  
  const handleSubmit =(e) => {
    e.preventDefault();
    let text = '';
    let amount = parseInt(count);
    if (amount < 0 ) amount =1;
    let i = 0;
    let sentence = '';
    // setText(data.slice (0,amount));
    // data = data.sort(() => 0.5 - Math.random());
    
    // setText(data.sort(() => 0.5 - Math.random()).slice (0,(Math.random() * (15 - 7) + 7)));
    while (i < amount) {
      // sentence.slice(1);
      sentence =(sentence + (data.sort(() => 0.5 - Math.random()).slice (0,(Math.random() * (15 - 7) + 7))));
      i = i + 1;
    };
    setText(sentence);
    // setText(text + (data.sort(() => 0.5 - Math.random()).slice (0,(Math.random() * (15 - 7) + 7))));

    // return;
    // if(count > 2000){
    //   count = 2000; // max words which can be generated is 2000 only
    //   } else if(count < 1 ){
    //       count = 5; // min words is 5 
    //   } 

    
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
        {/* {text.map((data, index) => (
          <div className='dimsum' key={index}>{data}</div>
        ))} */}
        {text}
        
        </div>
      </article>
    </div>
  );
}

export default App;
