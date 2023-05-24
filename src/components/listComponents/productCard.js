import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { homeStyles } from "../../styles/homeStyles";

export default ProductCard = ({ navigation, item, index }) => {
  return (
    <TouchableOpacity
  style={homeStyles.product}
  onPress={() => {
    navigation.navigate("ProductDetail", { item: item});
  }}
>
  <Image
    style={homeStyles.productImage}
    source={{ uri: item.image }}
  />
  <View
    style={{
      alignItems: "center",
    }}
  >
    <Text style={homeStyles.productName}>{item.name}</Text>
    <View style={homeStyles.detail}>
      <Text style={homeStyles.price}>${item.price}</Text>
      <Text style={homeStyles.discountPrice}>$300</Text>
      <Text style={homeStyles.discount}>{item.discount}% discount</Text>
    </View>
  </View>
</TouchableOpacity>

  );
};
