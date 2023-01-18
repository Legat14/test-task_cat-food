import React, {useState, useEffect} from 'react';
import { Colors } from '../types';
import CardBackground from './CardBackground';
import CardBorder from './CardBorder';

export default function Card() {
  const [color, setColor] = useState<Colors>(Colors.DEFAULT);
  const [isSelected, setIsSelected] = useState<boolean>(false);

  useEffect(() => {
    handleMoseLeave();
  }, [isSelected]);

  function handleMoseEnter() {
    if (isSelected) {
      setColor(Colors.SELECTEDHOVER);
    } else {
      setColor(Colors.DEFAULTHOVER);
    }
  }

  function handleMoseLeave() {
    if (isSelected) {
      setColor(Colors.SELECTED);
    } else {
      setColor(Colors.DEFAULT);
    }
  }

  function handleClick() {
    setIsSelected(!isSelected);
    handleMoseLeave();
  }

  return (
    <div className='page__card'>
      <div
        className='card__blank'
        onMouseEnter={handleMoseEnter}
        onMouseLeave={handleMoseLeave}
        onClick={handleClick}
      >
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
        <div className="card__weight" style={{backgroundColor: color}}>
          <p className="weight__number">0,5</p>
          <p className="weight__unit">кг</p>
        </div>
      </div>
      <p className='card__buy'>Чего сидишь? Порадуй котэ, <span
          className='card__link'
          style={{color: color}}
          onMouseEnter={handleMoseEnter}
          onMouseLeave={handleMoseLeave}
          onClick={handleClick}
        >
          купи.
        </span>
      </p>
    </div>
  )
}