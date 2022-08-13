import { Text, View } from "react-native";

import { PRODUCTS } from "../../constants/data/products";
import React from "react";
import { styles } from "./styles";

const Product = ({ navigation, route }) => {
  const { productId } = route.params;
  const product = PRODUCTS.find((product) => product.id === productId);
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>$ {product.price.toFixed(2)}</Text>
      <Text style={styles.weight}>Peso: {product.weight}</Text>
    </View>
  );
};

export default Product;