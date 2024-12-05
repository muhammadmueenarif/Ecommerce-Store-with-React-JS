import React from 'react'
import styles from './Header.module.css';
import { useState } from 'react';
const Header = () => {
  const [value, setValue] = useState(0);

  const valueHandler =()=> {
    setValue(value+1);
    console.log(value);
    
  }

  return (
    <div className={styles.header}>
      <p>This is paragraph</p>
      <button onClick={valueHandler}>Click Me</button>
    </div>
    )
}

export default Header;
