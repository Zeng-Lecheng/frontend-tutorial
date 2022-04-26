import { React, useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { Button, Checkbox } from "react-native-paper";

export default function Home() {
  const [num, setNum] = useState(0);
  const [todo, setTodo] = useState([]);
  const [flipping, setFlipping] = useState(false);
  const [hideDone, setHideDone] = useState(false);

  useEffect(() => {
    setTodo(require("../todo.json").todo);
  }, []);

  const todoRender = ({ item }) => {
    return (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text>Name: {item.name}    </Text>
        <Text>Due: {item.due}</Text>
        <Checkbox
          status={item.done ? "checked" : "unchecked"}
          onPress={() => {
            setFlipping(!flipping);
            todoFlip(item.name);
          }}
        />
      </View>
    );
  };

  const todoRenderHideDone = ({ item }) => {
    if (item.done) {
      return (<View></View>);
    } else {
      return (<View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text>Name: {item.name}    </Text>
        <Text>Due: {item.due}</Text>
        <Checkbox
          status={item.done ? "checked" : "unchecked"}
          onPress={() => {
            setFlipping(!flipping);
            todoFlip(item.name);
          }}
        />
      </View>
      );
    }

  };

  const todoFlip = (name) => {
    let todoCopy = todo;
    for (let i = 0; i < todoCopy.length; i++) {
      if (todoCopy[i].name === name) {
        todoCopy[i].done = !todoCopy[i].done;
      }
    }
    setTodo(todoCopy);
  };

  const TodoList = () => {
    if (hideDone) {
      return (
        <FlatList
          data={todo}
          renderItem={todoRenderHideDone}
          keyExtractor={(item) => item.name}
          extraData={flipping}
        />
      );
    } else {
      return (
        <FlatList
          data={todo}
          renderItem={todoRender}
          keyExtractor={(item) => item.name}
          extraData={flipping}
        />
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ flex: 1 }}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <View style={{ flex: 5, justifyContent: "space-evenly", alignItems: "center" }}>
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

      <View style={{ flex: 10, justifyContent: "center", alignContent: "flex-start" }}>
        <TodoList />
        <Button mode="contained" onPress={() => setHideDone(! hideDone)}>
          {hideDone ? "Show checked" : "Hide checked"}
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
