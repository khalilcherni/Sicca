import './App.css';
import MainPage from './components/main page'; 
// import ContactForm from './components/Book';2

import Historic from './components/historic';
import Tourism from './components/tourism';
import Add from './components/Add';

function App() {
  return (
    <div className="App">
      <MainPage /> 
      <hr />
      
     
      <hr />
      <Historic />
      <hr />
      <Add/>
      <Tourism /> 
    </div>
  );
}

export default App;
