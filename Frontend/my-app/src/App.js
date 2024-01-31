
import './App.css';
import ContactForm from './components/Book';
import Places from './components/Culture';
import Historic from './components/historic';

function App() {
  return (
    <div className="App">
      <ContactForm/>
      <hr/>
<Places/>
<hr/>
<Historic/>
    </div>
  );
}

export default App;
