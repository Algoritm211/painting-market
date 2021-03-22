import React from 'react';
import './PaintingsContainer.scss'
import {IPainting} from "../../types/types";
import Venera from '../../assets/paintings/venera_born.png'
import PaintingCard from "./PaintingCard/PaintingCard";


const Painting:IPainting = {
  imgURL: Venera,
  title: 'Рождение Венеры',
  author: 'Сандро Боттичелли',
  startPrice: '2 000 000 $',
  price: '1 000 000 $'
}

const PaintingsContainer = () => {

  const paintingBlock = <PaintingCard painting={Painting} />
  return (
    <div className={'paintings'}>
      <div className="container">
        <div className="paintings__header">
          <h3>Картины эпохи Возрождения</h3>
        </div>
        <div className={'paintings__content'}>
          {paintingBlock}
        </div>
      </div>
    </div>
  );
};

export default PaintingsContainer;
