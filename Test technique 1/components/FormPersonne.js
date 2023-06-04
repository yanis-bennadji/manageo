import React, { useState } from 'react';
import axios from 'axios';

const FormPersonne = () => {
  const [personne, setPersonne] = useState({
    nom: '',
    prenom: '',
    email: ''
  });

  const handleChange = (e) => {
    setPersonne({ ...personne, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/personnes', personne);
      alert('Personne ajoutée avec succès');
      setPersonne({ nom: '', prenom: '', email: '' });
    } catch (error) {
      console.error('Erreur lors de l\'ajout de la personne :', error);
    }
  };

  return (
    <div>
      <h2>Ajouter une personne</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom :</label>
          <input type="text" name="nom" value={personne.nom} onChange={handleChange} required />
        </div>
        <div>
          <label>Prénom :</label>
          <input type="text" name="prenom" value={personne.prenom} onChange={handleChange} required />
        </div>
        <div>
          <label>Email :</label>
          <input type="email" name="email" value={personne.email} onChange={handleChange} required />
        </div>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default FormPersonne;
