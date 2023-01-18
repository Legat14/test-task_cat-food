import React, {useState} from 'react';
import CardBackground from './CardBackground';
import CardBorder from './CardBorder';

export default function Card() {
  const [color, setColor] = useState<string>('#1698d9');

  function handleMoseEnter() {
    setColor('#2ea8e6');
  }

  function handleMoseLeave() {
    setColor('#1698d9');
  }

  return (
    <div className='page__card' onMouseEnter={handleMoseEnter} onMouseLeave={handleMoseLeave}>
      <div className='card__blank'>
        <CardBackground />
        <CardBorder {...{color}} />
        <div className="card__img"></div>
        <div className='card__description'>
          <p className="card__slogan">Сказочное заморское яство</p>
          <h2>Нямушка</h2>
          <h3>с фуа-гра</h3>
          <ul>
            <li><strong>10</strong> порций</li>
            <li>мышь в подарок</li>
          </ul>
        </div>
        <div className="card__weight">
          <p className="weight__number">0,5</p>
          <p className="weight__unit">кг</p>
        </div>
      </div>
      <p className='card__buy'>Чего сидишь? Порадуй котэ, <span className='card__link'>купи.</span></p>
    </div>
  )
}