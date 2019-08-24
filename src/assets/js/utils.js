const getIngredients = drink => {
  const ingredients = []
  for (let i = 0; i < 10; i++) {
    const ingredient = {
      name: drink['strIngredient' + i],
      measure: drink['strMeasure' + i]
    }
    if (ingredient.name) ingredients.push(ingredient)
  }
  return ingredients
}

export {
  getIngredients
}
