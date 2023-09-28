import React, { useState } from 'react';
import '../styles.css';

const MyCarousel = ({ profList }) => {
  const [indexActive, setIndexActive] = useState(0);

  const handlePrevClick = () => {
    setIndexActive((prevIndex) => (prevIndex === 0 ? profList.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setIndexActive((prevIndex) => (prevIndex === profList.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div>
      {profList.length === 0 ? (
       <></>
      ) : (
        <>
            <div className='carousel-container'>
                <button className='carousel-btn' onClick={handlePrevClick}>Prev</button>
                <div className='profile-info'>
                    <h3>{profList[indexActive].fName} {profList[indexActive].lName}</h3>
                    <p>{profList[indexActive].bDate}</p>
                    <img className='prof-pic' src={profList[indexActive].profPic} alt={`Profile of ${profList[indexActive].fName}`} />
                </div>
                <button className='carousel-btn' onClick={handleNextClick}>Next</button>
            </div>
        </>
      )}
    </div>
  );
};

export default MyCarousel;
