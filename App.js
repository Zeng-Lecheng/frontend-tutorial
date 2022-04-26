import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "./components/About";
import ItemDetail from "./components/ItemDetail";
import Home from "./components/Home";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

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
                <AntDesign name="infocirlceo" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
        />
        <Root.Screen name={"About"} component={About} />
        <Root.Screen name={"ItemDetail"} component={ItemDetail} />
      </Root.Navigator>
    </NavigationContainer>
  );
}
