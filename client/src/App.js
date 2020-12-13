import {Router} from '@reach/router';
import './App.css';
import Form from './components/Form';
import Update from './components/Update';
import All from './components/All';


function App() {
  return (
    <div className="App">
      <div >
      <h1 className="jumbotron">Favorite Authors</h1>
      <Router>
        <All path='/'/>
        <Form path='/new' />
        <Update path='/edit/:id' />
      </Router>
      </div>
    </div>
  );
}

export default App;
