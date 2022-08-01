import React from 'react';
import css from './Favorites.module.css';
import { connect } from 'react-redux';
import Book from '../Book';

const Favorites = ({ books }) => {

    const bookComponents = () => {
        if (books === undefined) {
            return <p>No favorites added</p>
        } else {
            return books.map(book => {
                return(
                   <Book 
                    key = {book.id} 
                    book = {book}
                   />
                )
            })
        }
    }

    return(
        <div className={css.Favorites}>
            <div className='introSection'>
                <h1 className='introHeader'>My saved favorite books</h1>
                <h1 className='introHeader'>Liked books appear here</h1>
            </div>
            <div className = 'bookContainer'>{bookComponents()}</div>
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        books: state.books
    }
}

export default connect(mapStateToProps)(Favorites)