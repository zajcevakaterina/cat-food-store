import React, { useState } from 'react';
import './Cards.css';
import Card from '../Card/Card'

function Cards() {

  const [cards, setCards] = useState([
    {
      taste: 'с фуа-гра',
      portions: '10 порций',
      gift: 'мышь',
      weight: '0,5',
      isClientHappy: false,
      caption: 'Печень утки разварная с артишоками.',
      id: '743a',
      availability: true,
      selected: false
    }, {
      taste: 'с рыбой',
      portions: '40 порций',
      gift: '2 мыши',
      weight: '2',
      isClientHappy: false,
      caption: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
      id: '184b',
      availability: true,
      selected: false
    }, {
      taste: 'с курой',
      portions: '100 порций',
      gift: '5 мышей',
      weight: '5',
      isClientHappy: true,
      caption: 'Филе из цыплят с трюфелями в бульоне.',
      id: '125c',
      availability: false,
      selected: false
    }])

  const onCardClick = (cardId) => {
    const newCards = cards.map((card) => {
      if (card.id === cardId) {
        const newCard = {
          ...card,
          selected: !card.selected
        };
        return newCard;
      }
      return card;
    });
    console.log(newCards);
    setCards(newCards);
  }

  return (
    <ul className="cards">
      {cards.map((card) => {
        return (
          <li className="cards__item"
            key={card.id}>
            <Card
              taste={card.taste}
              portions={card.portions}
              gift={card.gift}
              isClientHappy={card.isClientHappy}
              weight={card.weight}
              caption={card.caption}
              availability={card.availability}
              selected={card.selected}
              onClick={onCardClick}
              id={card.id}
            />
          </li>
        )
      })}
    </ul>
  )
}

export default Cards