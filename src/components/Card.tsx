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
  const [isRunOut, setIsRunOut] = useState<boolean>(false);

  useEffect(() => {
    handleMoseLeave();
  }, [isSelected, isRunOut]);

  function handleMoseEnter() {
    if (!isRunOut) {
      if (isSelected) {
        setColor(Colors.SELECTEDHOVER);
        setSlogan(sloganData.cancel);
      } else {
        setColor(Colors.DEFAULTHOVER);
      }
    } else {
      setColor(Colors.DISABLED);
    }
  }

  function handleMoseLeave() {
    if (!isRunOut) {
      if (isSelected) {
        setColor(Colors.SELECTED);
        setSlogan(sloganData.default);
      } else {
        setColor(Colors.DEFAULT);
      }
    } else {
      setColor(Colors.DISABLED);
    }
  }

  function handleClick() {
    if (!isRunOut) {
      setIsSelected(!isSelected);
      setSlogan(sloganData.default);
    } else {
      setColor(Colors.DISABLED);
    }
  }

  function handleRunOutClick() {
    setIsRunOut(!isRunOut);
    if (isRunOut) {
      setColor(Colors.DISABLED);
    } else {
      setColor(Colors.DEFAULT);
    }
  }

  return (
    <div className={isRunOut ? 'page__card page__card_run-out' : 'page__card'}>
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
            {props.includes.map((include, index) => <li key={index}>{include({})}</li>)}
          </ul>
        </div>
        <div className="card__weight" style={{backgroundColor: color}}>
          <p className="weight__number">{props.weight.toString().replace('.', ',')}</p>
          <p className="weight__unit">кг</p>
        </div>
      </div>
      {isRunOut ? <p className='card__buy'>{props.runOut}</p> :
        (
          isSelected ? <p className='card__buy'>{props.bought}</p> : <Buy
            color={color}
            handleMoseEnter={handleMoseEnter}
            handleMoseLeave={handleMoseLeave}
            handleClick={handleClick}
          />
        )
      }
      <button className='card__run-out-btn' onClick={handleRunOutClick}>Закончилось :-(</button>
    </div>
  )
}