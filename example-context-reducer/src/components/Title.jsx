import { useEffect } from "react"
import {useAppContext } from "../store/AppContext"

const Title = () => {
    const {store, dispatch} = useAppContext()

    const getCharacters = async() => {
        try {
            const request = await fetch("https://rickandmortyapi.com/api/character");
            const result = await request.json();

            dispatch({type:"addCharacters", characters:result.results})

        } catch (error) {
            console.log(error)
        }
    }
   
    return (
        <>

            <h5>Componente con H5</h5>
            <button onClick={()=>dispatch({type:"increment" })}>Aumentar valor del contador</button>
            <button onClick={getCharacters}>Cargar personas</button>
        </>
    )
}

export default Title