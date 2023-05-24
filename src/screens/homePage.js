import { View, ScrollView } from "react-native";
import React from "react";
import { homeStyles } from "../styles/homeStyles";
import FilterComponent from "../components/listComponents/filterComponent";
import ProductList from "../components/listComponents/productList";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={homeStyles.container}>
     <FilterComponent />
     <ScrollView style={{height: "87%"}}>
     <ProductList navigation={navigation}/>
     </ScrollView>
    </View>
  );
};

export default HomeScreen;
