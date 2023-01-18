import React from 'react';
import Card from './components/Card';
import CardBackground from './components/CardBackground';
import CardBorder from './components/CardBorder';

function Page(): JSX.Element {
  return (
    <main className='page'>
      <section className='page__wrapper'>
        <h1>Ты сегодня покормил кота?</h1>

        <div className='page__cards-container'>

          <Card />
          <Card />
          <Card />

        </div>
      </section>
    </main>
  );
}

export default Page;
