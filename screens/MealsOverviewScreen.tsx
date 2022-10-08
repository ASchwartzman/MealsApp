import { FlatList, StyleSheet, Text, View } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../App"
import { MEALS, CATEGORIES } from "../data/dummy-data"
import Meal from "../models/meal"
import { useLayoutEffect, useState } from "react"
import MealItem from "../components/MealItem"

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

  function renderMealItem(mealItem: Meal) {
    return <MealItem item={mealItem} />
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => renderMealItem(item)}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
})
