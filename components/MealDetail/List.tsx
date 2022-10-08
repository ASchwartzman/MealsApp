import { StyleSheet, Text, View } from "react-native"
import React from "react"

type Props = {
  items: string[]
}

export default function List({ items }: Props) {
  return (
    <>
      {items.map((item) => (
        <View key={item} style={styles.listItem}>
          <Text style={styles.text}>{item}</Text>
        </View>
      ))}
    </>
  )
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
  text: {
    color: "#351401",
    fontSize: 16,
    textAlign: "center",
  },
})
