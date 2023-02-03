import { useEffect, useState } from 'react';
import './App.css';
import AddUser from './components/Users/AddUser';
import ShowUsers from './components/Users/ShowUsers';

function App() {

  const [people, setPeople] = useState([]);

  useEffect(() => {
    document.addEventListener('localStorageUpdated', handlePeople, false);
  }, [])

  const handlePeople = () => {
    setPeople(JSON.parse(localStorage.getItem('people')));
  }
  return (
    <div>
      <AddUser />
      {people && <ShowUsers people={people} />}
    </div>
  );
}

export default App;
