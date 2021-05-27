import { StyleSheet, View, Text } from 'react-native';
import React, { useContext } from 'react';
import { MyContext } from '../context/store';

export function Footer() {
  const { state } = useContext(MyContext);
  const allArticleInCart = Object.values(state.cart).map(v => (
    <Text key={v.id}>
      {state.articles[v.id].description} | Quantity: {v.quantity} | Total price: {v.quantity * v.prix}
    </Text>
  ));
  return <View style={styles.footer}>{allArticleInCart}</View>;
}

const styles = StyleSheet.create({
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: '0%',
    left: '0%',
    backgroundColor: '#54c499',
    height: 80,
    width: '100%',
  },
});

export default Footer;
