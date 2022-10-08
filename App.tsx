import React from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View, Button } from "react-native"
import CategoriesScreen from "./screens/CategoriesScreen"
import MealsOverviewScreen from "./screens/MealsOverviewScreen"
import DetailsScreen from "./screens/DetailsScreen"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createDrawerNavigator } from "@react-navigation/drawer"

export type RootStackParamList = {
  MealsCategories: undefined
  // Drawer: undefined
  MealsOverview: { categoryId: string | null }
  Details: { mealId: string | null }
}

export type DrawerStackParamList = {
  Categories: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()
const Drawer = createDrawerNavigator<DrawerStackParamList>()

function DrawerNavigator() {
  return (
    <Drawer.Navigator useLegacyImplementation={true}>
      <Drawer.Screen name="Categories" component={CategoriesScreen} />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerBackTitle: "Back",
            headerStyle: {
              backgroundColor: "#351401",
            },
            headerTintColor: "white",
            contentStyle: {
              backgroundColor: "#3f2f25",
            },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: "Meals Categories",
              headerStyle: {
                backgroundColor: "#351401",
              },
              headerTintColor: "white",
              contentStyle: {
                backgroundColor: "#3f2f25",
              },
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            initialParams={{ categoryId: null }}
          />
          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            initialParams={{ mealId: null }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

const styles = StyleSheet.create({
  container: {},
})
