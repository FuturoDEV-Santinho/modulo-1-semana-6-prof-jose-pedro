import { useEffect, useState } from "react";

const RepoList = () => {

  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function fetchData(){
      const response = await fetch('https://api.github.com/users/simaoj/repos');
      const data = await response.json();
      setRepos(data)
    }
    fetchData();
  }, []);

  const handleFavorite = id => {
    const newRepos = repos.map(repo => {
      return repo.id === id ? {...repo, favorite: !repo.favorite} : repo
    });
    setRepos(newRepos);
  }

  return(
    <ul>
    {repos.map(repo => (
      <li>
        {repo.name}
        {repo.favorite && <span>(Favorite)</span>}
        <button onClick={() => handleFavorite(repo.id)}>Favorite</button>
      </li>  
    ))}
    </ul>
  )

}

export default RepoList;