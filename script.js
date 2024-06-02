const fetchTwoResources = async () => {
  try {
    const findDrink = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
    );
    const data = await findDrink.json();
    const drinks = data?.drinks;
    if (drinks && drinks.length > 0) {
      const firstDrink = drinks[0];
      const getDrinkID = firstDrink.idDrink;
      const findReceipeByID = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + getDrinkID
      );
      const receipeData = await findReceipeByID.json();
      console.log(receipeData);
    } else {
      return "Nie znaleziono obiektu.";
    }
  } catch (error) {
    console.log(error);
  }
};
fetchTwoResources();
