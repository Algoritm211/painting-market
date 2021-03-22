import React from 'react';
import {IPainting} from "../../../types/types";
import './PaintingCard.scss'

type PropsType = {
  painting: IPainting
}

const PaintingCard: React.FC<PropsType> = ({painting}) => {

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
            <button>Купить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaintingCard;
