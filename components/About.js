import { React } from "react";
import { View } from "react-native";
import { Button, DataTable, Text } from "react-native-paper";
import * as Clipboard from "expo-clipboard";

const AppInfo = require("../app.json").expo;

export default function About() {
  return (
    <View>
      <Text>About this app.</Text>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Item</DataTable.Title>
          <DataTable.Title>Value</DataTable.Title>
        </DataTable.Header>
        <DataTable.Row>
          <DataTable.Cell>Name</DataTable.Cell>
          <DataTable.Cell>{AppInfo.name}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Splash Location</DataTable.Cell>
          <DataTable.Cell>{AppInfo.splash.image}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>version</DataTable.Cell>
          <DataTable.Cell>{AppInfo.version}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>orientation</DataTable.Cell>
          <DataTable.Cell>{AppInfo.orientation}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>android</DataTable.Cell>
          <DataTable.Cell>{JSON.stringify(AppInfo.android)}</DataTable.Cell>
        </DataTable.Row>
      </DataTable>
      <Button
        icon="content-copy"
        mode="outlined"
        onPress={() => {Clipboard.setString(JSON.stringify(AppInfo));
          alert("App info copied.");
        }}
      >
        Copy
      </Button>
    </View >
  );
}
