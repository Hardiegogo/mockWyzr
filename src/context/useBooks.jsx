import { createContext,useContext, useReducer } from "react";

const BooksContext=createContext(null)

export const useBooks=()=>useContext(BooksContext)

const bookReducer=(state,action)=>{
    switch(action.type){
        case "SET_BOOKS":
            return {
                ...state,
                searchResults:[...action.payload]
            }
        case "SET_SINGLE_BOOK":
            return{
                ...state,
                selectedBook:{...action.payload}
            }
        default:
            return state
    }
}

const initialState={
    searchResults:[],
    selectedBook:{}
}

export const BooksProvider=({children})=>{
    const [bookState,dispatchBook]=useReducer(bookReducer,initialState)
    return <BooksContext.Provider value={{bookState,dispatchBook}}>
        {children}
    </BooksContext.Provider>
}