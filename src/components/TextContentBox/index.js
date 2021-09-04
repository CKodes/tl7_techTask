import React from 'react';
import './index.css';

const TextContentBox = ({ para, paraTwo, paraThree, title }) => {
  return (
    <article className='text-content-box'>
      <div>
        <h1>{title}</h1>
        <p>{para}</p>
        <p>{paraTwo}</p>
        <p>{paraThree}</p>
      </div>
    </article>
  );
};

export default TextContentBox;
