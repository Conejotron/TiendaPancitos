import { FlatList, View } from "react-native";
import React, { useCallback, useEffect } from "react";
import { deleteOrder, getOrders } from "../../store/actions/orders.action";
import { useDispatch, useSelector } from "react-redux";

import { OrderItem } from "../../components";
import { styles } from "./styles";
import { useFocusEffect } from "@react-navigation/native";

const Orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.orders);
  const items = orders;

  const onHandleDelete = (id) => {
    dispatch(deleteOrder(id));
  };

  const keyExtractor = (item) => item.id.toString();

  const renderItem = ({ item }) => <OrderItem item={item} onDelete={onHandleDelete} />;
  useFocusEffect(
    useCallback(() => {
      dispatch(getOrders());
    }, [dispatch])
  );

  return (
    <View style={styles.container}>
      <View style={styles.orderList}>
        <FlatList data={items} keyExtractor={keyExtractor} renderItem={renderItem} />
      </View>
    </View>
  );
};

export default Orders;