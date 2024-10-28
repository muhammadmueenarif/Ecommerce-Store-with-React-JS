import React from 'react';

const App = () => {
  const a = [10, 20, 30, 40, 50];

  const b = a.filter(x => x > 20);

  console.log(b);

  return (
    <div>
      <h1>App{b}</h1>
    </div>
  );
};

export default App;