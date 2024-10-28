import React from 'react';

const App = () => {
  const a = [10, 20, 30, 40, 50];

  var b = a.reduce((acc, curr) => {
    return acc + curr; //acc is initial value and curr is current value. 
    //it will return some of all values. 10+20=30, 30+30=60, 60+40=100, 100+5-= 150 as final.
    }); 

  console.log(b);

  return (
    <div>
      <h1>App{b}</h1>
    </div>
  );
};

export default App;