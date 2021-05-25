import { StyleSheet, View, Image } from 'react-native';
import React, { useContext } from 'react';
import { MyContext } from '../context/store';

export function Footer() {
  const { state } = useContext(MyContext);
  const allArticleInCart = Object.values(state.cart).map(v => <Image source={state.articles[v.id].picture} />);

  return <View style={styles.footer}>{allArticleInCart}</View>;
}

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: '0%',
    left: '0%',
    backgroundColor: '#54c499',
    height: 40,
    width: '100%',
  },
});

export default Footer;
