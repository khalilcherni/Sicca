
import './App.css';
import ContactForm from './components/Book';
import Places from './components/Culture';
import Historic from './components/historic';
import Tourism from './components/tourism';

function App() {
  return (
    <div className="App">
      <ContactForm/>
      <hr/>
<Places/>
<hr/>
<Historic/>
<hr/>
<Tourism/>
    </div>
  );
}

export default App;
