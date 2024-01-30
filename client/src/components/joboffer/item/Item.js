import { useState } from 'react';
import { Link } from 'react-router-dom';
import './item.css';

const Item = ({ item }) => {
  const maxLength = 15;
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className='item'>
      <div className='itemUp'>
        <Link to={`/item/${item.id}`} onClick={handleScrollToTop} aria-label={`Zobrazit detaily produktu ${item.id}`}>
          <img
            src={`http://localhost:4001/downloads/${item.id}.jpg`}
            alt={`Produkt: ${item.id}`}
            onError={handleImageError}
            width={100}
          />
        </Link>
      </div>
      <div className='itemDown'>
        <div>
          <Link to={`/item/${item.no}`} onClick={handleScrollToTop} aria-label={`Zobrazit detaily produktu ${item.name}`}>
            <p className='fontHeader2C'>{item.id}</p>
          </Link>
        </div>
        <div>
          <p className='fontHeader4'></p>
        </div>
      </div>
    </div>
  );
};

export default Item;
