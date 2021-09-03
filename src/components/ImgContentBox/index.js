import React from 'react';
import './index.css';

const ImgContentBox = ({ img, title, website }) => {
  return (
    <article className='img-content-box'>
      <div className='img-holder'>
        <img src={img} alt='' />
      </div>
      <div>
        <h1>
          <a href={website} target='_blank' rel='noreferrer'>
            {title}{' '}
          </a>
        </h1>
      </div>
    </article>
  );
};

export default ImgContentBox;
