
const baseUrl = "https://dummyapi.io/data/v1";
const key = "6598bafac09f5e12a6d79d39";


export const dummyService = {
    getPosts: async() => {
        try {
            const request = await fetch(`${baseUrl}/post`,{
                headers:{
                    'app-id':key
                }
            })
            const response = await request.json()
            return response.data;
        } catch (error) {
            console.log(error)
            throw new Error(error);
        }
    },
    createPost: async(post) => {
        try {
            const request = await fetch(`${baseUrl}/post/create`,{
                method:"POST",
                headers:{
                    'app-id':key,
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(post)
            })
            const response = await request.json();
            return response
        } catch (error) {
            console.log(error)
        }
    }
}
