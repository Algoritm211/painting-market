


export interface IPainting {
  id: number
  imgURL: string,
  title: string,
  author: string,
  startPrice?: string,
  price: string
  isInBasket: boolean,
  isLoading: boolean
  isSold: boolean
}
