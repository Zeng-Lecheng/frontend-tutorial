import React from "react";
// import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "./components/About";
import ItemDetail from "./components/ItemDetail";
import Home from "./components/Home";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Library from "./components/Library";

const Root = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Root.Navigator>
        <Root.Screen
          name={"Home"}
          component={Home}
          options={({ navigation }) => ({
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate("About")}>
                <View style={styles.headerRight}>
                  <Text style={styles.headerRightContent}>About</Text>
                  <AntDesign name="infocirlceo" size={24} color="black" />
                </View>
              </TouchableOpacity>
            ),
          })}
        />
        <Root.Screen name={"About"} component={About} />
        <Root.Screen name={"ItemDetail"} component={ItemDetail} />
        <Root.Screen name={"Library Hours"} component={Library}/>
      </Root.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerRight: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "row",
  },
  headerRightContent: {
    padding: 5
  }
});
