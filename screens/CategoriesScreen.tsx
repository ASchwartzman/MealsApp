import React from "react"
import { FlatList, StyleSheet, Text, View } from "react-native"

import Category from "../models/category"
import { CATEGORIES } from "../data/dummy-data"
import CategoryGridTile from "../components/CategoryGridTile"

import { useNavigation } from "@react-navigation/native"

type CategoriesScreenProps = {}

export default function CategoriesScreen({ navigation }) {
  function renderCaregoryItem(item: Category) {
    function pressHandler() {
      navigation.navigate("MealsOverview", {
        categoryId: item.id,
      })
    }
    return <CategoryGridTile item={item} onPress={pressHandler} />
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => renderCaregoryItem(item)}
        numColumns={2}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
