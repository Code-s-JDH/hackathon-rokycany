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
        <Link to={`mailto:info@rtsoft.cz`} onClick={handleScrollToTop} aria-label={`${item.title}`}>
          <img
            src={`https://www.pngfind.com/pngs/b/348-3484461_png-file-svg-programming-language-icon-png-transparent.png`}
            alt={`Pozice: ${item.title}`}
            onError={handleImageError} 
            width={100}
          />
        </Link>
      </div>
      <div className='itemDown'>
        <div>
          <Link to={`/item/${item.no}`} onClick={handleScrollToTop} aria-label={`${item.description}`}>
            <p className='fontHeader2C'>{item.title}</p>
            <p className='fontHeader3'>{item.description}</p>
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
