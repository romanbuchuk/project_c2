import React from 'react';

import styles from './Header.css';

// function Header() {};
export const Header = () => (
    <header className={styles.container}>
        <div>
            <h1 className="header">Vanilla JavaScript</h1>
            <p>тобто, JavaScript без будь яких (UI) фреймворків або бібліотек</p>
            <p>чистий JavaScript</p>
        </div>
    </header>
);

export default Header;
