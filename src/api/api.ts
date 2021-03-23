import axios from "axios";


const instanceAxios = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
})


export const paintingsTestAPI = {
  buyPainting: () => {
    // no types because this request for api is a test
    return instanceAxios.get('posts/1')
      .then(data => data.data)
  }
}
