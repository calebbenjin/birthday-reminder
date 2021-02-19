import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  const [people, setPeople] = useState(data)

  const clearAll = () => {
    setPeople([])
  }

  return (
    <section className="container">
      <h3>{people.length} Reminder Project Setup</h3>
      <List people={people} />
      <button onClick={clearAll}>Clear All</button>
    </section>
  );
}

export default App;
