import { FlatList, StyleSheet, Text, View } from "react-native"
import React from "react"

import MealItem from "./MealItem"
import Meal from "../../models/meal"

type Props = {
  displayedMeals: Meal[]
}

export default function MealsList({ displayedMeals }: Props) {
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
