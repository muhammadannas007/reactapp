import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Counter from './components/Counter'
import Message from './components/Message';
import Counter2 from './components/Counter2';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';

function App() {
  return (
    <div className="App">
     {/* <Greet firstName="Hareesh" lastName="Sapparad" />
     <Greet firstName="Nivas" lastName="BJ" />
     <Welcome firstName="Hareesh" lastName="Sapparad" />
     <Welcome firstName="Nivas" lastName="BJ" />
     <Hello />
     <Counter />
      <Message /> */}
      {/* <Greet firstName="Nivas" lastName="BJ" /> */}
      {/* <Welcome firstName="Hareesh" lastName="Sapparad" /> */}
      {/* <Counter2 /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <EventBind /> */}
      {/* <ParentComponent /> */}
      <UserGreeting />
    </div>
  );
}

export default App;
