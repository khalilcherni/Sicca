import './App.css';
import MainPage from './components/main page'; 
// import ContactForm from './components/Book';

import Historic from './components/historic';
import Tourism from './components/tourism';
import Add from './components/Add';
import Culture from "./components/Culture"

function App() {
  return (
    <div className="App">
      <MainPage /> 
      <hr />
      
     
      <hr />
      <Historic />
      <hr />
      <Culture/>
      {/* <Tourism /> */}
      {/* <Add/>  */}


    </div>
  );
}

export default App;
