import './User.css'

import { useEffect, useState } from 'react';

const AddUser = () => {

  const [inputs, setInputs] = useState();
  const [errors, setErrors] = useState();
  const [people, setPeople] = useState([]);
  const [previousPeople, setPreviousPeople] = useState([]);

  useEffect(() => {
    const previousPeople = (localStorage.hasOwnProperty('people')) ? JSON.parse(localStorage.getItem('people')) : [];
    setPreviousPeople(previousPeople);
  }, []);

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    const error = value ? false : true;
    setInputs({...inputs, [name]: value});
    setErrors({...errors, [name]: error});
  }

  const handleSubmit = e => {
    e.preventDefault();
    setPeople([...people, inputs]);
    localStorage.setItem("people", JSON.stringify([...previousPeople, ...people]));
    const event = new Event('localStorageUpdated');
    document.dispatchEvent(event);
  }

  return(
    <form onSubmit={handleSubmit}>
      <div className="formData">
        <label>Name: </label> 
        <input type="text" name="name" onBlur={handleChange}/>
        {errors?.name && <span className='error'>Please fill the name input</span>}
      </div>
      <div className="formData">
        <label>Age: </label>
        <input type="number" name="age" onBlur={handleChange}/>
        {errors?.age && <span className='error'>Please fill the age input</span>}
      </div>
      <button className="saveButton" type="submit">Save</button>
    </form>
  )
}

export default AddUser;