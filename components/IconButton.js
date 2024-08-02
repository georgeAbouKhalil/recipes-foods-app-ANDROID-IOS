import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function IconButton({ onPress, icon, color }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && style.pressed}
    >
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
}

const style = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
