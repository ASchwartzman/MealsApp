import { StyleSheet, Text, View } from "react-native"
import React from "react"

type Props = {
  children?: React.ReactNode
}

export default function Subtitle({ children }: Props) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  subtitleContainer: {
    marginHorizontal: 12,
    marginVertical: 4,
    padding: 6,
    borderBottomWidth: 2,
    borderBottomColor: "#e2b497",
  },
  subtitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
})
