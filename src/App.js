import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PoemCard from './Components/PoemViewer/PoemCard';
import PoemPageView from './Components/PoemViewer/PoemPageView';
import Poems from './Components/data/Poems.json';
function App() {
    const  [data, setData] = Poems;

  return (
    <div>
      <PoemPageView PoemData={data}/>
    </div>
  );
}

export default App;
