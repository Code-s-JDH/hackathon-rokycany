import React, { useState, useEffect, lazy, Suspense } from 'react';
import { getWorks } from '../../../services/workApi';
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './itemList.css';

const LazyItem = lazy(() => import('../item/Item'));

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [allItemsLoaded, setAllItemsLoaded] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);

      const response = await getWorks();
      setItems(response.data);

    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!allItemsLoaded) {
      fetchData();
    }
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  console.log(items)
  return (
    <>
      <div className='itemList'>
        {items.map((item) => (
          <Suspense key={item.id} fallback={<div>Loading...</div>}>
            <LazyItem key={item.id} item={item} />
          </Suspense>
        ))}

      </div>
      <div className='bottomPanel'>
        <button className="scrollToTopBtn" onClick={scrollToTop}>
          <FontAwesomeIcon icon={faArrowUp} />
          <p>Nahoru</p>
        </button>
      </div>
    </>
  );
};

export default ItemList;
