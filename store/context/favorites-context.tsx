import React, { createContext, useState } from "react"

export const FavoritesContext = createContext({
  favoriteMealIds: [],
  addFavorite: (id: string) => {},
  removeFavorite: (id: string) => {},
})

type Props = {
  children: React.ReactNode
}

export function FavoritesContextProvider({ children }: Props) {
  const [favoriteMealIds, setFavoriteMealIds] = useState<String[]>([])

  function addFavorite(id: string) {
    setFavoriteMealIds((currentFavIds) => {
      return [...currentFavIds, id]
    })
  }

  function removeFavorite(id: string) {
    setFavoriteMealIds((currentFavIds) => {
      return currentFavIds.filter((mealId) => mealId !== id)
    })
  }

  const value = {
    favoriteMealIds,
    addFavorite,
    removeFavorite,
  }

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  )
}
