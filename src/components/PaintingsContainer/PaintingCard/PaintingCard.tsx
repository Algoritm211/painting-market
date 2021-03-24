import React from 'react';
import {IPainting} from "../../../types/types";
import './PaintingCard.scss'
import {observer} from "mobx-react-lite";
import PaintingsStore from '../../../store/paintingsStore'
import cn from 'classnames'

type PropsType = {
  painting: IPainting
}

const PaintingCard: React.FC<PropsType> = ({painting}) => {
  const {buyPainting, removeFromBasket} = PaintingsStore

  const onAddToBasket = () => {
    buyPainting(painting.id)
  }

  const onRemoveFromBasket = () => {
    removeFromBasket(painting.id)
  }

  return (
    <div className={cn('paintCard', {'isSold': painting.isSold})}>
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
          {painting.isSold
            ? <div className={'paintCard__sold'}>Продана на аукционе</div>
            : <div className="paintCard__content__priceBlock">
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
              {!painting.isLoading
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
          }
        </div>
      </div>
    </div>
  );
};

export default observer(PaintingCard);
