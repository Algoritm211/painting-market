import {action, makeAutoObservable, observable, runInAction} from "mobx";
import {IPainting} from "../types/types";
import {paintingsTestAPI} from "../api/api";
import Venera from "../assets/paintings/venera_born.png";
import Dinner from "../assets/paintings/dinner.png";
import Adam from "../assets/paintings/adam.png";
import AnatomyLessons from '../assets/paintings/anatomy_lessons.png'

class PaintingsStore {
  @observable paintings: Array<IPainting> = [
    {
      id: 1,
      imgURL: Venera,
      title: 'Рождение Венеры',
      author: 'Сандро Боттичелли',
      startPrice: '2 000 000 $',
      price: '1 000 000 $',
      isInBasket: false,
      isLoading: false,
      isSold: false
    },
    {
      id: 2,
      imgURL: Dinner,
      title: 'Тайная вечеря',
      author: 'Леонардо да Винчи',
      price: '3 000 000 $',
      isInBasket: false,
      isLoading: false,
      isSold: false
    },
    {
      id: 3,
      imgURL: Adam,
      title: 'Сотворение Адама»',
      author: 'Микеланджело',
      startPrice: '6 000 000 $',
      price: '5 000 000 $',
      isInBasket: false,
      isLoading: false,
      isSold: false
    },
    {
      id: 4,
      imgURL: AnatomyLessons,
      title: 'Уроки Анатомии',
      author: 'Рембрандт',
      startPrice: '6 000 000 $',
      price: '5 000 000 $',
      isInBasket: false,
      isLoading: false,
      isSold: true
    },
  ]

  @observable searchString: string = ''

  constructor() {
    makeAutoObservable(this)
  }

  @action
  buyPainting = async (id: number) => {
    let painting = this.paintings.find(painting => painting.id === id) as IPainting
    painting.isLoading = true
    await paintingsTestAPI.buyPainting()
    runInAction(() => {
      painting.isLoading = false
      painting.isInBasket = true
    })
  }


  removeFromBasket = async (id: number) => {
    let painting = this.paintings.find(painting => painting.id === id) as IPainting
    painting.isLoading = true
    await paintingsTestAPI.buyPainting()
    runInAction(() => {
      painting.isLoading = false
      painting.isInBasket = false
    })
  }

  @action
  setSearchString = (searchStr: string) => {
    this.searchString = searchStr
  }
}

export default new PaintingsStore()
