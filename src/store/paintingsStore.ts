import {action, makeAutoObservable, observable} from "mobx";
import {IPainting} from "../types/types";
import {paintingsTestAPI} from "../api/api";
import Venera from "../assets/paintings/venera_born.png";
import Dinner from "../assets/paintings/dinner.png";
import Adam from "../assets/paintings/adam.png";


class PaintingsStore {
  @observable paintings: Array<IPainting> = [
    {
      id: 1,
      imgURL: Venera,
      title: 'Рождение Венеры',
      author: 'Сандро Боттичелли',
      startPrice: '2 000 000 $',
      price: '1 000 000 $',
      isInBasket: false
    },
    {
      id: 2,
      imgURL: Dinner,
      title: 'Тайная вечеря',
      author: 'Леонардо да Винчи',
      price: '3 000 000 $',
      isInBasket: false
    },
    {
      id: 3,
      imgURL: Adam,
      title: 'Сотворение Адама»',
      author: 'Микеланджело',
      startPrice: '6 000 000 $',
      price: '5 000 000 $',
      isInBasket: false
    },
  ]

  @observable isLoading: boolean = false

  constructor() {
    makeAutoObservable(this)
  }

  @action
  buyPainting = async (id: number) => {
    this.isLoading = true
    const data = await paintingsTestAPI.buyPainting()
    let painting = this.paintings.find(painting => painting.id === id)
    this.isLoading = false
    if (painting) {
      painting.isInBasket = true
    }
  }

  @action
  removeFromBasket = async (id: number) => {
    this.isLoading = true
    const data = await paintingsTestAPI.buyPainting()
    let painting = this.paintings.find(painting => painting.id === id)
    this.isLoading = false
    if (painting) {
      painting.isInBasket = false
    }
  }
}

export default new PaintingsStore()
