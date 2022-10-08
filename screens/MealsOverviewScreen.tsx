import { NativeStackScreenProps } from "@react-navigation/native-stack"
import React, { useLayoutEffect } from "react"
import { RootStackParamList } from "../App"
import MealsList from "../components/MealsList/MealsList"
import { CATEGORIES, MEALS } from "../data/dummy-data"

type Props = NativeStackScreenProps<RootStackParamList, "MealsOverview">

export default function MealsOverviewScreen({ route, navigation }: Props) {
  const catId = route.params.categoryId

  const displayedMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(catId) >= 0
  )

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === catId)

    navigation.setOptions({
      title: categoryTitle.title,
    })
  }, [catId, navigation])

  return <MealsList displayedMeals={displayedMeals} />
}
