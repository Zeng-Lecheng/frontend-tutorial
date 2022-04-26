import { React, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-paper";

export default function Home() {
  const [num, setNum] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={{flex: 1}}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <View style={{flex: 1, justifyContent: "space-evenly", alignItems: "center"}}>
        <Text>Num is {num}</Text>
        <Button mode={"contained"} onPress={() => setNum(num + 1)}>
          Increase num by 1.
        </Button>
        <Button mode={"contained"} onPress={() => setNum(num - 1)}>
          Decrease num by 1.
        </Button>
        <Button mode={"contained"} onPress={() => setNum(0)}>
          Reset num to 0.
        </Button>
        <Button mode={"contained"} onPress={() => setNum(num * 2)}>
          Multiply num by 2.
        </Button>
        <Button mode={"contained"} onPress={() => setNum(num / 2)}>
          Divide num by 2.
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
