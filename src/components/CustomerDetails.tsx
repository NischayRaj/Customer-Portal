import React, { useEffect, useState } from 'react';
interface Customer {
  id: number;
  name: string;
  title: string;
  address: string;
}

interface PokemonImage {
  id: number;
  url: string;
}

interface CustomerDetailsProps {
  customer: Customer;
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer }) => {
  const [displayedPhotos, setDisplayedPhotos] = useState<PokemonImage[]>([]);

  const fetchPokemonImages = async () => {
    try {
      const promises = Array.from({ length: 9 }, (_, i) =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 151) + 1}`)
          .then(res => res.json())
      );

      const results = await Promise.all(promises);

      const images = results.map((result: any, index: number) => ({
        id: index,
        url: result.sprites.front_default,
      }));

      setDisplayedPhotos(images);
    } catch (error) {
      console.error('Error fetching Pokémon images:', error);
    }
  };

  useEffect(() => {
    fetchPokemonImages();

    const interval = setInterval(() => {
      fetchPokemonImages();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  if (!customer) {
    return <div>Loading customer details...</div>;
  }

  return (
    <div className="customer-details" style={{ padding: '20px' }}>
      <h2>{customer.name}</h2>
      <p>{customer.title}</p>
      <p>{customer.address}</p>
      <div className="photo-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
  {displayedPhotos.map(photo => (
    <img
      key={photo.id}
      src={photo.url}
      alt={`Pokémon ${photo.id}`}
      style={{
        width: '300px',
        height: '300px',
        border: '2px solid #ddd',           
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
        borderRadius: '8px',                
        objectFit: 'cover',                 
      }}
    />
  ))}
</div>

    </div>
  );
};

export default CustomerDetails;
