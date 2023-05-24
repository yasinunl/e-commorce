import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { detailStyles } from "../../styles/detailStyles";
import Icon from "react-native-vector-icons/AntDesign";

const ContainerComponent = ({ item }) => {
  const { width } = Dimensions.get("window");
  const images = [
    item.image,
    "https://picsum.photos/id/55/200/300",
    "https://picsum.photos/id/54/200/300",
    "https://picsum.photos/id/56/200/300",
  ];
  //https://skynight1996.medium.com/react-native-image-slider-5e92cc5685aa
  const [active, setActive] = useState(0);
  const [active1, setActive1] = useState(0);
  const change = ({ nativeEvent }) => {
    const slide = Math.ceil(
      (nativeEvent.contentOffset.x - 100) / nativeEvent.layoutMeasurement.width
    );
    if (slide !== active) setActive(slide);
  };
  const change1 = ({ nativeEvent }) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    if (slide !== active1) setActive1(slide);
  };
  const getImageSlider = () => {
    return (
      <View style={detailStyles.image}>
        <ScrollView
          style={{ width: (width * 50) / 100 }}
          pagingEnabled
          horizontal
          onScroll={change}
          showsHorizontalScrollIndicator={false}
        >
          {images.map((image, index) => (
            <Image
              key={index}
              style={{ width: (width * 50) / 100 }}
              source={{ uri: image }}
            />
          ))}
        </ScrollView>
        <View style={detailStyles.dotPagination}>
          {images.map((_, index) => (
            <View
              key={index}
              style={
                index === active ? detailStyles.activeDot : detailStyles.dot
              }
            />
          ))}
        </View>
      </View>
    );
  };
  return (
    <View style={detailStyles.content}>
      {getImageSlider()}
      <Text style={detailStyles.name}>{item.name}</Text>
      <View style={detailStyles.center}>
        <Text style={detailStyles.price}>${item.price}</Text>
        <Text style={detailStyles.discountPrice}>$300</Text>
        <Text style={detailStyles.discount}>{item.discount}% discount</Text>
      </View>
      <View style={detailStyles.line} />
      <View style={detailStyles.centerDetails}>
        <TouchableOpacity
          style={detailStyles.detailLeft}
          onPress={() => {
            Alert.alert("Details", item.about);
          }}
        >
          <Icon name="tag" style={detailStyles.tag} />
          <Text style={detailStyles.moreDetails}>
            Touch to see more details...
          </Text>
        </TouchableOpacity>
      </View>
      <View style={detailStyles.line} />
      <View style={detailStyles.centerDetails}>
        <View style={detailStyles.detailLeft}>
          <Icon name="skin" style={detailStyles.skin} />
          <Text>Size: M</Text>
        </View>
        <Text style={detailStyles.rightSize}>Sizes</Text>
      </View>
      <View style={detailStyles.bottomDetails}>
        <View style={detailStyles.oTop}>
          <TouchableOpacity
            onPress={() => {
              setActive1(0);
            }}
            activeOpacity={0.7}
            style={detailStyles.pButton}
          >
            <Text style={detailStyles.pButtonText}>Product Details</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setActive1(1);
            }}
            activeOpacity={0.7}
            style={detailStyles.pButton}
          >
            <Text style={detailStyles.pButtonText}>Washing Details</Text>
          </TouchableOpacity>
        </View>
        <View style={detailStyles.scrollPagination}>
          {[0, 1].map((index) => (
            <View
              key={index}
              style={
                index == active1
                  ? detailStyles.activeScroll
                  : detailStyles.scroll
              }
            />
          ))}
        </View>
        <View style={detailStyles.oCenter}>
          <ScrollView
            style={{ flex: 1 }}
            horizontal={true}
            scrollEventThrottle={16}
            pagingEnabled={true}
            onScroll={change1}
            showsHorizontalScrollIndicator={false}
          >
            <View style={{ width: width }}>
              <Text>Product Details</Text>
            </View>
            <View style={{ width: width }}>
              <Text>Washing Details</Text>
            </View>
          </ScrollView>
        </View>
        <View style={detailStyles.oButtons}>
          <TouchableOpacity
            onPress={() => {}}
            activeOpacity={0.7}
            style={detailStyles.oButton}
          >
            <Text style={detailStyles.oButtonText}>Add To Card</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            activeOpacity={0.7}
            style={detailStyles.oButton1}
          >
            <Text style={detailStyles.oButtonText}>Add To Wishes</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ContainerComponent;
