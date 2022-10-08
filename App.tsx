import React from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View, Button } from "react-native"
import CategoriesScreen from "./screens/CategoriesScreen"
import FavoritesScreen from "./screens/FavoritesScreen"
import MealsOverviewScreen from "./screens/MealsOverviewScreen"
import DetailsScreen from "./screens/DetailsScreen"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { Ionicons } from "@expo/vector-icons"
import { FavoritesContextProvider } from "./store/context/favorites-context"

export type RootStackParamList = {
  // MealsCategories: undefined
  Drawer: undefined
  MealsOverview: { categoryId: string | null }
  Details: { mealId: string | null }
}

export type DrawerStackParamList = {
  Categories: undefined
  Favorites: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()
const Drawer = createDrawerNavigator<DrawerStackParamList>()

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#351401",
        },
        headerTintColor: "white",
        sceneContainerStyle: {
          backgroundColor: "#3f2f25",
        },
        drawerContentStyle: {
          backgroundColor: "#351401",
        },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: "#e4baa1",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavoritesContextProvider>
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
              name="Drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false,
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
      </FavoritesContextProvider>
    </>
  )
}

const styles = StyleSheet.create({
  container: {},
})
