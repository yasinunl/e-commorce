import { StyleSheet } from "react-native";

export const detailStyles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  content: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
  },
  image: {
    height: "45%",
    marginTop: 20,
  },
  name: {
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: "500",
  },
  center: {
    flexDirection: "row",
    width: "100%",
    flexWrap: "nowrap",
    gap: 10,
    alignItems: "center",
    marginLeft: 50,
  },
  price: {
    fontWeight: "600",
    fontSize: 18,
    color: "black",
  },
  discountPrice: {
    color: "grey",
    fontSize: 15,
    textDecorationLine: "line-through",
  },
  discount: {
    color: "blue",
  },
  line: {
    width: "98%",
    height: 0.7,
    backgroundColor: "grey",
    flexDirection: "column",
  },
  centerDetails: {
    flexDirection: "row",
    paddingHorizontal: 20,
    width: "100%",
    justifyContent: "space-between",
  },
  detailLeft: {
    height: 30,
    flexDirection: "row",
    flexWrap: "nowrap",
    gap: 15,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  tag: {
    fontSize: 20,
  },
  moreDetails: {
    fontSize: 17,
  },
  skin: {
    color: "grey",
    fontSize: 18,
    fontWeight: "bold",
  },
  rightSize: {
    color: "blue",
  },
  dot: {
    backgroundColor: "white",
    width: 15,
    height: 15,
    borderRadius: 10,
    borderColor: "blue",
    borderWidth: 1,
  },
  activeDot: {
    backgroundColor: "blue",
    width: 15,
    height: 15,
    borderRadius: 10,
  },
  dotPagination: {
    flexDirection: "row",
    alignSelf: "center",
    gap: 10,
    marginTop:10,
  },
  bottomDetails:{
    width: "100%",
  },
  oTop:{
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  pButton:{
    width:"50%",
    height: 40,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  pButtonText:{
    fontSize: 15,
    fontWeight: "600",
    color:"black"
  },
  oCenter:{
    width:"100%",
    height: 65,
    backgroundColor: "white",
  },
  oButtons:{
    width:"100%",
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  oButton:{
    width:"50%",
    height: "100%",
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    borderRadius:8,
  },
  oButton1:{
    width:"50%",
    height: "100%",
    backgroundColor: "#abba54",
    justifyContent: "center",
    alignItems: "center",
    borderRadius:8,
  },
  oButtonText:{
    fontSize: 15,
    fontWeight: "500"
  },
  scrollPagination:{
    width: "100%",
    height:1,
    flexDirection: "row"
  },
  activeScroll:{
    width: "50%",
    height:1,
    backgroundColor: "blue"
  },
  scroll:{
    width: "50%",
    height:1,
    backgroundColor: "white"
  }
});
