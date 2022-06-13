import React from "react"
import { useNavigate } from "react-router-dom"




const BookCard=({book})=>{

    // console.log(book)
    const {volumeInfo:{title,imageLinks}} = book
    const {thumbnail}=imageLinks
    const navigate=useNavigate()

    const bookClickHandler=()=>{
        navigate(`/book/${book.id}`)
    }
    return(
        <div className="book-container" onClick={bookClickHandler}>
            <div className="book-header">
                <div className="book-image">
                    <img src={thumbnail} alt="" />
                </div>
            </div>
            <div className="book-footer">
                <h3>{title}</h3>
            </div>
        </div>
    )
}

export default BookCard