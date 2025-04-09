import React from 'react';
import { useParams } from 'react-router-dom';

function Tilvalg() { // Korrekt navn
  const { pakkenavn } = useParams();

  return (
    <div>
      <h2>Tilvalg og Bemærkninger for {pakkenavn}</h2>
      {/* ... dit indhold ... */}
    </div>
  );
}

export default Tilvalg; 