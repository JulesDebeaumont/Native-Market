/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import { ScrollView, StyleSheet, View, Button, Alert, Text } from 'react-native';
import React, { useContext } from 'react';
import { Footer } from './Footer';
import { MyContext } from '../context/store';
import { ArticleList } from './ArticleList';
import useCart from '../hooks/useCart';

export function CartView() {
  const { state } = useContext(MyContext);
  const filteredArticles = Object.values(state.cart).map(v => state.articles[v.id]);

  const { resetPanier } = useCart();
  const stringArticlesInCart = filteredArticles.map(v => `\n${v.description} x${state.cart[v.id].quantity}`);
  let totalPrice = 0;

  for (const v in state.cart) {
    totalPrice += state.cart[v].prix * state.cart[v].quantity;
  }

  const createButtonAlert = () =>
    Alert.alert(
      'Commande',
      `Vous êtes sur le point de commander les articles suivant: \n${stringArticlesInCart}\n\n
      Pour un total de ${totalPrice.toFixed(2)}€`,
      [
        {
          text: 'ANNULER',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'COMMANDER', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false },
    );

  return (
    <>
      <ScrollView>
        <View style={styles.view}>
          <ArticleList articles={filteredArticles} inCart={state.cart} />
        </View>
      </ScrollView>
      <View style={styles.buttons}>
        {totalPrice > 0 ? (
          <>
            <Button title="Lancer la commande !" onPress={createButtonAlert} />
            <Button title="Vider le panier" onPress={() => resetPanier()} />
          </>
        ) : (
          <Text style={styles.empty}>Vous panier est vide.</Text>
        )}
      </View>
      <Footer route="/" />
    </>
  );
}

const styles = StyleSheet.create({
  view: {
    flexDirection: 'column',
    marginBottom: 80,
  },
  buttons: {
    flexDirection: 'column',
    marginBottom: 80,
  },
  empty: {
    textAlign: 'center',
  },
});

export default CartView;
