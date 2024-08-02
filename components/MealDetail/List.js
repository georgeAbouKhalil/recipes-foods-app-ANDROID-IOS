import { useState } from "react";
import { Text, StyleSheet, Pressable } from "react-native";

export default function List({ data }) {
  const [selectedItem, setSelectedItem] = useState(null);

  return data.map((dataPoint) => (
    <Pressable
      key={dataPoint}
      style={[
        styles.listItem,
        dataPoint === selectedItem && styles.selectedItem,
      ]}
      onPress={() => setSelectedItem(dataPoint)}
    >
      <Text style={styles.itemText}>{dataPoint}</Text>
    </Pressable>
  ));
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
  selectedItem: {
    backgroundColor: "#c3a8a0",
  },
});
