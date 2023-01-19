import React, {useState, useEffect} from 'react';
import { sloganData } from '../data';
import { CardData, Colors } from '../types';
import Buy from './Buy';
import CardBackground from './CardBackground';
import CardBorder from './CardBorder';

export default function Card(props: CardData) {
  const [color, setColor] = useState<Colors>(Colors.DEFAULT);
  const [slogan, setSlogan] = useState<string>(sloganData.default);
  const [isSelected, setIsSelected] = useState<boolean>(false);

  useEffect(() => {
    handleMoseLeave();
  }, [isSelected]);

  function handleMoseEnter() {
    if (isSelected) {
      setColor(Colors.SELECTEDHOVER);
      setSlogan(sloganData.cancel);
    } else {
      setColor(Colors.DEFAULTHOVER);
    }
  }

  function handleMoseLeave() {
    if (isSelected) {
      setColor(Colors.SELECTED);
      setSlogan(sloganData.default);
    } else {
      setColor(Colors.DEFAULT);
    }
  }

  function handleClick() {
    setIsSelected(!isSelected);
    setSlogan(sloganData.default);
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
          <p className="card__slogan">{slogan}</p>
          <h2>Нямушка</h2>
          <h3>{props.taste}</h3>
          <ul>
            {props.includes.map((include) => <li>{include({})}</li>)}
          </ul>
        </div>
        <div className="card__weight" style={{backgroundColor: color}}>
          <p className="weight__number">{props.weight}</p>
          <p className="weight__unit">кг</p>
        </div>
      </div>
      {isSelected ? <p className='card__buy'>{props.bought}</p> : <Buy
        color={color}
        handleMoseEnter={handleMoseEnter}
        handleMoseLeave={handleMoseLeave}
        handleClick={handleClick}
      />}
    </div>
  )
}