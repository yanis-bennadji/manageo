import React from 'react';
import ListePersonnes from './components/ListePersonnes';
import FormPersonne from './components/FormPersonne';

const App = () => {
  return (
    <div>
      <h1>Liste des personnes</h1>
      <ListePersonnes />
      <FormPersonne />
    </div>
  );
};

export default App;
