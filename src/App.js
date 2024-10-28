import React from 'react';

const App = () => {
  const a = [1, 2, 3, 4, 5];

  const b = a.map(function Multiply(x) {
    return x * 2;
  });

  console.log(b);

  return (
    <div>
      <h1>App{b}</h1>
    </div>
  );
};

export default App;