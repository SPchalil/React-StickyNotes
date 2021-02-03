import postit from './postit.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={postit} className="App-logo" alt="postit" />
        <div className = "heading"> <h1>Sticky Notes</h1> </div>
        <div className = "ref"> <h2> by Swapna <a className = "link" href="https://github.com/SPchalil/React-StickyNotes"> github </a>  </h2> </div>
        
      </header>
    </div>
  );
}

export default App;
