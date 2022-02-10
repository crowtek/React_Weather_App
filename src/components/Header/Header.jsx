import React from 'react';

import styles from './Header.module.css';

const Header = () => (
    <h1 className={styles.heading}>
        React <span className={styles.light}>Weather</span> Forecast
    </h1>
    
);

export default Header;
