import React from 'react';
import Category from '../Category';
import css from './Categories.module.css';

const Categories = () => {
    return (
        <div className={css.Categories}>
            <header className='introSection'>
                <h1 className='introHeader'>Here you can search for different books by category</h1>
                <p className='introText'>Drama | History | Thriller | Fantasy | Love</p>
            </header>
            <Category category="Drama"/>
            <Category category="History"/>
            <Category category="Thriller"/>
            <Category category="Fantasy"/>
            <Category category="Love"/>
        </div>

    )
}

export default Categories;