import { NativeStackScreenProps } from "@react-navigation/native-stack"
import React, { useLayoutEffect, useContext, useState, useEffect } from "react"
import { Image, ScrollView, StyleSheet, Text, View } from "react-native"
import { RootStackParamList } from "../App"
import { FavoritesContext } from "../store/context/favorites-context"

import IconButton from "../components/IconButton"
import List from "../components/MealDetail/List"
import Subtitle from "../components/MealDetail/Subtitle"
import MealDetails from "../components/MealDetails"
import { MEALS } from "../data/dummy-data"

type Props = NativeStackScreenProps<RootStackParamList, "Details">

export default function DetailsScreen({ route, navigation }: Props) {
  const { favoriteMealIds, addFavorite, removeFavorite } =
    useContext(FavoritesContext)

  const mealId = route.params.mealId
  const meal = MEALS.find((meal) => meal.id === mealId)
  const mealIsFavorite = favoriteMealIds.includes(mealId)

  function changeFavoriteStatusHandler() {
    if (mealIsFavorite) {
      removeFavorite(mealId)
    } else {
      addFavorite(mealId)
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: meal.title,
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? "star" : "star-outline"}
            color="white"
            onPress={changeFavoriteStatusHandler}
          />
        )
      },
    })
  }, [navigation, changeFavoriteStatusHandler])

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.outerContainer}>
        <Image source={{ uri: meal.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{meal.title}</Text>

        <MealDetails
          duration={meal.duration}
          complexity={meal.complexity}
          affordability={meal.affordability}
          textStyle={styles.detailText}
        />
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List items={meal.ingredients} />

          <Subtitle>Steps</Subtitle>
          <List items={meal.steps} />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  outerContainer: {
    alignItems: "center",
    marginBottom: 32,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  image: {
    width: "100%",
    height: 350,
  },
  listContainer: {
    width: "80%",
  },
})
