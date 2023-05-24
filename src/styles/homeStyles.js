import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  filter: {
    height: 40,
    width: "70%",
    paddingHorizontal: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    alignItems: "center",
    marginTop: 20,
  },
  sort: {
    flexDirection: "row",
    alignItems: "center",
  },
  product: {
    width: "48%",
    height: 250,
    backgroundColor: "white",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
  },
  bothProduct: {
    marginTop: 15,
    flexDirection: "row",
    gap: 10,
    flexWrap: "wrap",
  },
  productList: {
    marginTop: 15,
    width: "94%",
    height: "100%",
    marginLeft: 15,
  },
  scrllview: {
    height: "100%",
  },
  productImage: {
    marginTop: 25,
    width: "94%",
    height: "60%",
  },
  discount: {
    fontSize: 13,
    color: "grey",
  },
  discountPrice: {
    fontSize: 13,
    color: "grey",
    textDecorationLine: "line-through",
  },
  price: {
    fontWeight: "bold",
    fontSize: 13,
    color: "black",
  },
  detail: {
    width: "90%",
    flexDirection: "row",
    paddingHorizontal: 2,
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  productName: {
    fontSize: 20,
    fontWeight: "bold",
    justifyContent: "flex-end",
  },
});
