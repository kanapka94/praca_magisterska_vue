import axios from 'axios'
axios.defaults.baseURL = 'https://www.thecocktaildb.com/api/json/v2/8673533'

const fetchData = payload => axios.get(payload)
  .then(res => res.data)
  .catch(err => err)

const getList = {
  alcohol: () => fetchData(`/list.php?a=list`),
  categories: () => fetchData(`/list.php?c=list`),
  glasses: () => fetchData(`/list.php?g=list`),
  ingredients: () => fetchData(`/list.php?i=list`)
}

const filter = {
  alcohol: payload => fetchData(`/filter.php?a=${payload}`),
  categories: payload => fetchData(`/filter.php?c=${payload}`),
  glasses: payload => fetchData(`/filter.php?g=${payload}`),
  ingredients: payload => fetchData(`/filter.php?i=${payload}`)
}

const drinks = {
  getRandom: () => fetchData(`/random.php`),
  getDrinkById: payload => fetchData(`/lookup.php?i=${payload}`),
  getDrinkByName: payload => fetchData(
    `/search.php?s=${encodeURI(payload)}`
  )
}

const ingredients = {
  getIngredientById: payload => fetchData(`/lookup.php?iid=${payload}`),
  getIngredientByName: payload => fetchData(
    `/search.php?i=${encodeURI(payload)}`
  )
}

export default {
  getList,
  filter,
  drinks,
  ingredients
}
