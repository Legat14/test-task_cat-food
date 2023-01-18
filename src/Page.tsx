import React from 'react';
import CardBackground from './components/CardBackground';
import CardBorder from './components/CardBorder';

function Page(): JSX.Element {
  return (
    <main className='page'>
      <section className='page__wrapper'>
        <h1>Ты сегодня покормил кота?</h1>

        <div className='page__cards-container'>

          <div className='page__card'>
            <div className='card__blank'>
              <CardBackground />
              <CardBorder />
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

          <div className='page__card'>
            <div className='card__blank'>
              <CardBackground />
              <CardBorder />
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

          <div className='page__card'>
            <div className='card__blank'>
              <CardBackground />
              <CardBorder />
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

        </div>
      </section>
    </main>
  );
}

export default Page;
