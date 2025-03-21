export const initialState = {
    count: 0,
    inputValue: "",
    email:"",
    password:"",
    list: ["valor 1"]
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
        default:
            console.log("Acción desconocida")
    }
}
