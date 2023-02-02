import './App.css';
import RandomAdvice from './components/advice-api/RandomAdvice';
import SearchAdvice from './components/advice-api/SearchAdvice';

function App() {

  return (
    <>
      <SearchAdvice />
      <RandomAdvice />
    </>
    
  );
}

export default App;
