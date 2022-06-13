import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/useAuth'
import './Searchpage.css'
import { useBooks } from '../../context/useBooks'
import BookCard from '../../components/book-card-component/BookCard'
import { searchBook } from '../../utils/searchBook'



const Searchpage=()=> {
    const {user}=useAuth()
    const {bookState,dispatchBook}=useBooks()
    const [bookTitle,setBookTitle]=useState('')
    // console.log(user)
    const changeHandler=(e)=>{
        setBookTitle(()=>e.target.value)
    }

    const searchClickHandler=()=>{
        searchBook(bookTitle,dispatchBook,user)
    }
  return (
    <div className='search-page'>
        <div className="search-container">
            <h1>Search a book:</h1>
            <div>
            <input className='title-input' type="text" value={bookTitle} onChange={changeHandler}/>
            </div>
            <button className='primary-btn' onClick={(searchClickHandler)}>Search</button>
        </div>
        <h1>Results:</h1>
        <div className='books-grid'>        
        {bookState.searchResults.map(book=><BookCard key={book.id} book={book}/>)}

        </div>
        
    </div>
  )
}

export default Searchpage