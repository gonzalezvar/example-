import { useState } from 'react';
import styles from './Card.module.css'

const Card = ({ id, name, image, changeName }) => {
    const [showEditName, setShowEditName] = useState(false)
    const [inputValue,setInputValue] = useState(name)

    const editUser = () => {
        if(!showEditName){
            setShowEditName(true);
            return
        }
        if(!inputValue){
            setShowEditName(false);
            return alert("El nombre está vacio")
        }

        changeName(id, inputValue)
        setShowEditName(false);

    }

    return (
        <div className={`${styles.card} card`} style={{ width: "18rem" }}>
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
                {showEditName ?
                    <input 
                        value={inputValue}
                        onChange={(e)=>setInputValue(e.target.value)}
                    /> :
                    <h5 className="card-title">{name}</h5>
                }
                <DetailCard {name,image,chageName}/>
                <button onClick={editUser}>{showEditName ? "Confirmar cambio" : "Ir a modificar"}</button>
            </div>
        </div>
    )
}

export default Card;