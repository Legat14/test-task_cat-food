import React from 'react';

export default function Buy({
  color,
  handleMoseEnter,
  handleMoseLeave,
  handleClick,
}: {
  color: string,
  handleMoseEnter: ()=>void,
  handleMoseLeave: ()=>void,
  handleClick: ()=>void,
}) {

  return <p className='card__buy'> Чего сидишь? Порадуй котэ, <span
              className='card__link'
              style={{color}}
              onMouseEnter={handleMoseEnter}
              onMouseLeave={handleMoseLeave}
              onClick={handleClick}
            >
              купи.
            </span>
          </p>
}