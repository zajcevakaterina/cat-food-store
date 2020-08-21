import React, { useState } from 'react';
import './Card.css';

function Card({
  taste,
  portions,
  gift,
  isClientHappy,
  weight,
  caption,
  availability,
  selected,
  onClick,
  id }) {

  const [mouseEnter, setMouseEnter] = useState(false);
  const [firstSelectHappened, setFirstSelectHappened] = useState(false);

  const showCaption = () => {
    if (!availability) {
      return (`Печалька, ${taste} закончился.`)
    }
    if (selected) {
      return caption
    }
    return (
      <>
        Чего сидишь? Порадуй котэ, &nbsp;
        <button className="card__select-button" type="button" onClick={onCardClick}>купи</button>
        <span className="card__button-dot">.</span>
      </>
    )
  }

  const onCardClick = () => {
    if (!availability) {
      return
    }
    else {
      onClick(id)
      setFirstSelectHappened(false)
    }
  }

  const onMouseEnter = () => {
    if (selected) {
      setFirstSelectHappened(true);
      setMouseEnter(true);
      return;
    }
    setMouseEnter(true);
  }

  const onMouseLeave = () => {
    setMouseEnter(false);
  }

  const classForElement = (basicClass) => {
    return ` ${basicClass}
      ${!availability ? `${basicClass}_disabled` : ''}
      ${selected ? `${basicClass}_selected` : ''}`
  }

  return (
    <div className="card">
      <div
        className={classForElement('card__content')}
        onClick={onCardClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}>
        {!availability && <div className="card_disabled"></div>}

        <div className="card__text">
          {`happened ${firstSelectHappened}   `}
          {`mouseEntered ${mouseEnter}`}
          <p className={`card__description ${mouseEnter && selected ? 'card__description_selected-hover' : ''}`}>
            {mouseEnter && selected && firstSelectHappened ? 'Котэ не одобряет? ' : 'Сказочное заморское яство'}
          </p>
          <h2 className="card__title">Нямушка</h2>
          <p className="card__subtitle">{taste}</p>
          <ul className="card__options">
            <li className="card__option">{portions}</li>
            <li className="card__option">{gift} в подарок</li>
            {
              isClientHappy && <li className="card__option">заказчик доволен</li>
            }
          </ul>
          <div className={classForElement('card__badge')}>
            <span className="card__badge-info">{weight}</span> кг
          </div>
        </div>

        <div className={classForElement('card__image')}></div>

      </div>
      <p className={`card__caption ${!availability ? 'card__caption_not-available' : ''}`}>{showCaption()}</p>
    </div >
  )
}

export default Card