import { createContext, useContext, useEffect, useReducer, useState } from "react"
import { Hub, Auth } from 'aws-amplify';

// const authReducer=(state,action)=>{
//     switch(action.type){

//     }
// }

const AuthContext=createContext(null)

export const useAuth=()=>useContext(AuthContext)


export const AuthProvider=({children})=>{
    const [user,setUser]=useState()

    const fetchUser=async()=>{
        try {
            const response=await Auth.currentAuthenticatedUser();
            setUser(response)
        } catch (error) {
            console.log("ERROR OCCURED",error)
        }
    }
    
    useEffect(()=>{
        Hub.listen('auth',({payload:{event,data}})=>{
            switch(event){
                case "signIn":
                    fetchUser();
                    break;
                case 'signOut':
                    setUser(null)
                    break;
                default:
                    break;
            }
        })
        fetchUser();
    },[])


    
    return <AuthContext.Provider value={{user,setUser}}>
        {children}
    </AuthContext.Provider>
}