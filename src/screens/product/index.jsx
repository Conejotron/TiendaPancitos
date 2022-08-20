import React from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";

import { styles } from "./styles";

const Product = ({ navigation }) => {
  const product = useSelector((state) => state.products.selected);
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