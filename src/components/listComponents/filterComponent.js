import Icon from "react-native-vector-icons/AntDesign";
import { Text, View } from "react-native";
import React from "react";
import { homeStyles } from "../../styles/homeStyles";

export default FilterComponent = ()=> {
    return  <View style={homeStyles.filter}>
    <View style={homeStyles.sort}>
      <Icon name="down" style={{ marginRight: 2 }}></Icon>
      <Text>Sort</Text>
    </View>
    <View>
      <Text style={{ fontWeight: "bold", fontSize: 25, marginBottom: 5 }}>
        |
      </Text>
    </View>
    <View style={homeStyles.sort}>
      <Text>Filter</Text>
      <Icon name="down" style={{ marginLeft: 2 }}></Icon>
    </View>
  </View>
}