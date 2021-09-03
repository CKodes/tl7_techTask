import React from 'react';
import './TextContentBox.css';

const TextContentBox = ({ para, title }) => {
  return (
    <article className='text-content-box'>
      <div>
        <h1>{title}</h1>
        <p>{para}</p>
      </div>
    </article>
  );
};

export default TextContentBox;
