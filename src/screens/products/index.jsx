import { FlatList, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import { filteredProducts, selectProduct } from "../../store/actions/products.action";
import { useDispatch, useSelector } from "react-redux";

import { ProductItem } from "../../components";
import { styles } from "./styles";

const Products = ({ navigation }) => {
  const dispatch = useDispatch();
  const categorySelected = useSelector((state) => state.category.selected);
  const products = useSelector((state) => state.products.filteredProducts);
  const onSelected = (item) => {
    /* dispatch(selectProduct(item.id));
    navigation.navigate("Product", {
      name: item.name,
    }); */
    console.log(item);
  };

  useEffect(() => {
    dispatch(filteredProducts(categorySelected.id));
  }, []);
  const renderItem = ({ item }) => <ProductItem item={item} onSelected={onSelected} />;
  const keyExtractor = (item, index) => item.id.toString();
  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={products} renderItem={renderItem} keyExtractor={keyExtractor} />
    </SafeAreaView>
  );
};

export default Products;