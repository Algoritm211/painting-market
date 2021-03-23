import React from 'react';
import './PaintingsContainer.scss'
import {IPainting} from "../../types/types";
import Venera from '../../assets/paintings/venera_born.png'
import PaintingCard from "./PaintingCard/PaintingCard";
import {observer} from "mobx-react-lite";
import PaintingsStore from '../../store/paintingsStore'



const PaintingsContainer = () => {
  const {paintings} = PaintingsStore

  const paintingBlock = paintings.map((painting) => {
    return <PaintingCard painting={painting} key={painting.id} />
  })

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

export default observer(PaintingsContainer);
