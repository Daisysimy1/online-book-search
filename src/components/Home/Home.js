import React from 'react';
import css from './Home.module.css';

const Home = () => {
    return(
        <div className={`${css.Home} introSection`} >
            <h1>It is time to become curious and learn one or two things using online books</h1>
            <h1>DID YOU KNOW?</h1>
            <h1>Reading is important because it helps improve your life. Benefits include that: books help our cognitive development, prevent cognitive decline, make us more empathetic, and improve confidence</h1>
            <h1>Reading reduces stress by 68%</h1>
            <footer>
                <p>© 2022 Book searching site | <a href="">Privacy Policy</a></p>
            </footer>
        </div>
    )
}

export default Home;