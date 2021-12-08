import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PoemCard from './Components/PoemViewer/PoemCard';

function App() {
  return (
    <div>
      < PoemCard id="1" title="Batman" description={"A nonsense sentence has a logical, grammatical structure but no content or meaning. The second “sentence” is pure gibberish; it is a random collection of words with no logical or grammatical structure. "} />
    </div >
  );
}

export default App;
