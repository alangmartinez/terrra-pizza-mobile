import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const name = "Alan";

  return (
    <View style={styles.container}>
      <Text>Hello {name}, how are you?</Text>
      <View style={styles.flexContainer}>
        <TextInput style={styles.input} placeholder="Type here..."></TextInput>
        <Button title="Add to cart" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  flexContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  input: {
    borderBottomColor: "cyan",
    borderBottomWidth: 1,
  }
});
