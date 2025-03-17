import { useState, useEffect } from 'react'
import './App.css'

import Card from './components/Card/Card'
import Loader from './components/Loader/Loader'

function App() {
  const [characters, setCharacters] = useState([])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(1)


  const getListCharacters = async () => {
    try {
      const response = await fetch(`https://dragonball-api.com/api/characters?page=${page}`);
      const data = await response.json();
      setCharacters(data.items)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getListCharacters()
  }, [page])
  
  const findCharacters = () => {
    setIsLoading(true);
    const filteredCharacters = data.filter(character => character.name.endsWith(inputValue));
    setCharacters(filteredCharacters);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }

  const changeName = (id, newName) => {
    const newListCharacters = characters.map(character => {
      if (character.id === id) {
        return { ...character, name: newName }
      }
      return character
    })

    setCharacters(newListCharacters)
  }

  useEffect(() => {
    getListCharacters()
  }, [])

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className='container'>

      <button
        className='btn btn-danger'
        onClick={()=>setPage(page-1)}
      >
        pagina anterior
      </button>
      <button
        className='btn'
        style={{backgroundColor:"green"}}
        onClick={()=>setPage(page+1)}
      >
        pagina siguiente
      </button>

      <div className='row'>
        {characters.map(item => (
          <Card
            key={item.id}
            {...item}
            changeName={changeName}
          />))}
      </div>

    </div>
  )
}

export default App
