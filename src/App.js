import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Counter from './components/Counter'
import Message from './components/Message';

function App() {
  return (
    <div className="App">
     <Greet firstName="Hareesh" lastName="Sapparad" />
     <Greet firstName="Nivas" lastName="BJ" />
     <Welcome firstName="Hareesh" lastName="Sapparad" />
     <Welcome firstName="Nivas" lastName="BJ" />
     <Hello />
     <Counter />
      <Message />
    </div>
  );
}

export default App;
