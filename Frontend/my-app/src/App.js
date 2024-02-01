import './App.css';
import MainPage from './components/main page'; 
import ContactForm from './components/Book';
import Places from './components/Culture';
import Historic from './components/historic';
import Tourism from './components/tourism';

function App() {
  return (
    <div className="App">
      <MainPage /> 
      <hr />
      
      <Places />
      <hr />
      <Historic />
      <hr />
      <Tourism />
    </div>
  );
}

export default App;
