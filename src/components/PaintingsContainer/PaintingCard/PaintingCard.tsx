import React from 'react';
import {IPainting} from "../../../types/types";
import './PaintingCard.scss'
import {observer} from "mobx-react-lite";
import PaintingsStore from '../../../store/paintingsStore'

type PropsType = {
  painting: IPainting
}

const PaintingCard: React.FC<PropsType> = ({painting}) => {
  const {buyPainting, isLoading, removeFromBasket} = PaintingsStore

  const onAddToBasket = () => {
    buyPainting(painting.id)
  }

  const onRemoveFromBasket = () => {
    removeFromBasket(painting.id)
  }

  return (
    <div className={'paintCard'}>
      <div className="paintCard__image">
        <img src={painting.imgURL} alt="paintImg"/>
      </div>
      <div className="paintCard__content">
        <div className="container">
          <div className="paintCard__content-title">
            «{painting.title}»
          </div>
          <div className="paintCard__content-author">
            {painting.author}
          </div>
          <div className="paintCard__content__priceBlock">
            <div>
              {painting.startPrice &&
              <div className="paintCard__content__priceBlock-startPrice">
                {painting.startPrice}
              </div>
              }
              <div className="paintCard__content__priceBlock-price">
                {painting.price}
              </div>
            </div>
            {!isLoading
              ? <button
                  className={painting.isInBasket ? 'inBasket' : ''}
                  onClick={!painting.isInBasket ? onAddToBasket : onRemoveFromBasket}>
                {!painting.isInBasket ? 'Купить': <><i className="fas fa-check" />В корзине</> }
              </button>
              : <button disabled className={'loaderBtn'}>
                Loading...
              </button>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(PaintingCard);
