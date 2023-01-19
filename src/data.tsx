import React from 'react';
import { CardData } from "./types";

export const cardData: CardData[] = [
  {
    taste: 'с фуа-гра',
    includes: [
      includes01,
      includes02,
    ],
    weight: 0.5,
    bought: 'Печень утки разварная с артишоками.',
    runOut: 'Печалька, с фуа-гра закончился.',
  },
  {
    taste: 'с рыбой',
    includes: [
      includes03,
      includes04,
    ],
    weight: 2,
    bought: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
    runOut: 'Печалька, с рыбой закончился.',
  },
  {
    taste: 'с фуа-гра',
    includes: [
      includes05,
      includes06,
      includes07,
    ],
    weight: 5,
    bought: 'Филе из цыплят с трюфелями в бульоне.',
    runOut: 'Печалька, с курой закончился.',
  },
];

function includes01(): JSX.Element {
  return <>
    <strong>10</strong> порций
  </>
}

function includes02(): JSX.Element {
  return <>
    мышь в подарок
  </>
}

function includes03(): JSX.Element {
  return <>
    <strong>40</strong> порций
  </>
}

function includes04(): JSX.Element {
  return <>
    <strong>2</strong> мыши в подарок
  </>
}

function includes05(): JSX.Element {
  return <>
    <strong>100</strong> порций
  </>
}

function includes06(): JSX.Element {
  return <>
    <strong>5</strong> мышей в подарок
  </>
}

function includes07(): JSX.Element {
  return <>
    заказчик доволен
  </>
}

export const sloganData = {
  default: 'Сказочное заморское яство',
  cancel: 'Котэ не одобряет?',
}