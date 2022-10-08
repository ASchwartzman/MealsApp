import { Pressable, GestureResponderEvent, StyleSheet } from "react-native"
import { Ionicons } from "@expo/vector-icons"

import React from "react"

type Props = {
  icon: keyof typeof Ionicons.glyphMap
  color: string
  onPress: (event: GestureResponderEvent) => void
}

export default function IconButton({ icon, onPress, color }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => (pressed ? styles.pressed : null)}
    >
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
})
