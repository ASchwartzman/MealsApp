import React, { useContext } from "react"
import { StyleSheet } from "react-native"
import MealsList from "../components/MealsList/MealsList"
import { MEALS } from "../data/dummy-data"
import Meal from "../models/meal"
import { FavoritesContext } from "../store/context/favorites-context"

export default function FavoritesScreen() {
  const { favoriteMealIds } = useContext(FavoritesContext)
  const displayedMeals: Meal[] = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  )

  return <MealsList displayedMeals={displayedMeals} />
}

const styles = StyleSheet.create({
  container: { flex: 1 },
})
