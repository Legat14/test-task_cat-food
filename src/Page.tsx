import React from 'react';
import Card from './components/Card';
import { cardData } from './data';

function Page(): JSX.Element {
  return (
    <main className='page'>
      <section className='page__wrapper'>
        <h1>Ты сегодня покормил кота?</h1>

        <div className='page__cards-container'>

          {cardData.map((data, index) => <Card key={index} {...data} />)}

        </div>
      </section>
    </main>
  );
}

export default Page;
