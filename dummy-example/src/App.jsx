import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { dummyService } from './services/dummyService'
import { useEffect } from 'react'
import Card from './components/Card'

function App() {
  const [listPosts, setListPosts] = useState([]);
  const [formData, setFormData] = useState({
    text: "asasd",
    image: "123",
    likes: 123,
    tags: [
      "nature",
      "sky"
    ],
    owner: "60d0fe4f5311236168a10a0b"
  })

  const handleGetPost = async () => {
    try {
      const data = await dummyService.getPosts()
      setListPosts(data)
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    handleGetPost()
  }, [])

  const handleAddPost = async () => {
    const newPost = await dummyService.createPost(formData)
    setListPosts(prevList => {
      console.log([...prevList, newPost])
      return [...prevList, newPost]
    })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleAddPost()
  }

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Ingresa el titulo</label>
          <input
            type="text"
            value={formData.text}
            onChange={(e) => {
              setFormData(prevFormData => {
                return { ...prevFormData, text: e.target.value }
              })
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Ingresa la url de una imagen</label>
          <input
            type="text"
            value={formData.image}
            onChange={(e) => {
              setFormData(prevFormData => {
                return { ...prevFormData, image: e.target.value }
              })
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Ingresa la cantidad de likes</label>
          <input
            type="number"
            value={formData.likes}
            onChange={(e) => {
              setFormData(prevFormData => {
                return { ...prevFormData, likes: e.target.value }
              })
            }}
          />
        </div>
        <button type='submit'>Añadir</button>
      </form>



      {listPosts.map(post => {
        return <Card key={post.id} {...post} />
      })}
    </>
  )
}

export default App
