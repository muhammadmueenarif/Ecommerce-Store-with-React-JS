import React from 'react'
import styles from './Header.module.css';
import { useState, useEffect } from 'react';
import Banner from './Banner'
const Header = () => {
  const [value, setValue] = useState(0);

  const valueHandler =()=> {
    setValue(value+1);
    console.log(value);
  }

  useEffect(()=> {
    console.log('Component did mount');
  })


  const a = "Hello world!";

  return (
    <div className={styles.header}>
      <p>This is paragraph</p>
      <button onClick={valueHandler}>Click Me</button>
      
      <Banner heading={a}/>
    </div>
    )
}

export default Header;
