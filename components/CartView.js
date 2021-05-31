import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import { Footer } from './Footer';
import { MyContext } from '../context/store';
import { Quantity } from './Quantity';
import useQuantity from '../hooks/useQuantity';

export function CartView() {
  const { state } = useContext(MyContext);
  const { changeQuantity } = useQuantity();
  const allArticlesInCart = Object.values(state.cart).map(v => (
    <>
      <View style={styles.item}>
        <Text key={v.id}>
          {state.articles[v.id].description} | Quantity: {v.quantity} | Total price: {v.quantity * v.prix}
        </Text>
        <Quantity
          onUpdate={value => changeQuantity(value, state.article[v.id], state.article[v.prix])}
          quantity={Number.isInteger(v.quantity) ? v.quantity : 0}
        />
      </View>
    </>
  ));

  return (
    <View>
      <ScrollView>{allArticlesInCart}</ScrollView>
      <Footer route="/articles" />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flexDirection: 'column',
  },

  item: {},
});

export default CartView;
