import { useState } from "react";

const SearchAdvice = () => {
  const [advice, setAdvice] = useState([]);
  const [query, setQuery] = useState('');

  const handleQuery = e => {
    setQuery(e.target.value);
  }

  const handleSearch = async () => {
    const response = await fetch(`https://api.adviceslip.com/advice/search/${query}`);
    const data = await response.json();
    setAdvice(data.slips)
  }

  return (
    <div>
      <input type="text" name="query" onChange={handleQuery}/>
      <button onClick={handleSearch}>Search</button>
      <ul>
      {advice &&
      <>
        {advice.map(adv => (
          <li key={adv.id}>{adv.advice}</li>
        ))}
      </>
      }
      </ul>
    </div>
  )

}

export default SearchAdvice;