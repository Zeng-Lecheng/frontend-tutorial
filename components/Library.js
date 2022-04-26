import { React, useState, useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { DataTable } from "react-native-paper";
import DropDownPicker from "react-native-dropdown-picker";

export default function Library() {
  const [data, setData] = useState([]);
  const [dateList, setDateList] = useState([]);
  const [dropValues, setDropValues] = useState();
  const [open, setOpen] = useState(false);
  const [selectedData, setSelectedData] = useState({});
  const [filtering, setFiltering] = useState(false);

  useEffect(async () => {
    fetch("http://brandaserver.herokuapp.com/getinfo/libraryHours/week")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        let dl = [];
        for (let item of data) {
          dl.push({ label: item.date, value: item.date });
        }
        setDateList(dl);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const filterData = (date) => {
    setFiltering(! filtering);
    for (let item of data) {
      if (item.date === date.value) {
        setSelectedData(item);
        break;
      }
    }
  };

  const itemRender = (item) => {
    let hours = "";
    if (item.item.times.status === "open") {
      for (let i of item.item.times.hours) {
        hours += `${i.from} - ${i.to}\n`;
      }
    } else {
      hours = "closed";
    }

    return (
      <DataTable.Row>
        <DataTable.Cell>{item.item.location}</DataTable.Cell>
        <DataTable.Cell>{hours}</DataTable.Cell>
      </DataTable.Row>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignSelf: "flex-start", alignItems: "center", padding: 20}}>
        <DropDownPicker
          items={dateList}
          setItems={setDateList}
          value={dropValues}
          setValue={setDropValues}
          open={open}
          setOpen={setOpen}
          defaultIndex={0}
          containerStyle={{ height: 40, width: "60%" }}
          onSelectItem={(item) => filterData(item)}
          placeholder="Select a date"
        />
      </View>
      <DataTable>
        <DataTable.Header>
          <DataTable.Cell>Locations</DataTable.Cell>
          <DataTable.Cell>Open hours</DataTable.Cell>
        </DataTable.Header>
        <FlatList 
          data={selectedData.hours}
          renderItem={itemRender}
          keyExtractor={(item) => item.location}
        />
      </DataTable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignContent: "flex-start",
    justifyContent: "flex-start",
  },
});
