
import { useState } from 'react';
import './App.css';
import gitLogo from './Assets/logoGithub.png';
import Input from './Pages/Input';
import ItemRepo from './Pages/ItemRepo';
import Button from './Pages/Button';
import { api } from './Services/Api';

export default function App() {
  const [currentRepo, setCurrentRepo] = useState(``);
  const [repos,setRepos] = useState([]);

  const handleSearchRepo = async () => {
    try {
      const response = await api.get(`repos/${currentRepo}`);
      
      // Verifica se o repositório já está na lista
      if (!repos.find(repo => repo.id === response.data.id)) {
        setRepos([...repos, response.data]);
      } else {
        alert('Repositório já adicionado!');
      }
    } catch (error) {
      console.error("Erro ao buscar repositório:", error);
      alert("Repositório não encontrado!");
    }
  };

  const removeRepo = (id) => {
    const newRepos = repos.filter(repo => repo.id !== id);
    setRepos(newRepos);
  }

  return (
    <div className="App">
        <img src={gitLogo} width={72} height={72} />
        <Input value={currentRepo} onChange={(e)=> setCurrentRepo(e.target.value)} />
        
        <Button onClick={handleSearchRepo} />
        
        {repos.map(repo=> <ItemRepo repo={repo} removeRepo={removeRepo} />)}

    </div>
  );
}

