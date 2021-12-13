
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PoemPageView from './Components/PoemViewer/PoemPageView';
import Poems from './Components/data/Poems.json';
import { useState } from 'react';
function App() {
  const [data, setData] = useState([...Poems.library]);

  return (
    <div>
      <PoemPageView PoemData={data} />
    </div>
  );
}

export default App;
