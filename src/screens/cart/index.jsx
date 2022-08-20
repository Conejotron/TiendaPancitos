import { FlatList, Text, TouchableOpacity, View } from "react-native";

import { CART } from "../../constants/data/cart";
import { CartItem } from "../../components";
import React from "react";
import { styles } from "./styles";

const Cart = () => {
  const items = CART;
  const total = 12000;

  const onHandleDelete = (id) => {
    console.warn(`Delete ${id}`);
  };

  const onHandleConfirm = () => {
    console.warn("Confirm");
  };
  const keyExtractor = (item) => item.id.toString();
  const renderItem = ({ item }) => <CartItem item={item} onDelete={onHandleDelete} />;

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList data={items} keyExtractor={keyExtractor} renderItem={renderItem} />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.buttonConfirm} onPress={() => onHandleConfirm()}>
          <Text style={styles.buttonText}>Confirm</Text>
          <View style={styles.totalContainer}>
            <Text style={styles.totalTitle}>Total</Text>
            <Text style={styles.total}>{total}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;