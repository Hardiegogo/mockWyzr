import axios from "axios"
export const searchBook=async(bookTitle,dispatchBook,user)=>{
    try {
        const response=await axios({
            method:"GET",
            url:"https://www.googleapis.com/books/v1/volumes?q="+ bookTitle,
            headers:{authorization:user.signInUserSession.accessToken.jwtToken}
        })
        if(response.status===200 && response.data.items){
            dispatchBook({type:"SET_BOOKS",payload:response.data.items})
        }else{
            throw new Error('items not available')
        }
    } catch (error) {
        console.log("error occured",error)
    }
}
