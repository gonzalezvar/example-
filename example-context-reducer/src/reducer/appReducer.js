export const initialState = {
    count: 0,
    inputValue: "",
    listCharacters:[],
    email:"",
    password:"",
    list: ["valor 1"],
    isLogged:false,
}


export const appReducer = (store, action) => {
    switch (action.type) {
        case 'increment':
            return {
                ...store,
                count: store.count + 1
            }
        case 'decrement':
            return {
                ...store,
                count: store.count - 1
            }
        case 'changeInput':
            const value = action.value
            return {
                ...store,
                inputValue: value
            }
        case 'addListValue':
            const newItem = action.task

            return {
                ...store,
                list:[...store.list,newItem]
            }
        case 'addCharacters':
            const listCharacters = action.characters;
            return {
                ...store,
                listCharacters:[...listCharacters]
            }

        default:
            console.log("Acción desconocida")
    }
}
