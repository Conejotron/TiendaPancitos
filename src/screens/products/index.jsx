import { FlatList, SafeAreaView } from "react-native";

import { PRODUCTS } from "../../constants/data/products";
import { ProductItem } from "../../components";
import React from "react";
import { styles } from "./styles";

const Products = ({ navigation, route }) => {
  const { categoryId } = route.params;
  const productCategory = PRODUCTS.filter(
    (product) => product.category === categoryId
  );
  const onSelected = (item) => {
    navigation.navigate("Product", {
      productId: item.id,
      name: item.name,
    });
  };
  const renderItem = ({ item }) => (
    <ProductItem item={item} onSelected={onSelected} />
  );
  const keyExtractor = (item, index) => item.id.toString();
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={productCategory}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </SafeAreaView>
  );
};

export default Products;