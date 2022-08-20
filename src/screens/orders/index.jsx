import { FlatList, View } from "react-native";

import { ORDERS } from "../../constants/data/orders";
import { OrderItem } from "../../components";
import React from "react";
import { styles } from "./styles";

const Orders = () => {
  const items = ORDERS;

  const onHandleDelete = (id) => {
    console.warn(`Delete ${id}`);
  };

  const keyExtractor = (item) => item.id.toString();

  const renderItem = ({ item }) => <OrderItem item={item} onDelete={onHandleDelete} />;
  return (
    <View style={styles.container}>
      <View style={styles.orderList}>
        <FlatList data={items} keyExtractor={keyExtractor} renderItem={renderItem} />
      </View>
    </View>
  );
};

export default Orders;