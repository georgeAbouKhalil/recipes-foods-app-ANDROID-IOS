import { MEALS, CATEGORIES } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";

export default function MealsOverViewScreen({ route, navigation }) {
  const catId = route.params.categoryId; // getting the id

  const displayLayedMeals = MEALS.filter((mealItems) => {
    return mealItems.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    // geting the title for every category page
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, []);

  return <MealsList items={displayLayedMeals} />;
}
